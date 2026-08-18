import { useMemo, useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Plus, Pencil, Trash2, Search, ChevronUp, ChevronDown, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { slugify } from "@/lib/admin/auth";
import { FieldInput, Labelled, inputClass, type Field } from "./fields";
import { cn } from "@/lib/utils";

export type ResourceConfig = {
  table: string;
  title: string;
  singular: string;
  description?: string;
  fields: Field[];
  searchColumns?: string[];
  filters?: { column: string; label: string; options: string[] }[];
  orderBy?: { column: string; ascending: boolean }[];
  slugFrom?: string;
  ordering?: boolean;
  hasPublished?: boolean;
  readOnly?: boolean;
  perPage?: number;
};

type Row = Record<string, unknown> & { id: string };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const db = (table: string) => supabase.from(table as any) as any;

export function ResourceManager({ config }: { config: ResourceConfig }) {
  const perPage = config.perPage ?? 20;
  const qc = useQueryClient();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [editing, setEditing] = useState<Row | null>(null);
  const [open, setOpen] = useState(false);

  const queryKey = ["admin", config.table, page, search, filters];

  const list = useQuery({
    queryKey,
    queryFn: async () => {
      let q = db(config.table).select("*", { count: "exact" });
      for (const o of config.orderBy ?? [{ column: "created_at", ascending: false }]) {
        q = q.order(o.column, { ascending: o.ascending, nullsFirst: false });
      }
      if (search && config.searchColumns?.length) {
        q = q.or(config.searchColumns.map((c) => `${c}.ilike.%${search}%`).join(","));
      }
      for (const [col, val] of Object.entries(filters)) {
        if (val) q = q.eq(col, val);
      }
      const from = (page - 1) * perPage;
      const { data, count, error } = await q.range(from, from + perPage - 1);
      if (error) throw error;
      return { rows: (data ?? []) as Row[], count: count ?? 0 };
    },
  });

  const save = useMutation({
    mutationFn: async (values: Record<string, unknown>) => {
      const payload = { ...values };
      if (config.slugFrom && !payload.slug && payload[config.slugFrom]) {
        payload.slug = slugify(String(payload[config.slugFrom]));
      }
      if (payload.id) {
        const { id, ...rest } = payload;
        const { error } = await db(config.table).update(rest).eq("id", id);
        if (error) throw error;
      } else {
        const { error } = await db(config.table).insert(payload);
        if (error) throw error;
      }
    },
    onSuccess: () => {
      toast.success(`${config.singular} saved`);
      setOpen(false);
      setEditing(null);
      void qc.invalidateQueries({ queryKey: ["admin", config.table] });
      void qc.invalidateQueries({ queryKey: ["admin", "overview"] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const remove = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await db(config.table).delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => {
      toast.success(`${config.singular} deleted`);
      void qc.invalidateQueries({ queryKey: ["admin", config.table] });
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const reorder = useMutation({
    mutationFn: async ({ row, dir }: { row: Row; dir: -1 | 1 }) => {
      const rows = list.data?.rows ?? [];
      const i = rows.findIndex((r) => r.id === row.id);
      const j = i + dir;
      if (j < 0 || j >= rows.length) return;
      const a = rows[i];
      const b = rows[j];
      await Promise.all([
        db(config.table)
          .update({ sort_order: (b.sort_order as number) ?? j })
          .eq("id", a.id),
        db(config.table)
          .update({ sort_order: (a.sort_order as number) ?? i })
          .eq("id", b.id),
      ]);
    },
    onSuccess: () => void qc.invalidateQueries({ queryKey: ["admin", config.table] }),
  });

  const tableFields = useMemo(
    () => config.fields.filter((f) => f.inTable).slice(0, 5),
    [config.fields],
  );
  const totalPages = Math.max(1, Math.ceil((list.data?.count ?? 0) / perPage));

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">{config.title}</h1>
          {config.description ? (
            <p className="mt-1 text-sm text-muted-foreground">{config.description}</p>
          ) : null}
        </div>
        {!config.readOnly && (
          <button
            onClick={() => {
              setEditing({} as Row);
              setOpen(true);
            }}
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Plus className="size-4" /> New {config.singular.toLowerCase()}
          </button>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-2">
        {config.searchColumns?.length ? (
          <div className="relative min-w-[220px] flex-1">
            <Search className="absolute top-2.5 left-3 size-4 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1);
              }}
              placeholder={`Search ${config.title.toLowerCase()}…`}
              className="w-full rounded-md border border-input bg-background py-2 pr-3 pl-9 text-sm outline-none focus:border-primary"
            />
          </div>
        ) : null}
        {(config.filters ?? []).map((f) => (
          <select
            key={f.column}
            value={filters[f.column] ?? ""}
            onChange={(e) => {
              setFilters((prev) => ({ ...prev, [f.column]: e.target.value }));
              setPage(1);
            }}
            className="rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="">All {f.label.toLowerCase()}</option>
            {f.options.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        ))}
      </div>

      <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-soft">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="bg-secondary/50 text-left text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            <tr>
              {config.ordering && <th className="w-16 px-3 py-3">Order</th>}
              {tableFields.map((f) => (
                <th key={f.name} className="px-4 py-3">
                  {f.label}
                </th>
              ))}
              <th className="w-28 px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {list.isLoading && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-muted-foreground">
                  <Loader2 className="mx-auto size-5 animate-spin" />
                </td>
              </tr>
            )}
            {!list.isLoading && (list.data?.rows.length ?? 0) === 0 && (
              <tr>
                <td colSpan={8} className="px-4 py-10 text-center text-muted-foreground">
                  Nothing here yet.
                </td>
              </tr>
            )}
            {list.data?.rows.map((row) => (
              <tr key={row.id} className="hover:bg-secondary/30">
                {config.ordering && (
                  <td className="px-3 py-2">
                    <div className="flex flex-col">
                      <button
                        aria-label="Move up"
                        onClick={() => reorder.mutate({ row, dir: -1 })}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ChevronUp className="size-4" />
                      </button>
                      <button
                        aria-label="Move down"
                        onClick={() => reorder.mutate({ row, dir: 1 })}
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ChevronDown className="size-4" />
                      </button>
                    </div>
                  </td>
                )}
                {tableFields.map((f) => (
                  <td key={f.name} className="max-w-[280px] truncate px-4 py-3">
                    <CellValue field={f} value={row[f.name]} />
                  </td>
                ))}
                <td className="px-4 py-3">
                  <div className="flex justify-end gap-1">
                    <button
                      aria-label="Edit"
                      onClick={() => {
                        setEditing(row);
                        setOpen(true);
                      }}
                      className="rounded-md p-1.5 text-muted-foreground hover:bg-secondary hover:text-primary"
                    >
                      <Pencil className="size-4" />
                    </button>
                    {!config.readOnly && (
                      <button
                        aria-label="Delete"
                        onClick={() => {
                          if (confirm(`Delete this ${config.singular.toLowerCase()}?`))
                            remove.mutate(row.id);
                        }}
                        className="rounded-md p-1.5 text-muted-foreground hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <span>{list.data?.count ?? 0} total</span>
        <div className="flex items-center gap-2">
          <button
            disabled={page <= 1}
            onClick={() => setPage((p) => p - 1)}
            className="rounded-md border border-input px-3 py-1.5 disabled:opacity-40"
          >
            Previous
          </button>
          <span>
            {page} / {totalPages}
          </span>
          <button
            disabled={page >= totalPages}
            onClick={() => setPage((p) => p + 1)}
            className="rounded-md border border-input px-3 py-1.5 disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>

      {open && editing && (
        <RecordDialog
          config={config}
          record={editing}
          saving={save.isPending}
          onClose={() => {
            setOpen(false);
            setEditing(null);
          }}
          onSave={(values) => save.mutate(values)}
        />
      )}
    </div>
  );
}

function CellValue({ field, value }: { field: Field; value: unknown }) {
  if (field.type === "boolean") {
    return (
      <span
        className={cn(
          "inline-flex rounded-full px-2 py-0.5 text-xs font-semibold",
          value ? "bg-primary/10 text-primary" : "bg-muted text-muted-foreground",
        )}
      >
        {value ? "Yes" : "No"}
      </span>
    );
  }
  if (Array.isArray(value)) return <>{value.length} item(s)</>;
  if (value === null || value === undefined || value === "") return <>—</>;
  return <>{String(value)}</>;
}

function RecordDialog({
  config,
  record,
  onClose,
  onSave,
  saving,
}: {
  config: ResourceConfig;
  record: Row;
  onClose: () => void;
  onSave: (values: Record<string, unknown>) => void;
  saving: boolean;
}) {
  const [values, setValues] = useState<Record<string, unknown>>(() => ({ ...record }));

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-sm">
      <div className="my-6 w-full max-w-3xl rounded-xl border border-border bg-card p-6 shadow-soft">
        <div className="flex items-start justify-between gap-4">
          <h2 className="text-lg font-bold text-foreground">
            {record.id
              ? `Edit ${config.singular.toLowerCase()}`
              : `New ${config.singular.toLowerCase()}`}
          </h2>
          <button onClick={onClose} className="text-sm text-muted-foreground hover:text-foreground">
            Close
          </button>
        </div>

        <form
          className="mt-5 grid gap-4 md:grid-cols-2"
          onSubmit={(e) => {
            e.preventDefault();
            const missing = config.fields.find(
              (f) => f.required && !values[f.name] && values[f.name] !== 0,
            );
            if (missing) {
              toast.error(`${missing.label} is required`);
              return;
            }
            onSave(values);
          }}
        >
          {config.fields.map((f) => (
            <Labelled
              key={f.name}
              label={f.label + (f.required ? " *" : "")}
              help={f.help}
              full={f.full || f.type === "textarea" || f.type === "images"}
            >
              <FieldInput
                field={f}
                value={values[f.name]}
                onChange={(v) => setValues((prev) => ({ ...prev, [f.name]: v }))}
              />
            </Labelled>
          ))}
          {config.slugFrom ? (
            <Labelled label="Slug" help="Leave empty to generate automatically">
              <input
                className={inputClass}
                value={(values.slug as string) ?? ""}
                onChange={(e) => setValues((p) => ({ ...p, slug: e.target.value }))}
              />
            </Labelled>
          ) : null}

          <div className="flex justify-end gap-2 md:col-span-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-input px-4 py-2 text-sm font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground disabled:opacity-60"
            >
              {saving && <Loader2 className="size-4 animate-spin" />} Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
