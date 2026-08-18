import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";

/** Server-side Supabase client using the publishable key (RLS applies as anon). */
export function publicClient() {
  const key = process.env.SUPABASE_PUBLISHABLE_KEY!;
  const url = process.env.SUPABASE_URL!;
  return createClient<Database>(url, key, {
    auth: { storage: undefined, persistSession: false, autoRefreshToken: false },
    global: {
      fetch: (input, init) => {
        const h = new Headers(init?.headers);
        if (key.startsWith("sb_") && h.get("Authorization") === `Bearer ${key}`) {
          h.delete("Authorization");
        }
        h.set("apikey", key);
        return fetch(input, { ...init, headers: h });
      },
    },
  });
}

const TTL = 60 * 60 * 24 * 7;

function isStoragePath(value?: string | null): value is string {
  if (!value) return false;
  // Absolute URLs and site-root paths (e.g. CDN asset URLs) are used as-is.
  return !/^(https?:\/\/|\/)/i.test(value) && value.includes("/");
}

/** Turns stored `<bucket>/<key>` paths into signed URLs, in one batch per bucket. */
export async function signPaths(
  paths: (string | null | undefined)[],
): Promise<Record<string, string>> {
  const unique = Array.from(new Set(paths.filter(isStoragePath)));
  if (!unique.length) return {};
  const supabase = publicClient();
  const byBucket = new Map<string, string[]>();
  for (const p of unique) {
    const i = p.indexOf("/");
    const bucket = p.slice(0, i);
    const key = p.slice(i + 1);
    byBucket.set(bucket, [...(byBucket.get(bucket) ?? []), key]);
  }
  const out: Record<string, string> = {};
  await Promise.all(
    Array.from(byBucket.entries()).map(async ([bucket, keys]) => {
      const { data } = await supabase.storage.from(bucket).createSignedUrls(keys, TTL);
      for (const row of data ?? []) {
        if (row.signedUrl && row.path) out[`${bucket}/${row.path}`] = row.signedUrl;
      }
    }),
  );
  return out;
}

type Resolvable = Record<string, unknown>;

/** Replaces the given media fields on each row with signed URLs. */
export async function resolveMedia<T extends Resolvable>(
  rows: T[],
  fields: (keyof T)[],
  arrayFields: (keyof T)[] = [],
): Promise<T[]> {
  const paths: (string | null | undefined)[] = [];
  for (const row of rows) {
    for (const f of fields) paths.push(row[f] as string | null);
    for (const f of arrayFields) paths.push(...((row[f] as string[] | null) ?? []));
  }
  const map = await signPaths(paths);
  return rows.map((row) => {
    const next: Resolvable = { ...row };
    for (const f of fields) {
      const v = row[f] as string | null;
      if (isStoragePath(v)) next[f as string] = map[v] ?? null;
    }
    for (const f of arrayFields) {
      const arr = (row[f] as string[] | null) ?? [];
      next[f as string] = arr.map((v) => (isStoragePath(v) ? (map[v] ?? v) : v)).filter(Boolean);
    }
    return next as T;
  });
}
