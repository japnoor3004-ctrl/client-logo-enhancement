import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap, Users, Wrench, HeartHandshake, Leaf, Sparkles } from "lucide-react";

import { useLang } from "@/contexts/language";
import { PageHero } from "@/components/site/PageHero";
import { ContentPlaceholder } from "@/components/site/ContentPlaceholder";

export const Route = createFileRoute("/csr")({
  head: () => ({
    meta: [
      { title: "CSR | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Corporate Social Responsibility at Towell Engineering Group — our approach, initiatives and community activities across Oman and the GCC.",
      },
      { property: "og:title", content: "CSR | Towell Engineering Group" },
      {
        property: "og:description",
        content: "Corporate Social Responsibility at Towell Engineering Group.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/csr" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/csr" }],
  }),
  component: CsrPage,
});

const initiatives = [
  { icon: GraduationCap, en: "Education", ar: "التعليم" },
  { icon: Users, en: "Community development", ar: "تنمية المجتمع" },
  { icon: Wrench, en: "Skills development", ar: "تطوير المهارات" },
  { icon: HeartHandshake, en: "Employee & community welfare", ar: "رعاية الموظفين والمجتمع" },
  { icon: Leaf, en: "Environmental initiatives", ar: "المبادرات البيئية" },
  { icon: Sparkles, en: "Other CSR activities", ar: "أنشطة أخرى" },
];

function CsrPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "المسؤولية الاجتماعية" : "CSR"}
        title={
          isArabic ? "المسؤولية الاجتماعية للشركات" : "Corporate Social Responsibility"
        }
        description={
          isArabic
            ? "التزام المجموعة تجاه المجتمعات التي نعمل فيها."
            : "The group's commitment to the communities in which we operate."
        }
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">{isArabic ? "نهجنا" : "Our CSR approach"}</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              {isArabic ? "المساهمة حيث نعمل" : "Contributing where we operate"}
            </h2>
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {isArabic
                ? "يوضح هذا القسم نهج مجموعة تويل للهندسة تجاه المسؤولية الاجتماعية والأنشطة التي تدعم المجتمعات المحيطة بعملياتنا."
                : "This section sets out Towell Engineering Group's approach to corporate social responsibility and the activities that support the communities around our operations."}
            </p>
          </div>
          <ContentPlaceholder
            label={isArabic ? "بيان المسؤولية الاجتماعية الرسمي" : "Official CSR statement"}
            className="md:mt-16"
          />
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-4">
        <p className="eyebrow">{isArabic ? "المبادرات" : "CSR initiatives"}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">{isArabic ? "مجالات التركيز" : "Focus areas"}</h2>
        <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((t, i) => {
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
        <p className="eyebrow">{isArabic ? "أنشطة المسؤولية الاجتماعية" : "CSR projects"}</p>
        <h2 className="mt-3 text-3xl md:text-4xl">
          {isArabic ? "معرض الصور" : "Photo showcase"}
        </h2>
        <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <li
              key={i}
              className="animate-fade-in-up flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-accent/40 bg-card/60 p-6 text-center"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <span className="surface-leaf flex size-12 items-center justify-center rounded-xl ring-1 ring-accent/30">
                <Sparkles className="size-5 text-accent-strong" aria-hidden />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {isArabic
                  ? "سيتم تحديث الصور بالمواد الرسمية للشركة."
                  : "Photography to be updated with official company material."}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:pb-32">
        <div className="rounded-2xl border border-border bg-card p-8 shadow-soft md:p-12">
          <p className="eyebrow">{isArabic ? "الأثر" : "Impact"}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            {isArabic ? "النتائج القابلة للقياس" : "Measurable outcomes"}
          </h2>
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          <ContentPlaceholder
            className="mt-8 max-w-3xl"
            label={isArabic ? "إحصاءات معتمدة" : "Verified statistics"}
          />
        </div>
      </section>
    </>
  );
}
