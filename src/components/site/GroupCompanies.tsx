import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { GROUP_COMPANIES, COMPANY_COUNT } from "@/lib/companies";
import { CompanyLogo } from "./CompanyLogo";
import { useLang } from "@/contexts/language";
import SplitText from "./SplitText";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const companies = GROUP_COMPANIES;

const t = {
  groupCompanies: { en: "Group Companies", ar: "شركات المجموعة" },
  title: {
    en: `${COMPANY_COUNT} specialised companies. One engineering group.`,
    ar: `${COMPANY_COUNT} شركة متخصصة. مجموعة هندسية واحدة.`,
  },
  desc: {
    en: "Each company operates independently with its own capabilities and certifications, yet delivers together under a single group standard for safety, quality and on-time performance.",
    ar: "تعمل كل شركة بشكل مستقل بإمكانياتها وشهاداتها الخاصة، لكنها تقدم معاً وفق معيار واحد للمجموعة يشمل السلامة وجودة الأداء والالتزام بالمواعيد.",
  },
  visit: { en: "Visit", ar: "زيارة" },
};

export function GroupCompanies() {
  const { isArabic } = useLang();
  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{isArabic ? t.groupCompanies.ar : t.groupCompanies.en}</p>
            <SplitText
              tag="h2"
              text={isArabic ? t.title.ar : t.title.en}
              className="mt-3 max-w-2xl text-3xl md:text-5xl"
              textAlign="left"
              delay={35}
              duration={0.85}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {isArabic ? t.desc.ar : t.desc.en}
          </p>
        </div>

        <ScrollStack>
          {companies.map((c) => (
            <ScrollStackItem key={c.code}>
              <Link
                to={c.slug}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                <span
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full bg-[image:var(--gradient-leaf-soft)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
                <div className="relative flex items-start justify-between">
                  <CompanyLogo
                    code={c.code}
                    size={64}
                    rounded="rounded-xl"
                    className="shadow-soft"
                  />

                  <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-[image:var(--gradient-leaf-soft)] px-3 py-1 text-[11px] font-semibold tracking-wide text-accent-strong uppercase">
                    {isArabic ? c.tag.ar : c.tag.en}
                  </span>
                </div>
                <SplitText
                  tag="h3"
                  text={isArabic ? c.name.ar : c.name.en}
                  className="relative mt-8 text-xl leading-tight text-primary"
                  textAlign="left"
                  delay={20}
                  duration={0.6}
                  from={{ opacity: 0, y: 15 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.15}
                />
                <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                  {isArabic ? c.description.ar : c.description.en}
                </p>
                <span className="relative mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition-colors group-hover:text-primary">
                  {isArabic ? t.visit.ar : t.visit.en} {c.code}
                  <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
