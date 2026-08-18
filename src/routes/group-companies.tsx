import { createFileRoute, Link } from "@tanstack/react-router";
import { useLang } from "@/contexts/language";
import { PageHero } from "@/components/site/PageHero";
import { GROUP_COMPANIES, COMPANY_COUNT } from "@/lib/companies";
import { CompanyLogo } from "@/components/site/CompanyLogo";
import { ArrowUpRight, MapPin, Award, Building2 } from "lucide-react";

export const Route = createFileRoute("/group-companies")({
  head: () => ({
    meta: [
      { title: "Group Companies | Towell Engineering Group" },
      {
        name: "description",
        content: `${COMPANY_COUNT} specialised engineering, construction, oil & gas, water and biochemical companies building resilient infrastructure across the GCC.`,
      },
      { property: "og:title", content: "Group Companies | Towell Engineering Group" },
      {
        property: "og:description",
        content: `Explore the ${COMPANY_COUNT} specialised companies of Towell Engineering Group.`,
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/group-companies" },
    ],
    links: [{ rel: "canonical", href: "/group-companies" }],
  }),
  component: GroupCompaniesPage,
});

/* ── Placeholder colors for company logos ── */
const COLORS = [
  "#0F1A2E",
  "#97CB46",
  "#17233D",
  "#8DC63F",
  "#1F2D4F",
  "#6BA32E",
  "#2A3D66",
  "#A0B4B4",
  "#0F1A2E",
  "#97CB46",
  "#17233D",
];

function CompanyGroupCompaniesPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "شركاتنا" : "Our Companies"}
        title={
          isArabic
            ? `${COMPANY_COUNT} شركة متخصصة. مجموعة هندسية واحدة.`
            : `${COMPANY_COUNT} specialised companies. One engineering group.`
        }
        description={
          isArabic
            ? "تعمل كل شركة بشكل مستقل بإمكانياتها وتصنيفاتها، وتقدم معاً وفق معيار واحد للمجموعة في السلامة والجودة والتسليم في الوقت المحدد."
            : "Each company operates independently with its own capabilities and certifications, yet delivers together under a single group standard for safety, quality and on-time performance."
        }
      />

      {/* Company cards grid */}
      <section className="mx-auto max-w-[1600px] px-5 py-16 md:py-24">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GROUP_COMPANIES.map((c, i) => (
            <Link
              key={c.code}
              to={c.slug}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
            >
              {/* Top accent bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background: `linear-gradient(90deg, ${COLORS[i % COLORS.length]}, ${COLORS[(i + 1) % COLORS.length]})`,
                }}
              />

              <div className="p-6 md:p-7">
                {/* Header: logo placeholder + code */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <CompanyLogo
                      code={c.code}
                      size={48}
                      rounded="rounded-xl"
                      className="shadow-sm"
                    />

                    <div>
                      <span className="block text-[11px] font-bold tracking-[0.18em] text-accent-strong uppercase">
                        {isArabic ? c.tag.ar : c.tag.en}
                      </span>
                      <span className="block text-lg font-bold text-primary">{c.code}</span>
                    </div>
                  </div>
                  <span className="inline-flex size-8 shrink-0 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-white">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>

                {/* Company full name */}
                <h3 className="mt-4 text-sm font-semibold leading-snug text-foreground/90">
                  {isArabic ? c.name.ar : c.name.en}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {isArabic ? c.description.ar : c.description.en}
                </p>

                {/* Bottom row: Visit link */}
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.15em] text-accent-strong uppercase transition-colors group-hover:text-primary">
                    {isArabic ? `زيارة ${c.code}` : `Visit ${c.code}`}
                  </span>
                  <span className="text-[10px] font-medium text-muted-foreground uppercase">
                    {isArabic ? "تفاصيل ←" : "Details →"}
                  </span>
                </div>
              </div>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-[image:var(--gradient-leaf-soft)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="mx-auto max-w-[1600px] px-5 pb-20 md:pb-28">
        <div className="rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <Building2 className="mx-auto size-10 text-accent" />
          <h2 className="mt-5 text-2xl md:text-3xl">
            {isArabic ? "تبحث عن شركاتنا المتخصصة؟" : "Looking for a specific company?"}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
            {isArabic
              ? "انقر على أي بطاقة أعلاه للانتقال إلى صفحة الشركة للحصول على مزيد من التفاصيل حول خدماتها وقدراتها ومشاريعها."
              : "Click any card above to visit the company page for more details on its services, capabilities and projects."}
          </p>
        </div>
      </section>
    </>
  );
}

function GroupCompaniesPage() {
  return <CompanyGroupCompaniesPage />;
}
