import { useLang } from "@/contexts/language";
import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import SplitText from "./SplitText";
import { CompanyLogo } from "./CompanyLogo";
import { Reveal, ProjectCard } from "./ProjectShowcase";
import { companyProjects, type CompanyCode } from "@/lib/showcase";

type Project = {
  title: string;
  location?: string;
  client?: string;
  nature?: string;
  bullets?: string[];
  duration?: string;
};

const t = {
  projects: { en: "Projects", ar: "المشاريع" },
  delivered: { en: "Delivered on time, safely", ar: "تم التسليم في الوقت المحدد وبأمان" },
  location: { en: "Location", ar: "الموقع" },
  client: { en: "Client", ar: "العميل" },
  duration: { en: "Duration", ar: "المدة" },
};

export function CompanyLayout({
  hero,
  code,
  logoUrl,
  name,
  intro,
  projects,
  projectsNote,
  children,
}: {
  hero: ReactNode;
  /** Company short code — drives the fallback brand mark and placeholder. */
  code?: string;
  /** CMS-managed logo URL; overrides the bundled mark when set. */
  logoUrl?: string | null;
  /** Display name shown next to the mark. */
  name?: string;
  intro?: ReactNode;
  projects: Project[];
  projectsNote?: ReactNode;
  children?: ReactNode;
}) {
  const { isArabic } = useLang();
  const showcase = code ? companyProjects(code as CompanyCode) : [];
  const flagship = showcase.find((p) => p.flagship);
  const featured = showcase.filter((p) => !p.flagship).slice(0, 3);

  return (
    <>
      {hero}
      {code && (
        <section className="mx-auto max-w-[1600px] px-5 pt-12 md:pt-14">
          <div className="flex items-center gap-5">
            <CompanyLogo code={code} src={logoUrl} size={96} className="shadow-soft" priority />
            <div className="min-w-0">
              <p className="eyebrow">{code}</p>
              {name && (
                <p className="mt-1 truncate text-lg font-semibold text-primary md:text-xl">
                  {name}
                </p>
              )}
            </div>
          </div>
        </section>
      )}
      {intro && (
        <section className="mx-auto max-w-[1600px] px-5 pt-12 pb-16 md:pt-14">
          <div className="max-w-4xl space-y-4 text-base leading-relaxed text-muted-foreground">
            {intro}
          </div>
        </section>
      )}
      {showcase.length > 0 && (
        <section className="showcase-surface mt-6">
          <div className="mx-auto max-w-[1400px] px-5 py-20 md:py-28">
            <p className="text-xs font-bold tracking-[0.26em] text-showcase-gold uppercase">
              {isArabic ? t.projects.ar : t.projects.en}
            </p>
            <SplitText
              tag="h2"
              text={isArabic ? t.delivered.ar : t.delivered.en}
              className="mt-4 font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl"
              textAlign="left"
              delay={25}
              duration={0.7}
              from={{ opacity: 0, y: 24 }}
              to={{ opacity: 1, y: 0 }}
            />

            {flagship && (
              <Reveal variant="reveal-scale" className="mt-12">
                <Link
                  to="/projects/$slug"
                  params={{ slug: flagship.slug }}
                  className="group glass-panel glass-hover grid gap-0 overflow-hidden p-0 md:grid-cols-2"
                >
                  <span className="block aspect-[16/10] overflow-hidden md:aspect-auto md:h-full">
                    <img
                      src={flagship.image}
                      alt={flagship.title}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </span>
                  <span className="flex flex-col justify-center p-8 text-white md:p-12">
                    <span className="w-fit rounded-full bg-showcase-gold/15 px-4 py-1.5 text-[11px] font-bold tracking-[0.22em] text-showcase-gold uppercase">
                      {isArabic ? "مشروع مميز" : "Flagship project"}
                    </span>
                    <span className="mt-6 font-display text-2xl font-extrabold text-balance md:text-3xl">
                      {flagship.title}
                    </span>
                    <span className="mt-4 text-sm leading-relaxed text-white/70">
                      {flagship.tagline}
                    </span>
                    <span className="mt-8 grid grid-cols-3 gap-4 border-t border-white/10 pt-6 text-xs">
                      {[
                        { k: isArabic ? "العميل" : "Client", v: flagship.client },
                        { k: isArabic ? "المدة" : "Duration", v: flagship.years },
                        {
                          k: isArabic ? "القيمة" : "Value",
                          v: flagship.value ?? flagship.location,
                        },
                      ].map((s) => (
                        <span key={s.k} className="block min-w-0">
                          <span className="block text-white/45">{s.k}</span>
                          <span className="mt-1 block font-display font-bold break-words">
                            {s.v}
                          </span>
                        </span>
                      ))}
                    </span>
                    <span className="mt-8 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-showcase-gold uppercase">
                      {isArabic ? "عرض المشروع" : "View project"}
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </span>
                </Link>
              </Reveal>
            )}

            {featured.length > 0 && (
              <div className="mt-8 grid gap-8 md:grid-cols-3">
                {featured.map((p, i) => (
                  <ProjectCard key={p.slug} project={p} delay={i * 110} />
                ))}
              </div>
            )}
          </div>
        </section>
      )}
      {showcase.length === 0 && (
        <section className="mx-auto max-w-[1600px] px-5 pb-20 md:pb-24">
          <p className="eyebrow">{isArabic ? t.projects.ar : t.projects.en}</p>
          <SplitText
            tag="h2"
            text={isArabic ? t.delivered.ar : t.delivered.en}
            className="mt-3 text-3xl md:text-4xl"
            textAlign="left"
            delay={35}
            duration={0.85}
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
          {projects.length === 0 && projectsNote && (
            <div className="mt-10 rounded-xl border border-dashed border-border bg-muted/40 p-8 text-sm leading-relaxed text-muted-foreground">
              {projectsNote}
            </div>
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.title}
                className="rounded-xl border border-border bg-card p-6 shadow-soft transition-shadow hover:shadow-lift"
              >
                <SplitText
                  tag="h3"
                  text={p.title}
                  className="text-base leading-snug text-primary"
                  textAlign="left"
                  delay={15}
                  duration={0.5}
                  from={{ opacity: 0, y: 10 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.15}
                />
                <dl className="mt-4 grid gap-2 text-sm">
                  {p.location && (
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                        {isArabic ? t.location.ar : t.location.en}
                      </dt>
                      <dd className="text-foreground/85">{p.location}</dd>
                    </div>
                  )}
                  {p.client && (
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                        {isArabic ? t.client.ar : t.client.en}
                      </dt>
                      <dd className="text-foreground/85">{p.client}</dd>
                    </div>
                  )}
                  {p.duration && (
                    <div className="flex gap-2">
                      <dt className="w-20 shrink-0 text-xs font-bold tracking-[0.14em] text-muted-foreground uppercase">
                        {isArabic ? t.duration.ar : t.duration.en}
                      </dt>
                      <dd className="text-foreground/85">{p.duration}</dd>
                    </div>
                  )}
                </dl>
                {p.nature && (
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{p.nature}</p>
                )}
                {p.bullets && p.bullets.length > 0 && (
                  <ul className="mt-4 grid gap-2 text-sm text-foreground/85">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </section>
      )}
      {children}
    </>
  );
}
