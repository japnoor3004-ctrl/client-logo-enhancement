import { useState } from "react";
import { useLang } from "@/contexts/language";
import { useReveal } from "@/hooks/use-reveal";
import { ImageLightbox, type LightboxItem } from "./ImageLightbox";

// Bundled at build time, so the images travel with the exported project.
const files = import.meta.glob<string>("../../assets/hse/*.jpg", {
  eager: true,
  query: "?url",
  import: "default",
});

function name(path: string) {
  return path.split("/").pop()!.replace(".jpg", "");
}

const campaigns: LightboxItem[] = Object.entries(files)
  .filter(([p]) => name(p).startsWith("hse-"))
  .sort((a, b) => Number(name(a[0]).slice(4)) - Number(name(b[0]).slice(4)))
  .map(([, src]) => ({ src }));

const awardTitles: Record<string, { en: string; ar: string }> = {
  "award-team": {
    en: "Safe man-hours recognition, project team",
    ar: "تكريم ساعات العمل الآمنة، فريق المشروع",
  },
  "award-5m": {
    en: "5 million safe man-hours without LTI — Sohar Refinery Improvement Project",
    ar: "5 ملايين ساعة عمل آمنة بدون حوادث — مشروع تحسين مصفاة صحار",
  },
  "award-10m": {
    en: "10 million safe man-hours without LTI — Sohar Refinery Improvement Project",
    ar: "10 ملايين ساعة عمل آمنة بدون حوادث — مشروع تحسين مصفاة صحار",
  },
  "award-40m": {
    en: "40 million safe man-hours without LTI — Sohar Refinery Improvement Project",
    ar: "40 مليون ساعة عمل آمنة بدون حوادث — مشروع تحسين مصفاة صحار",
  },
  "award-50m": {
    en: "50 million safe man-hours without LTI — Sohar Refinery Improvement Project",
    ar: "50 مليون ساعة عمل آمنة بدون حوادث — مشروع تحسين مصفاة صحار",
  },
  "award-ribbon": {
    en: "HSE milestone celebration on site",
    ar: "الاحتفال بإنجاز الصحة والسلامة في الموقع",
  },
  "award-certificate": {
    en: "Certificate of Appreciation",
    ar: "شهادة تقدير",
  },
};

const awardKeys = [
  "award-team",
  "award-5m",
  "award-10m",
  "award-40m",
  "award-50m",
  "award-ribbon",
  "award-certificate",
];

export function HseGallery() {
  const { isArabic } = useLang();
  const [open, setOpen] = useState<number | null>(null);

  const awards: LightboxItem[] = awardKeys
    .map((k) => {
      const entry = Object.entries(files).find(([p]) => name(p) === k);
      if (!entry) return null;
      const t = awardTitles[k]!;
      return { src: entry[1], title: isArabic ? t.ar : t.en };
    })
    .filter(Boolean) as LightboxItem[];

  const all: LightboxItem[] = [
    ...campaigns.map((c) => ({
      ...c,
      title: isArabic ? "حملة الصحة والسلامة والبيئة" : "HSE campaign on site",
    })),
    ...awards,
  ];

  const campaignsBlock = useReveal<HTMLUListElement>(0.1);
  const awardsBlock = useReveal<HTMLUListElement>(0.1);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{isArabic ? "حملات الصحة والسلامة" : "HSE campaigns"}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            {isArabic ? "السلامة في الميدان." : "Safety, in the field."}
          </h2>
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            {isArabic
              ? "توعية ميدانية وتدريبات ومحادثات أدوات وحملات سلامة في مواقعنا."
              : "Toolbox talks, campaign briefings, drills and site inspections across our projects."}
          </p>
        </div>

        {/*
         * Editorial layout: repeating block of five — one large featured image
         * plus a stretched companion, then a row of three supporting images.
         */}
        <ul
          ref={campaignsBlock.ref}
          className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 md:gap-4 lg:grid-cols-6"
        >
          {campaigns.map((item, i) => {
            const slot = i % 5;
            const liClass =
              slot === 0
                ? "col-span-2 sm:col-span-4 lg:col-span-4"
                : slot === 1
                  ? "col-span-2 sm:col-span-4 lg:col-span-2"
                  : slot === 4
                    ? "col-span-2 sm:col-span-4 lg:col-span-2"
                    : "col-span-1 sm:col-span-2 lg:col-span-2";

            const boxClass =
              slot === 0
                ? "aspect-[16/10]"
                : slot === 1
                  ? "aspect-[4/3] lg:aspect-auto lg:h-full"
                  : "aspect-[4/3]";
            return (
              <li
                key={item.src}
                className={`reveal reveal-up ${liClass}`}
                data-shown={campaignsBlock.shown ? "true" : "false"}
                style={{ ["--reveal-delay" as string]: `${(i % 5) * 90}ms` }}
              >
                <button
                  type="button"
                  onClick={() => setOpen(i)}
                  className="group block h-full w-full overflow-hidden rounded-xl border border-border bg-secondary shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                >
                  <span className={`block overflow-hidden ${boxClass}`}>
                    <img
                      src={item.src}
                      alt={isArabic ? "حملة الصحة والسلامة والبيئة" : "HSE campaign on site"}
                      loading="lazy"
                      decoding="async"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 66vw"
                      className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    />
                  </span>
                </button>
              </li>
            );
          })}
        </ul>

      </section>

      {awards.length > 0 && (
        <section className="border-t border-border bg-muted/40 py-20 md:py-24">
          <div className="mx-auto max-w-[1600px] px-5">
            <div className="max-w-2xl">
              <p className="eyebrow">{isArabic ? "الجوائز والتقدير" : "Awards & recognition"}</p>
              <h2 className="mt-3 text-3xl md:text-4xl">
                {isArabic ? "إنجازات ساعات العمل الآمنة." : "Safe man-hour milestones."}
              </h2>
              <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
            </div>

            <ul
              ref={awardsBlock.ref}
              className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
            >
              {awards.map((item, i) => (
                <li
                  key={item.src}
                  className="reveal reveal-up"
                  data-shown={awardsBlock.shown ? "true" : "false"}
                  style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(campaigns.length + i)}
                    className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
                  >
                    <span className="block aspect-[4/3] overflow-hidden bg-secondary">
                      <img
                        src={item.src}
                        alt={item.title ?? ""}
                        loading="lazy"
                        decoding="async"
                        className="size-full object-contain transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    </span>

                    <span className="p-4 text-sm leading-snug text-muted-foreground">
                      {item.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <ImageLightbox items={all} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </>
  );
}

export default HseGallery;
