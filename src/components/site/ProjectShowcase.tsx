import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Building2, CalendarRange, MapPin, Wallet, X } from "lucide-react";

import FoldText from "@/components/site/FoldText";
import { useReveal, useCountUp } from "@/hooks/use-reveal";
import {
  COMPANY_LABEL,
  companyProjects,
  type ShowcaseProject,
  type ShowcaseStat,
} from "@/lib/showcase";

export function Reveal({
  children,
  variant = "reveal-up",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  variant?: "reveal-up" | "reveal-left" | "reveal-right" | "reveal-scale";
  delay?: number;
  className?: string;
}) {
  const { ref, shown } = useReveal();
  return (
    <div
      ref={ref}
      data-shown={shown}
      className={`reveal ${variant} ${className}`}
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <Reveal>
      <p className="text-xs font-bold tracking-[0.26em] text-showcase-gold uppercase">{eyebrow}</p>
      <FoldText
        tag="h2"
        text={title}
        className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl"
        textAlign="left"
        stagger={0.04}
        duration={0.58}
      />
    </Reveal>
  );
}

function StatCard({ item, delay }: { item: ShowcaseStat; delay: number }) {
  const { ref, shown } = useReveal(0.3);
  const numeric = "value" in item ? item.value : 0;
  const count = useCountUp(numeric, shown);
  return (
    <div
      ref={ref}
      data-shown={shown}
      className="reveal reveal-up glass-panel glass-hover p-7 text-center"
      style={{ ["--reveal-delay" as string]: `${delay}ms` }}
    >
      <p className="font-display text-2xl font-extrabold tracking-tight text-showcase-gold md:text-3xl">
        {"text" in item ? (
          item.text
        ) : (
          <>
            {item.prefix}
            {count.toLocaleString()}
            {item.suffix}
          </>
        )}
      </p>
      <p className="mt-3 text-sm text-white/70">{item.label}</p>
    </div>
  );
}

export function ProjectCard({
  project,
  delay = 0,
  variant = "reveal-up",
}: {
  project: ShowcaseProject;
  delay?: number;
  variant?: "reveal-up" | "reveal-left" | "reveal-right" | "reveal-scale";
}) {
  return (
    <Reveal delay={delay} variant={variant} className="h-full">
      <Link
        to="/projects/$slug"
        params={{ slug: project.slug }}
        className="group glass-panel glass-hover flex h-full flex-col overflow-hidden p-0"
      >
        <span className="block aspect-[16/10] overflow-hidden rounded-t-[var(--radius-showcase)]">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
        </span>
        <span className="flex flex-1 flex-col p-7">
          <span className="text-[11px] font-bold tracking-[0.22em] text-showcase-gold uppercase">
            {project.company}
            {project.value ? ` · ${project.value}` : ""}
          </span>
          <span className="mt-3 font-display text-lg font-bold text-balance">{project.title}</span>
          <span className="mt-3 text-sm leading-relaxed text-white/65">{project.summary}</span>
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] text-showcase-gold uppercase">
            View project
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </span>
      </Link>
    </Reveal>
  );
}

export default function ProjectShowcase({ project }: { project: ShowcaseProject }) {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const facts = [
    { icon: Building2, label: "Client", value: project.client },
    { icon: MapPin, label: "Location", value: project.location },
    { icon: CalendarRange, label: "Duration", value: project.years },
    ...(project.value ? [{ icon: Wallet, label: "Contract Value", value: project.value }] : []),
  ];

  const related = companyProjects(project.company)
    .filter((p) => p.slug !== project.slug)
    .slice(0, 3);

  const active = lightbox !== null ? project.gallery[lightbox] : undefined;

  return (
    <main className="showcase-surface">
      {/* Hero */}
      <section className="relative isolate flex min-h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="ken-burns h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-showcase-navy-deep/72 via-showcase-navy/58 to-showcase-navy-deep" />
        </div>

        <div className="mx-auto w-full max-w-4xl px-5 py-28 text-center">
          <Reveal variant="reveal-scale">
            <Link
              to={project.companyPath}
              className="glass-panel inline-flex items-center gap-2 px-5 py-2 text-xs font-bold tracking-[0.24em] text-showcase-gold uppercase"
            >
              {project.company}
            </Link>
          </Reveal>
          <FoldText
            tag="h1"
            text={project.title}
            className="mt-7 font-display text-4xl font-extrabold tracking-tight text-balance md:text-6xl"
            textAlign="center"
            stagger={0.05}
            duration={0.7}
            delay={0.2}
          />
          <Reveal delay={240}>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/75 md:text-lg">
              {project.tagline}
            </p>
          </Reveal>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { k: "Client", v: project.client },
              { k: "Year", v: project.years },
              { k: "Value", v: project.value ?? project.location },
            ].map((s, i) => (
              <Reveal key={s.k} delay={380 + i * 140}>
                <div className="glass-panel px-5 py-4">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">
                    {s.k}
                  </p>
                  <p className="mt-1 font-display text-base font-bold break-words">{s.v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="relative z-10 mx-auto -mt-16 max-w-[1200px] px-5">
        <Reveal variant="reveal-scale">
          <div className="glass-panel grid gap-8 p-8 sm:grid-cols-2 md:p-10 lg:grid-cols-4">
            {facts.map((f) => (
              <div key={f.label} className="flex min-w-0 items-start gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-showcase-gold/15 text-showcase-gold">
                  <f.icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="text-[11px] font-semibold tracking-[0.2em] text-white/50 uppercase">
                    {f.label}
                  </p>
                  <p className="mt-1 font-display text-base font-bold break-words">{f.value}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Overview */}
      <section className="mx-auto max-w-[1200px] px-5 py-24 md:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal variant="reveal-left">
            <p className="text-xs font-bold tracking-[0.26em] text-showcase-gold uppercase">
              Overview
            </p>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight md:text-4xl">
              {project.overviewHeading}
            </h2>
            <p className="mt-6 text-sm text-white/55">{COMPANY_LABEL[project.company]}</p>
          </Reveal>
          <Reveal variant="reveal-right" delay={140}>
            <p className="text-base leading-relaxed text-white/75 md:text-lg">{project.overview}</p>
          </Reveal>
        </div>
      </section>

      {/* Scope */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:pb-32">
        <SectionTitle eyebrow="Scope of work" title="What we delivered" />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.scope.map((s, i) => (
            <Reveal key={s.title} delay={i * 90}>
              <div className="glass-panel glass-hover group h-full p-7">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-showcase-gold/15 text-showcase-gold transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <s.icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/65">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Highlights */}
      <section className="mx-auto max-w-[1400px] px-5 pb-24 md:pb-32">
        <SectionTitle eyebrow="Project highlights" title="Scale that speaks for itself" />
        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-5">
          {project.stats.map((h, i) => (
            <StatCard key={h.label} item={h} delay={i * 100} />
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="mx-auto max-w-[1400px] px-5 pb-28 md:pb-36">
        <SectionTitle eyebrow="Gallery" title="From the site" />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {project.gallery.map((g, i) => (
            <Reveal
              key={g.caption}
              variant={i % 2 === 0 ? "reveal-left" : "reveal-right"}
              delay={i * 120}
            >
              <button
                type="button"
                onClick={() => setLightbox(i)}
                className="group glass-panel block w-full overflow-hidden p-0 text-left"
              >
                <span className="block overflow-hidden rounded-[var(--radius-showcase)]">
                  <img
                    src={g.src}
                    alt={g.alt}
                    loading="lazy"
                    className="aspect-[16/9] h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:rotate-[1.2deg]"
                  />
                </span>
                <span className="flex items-center justify-between gap-4 px-6 py-5">
                  <span className="font-display text-base font-bold">{g.caption}</span>
                  <span className="text-xs tracking-[0.2em] text-showcase-gold uppercase">
                    View
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1400px] px-5 pb-28 md:pb-36">
          <SectionTitle eyebrow={`More from ${project.company}`} title="Related projects" />
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {related.map((p, i) => (
              <ProjectCard key={p.slug} project={p} delay={i * 110} />
            ))}
          </div>
          <Reveal delay={360} className="mt-12">
            <Link
              to={project.companyPath}
              className="glass-panel glass-hover inline-flex items-center gap-3 px-7 py-4 font-display text-sm font-bold"
            >
              Explore {project.company}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Reveal>
        </section>
      )}

      {active && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={active.caption}
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-showcase-navy-deep/95 p-5 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Close image"
            onClick={() => setLightbox(null)}
            className="glass-panel absolute top-6 right-6 grid h-11 w-11 place-items-center"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
          <figure className="max-h-full w-full max-w-6xl">
            <img
              src={active.src}
              alt={active.alt}
              className="max-h-[80vh] w-full rounded-[var(--radius-showcase)] object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-white/70">
              {active.caption}
            </figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
