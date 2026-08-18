import { useEffect, useState } from "react";
import { logoForCompany } from "@/lib/company-logos";
import { cn } from "@/lib/utils";

/** Compact placeholder text: full code when short, initials when long. */
function placeholderText(code: string) {
  const clean = code.trim().replace(/\s+/g, " ").toUpperCase();
  if (clean.length <= 6) return clean;
  const words = clean.split(" ");
  if (words.length > 1) return words.map((w) => w[0]).join("");
  return clean.slice(0, 4);
}

/**
 * Company brand mark rendered on a white plate so the original logo colours
 * stay untouched on any background.
 *
 * `src` (typically the CMS `logo_url`) wins when present; otherwise the
 * bundled brand mark for the code is used. If neither loads, a graceful
 * initials placeholder is shown.
 */
export function CompanyLogo({
  code,
  src,
  size = 80,
  className,
  rounded = "rounded-2xl",
  priority = false,
}: {
  code: string;
  src?: string | null;
  size?: number;
  className?: string;
  rounded?: string;
  /** Render eagerly — use for logos above the fold (hero brand band, header). */
  priority?: boolean;
}) {
  const resolved = src || logoForCompany(code);
  const [failed, setFailed] = useState(false);

  useEffect(() => setFailed(false), [resolved]);

  const label = placeholderText(code);

  return (
    <span
      style={{ width: size, height: size }}
      className={cn(
        "flex shrink-0 items-center justify-center overflow-hidden bg-white ring-1 ring-border/60",
        rounded,
        className,
      )}
    >
      {failed || !resolved ? (
        <span
          aria-label={`${code} logo`}
          role="img"
          className="px-1 text-center leading-none font-bold tracking-[0.06em] text-primary/70"
          style={{ fontSize: Math.max(10, Math.min(size * 0.3, (size * 0.82) / label.length * 1.6)) }}
        >
          {label}
        </span>
      ) : (
        <img
          src={resolved}
          alt={`${code} logo`}
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          decoding="async"
          width={size}
          height={size}
          draggable={false}
          onError={() => setFailed(true)}
          style={{ imageRendering: "auto" }}
          className="h-full w-full object-contain p-[12%] select-none"
        />
      )}
    </span>
  );
}
