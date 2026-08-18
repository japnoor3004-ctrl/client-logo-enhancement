import { useLang } from "@/contexts/language";
import { Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { Award, BadgeCheck, ShieldCheck, Leaf, HardHat, ArrowRight } from "lucide-react";
import { listCertificates } from "@/lib/cms/public.functions";
import SplitText from "./SplitText";

const standards = [
  {
    code: "ISO 9001",
    title_en: "Quality Management",
    title_ar: "إدارة الجودة",
    description_en:
      "Certified quality management systems across engineering, procurement and construction.",
    description_ar: "أنظمة إدارة جودة معتمدة عبر الهندسة والمشتريات والبناء.",
    icon: BadgeCheck,
  },
  {
    code: "ISO 45001",
    title_en: "Occupational Health & Safety",
    title_ar: "الصحة والسلامة المهنية",
    description_en: "Occupational H&S systems ensuring safe execution on every project site.",
    description_ar: "أنظمة الصحة والسلامة المهنية تضمن التنفيذ الآمن في كل موقع مشروع.",
    icon: ShieldCheck,
  },
  {
    code: "ISO 14001",
    title_en: "Environmental Management",
    title_ar: "الإدارة البيئية",
    description_en: "Environmental stewardship built into design, procurement and site operations.",
    description_ar: "الإشراف البيئي المدمج في التصميم والمشتريات وعمليات الموقع.",
    icon: Leaf,
  },
  {
    code: "ASME · API",
    title_en: "Pressure & Piping Codes",
    title_ar: "معايير الضغط والأنابيب",
    description_en:
      "Third-party approvals for pressure equipment, piping and structural steel fabrication.",
    description_ar: "موافقات خارجية لمعدات الضغط والأنابيب وتصنيع الحديد الهيكلي.",
    icon: HardHat,
  },
];

export function CertificationsSection() {
  const { isArabic } = useLang();
  const query = useQuery({
    queryKey: ["certificates", "featured"],
    queryFn: () => listCertificates(),
    staleTime: 5 * 60_000,
  });

  const featured = (query.data ?? []).slice(0, 6);

  return (
    <section
      aria-labelledby="certifications-heading"
      className="border-y border-border bg-secondary/40 py-24 md:py-28"
    >
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="eyebrow">
              {isArabic ? "الشهادات المهنية" : "Professional certifications"}
            </p>
            <SplitText
              tag="h2"
              text={
                isArabic ? "معتمد وفق المعايير الدولية" : "Accredited to international standards"
              }
              id="certifications-heading"
              className="mt-3 text-3xl md:text-5xl"
              textAlign="left"
              delay={35}
              duration={0.85}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
              {isArabic
                ? "الاعتمادات الخارجية المستقلة تدعم التزامات الجودة والسلامة والبيئة التي نقدمها لكل عميل في جميع أنحاء المجموعة."
                : "Independent, third-party accreditations underpin the quality, safety and environmental commitments we make to every client across the group."}
            </p>
          </div>
          <Link
            to="/certificates"
            className="inline-flex w-fit items-center gap-2 rounded-md border border-primary/30 bg-background px-5 py-2.5 text-sm font-semibold text-primary transition-colors hover:border-accent hover:text-accent-strong"
          >
            {isArabic ? "عرض جميع الشهادات" : "View all certifications"}{" "}
            <ArrowRight className="size-4" />
          </Link>
        </div>

        {/* Standards grid */}
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {standards.map((s) => (
            <li
              key={s.code}
              className="rounded-2xl border border-border border-t-2 border-t-primary bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
            >
              <span className="surface-leaf flex size-11 items-center justify-center rounded-xl ring-1 ring-accent/30">
                <s.icon className="size-5 text-accent-strong" aria-hidden />
              </span>
              <p className="mt-5 text-[11px] font-bold tracking-[0.18em] text-accent-strong uppercase">
                {s.code}
              </p>
              <SplitText
                tag="h3"
                text={isArabic ? s.title_ar : s.title_en}
                className="mt-1 text-base font-bold text-primary"
                textAlign="left"
                delay={20}
                duration={0.6}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
              />
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {isArabic ? s.description_ar : s.description_en}
              </p>
            </li>
          ))}
        </ul>

        {/* Live certificates from CMS, when available */}
        {featured.length > 0 && (
          <>
            <div className="mt-16 flex items-center gap-3">
              <span className="h-px flex-1 bg-border" />
              <p className="text-[11px] font-bold tracking-[0.18em] text-muted-foreground uppercase">
                {isArabic ? "صدر مؤخراً" : "Recently issued"}
              </p>
              <span className="h-px flex-1 bg-border" />
            </div>
            <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((c) => (
                <li key={c.id}>
                  <Link
                    to="/certificates"
                    className="group flex h-full items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-soft"
                  >
                    <div className="flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-secondary">
                      {c.preview_image ? (
                        <img
                          src={c.preview_image}
                          alt=""
                          loading="lazy"
                          className="size-full object-contain p-1.5"
                        />
                      ) : (
                        <Award className="size-6 text-primary" aria-hidden />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      {c.category && (
                        <p className="text-[10px] font-bold tracking-[0.16em] text-accent-strong uppercase">
                          {c.category}
                        </p>
                      )}
                      <p className="mt-0.5 truncate text-sm font-semibold text-primary group-hover:text-accent-strong">
                        {c.name}
                      </p>
                      {c.issue_date && (
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          {isArabic ? `صدر في ${c.issue_date}` : `Issued ${c.issue_date}`}
                        </p>
                      )}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
}
