import { createFileRoute } from "@tanstack/react-router";
import { useLang } from "@/contexts/language";
import { PageHero } from "@/components/site/PageHero";
import { ContactForm } from "@/components/site/ContactForm";
import {
  Mail,
  Phone,
  Printer,
  MapPin,
  Clock,
  Briefcase,
  HardHat,
  Newspaper,
  ShoppingBag,
  Users,
  Building2,
} from "lucide-react";

export const Route = createFileRoute("/contact-us")({
  head: () => ({
    meta: [
      { title: "Contact Us | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Contact Towell Engineering Group — registered office in Azaiba, Muscat, Sultanate of Oman, with regional offices in Dubai, UAE and Lusail City, Qatar.",
      },
      { property: "og:title", content: "Contact Towell Engineering Group" },
      {
        property: "og:description",
        content:
          "Offices in Oman, UAE and Qatar. Reach the right department directly, or send us a message.",
      },
      { property: "og:url", content: "/contact-us" },
    ],
    links: [{ rel: "canonical", href: "/contact-us" }],
  }),
  component: ContactPage,
});

const offices = [
  {
    country: "Oman",
    country_ar: "عمان",
    role: "Group headquarters",
    role_ar: "المقر الرئيسي للمجموعة",
    address: "Towell Engineering Group, P.O. Box 1667, P.C. 131, Azaiba, Muscat, Sultanate of Oman",
    address_ar: "مجموعة تويل للهندسة، ص.ب 1667، ر.ب 131، العذيبة، مسقط، سلطنة عمان",
    phone: "+968 2452 6083 / 84",
    fax: "+968 2452 6423",
    email: "teg@towellengineering.com",
    hours: { en: "Sun – Thu · 08:00 – 17:00 (GMT+4)", ar: "الأحد – الخميس · 08:00 – 17:00" },
    tel: "+96824526083",
  },
  {
    country: "UAE",
    country_ar: "الإمارات",
    role: "Regional office",
    role_ar: "المكتب الإقليمي",
    address: "P.O. Box 2107, Dubai, United Arab Emirates",
    address_ar: "ص.ب 2107، دبي، الإمارات العربية المتحدة",
    phone: "+971 4 265 0057",
    email: "enquiries@towellengineering.com",
    hours: { en: "Sun – Thu · 09:00 – 18:00 (GMT+4)", ar: "الأحد – الخميس · 09:00 – 18:00" },
    tel: "+97142650057",
  },
  {
    country: "Qatar",
    country_ar: "قطر",
    role: "Regional office",
    role_ar: "المكتب الإقليمي",
    address: "P.O. Box 23107, Lusail City, Doha, State of Qatar",
    address_ar: "ص.ب 23107، مدينة لوسيل، الدوحة، دولة قطر",
    phone: "+974 4445 9101",
    email: "enquiries@towellengineering.com",
    hours: { en: "Sun – Thu · 08:00 – 17:00 (GMT+3)", ar: "الأحد – الخميس · 08:00 – 17:00" },
    tel: "+97444459101",
  },
];

const departments = [
  {
    icon: Briefcase,
    name_en: "General enquiries",
    name_ar: "الاستفسارات العامة",
    email: "teg@towellengineering.com",
    text_en: "Corporate and information requests.",
    text_ar: "الاستفسارات المؤسسية والمعلومات.",
  },
  {
    icon: HardHat,
    name_en: "Projects & tenders",
    name_ar: "المشاريع والمناقصات",
    email: "tenders@towellengineering.com",
    text_en: "Bids, tenders and pre-qualification.",
    text_ar: "العطاءات والمناقصات والتأهيل المسبق.",
  },
  {
    icon: Users,
    name_en: "HR & recruitment",
    name_ar: "الموارد البشرية والتوظيف",
    email: "teg-recruitments@towellengineering.com",
    text_en: "Careers and recruitment.",
    text_ar: "الوظائف والتوظيف.",
  },
  {
    icon: ShoppingBag,
    name_en: "Procurement & vendors",
    name_ar: "المشتريات والموردين",
    email: "vendors@towellengineering.com",
    text_en: "Supplier registration and purchase.",
    text_ar: "تسجيل الموردين والمشتريات.",
  },
  {
    icon: Newspaper,
    name_en: "Media & press",
    name_ar: "الإعلام والصحافة",
    email: "media@towellengineering.com",
    text_en: "Press releases and media enquiries.",
    text_ar: "البيانات الصحفية والاستفسارات الإعلامية.",
  },
  {
    icon: Building2,
    name_en: "Regional (UAE / Qatar)",
    name_ar: "الإقليمي (الإمارات / قطر)",
    email: "enquiries@towellengineering.com",
    text_en: "GCC regional office enquiries.",
    text_ar: "استفسارات المكاتب الإقليمية في الخليج.",
  },
];

const mapSrc =
  "https://www.google.com/maps?q=Towell+Engineering+Group+Azaiba+Muscat+Oman&hl=en&z=15&output=embed";
const directionsHref =
  "https://www.google.com/maps/search/?api=1&query=Towell+Engineering+Group+Azaiba+Muscat+Oman&hl=en";

function ContactPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "اتصل بنا" : "Contact Us"}
        title={isArabic ? "دعنا نتحدث عن مشروعك القادم" : "Let's talk about your next project"}
        description={
          isArabic
            ? "تواصل مع الفريق المناسب مباشرة، أو زر مكاتبنا في عمان أو الإمارات أو قطر — أو أرسل لنا رسالة وسنرد."
            : "Reach the right team directly, visit our offices in Oman, the UAE or Qatar — or send us a message and we'll respond."
        }
      />

      <section className="mx-auto max-w-[1600px] px-5 py-14 md:py-16">
        <div className="grid gap-4 md:grid-cols-3">
          <a
            href="tel:+96824526083"
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
              <Phone className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {isArabic ? "اتصل بنا" : "Call us"}
              </p>
              <p className="mt-1 font-display text-base font-bold text-primary">+968 2452 6083</p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {isArabic ? "المقر الرئيسي، مسقط" : "Group HQ, Muscat"}
              </p>
            </div>
          </a>
          <a
            href="mailto:teg@towellengineering.com"
            className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
              <Mail className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {isArabic ? "راسلنا" : "Email us"}
              </p>
              <p className="mt-1 font-display text-base font-bold text-primary">
                teg@towellengineering.com
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {isArabic ? "الرد خلال يوم عمل واحد" : "Response within 1 business day"}
              </p>
            </div>
          </a>
          <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
              <Clock className="size-5" aria-hidden />
            </span>
            <div>
              <p className="text-xs tracking-[0.18em] text-muted-foreground uppercase">
                {isArabic ? "ساعات العمل" : "Hours"}
              </p>
              <p className="mt-1 font-display text-base font-bold text-primary">
                {isArabic ? "الأحد – الخميس · 08:00 – 17:00" : "Sun – Thu · 08:00 – 17:00"}
              </p>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {isArabic ? "الجمعة – السبت إجازة" : "Fri – Sat closed"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/40 py-14 md:py-20">
        <div className="mx-auto max-w-[1600px] px-5">
          <p className="eyebrow">{isArabic ? "الأقسام" : "Departments"}</p>
          <h2 className="mt-3 text-3xl md:text-4xl">
            {isArabic ? "تواصل مع الفريق المناسب مباشرة" : "Reach the right team directly"}
          </h2>
          <span className="mt-5 block h-1 w-16 rounded-full bg-[image:var(--gradient-leaf)]" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map((d) => {
              const Icon = d.icon;
              return (
                <li
                  key={d.name_en}
                  className="rounded-2xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
                      <Icon className="size-5" aria-hidden />
                    </span>
                    <div className="min-w-0">
                      <p className="font-display text-base font-bold text-primary">
                        {isArabic ? d.name_ar : d.name_en}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {isArabic ? d.text_ar : d.text_en}
                      </p>
                      <a
                        href={`mailto:${d.email}`}
                        className="mt-3 inline-block truncate text-sm font-bold text-accent-strong underline underline-offset-4"
                      >
                        {d.email}
                      </a>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <p className="eyebrow">{isArabic ? "مكاتبنا" : "Our offices"}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              {isArabic ? "أين تجدنا" : "Where to find us"}
            </h2>
            <ul className="mt-8 space-y-4">
              {offices.map((o) => (
                <li
                  key={o.country}
                  className="rounded-2xl border border-border bg-card p-6 shadow-soft"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-primary">
                      {isArabic ? o.country_ar : o.country}
                    </h3>
                    <span className="text-[10px] font-bold tracking-[0.18em] text-accent-strong uppercase">
                      {isArabic ? o.role_ar : o.role}
                    </span>
                  </div>
                  <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    <li className="flex gap-3">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      <span>{isArabic ? o.address_ar : o.address}</span>
                    </li>
                    <li className="flex gap-3">
                      <Phone className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      <a href={`tel:${o.tel}`} className="hover:text-primary">
                        {o.phone}
                      </a>
                    </li>
                    {o.fax && (
                      <li className="flex gap-3">
                        <Printer className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                        <span>{o.fax}</span>
                      </li>
                    )}
                    <li className="flex gap-3">
                      <Mail className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      <a href={`mailto:${o.email}`} className="hover:text-primary">
                        {o.email}
                      </a>
                    </li>
                    <li className="flex gap-3">
                      <Clock className="mt-0.5 size-4 shrink-0 text-accent-strong" />
                      <span>{isArabic ? o.hours.ar : o.hours.en}</span>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-8">
            <ContactForm />
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <div className="flex items-center justify-between gap-3 border-b border-border p-4">
                <div className="flex items-center gap-2">
                  <MapPin className="size-4 text-accent-strong" />
                  <p className="font-display text-sm font-bold text-primary">
                    {isArabic ? "المقر الرئيسي · العذيبة، مسقط" : "Group HQ · Azaiba, Muscat"}
                  </p>
                </div>
                <a
                  href={directionsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-bold text-accent-strong underline underline-offset-4"
                >
                  {isArabic ? "فتح في الخرائط ↗" : "Open in maps ↗"}
                </a>
              </div>
              <iframe
                title="Towell Engineering Group HQ location, Azaiba, Muscat"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[360px] w-full border-0"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
