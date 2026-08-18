import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Droplets, Recycle, Zap, Trash2, TreePine } from "lucide-react";

import { useLang } from "@/contexts/language";
import { PageHero } from "@/components/site/PageHero";
import { ContentPlaceholder } from "@/components/site/ContentPlaceholder";

import waterPlant from "@/assets/water-plant.jpg";
import barka from "@/assets/barka-swro-rack1.jpg";
import liwaIrrigation from "@/assets/liwa-irrigation.jpg";
import liwaReservoir from "@/assets/liwa-reservoir.jpg";
import mudhaibiWater from "@/assets/mudhaibi-water.jpg";
import sohar from "@/assets/sohar-plant.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability | Towell Engineering Group" },
      {
        name: "description",
        content:
          "How Towell Engineering Group approaches responsible growth — environmental responsibility, responsible operations, and the people and communities we work with.",
      },
      { property: "og:title", content: "Sustainability | Towell Engineering Group" },
      {
        property: "og:description",
        content: "Towell Engineering Group's approach to responsible and sustainable growth.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/sustainability" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
  component: SustainabilityPage,
});

const environmentTopics = [
  { icon: Zap, en: "Energy efficiency", ar: "كفاءة الطاقة" },
  { icon: Leaf, en: "Resource conservation", ar: "الحفاظ على الموارد" },
  { icon: Droplets, en: "Water conservation", ar: "ترشيد المياه" },
  { icon: Trash2, en: "Waste management", ar: "إدارة النفايات" },
  { icon: Recycle, en: "Recycling", ar: "إعادة التدوير" },
  { icon: TreePine, en: "Environmental protection", ar: "حماية البيئة" },
];

const projectGallery = [
  { src: waterPlant, en: "Water treatment works", ar: "أعمال معالجة المياه" },
  { src: barka, en: "Barka SWRO — membrane racks", ar: "بركاء للتحلية — وحدات الأغشية" },
  { src: liwaIrrigation, en: "Liwa — irrigation works", ar: "لوى — أعمال الري" },
  { src: liwaReservoir, en: "Liwa — reservoir", ar: "لوى — الخزان" },
  { src: mudhaibiWater, en: "Mudhaibi — water works", ar: "المضيبي — أعمال المياه" },
  { src: sohar, en: "Sohar — plant works", ar: "صحار — أعمال المصنع" },
];

function SustainabilityPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "الاستدامة" : "Sustainability"}
        title={isArabic ? "نمو مسؤول، على المدى الطويل." : "Responsible growth, for the long term."}
        description={
          isArabic
            ? "نهج المجموعة تجاه المسؤولية البيئية والعمليات المسؤولة والأشخاص والمجتمعات التي نعمل معها."
            : "The group's approach to environmental responsibility, responsible operations, and the people and communities we work with."
        }
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">{isArabic ? "نهجنا" : "Our approach"}</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              {isArabic ? "الاستدامة كجزء من طريقة التنفيذ" : "Sustainability as part of delivery"}
            </h2>
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {isArabic
                ? "تنفذ شركات المجموعة مشاريع في قطاعات المياه والطاقة والصناعة والبنية التحتية. يوضح هذا القسم نهج المجموعة تجاه النمو المسؤول والمستدام."
                : "Our companies deliver projects across water, energy, industrial and infrastructure sectors. This section sets out the group's approach to responsible and sustainable growth."}
            </p>
          </div>
          <ContentPlaceholder
            label={isArabic ? "بيان النهج الرسمي" : "Official approach statement"}
            className="md:mt-16"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-4">
        <p className="eyebrow">{isArabic ? "المسؤولية البيئية" : "Environmental responsibility"}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">
          {isArabic ? "مجالات التركيز" : "Focus areas"}
        </h2>
        <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {environmentTopics.map((t, i) => {
            const Icon = t.icon;
            return (
              <li
                key={t.en}
                className="animate-fade-in-up flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <span className="flex size-12 items-center justify-center rounded-xl bg-[image:var(--gradient-forest)] text-forest-foreground shadow-soft">
                  <Icon className="size-6" aria-hidden />
                </span>
                <h3 className="mt-5 font-display text-base font-bold text-primary">
                  {isArabic ? t.ar : t.en}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {isArabic
                    ? "سيتم تحديث المحتوى بالمعلومات الرسمية للشركة."
                    : "Content to be updated with official company information."}
                </p>
              </li>
            );
          })}
        </ul>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-border border-t-2 border-t-accent bg-card p-8 shadow-soft">
            <h3 className="text-lg text-primary">
              {isArabic ? "العمليات المسؤولة" : "Responsible operations"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isArabic
                ? "مساحة لعرض المشاريع والممارسات التشغيلية الفعلية للمجموعة."
                : "Space to showcase the group's actual projects and operational practices."}
            </p>
            <ContentPlaceholder className="mt-6" />
          </article>
          <article className="rounded-2xl border border-border border-t-2 border-t-accent bg-card p-8 shadow-soft">
            <h3 className="text-lg text-primary">
              {isArabic ? "الأشخاص والمجتمع" : "People & community"}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {isArabic
                ? "الربط بين الاستدامة والأشخاص والمجتمعات ورفاهية الموظفين وممارسات العمل المسؤولة."
                : "Connecting sustainability with our people, communities, employee wellbeing and responsible business practices."}
            </p>
            <ContentPlaceholder className="mt-6" />
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-4">
        <p className="eyebrow">{isArabic ? "مشاريع ذات صلة" : "Related projects"}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">
          {isArabic ? "أعمال المياه والبنية التحتية" : "Water and infrastructure works"}
        </h2>
        <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectGallery.map((g, i) => (
            <li
              key={g.src}
              className="animate-fade-in-up group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={g.src}
                  alt={isArabic ? g.ar : g.en}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="border-t border-border p-4 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {isArabic ? g.ar : g.en}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 pb-24 md:py-24 md:pb-32">
        <p className="eyebrow">{isArabic ? "الشهادات والمعايير" : "Certifications & standards"}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">
          {isArabic ? "الاعتمادات الرسمية" : "Official accreditations"}
        </h2>
        <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        <ContentPlaceholder
          className="mt-10 max-w-3xl"
          label={isArabic ? "الشهادات البيئية" : "Environmental certifications"}
        />
      </section>
    </>
  );
}
