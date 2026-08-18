import { useState } from "react";
import { FileText, ArrowRight, Calendar } from "lucide-react";
import { useLang } from "@/contexts/language";
import { useReveal } from "@/hooks/use-reveal";
import { ImageLightbox, type LightboxItem } from "./ImageLightbox";

import canadianOrder__ptr from "@/assets/press/towell-canadian-order.jpg.asset.json";
const canadianOrder = canadianOrder__ptr.url;
import uniscoSmelter__ptr from "@/assets/press/unisco-smelter-contract.jpg.asset.json";
const uniscoSmelter = uniscoSmelter__ptr.url;
import abgPipeline__ptr from "@/assets/press/abg-water-pipeline.jpg.asset.json";
const abgPipeline = abgPipeline__ptr.url;
import abgCity__ptr from "@/assets/press/towell-pumps-abg-city.jpg.asset.json";
const abgCity = abgCity__ptr.url;
import tipcoHandover__ptr from "@/assets/press/tipco-project-handover.jpg.asset.json";
const tipcoHandover = tipcoHandover__ptr.url;
import dossierAwards__ptr from "@/assets/press/dossier-awards-2015.jpg.asset.json";
const dossierAwards = dossierAwards__ptr.url;

/**
 * Letters, press clippings and communications supplied as image documents.
 * Titles and dates come only from what is legible on each document.
 */
const documents: { src: string; title: string; date?: string }[] = [
  { src: canadianOrder, title: "Towell Engineering unit bags big Canadian order" },
  { src: uniscoSmelter, title: "UNISCO wins Canadian smelter contract" },
  { src: abgPipeline, title: "Water pipeline facility for Asian Beach Games inaugurated" },
  { src: abgCity, title: "Towell pumps life into ABG city" },
  { src: tipcoHandover, title: "TIPCO hands over major project ahead of schedule" },
  {
    src: dossierAwards,
    title: "Dossier Awards 2015 draws industry leaders",
    date: "Sunday, September 20, 2015",
  },
];

export function LettersSection() {
  const { isArabic } = useLang();
  const [open, setOpen] = useState<number | null>(null);
  const block = useReveal<HTMLUListElement>(0.1);

  const items: LightboxItem[] = documents.map((d) => ({
    src: d.src,
    title: d.title,
    meta: d.date ?? null,
  }));

  return (
    <section className="border-t border-border bg-muted/40 py-16 md:py-20">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="max-w-2xl">
          <p className="eyebrow">{isArabic ? "الرسائل والمراسلات" : "Letters & communications"}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            {isArabic ? "من أرشيفنا الصحفي." : "From our press archive."}
          </h2>
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        </div>

        <ul ref={block.ref} className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {documents.map((doc, i) => (
            <li
              key={doc.src}
              className="reveal reveal-up"
              data-shown={block.shown ? "true" : "false"}
              style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
            >
              <button
                type="button"
                onClick={() => setOpen(i)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
              >
                <span className="block aspect-[4/3] overflow-hidden bg-secondary">
                  <img
                    src={doc.src}
                    alt={doc.title}
                    loading="lazy"
                    decoding="async"
                    className="size-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </span>
                <span className="flex flex-1 flex-col gap-3 p-5">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-wider text-accent-strong uppercase">
                    <FileText className="size-3.5" />
                    {isArabic ? "مستند" : "Document"}
                  </span>
                  <span className="font-display text-lg leading-snug font-bold text-primary">
                    {doc.title}
                  </span>
                  <span className="mt-auto flex items-center justify-between pt-2">
                    <span className="inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                      {doc.date && (
                        <>
                          <Calendar className="size-3.5" />
                          {doc.date}
                        </>
                      )}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold text-accent-strong">
                      {isArabic ? "عرض" : "View"}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <ImageLightbox items={items} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
}

export default LettersSection;
