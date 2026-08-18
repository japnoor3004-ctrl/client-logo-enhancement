import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

/**
 * Media paths are stored in the database as `<bucket>/<key>`, e.g.
 * `media/projects/2024/plant.jpg`. Buckets are private, so browsable URLs are
 * short-lived signed URLs created on demand.
 */
export const SIGNED_URL_TTL = 60 * 60 * 24 * 7; // 7 days

export function splitStoragePath(path: string): { bucket: string; key: string } {
  const i = path.indexOf("/");
  return { bucket: path.slice(0, i), key: path.slice(i + 1) };
}

export function isStoragePath(value?: string | null): value is string {
  if (!value) return false;
  // Absolute URLs and site-root paths (e.g. CDN asset URLs) are used as-is.
  return !/^(https?:\/\/|\/)/i.test(value) && value.includes("/");
}

const cache = new Map<string, string>();

export async function signPath(path?: string | null): Promise<string | null> {
  if (!path) return null;
  if (!isStoragePath(path)) return path;
  const cached = cache.get(path);
  if (cached) return cached;
  const { bucket, key } = splitStoragePath(path);
  const { data } = await supabase.storage.from(bucket).createSignedUrl(key, SIGNED_URL_TTL);
  if (!data?.signedUrl) return null;
  cache.set(path, data.signedUrl);
  return data.signedUrl;
}

export async function signMany(paths: (string | null | undefined)[]): Promise<(string | null)[]> {
  return Promise.all(paths.map((p) => signPath(p)));
}

export function useSignedUrl(path?: string | null) {
  const [url, setUrl] = useState<string | null>(() =>
    path && !isStoragePath(path) ? path : path ? (cache.get(path) ?? null) : null,
  );

  useEffect(() => {
    let active = true;
    if (!path) {
      setUrl(null);
      return;
    }
    signPath(path).then((u) => {
      if (active) setUrl(u);
    });
    return () => {
      active = false;
    };
  }, [path]);

  return url;
}

function safeName(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9.\-_]+/g, "-")
    .replace(/-+/g, "-")
    .slice(-80);
}

export const MAX_IMAGE_BYTES = 8 * 1024 * 1024;
export const MAX_DOC_BYTES = 20 * 1024 * 1024;

export async function uploadFile(
  bucket: "media" | "documents" | "applications",
  folder: string,
  file: File,
): Promise<string> {
  const limit = bucket === "media" ? MAX_IMAGE_BYTES : MAX_DOC_BYTES;
  if (file.size > limit) {
    throw new Error(`File is too large (max ${Math.round(limit / 1024 / 1024)}MB).`);
  }
  const key = `${folder}/${Date.now()}-${crypto.randomUUID().slice(0, 8)}-${safeName(file.name)}`;
  const { error } = await supabase.storage.from(bucket).upload(key, file, {
    cacheControl: "31536000",
    upsert: false,
    contentType: file.type || undefined,
  });
  if (error) throw error;
  return `${bucket}/${key}`;
}

export async function removeFile(path?: string | null) {
  if (!isStoragePath(path)) return;
  const { bucket, key } = splitStoragePath(path);
  await supabase.storage.from(bucket).remove([key]);
  cache.delete(path);
}
