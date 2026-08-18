import { FileText } from "lucide-react";
import { useLang } from "@/contexts/language";

/**
 * Elegant, reusable placeholder for sections whose official company content
 * has not been supplied yet. Replace the surrounding block with real content
 * once the company provides it — no fabricated claims are rendered here.
 */
export function ContentPlaceholder({
  label,
  note,
  className = "",
}: {
  label?: string;
  note?: string;
  className?: string;
}) {
  const { isArabic } = useLang();

  return (
    <div
      className={`flex items-start gap-4 rounded-2xl border border-dashed border-accent/40 bg-card/60 p-6 ${className}`}
    >
      <span className="surface-leaf flex size-10 shrink-0 items-center justify-center rounded-xl ring-1 ring-accent/30">
        <FileText className="size-4 text-accent-strong" aria-hidden />
      </span>
      <div>
        {label && (
          <p className="text-xs font-bold tracking-[0.18em] text-primary uppercase">{label}</p>
        )}
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {note ??
            (isArabic
              ? "سيتم تحديث المحتوى بالمعلومات الرسمية للشركة."
              : "Content to be updated with official company information.")}
        </p>
      </div>
    </div>
  );
}
