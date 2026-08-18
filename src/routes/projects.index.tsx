import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useLang } from "@/contexts/language";
import { Reveal, SectionTitle, ProjectCard } from "@/components/site/ProjectShowcase";
import { PageHero } from "@/components/site/PageHero";
import { PROJECTS, flagshipProjects, type CompanyCode } from "@/lib/showcase";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Flagship and selected engineering projects delivered by Towell Engineering Group across oil & gas, power, water and infrastructure in Oman and the GCC.",
      },
      { property: "og:title", content: "Projects | Towell Engineering Group" },
      {
        property: "og:description",
        content:
          "Flagship refinery, power, water and infrastructure projects delivered by TIPCO, TESCO, TELCO, UNISCO and TCC.",
      },
      { property: "og:url", content: "/projects" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: ProjectsPage,
});

const FILTERS: Array<{ code: CompanyCode | "ALL"; label: string }> = [
  { code: "ALL", label: "All" },
  { code: "TIPCO", label: "TIPCO" },
  { code: "TESCO", label: "TESCO" },
  { code: "TELCO", label: "TELCO" },
  { code: "UNISCO", label: "UNISCO" },
  { code: "TCC", label: "TCC" },
  { code: "TEIL", label: "TEIL" },
];

function ProjectsPage() {
  const { isArabic } = useLang();
  const [active, setActive] = useState<CompanyCode | "ALL">("ALL");
  const flagships = flagshipProjects();
  const listed = PROJECTS.filter((p) => !p.companyOnly);
  const list = active === "ALL" ? listed : listed.filter((p) => p.company === active);

  return (
    <main className="showcase-surface">
      <PageHero
        eyebrow={isArabic ? "المشاريع" : "Projects"}
        title={
          isArabic ? "هندسة تم تسليمها عبر المنطقة." : "Engineering delivered across the region."
        }
        description={
          isArabic
            ? "مجموعة من المشاريع المنفذة من قبل شركاتنا المتخصصة لعملاء الطاقة والمرافق والصناعة والبنية التحتية."
            : "Refinery, power, water, industrial and infrastructure programmes executed by our five specialised companies."
        }
      />

      <section className="mx-auto max-w-[1400px] px-5 py-24 md:py-28">
        <SectionTitle
          eyebrow={isArabic ? "مشاريع مميزة" : "Flagship projects"}
          title={isArabic ? "أبرز ما أنجزناه" : "One defining project from each company"}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {flagships.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={i * 100} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 pb-28 md:pb-36">
        <SectionTitle
          eyebrow={isArabic ? "جميع المشاريع" : "Full portfolio"}
          title={isArabic ? "استعرض حسب الشركة" : "Browse by company"}
        />
        <Reveal delay={100}>
          <div className="mt-10 flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <button
                key={f.code}
                type="button"
                onClick={() => setActive(f.code)}
                aria-pressed={active === f.code}
                className={`glass-panel px-6 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${
                  active === f.code
                    ? "bg-showcase-gold/20 text-showcase-gold"
                    : "text-white/60 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <ProjectCard key={p.slug} project={p} delay={(i % 3) * 90} />
          ))}
        </div>
      </section>
    </main>
  );
}
