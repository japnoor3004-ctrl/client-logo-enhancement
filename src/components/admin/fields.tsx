import { useState } from "react";
import { Upload, X, Loader2, FileText } from "lucide-react";
import { toast } from "sonner";
import { uploadFile, useSignedUrl } from "@/lib/cms/media";
import { cn } from "@/lib/utils";

export type FieldType =
  | "text"
  | "textarea"
  | "number"
  | "boolean"
  | "date"
  | "select"
  | "tags"
  | "image"
  | "images"
  | "file";

export type Field = {
  name: string;
  label: string;
  type: FieldType;
  options?: string[];
  required?: boolean;
  placeholder?: string;
  folder?: string;
  bucket?: "media" | "documents";
  inTable?: boolean;
  full?: boolean;
  rows?: number;
  help?: string;
};

export const inputClass =
  "mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-ring/25";

export function Labelled({
  label,
  help,
  children,
  full,
}: {
  label: string;
  help?: string;
  children: React.ReactNode;
  full?: boolean;
}) {
  return (
    <div className={cn("block text-sm font-medium", full && "md:col-span-2")}>
      <span>{label}</span>
      {children}
      {help ? <p className="mt-1 text-xs font-normal text-muted-foreground">{help}</p> : null}
    </div>
  );
}

function Thumb({ path, onRemove }: { path: string; onRemove: () => void }) {
  const url = useSignedUrl(path);
  const isImage = !/\.pdf|\.docx?$/i.test(path);
  return (
    <div className="group relative overflow-hidden rounded-md border border-border bg-secondary/40">
      {isImage && url ? (
        <img src={url} alt="" loading="lazy" className="h-24 w-full object-cover" />
      ) : (
        <a
          href={url ?? undefined}
          target="_blank"
          rel="noreferrer"
          className="flex h-24 w-full items-center justify-center gap-2 px-2 text-xs text-muted-foreground"
        >
          <FileText className="size-4" /> Document
        </a>
      )}
      <button
        type="button"
        onClick={onRemove}
        aria-label="Remove file"
        className="absolute top-1 right-1 rounded-full bg-background/90 p-1 text-foreground shadow-soft"
      >
        <X className="size-3.5" />
      </button>
    </div>
  );
}

export function FileField({
  value,
  onChange,
  multiple,
  field,
}: {
  value: string | string[] | null;
  onChange: (v: string | string[] | null) => void;
  multiple?: boolean;
  field: Field;
}) {
  const [busy, setBusy] = useState(false);
  const bucket = field.bucket ?? (field.type === "file" ? "documents" : "media");
  const list = multiple ? ((value as string[]) ?? []) : value ? [value as string] : [];

  async function handleFiles(files: FileList | null) {
    if (!files?.length) return;
    setBusy(true);
    try {
      const paths: string[] = [];
      for (const file of Array.from(files)) {
        paths.push(await uploadFile(bucket, field.folder ?? "uploads", file));
      }
      onChange(multiple ? [...list, ...paths] : paths[0]);
    } catch (e) {
      toast.error(e instanceof Error ? e.message : "Upload failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="mt-1.5 space-y-2">
      {list.length > 0 && (
        <div className="grid grid-cols-3 gap-2 md:grid-cols-4">
          {list.map((p) => (
            <Thumb
              key={p}
              path={p}
              onRemove={() => onChange(multiple ? list.filter((x) => x !== p) : null)}
            />
          ))}
        </div>
      )}
      <label className="flex cursor-pointer items-center justify-center gap-2 rounded-md border border-dashed border-border bg-secondary/30 px-3 py-3 text-xs font-medium text-muted-foreground hover:border-primary hover:text-primary">
        {busy ? <Loader2 className="size-4 animate-spin" /> : <Upload className="size-4" />}
        {busy ? "Uploading…" : multiple ? "Upload files" : "Upload file"}
        <input
          type="file"
          className="hidden"
          multiple={multiple}
          accept={field.type === "file" ? ".pdf,.doc,.docx" : "image/*"}
          onChange={(e) => {
            void handleFiles(e.target.files);
            e.target.value = "";
          }}
        />
      </label>
    </div>
  );
}

export function FieldInput({
  field,
  value,
  onChange,
}: {
  field: Field;
  value: unknown;
  onChange: (v: unknown) => void;
}) {
  switch (field.type) {
    case "textarea":
      return (
        <textarea
          rows={field.rows ?? 5}
          className={inputClass}
          placeholder={field.placeholder}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      );
    case "number":
      return (
        <input
          type="number"
          className={inputClass}
          value={value === null || value === undefined ? "" : String(value)}
          onChange={(e) => onChange(e.target.value === "" ? null : Number(e.target.value))}
        />
      );
    case "boolean":
      return (
        <div className="mt-2">
          <button
            type="button"
            role="switch"
            aria-checked={Boolean(value)}
            onClick={() => onChange(!value)}
            className={cn(
              "relative h-6 w-11 rounded-full transition-colors",
              value ? "bg-primary" : "bg-muted",
            )}
          >
            <span
              className={cn(
                "absolute top-0.5 size-5 rounded-full bg-card shadow-soft transition-all",
                value ? "left-[22px]" : "left-0.5",
              )}
            />
          </button>
        </div>
      );
    case "date":
      return (
        <input
          type="date"
          className={inputClass}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value || null)}
        />
      );
    case "select":
      return (
        <select
          className={inputClass}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value || null)}
        >
          <option value="">—</option>
          {(field.options ?? []).map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      );
    case "tags":
      return (
        <input
          className={inputClass}
          placeholder={field.placeholder ?? "Comma separated"}
          value={Array.isArray(value) ? (value as string[]).join(", ") : ""}
          onChange={(e) =>
            onChange(
              e.target.value
                .split(",")
                .map((s) => s.trim())
                .filter(Boolean),
            )
          }
        />
      );
    case "image":
    case "file":
      return (
        <FileField field={field} value={(value as string) ?? null} onChange={(v) => onChange(v)} />
      );
    case "images":
      return (
        <FileField
          field={field}
          multiple
          value={(value as string[]) ?? []}
          onChange={(v) => onChange(v ?? [])}
        />
      );
    default:
      return (
        <input
          className={inputClass}
          placeholder={field.placeholder}
          value={(value as string) ?? ""}
          onChange={(e) => onChange(e.target.value)}
        />
      );
  }
}
