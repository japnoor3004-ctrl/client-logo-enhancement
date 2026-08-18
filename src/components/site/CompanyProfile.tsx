import { Link } from "@tanstack/react-router";
import { useSuspenseQuery } from "@tanstack/react-query";
import {
  ArrowUpRight,
  Building2,
  Compass,
  FlaskConical,
  Mail,
  MapPin,
  Phone,
  Target,
} from "lucide-react";
import { useLang } from "@/contexts/language";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { CompanyLogo } from "@/components/site/CompanyLogo";
import { companyQuery } from "@/lib/cms/companies";
import { GROUP_COMPANIES } from "@/lib/companies";

const t = {
  overview: { en: "Overview", ar: "نظرة عامة" },
  vision: { en: "Vision", ar: "الرؤية" },
  mission: { en: "Mission", ar: "الرسالة" },
  technology: { en: "Technology & capability", ar: "التقنية والقدرات" },
  products: { en: "Products", ar: "المنتجات" },
  applications: { en: "Applications", ar: "التطبيقات" },
  leadership: { en: "Leadership", ar: "القيادة" },
  gallery: { en: "Gallery", ar: "معرض الصور" },
  contact: { en: "Contact", ar: "اتصل بنا" },
  talk: { en: "Contact the group", ar: "تواصل مع المجموعة" },
  others: { en: "Other group companies", ar: "شركات المجموعة الأخرى" },
  noProjects: {
    en: "Project references for this company are being compiled and will be published here.",
    ar: "يتم حالياً إعداد مراجع مشاريع هذه الشركة وسيتم نشرها هنا.",
  },
};

/**
 * CMS-driven company profile page.
 * Every group company can render through this single component — content,
 * media and SEO all come from the `companies` table in the CMS.
 */
export function CompanyProfile({ slug }: { slug: string }) {
  const { isArabic } = useLang();
  const { data } = useSuspenseQuery(companyQuery(slug));

  if (!data) {
    return (
      <PageHero
        eyebrow={isArabic ? "شركات المجموعة" : "Group Companies"}
        title={isArabic ? "هذه الشركة غير متاحة" : "This company is not available"}
        description={
          isArabic
            ? "لم يتم نشر محتوى هذه الشركة بعد."
            : "Content for this company has not been published yet."
        }
      />
    );
  }

  const { company, projects } = data;
  const pick = (en: string | null, ar: string | null) => (isArabic ? ar || en : en) ?? "";
  const pickList = (en: string[], ar: string[]) => (isArabic && ar.length ? ar : en);

  const name = pick(company.name_en, company.name_ar);
  const products = pickList(company.products_en, company.products_ar);
  const applications = pickList(company.applications_en, company.applications_ar);
  const leadership = pick(company.leadership_en, company.leadership_ar)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);
  const others = GROUP_COMPANIES.filter((c) => c.slug !== `/${company.slug}`).slice(0, 6);

  return (
    <CompanyLayout
      code={company.code}
      logoUrl={company.logo_url}
      name={name}
      hero={
        <PageHero
          eyebrow={pick(company.tag_en, company.tag_ar) || company.code}
          title={name}
          description={pick(company.description_en, company.description_ar)}
        />
      }
      intro={
        <>
          {pick(company.overview_en, company.overview_ar) && (
            <>
              <p className="eyebrow">{isArabic ? t.overview.ar : t.overview.en}</p>
              <p>{pick(company.overview_en, company.overview_ar)}</p>
            </>
          )}
        </>
      }
      projects={projects.map((p) => ({
        title: p.name,
        location: p.location ?? undefined,
        client: p.client ?? undefined,
        nature: p.description ?? undefined,
        duration: p.year ? String(p.year) : undefined,
      }))}
      projectsNote={isArabic ? t.noProjects.ar : t.noProjects.en}
    >
      {/* Vision & mission */}
      {(company.vision_en || company.mission_en) && (
        <section className="mx-auto max-w-[1600px] px-5 pb-16">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: Compass,
                label: isArabic ? t.vision.ar : t.vision.en,
                body: pick(company.vision_en, company.vision_ar),
              },
              {
                icon: Target,
                label: isArabic ? t.mission.ar : t.mission.en,
                body: pick(company.mission_en, company.mission_ar),
              },
            ]
              .filter((c) => c.body)
              .map((c) => (
                <div
                  key={c.label}
                  className="rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <c.icon className="size-8 text-accent" />
                  <h2 className="mt-4 text-xl">{c.label}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Technology */}
      {pick(company.technology_en, company.technology_ar) && (
        <section className="mx-auto max-w-[1600px] px-5 pb-16">
          <p className="eyebrow">{isArabic ? t.technology.ar : t.technology.en}</p>
          <p className="mt-3 max-w-4xl text-base leading-relaxed text-muted-foreground">
            {pick(company.technology_en, company.technology_ar)}
          </p>
        </section>
      )}

      {/* Products & applications */}
      {(products.length > 0 || applications.length > 0) && (
        <section className="mx-auto max-w-[1600px] px-5 pb-16">
          <div className="grid gap-5 md:grid-cols-2">
            {[
              {
                icon: FlaskConical,
                label: isArabic ? t.products.ar : t.products.en,
                items: products,
              },
              {
                icon: Building2,
                label: isArabic ? t.applications.ar : t.applications.en,
                items: applications,
              },
            ]
              .filter((b) => b.items.length > 0)
              .map((b) => (
                <div
                  key={b.label}
                  className="rounded-2xl border border-border bg-card p-7 shadow-soft"
                >
                  <b.icon className="size-7 text-accent" />
                  <h2 className="mt-4 text-lg">{b.label}</h2>
                  <ul className="mt-4 space-y-2.5">
                    {b.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </section>
      )}

      {/* Leadership */}
      {leadership.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-5 pb-16">
          <p className="eyebrow">{isArabic ? t.leadership.ar : t.leadership.en}</p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {leadership.map((line) => {
              const [person, role, bio] = line.split("|").map((s) => s.trim());
              return (
                <div key={line} className="rounded-xl border border-border bg-card p-5 shadow-soft">
                  <p className="text-sm font-bold text-primary">{person}</p>
                  {role && <p className="mt-1 text-xs text-accent-strong uppercase">{role}</p>}
                  {bio && <p className="mt-2 text-sm text-muted-foreground">{bio}</p>}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Gallery */}
      {company.gallery.length > 0 && (
        <section className="mx-auto max-w-[1600px] px-5 pb-16">
          <p className="eyebrow">{isArabic ? t.gallery.ar : t.gallery.en}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {company.gallery.map((src) => (
              <img
                key={src}
                src={src}
                alt={`${name} — ${isArabic ? t.gallery.ar : t.gallery.en}`}
                loading="lazy"
                className="h-56 w-full rounded-xl border border-border object-cover"
              />
            ))}
          </div>
        </section>
      )}

      {/* Contact + CTA */}
      <section className="mx-auto max-w-[1600px] px-5 pb-16">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-10">
          <p className="eyebrow">{isArabic ? t.contact.ar : t.contact.en}</p>
          <h2 className="mt-3 text-2xl md:text-3xl">
            {pick(company.cta_en, company.cta_ar) ||
              (isArabic ? "تحدث إلى فريقنا" : "Talk to our team")}
          </h2>
          <div className="mt-6 grid gap-3 text-sm text-muted-foreground sm:grid-cols-3">
            {company.contact_email && (
              <a
                href={`mailto:${company.contact_email}`}
                className="flex items-center gap-2 hover:text-accent"
              >
                <Mail className="size-4 text-accent" />
                {company.contact_email}
              </a>
            )}
            {company.contact_phone && (
              <a
                href={`tel:${company.contact_phone}`}
                className="flex items-center gap-2 hover:text-accent"
              >
                <Phone className="size-4 text-accent" />
                {company.contact_phone}
              </a>
            )}
            {pick(company.contact_address_en, company.contact_address_ar) && (
              <span className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                {pick(company.contact_address_en, company.contact_address_ar)}
              </span>
            )}
          </div>
          <Link
            to="/contact-us"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {isArabic ? t.talk.ar : t.talk.en}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* Other companies */}
      <section className="mx-auto max-w-[1600px] px-5 pb-20">
        <p className="eyebrow">{isArabic ? t.others.ar : t.others.en}</p>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {others.map((c) => (
            <Link
              key={c.code}
              to={c.slug}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card py-1.5 pr-4 pl-1.5 text-xs font-bold tracking-[0.12em] text-primary uppercase transition-colors hover:border-accent hover:text-accent"
            >
              <CompanyLogo code={c.code} size={28} rounded="rounded-full" />
              {c.code}
              <ArrowUpRight className="size-3.5" />
            </Link>
          ))}
        </div>
      </section>
    </CompanyLayout>
  );
}
