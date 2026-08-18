import { useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export type LightboxItem = { src: string; title?: string; meta?: string | null };

/**
 * Minimal full-screen viewer used by the HSE gallery and the Media letters
 * section. Click outside, press Escape, or use the arrows to navigate.
 */
export function ImageLightbox({
  items,
  index,
  onClose,
  onIndexChange,
}: {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}) {
  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onIndexChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onIndexChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, items.length, onClose, onIndexChange]);

  if (index === null || !items[index]) return null;
  const current = items[index];

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-foreground/90 p-4 md:p-10"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute top-4 right-4 rounded-full bg-background/90 p-2 text-foreground shadow-soft transition-transform hover:scale-105"
      >
        <X className="size-5" />
      </button>

      {items.length > 1 && (
        <>
          <button
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index - 1 + items.length) % items.length);
            }}
            className="absolute left-3 rounded-full bg-background/90 p-2 text-foreground shadow-soft transition-transform hover:scale-105 md:left-6"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onIndexChange((index + 1) % items.length);
            }}
            className="absolute right-3 rounded-full bg-background/90 p-2 text-foreground shadow-soft transition-transform hover:scale-105 md:right-6"
          >
            <ChevronRight className="size-5" />
          </button>
        </>
      )}

      <figure
        className="animate-scale-in flex max-h-full flex-col items-center gap-3"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={current.src}
          alt={current.title ?? ""}
          className="max-h-[80vh] max-w-full rounded-lg object-contain shadow-lift"
        />
        {(current.title || current.meta) && (
          <figcaption className="max-w-2xl text-center text-sm text-background/90">
            {current.title}
            {current.meta && <span className="block text-xs text-background/70">{current.meta}</span>}
          </figcaption>
        )}
      </figure>
    </div>
  );
}

export default ImageLightbox;
