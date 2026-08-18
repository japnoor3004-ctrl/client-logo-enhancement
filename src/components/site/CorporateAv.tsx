import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, X } from "lucide-react";
import { useLang } from "@/contexts/language";
import posterImgAsset from "@/assets/hero-site.jpg.asset.json";

const posterImg = posterImgAsset.url;

/**
 * Corporate AV.
 *
 * ── How to plug in the official company film ──
 * Set CORPORATE_AV_SRC to the URL of the supplied AV file (MP4/WebM) — e.g. a
 * Lovable asset URL — and optionally swap POSTER for the official key frame.
 * Until then the modal shows a neutral placeholder; no stock footage is used.
 */
const CORPORATE_AV_SRC: string | null = null;
const POSTER = posterImg;

export function CorporateAv() {
  const { isArabic } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <section
      aria-labelledby="corporate-av-heading"
      className="mx-auto max-w-[1600px] px-5 py-20 md:py-24"
    >
      <div className="grid items-end gap-6 md:grid-cols-[1fr_auto]">
        <div className="max-w-2xl">
          <p className="eyebrow">{isArabic ? "فيلم المجموعة" : "Corporate AV"}</p>
          <h2 id="corporate-av-heading" className="mt-3 text-3xl md:text-5xl">
            {isArabic ? "تعرّف على مجموعة تويل للهندسة" : "Discover Towell Engineering Group"}
          </h2>
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
            {isArabic
              ? "نظرة سريعة على المجموعة وشركاتها ومشاريعها في دقائق معدودة."
              : "A short overview of the group, our companies and the projects we deliver."}
          </p>
        </div>
      </div>

      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label={isArabic ? "تشغيل فيلم المجموعة" : "Play the corporate film"}
        className="group relative mt-12 block w-full overflow-hidden rounded-2xl border border-border shadow-lift"
      >
        <img
          src={POSTER}
          alt={
            isArabic
              ? "لقطة من فيلم مجموعة تويل للهندسة"
              : "Towell Engineering Group corporate film poster"
          }
          loading="lazy"
          decoding="async"
          className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] md:aspect-[21/9]"
        />
        <span
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(10,14,20,0.75) 0%, rgba(10,14,20,0.45) 55%, rgba(10,14,20,0.25) 100%)",
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="flex size-20 items-center justify-center rounded-full bg-[#97CB46]/95 text-[#0F1A2E] shadow-lift transition-transform duration-300 group-hover:scale-105 md:size-24">
            <Play className="ml-1 size-8 md:size-9" fill="currentColor" aria-hidden />
          </span>
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4 md:p-10"
            role="dialog"
            aria-modal="true"
            aria-label={isArabic ? "فيلم المجموعة" : "Corporate film"}
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={isArabic ? "إغلاق" : "Close"}
              className="absolute top-5 right-5 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <X className="size-5" />
            </button>

            <motion.div
              className="w-full max-w-5xl overflow-hidden rounded-2xl bg-[#0F1A2E] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, y: 18, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 12, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
            >
              {CORPORATE_AV_SRC ? (
                <video
                  src={CORPORATE_AV_SRC}
                  poster={POSTER}
                  controls
                  autoPlay
                  playsInline
                  className="aspect-video w-full bg-black"
                />
              ) : (
                <div className="flex aspect-video w-full flex-col items-center justify-center gap-4 px-6 text-center">
                  <span className="flex size-14 items-center justify-center rounded-full bg-[#97CB46]/15 text-[#97CB46]">
                    <Play className="ml-0.5 size-6" fill="currentColor" aria-hidden />
                  </span>
                  <p className="font-display text-lg text-white md:text-xl">
                    {isArabic ? "فيلم المجموعة الرسمي" : "Official corporate film"}
                  </p>
                  <p className="max-w-md text-sm leading-relaxed text-white/70">
                    {isArabic
                      ? "سيتم تحديث المحتوى بالفيلم الرسمي للشركة."
                      : "Content to be updated with the official company AV."}
                  </p>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
