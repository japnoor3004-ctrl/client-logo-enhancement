import { createFileRoute, Link } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { getHomeData } from "@/lib/cms/public.functions";
import { StatsCounters, type CounterStat } from "@/components/site/StatsCounters";
import { CompaniesScrollStackCondensed } from "@/components/site/CompaniesScrollStack";
import { COMPANY_COUNT, yearsOfExcellence } from "@/lib/companies";
import { IndustriesServed } from "@/components/site/IndustriesServed";
import { CertificationsSection } from "@/components/site/CertificationsSection";
import { ClientLogosCarousel } from "@/components/site/ClientLogosCarousel";
import { TestimonialsSection } from "@/components/site/TestimonialsSection";
import { Highlights } from "@/components/site/Highlights";
import { CorporateAv } from "@/components/site/CorporateAv";

import {
  ArrowRight,
  Leaf,
  ShieldCheck,
  Clock,
  Recycle,
  Quote,
  Star,
  Building2,
} from "lucide-react";
import { useLang, type TranslationSet } from "@/contexts/language";
import SplitText from "@/components/site/SplitText";

// Hero background uses GridMotion with the bundled project photography.

import heroSite__ptr from "@/assets/hero-site.jpg.asset.json";
const heroSite = heroSite__ptr.url;
import construction__ptr from "@/assets/construction.jpg.asset.json";
const construction = construction__ptr.url;
import refinery__ptr from "@/assets/refinery.jpg.asset.json";
const refinery = refinery__ptr.url;
import fabrication__ptr from "@/assets/fabrication.jpg.asset.json";
const fabrication = fabrication__ptr.url;
import fabrication2__ptr from "@/assets/fabrication2.jpg.asset.json";
const fabrication2 = fabrication2__ptr.url;
import pipeline__ptr from "@/assets/pipeline.jpg.asset.json";
const pipeline = pipeline__ptr.url;
import electrical__ptr from "@/assets/electrical.jpg.asset.json";
const electrical = electrical__ptr.url;
import waterPlant__ptr from "@/assets/water-plant.jpg.asset.json";
const waterPlant = waterPlant__ptr.url;

import GridMotion from "@/components/site/GridMotion";
import DotField from "@/components/site/DotField";
import { StatStrip } from "@/components/site/StatStrip";

// ─── GridMotion hero tiles ───
// Real Towell project photography (bundled assets, hashed + cached by Vite).
// No placeholder services, no remote requests, no text baked into the images.
const HERO_TILES = [
  heroSite,
  construction,
  refinery,
  fabrication,
  pipeline,
  electrical,
  waterPlant,
  fabrication2,
] as const;

/** 28 slots for the 4×7 grid, cycled through the real photo set. */
const GRID_MOTION_ITEMS = Array.from(
  { length: 28 },
  (_, i) => HERO_TILES[i % HERO_TILES.length]!,
) as readonly string[];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Towell Engineering Group | Quality Projects. Delivered. On Time." },
      {
        name: "description",
        content:
          "Towell Engineering Group is an Oman-based conglomerate of eleven engineering, construction, oil & gas and water companies delivering sustainable projects across the GCC.",
      },
      { property: "og:title", content: "Towell Engineering Group | Quality Projects On Time" },
      {
        property: "og:description",
        content: `${COMPANY_COUNT} specialised engineering, construction, energy and biochemical companies building a greener Oman and GCC.`,
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "preload",
        as: "image",
        href: "#gridmotion-placeholder",
        fetchPriority: "high",
      } as unknown as {
        rel: string;
        as: string;
        href: string;
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Towell Engineering Group",
          alternateName: "TEG",
          url: "https://towellengineering.net",
          logo: "https://towellengineering.net/favicon.ico",
          foundingDate: "2001",
          address: {
            "@type": "PostalAddress",
            streetAddress: "P.O. Box 1667, P.C. 131, Azaiba",
            addressCountry: "OM",
            addressLocality: "Muscat",
          },
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: "+968-2452-6083",
              contactType: "customer service",
              email: "teg@towellengineering.com",
              areaServed: ["OM", "AE", "QA", "KW", "SA", "IN"],
              availableLanguage: ["English", "Arabic"],
            },
          ],
          sameAs: [],
        }),
      },
    ],
  }),
  component: Index,
});

const fallbackStats: CounterStat[] = [
  { value: yearsOfExcellence(), suffix: "+", label: "Years of Excellence" },
  { value: COMPANY_COUNT, label: "Group Companies" },
  { value: 500, suffix: "+", label: "Projects Delivered" },
  { value: 1000, suffix: "+", label: "Employees" },
  { value: 5, label: "Countries" },
];

const pillars: {
  icon: React.ElementType;
  title: TranslationSet;
  text: TranslationSet;
  key: string;
}[] = [
  {
    icon: Leaf,
    key: "green",
    title: { en: "Green Environment", ar: "البيئة الخضراء" },
    text: {
      en: "Low-carbon methods, renewable-feedstock chemistry through NXTLEVVEL Biochem, and water reuse at the heart of every design.",
      ar: "أساليب منخفضة الكربون، ومواد كيميائية متجددة من NXTLEVVEL Biochem، وإعادة استخدام المياه في صميم كل تصميم.",
    },
  },
  {
    icon: ShieldCheck,
    key: "hse",
    title: { en: "HSE First", ar: "الصحة والسلامة أولاً" },
    text: {
      en: "Integrated quality, health, safety and environment management across all operations, with certified systems covering every site.",
      ar: "إدارة متكاملة للجودة والصحة والسلامة والبيئة عبر جميع العمليات، مع أنظمة معتمدة تغطي كل موقع.",
    },
  },
  {
    icon: Clock,
    key: "ontime",
    title: { en: "On-Time Delivery", ar: "التسليم في الوقت المحدد" },
    text: {
      en: "Numerous projects completed ahead of programme, safely and without compromise — the standing testimony of our teams.",
      ar: "مشاريع كثيرة تم تسليمها قبل الموعد المحدد بأمان وبدون تنازل — شهادة دائمة على جهود فرقنا.",
    },
  },
  {
    icon: Recycle,
    key: "growth",
    title: { en: "Responsible Growth", ar: "النمو المسؤول" },
    text: {
      en: "Ethical growth, honesty and integrity: the founding principles that built trusted, long-lasting relationships in our industry.",
      ar: "النمو الأخلاقي والصدق والنزاهة: المبادئ التأسيسية التي بنت علاقات طويلة الأمد في صناعتنا.",
    },
  },
];

function Index() {
  const { lang, isArabic } = useLang();
  const home = useQuery({ queryKey: ["home"], queryFn: () => getHomeData() });
  const statItems: CounterStat[] =
    (home.data?.stats.length ?? 0) > 0
      ? (home.data?.stats ?? [])
          .map<CounterStat>((s) => ({
            value: Number(String(s.value).replace(/[^0-9.]/g, "")) || 0,
            suffix: s.suffix ?? "",
            label: s.label,
          }))
          // The strip is a five-up grid: top up from the defaults when the CMS
          // supplies fewer, and never render more than five cards.
          .concat(
            fallbackStats.filter(
              (f) => !(home.data?.stats ?? []).some((s) => s.label === f.label),
            ) as CounterStat[],
          )
          .slice(0, 5)
      : fallbackStats;
  const logos = home.data?.logos ?? [];

  return (
    <>
      <section className="relative isolate overflow-hidden" style={{ minHeight: "100vh" }}>
        {/* Layer 1: GridMotion background — z-index: 0, pointer-events: none so clicks pass through */}
        <div className="absolute inset-0" style={{ zIndex: 0, pointerEvents: "none" }}>
          <GridMotion
            items={GRID_MOTION_ITEMS as unknown as (string | React.ReactElement)[]}
            gradientColor="#0f192b"
          />
        </div>
        {/* Layer 2: Dark scrim — left side darker (text sits here), right side lighter */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: 1,
            background:
              "linear-gradient(to right, rgba(10,14,20,0.88) 0%, rgba(10,14,20,0.75) 40%, rgba(10,14,20,0.5) 100%)",
          }}
        />
        {/* Layer 3: Text content — highest z-index */}
        <div className="relative mx-auto max-w-[1600px] px-5 py-28 md:py-44" style={{ zIndex: 2 }}>
          <p
            className="animate-fade-in-up text-xs font-bold tracking-[0.28em] text-[#7cb342] uppercase"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.7)" }}
          >
            {isArabic ? "سلطنة عمان · مجلس التعاون · الهند" : "Sultanate of Oman · GCC · India"}
          </p>
          <div className="mt-6">
            <SplitText
              tag="h1"
              text={isArabic ? "هندسة مستقبل عمان." : "Engineering Oman's Future."}
              className="max-w-4xl text-5xl leading-[1.03] text-white md:text-8xl"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
              textAlign="left"
              delay={40}
              duration={0.7}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.05}
              rootMargin="0px"
            />
            <SplitText
              tag="h1"
              text={isArabic ? "في الوقت المحدد." : "Delivered On Time."}
              className="max-w-4xl text-5xl leading-[1.03] text-[#7cb342] md:text-8xl"
              style={{ textShadow: "0 4px 24px rgba(0,0,0,0.7), 0 1px 3px rgba(0,0,0,0.9)" }}
              textAlign="left"
              delay={40}
              duration={0.7}
              ease="power3.out"
              splitType="chars"
              from={{ opacity: 0, y: 50 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.05}
              rootMargin="0px"
            />
          </div>
          <p
            className="animate-fade-in-up mt-7 max-w-2xl text-base text-white/95 md:text-lg"
            style={{ animationDelay: "300ms", textShadow: "0 2px 16px rgba(0,0,0,0.7)" }}
          >
            {isArabic
              ? "تويل للهندسة هي مجموعة عمانية رائدة تضم إحدى عشر شركة متخصصة في الهندسة والبناء والنفط والمياه — تبني بنية تحتية مرنة في جميع أنحاء مجلس التعاون الخليجي مع التزام لا يتزعزع بالسلامة والجودة والبيئة الخضراء."
              : "Towell Engineering Group is a leading Omani conglomerate of eleven specialised engineering, construction, oil & gas and water companies — building resilient infrastructure across the GCC with an uncompromising commitment to safety, quality and a greener environment."}
          </p>
          <div
            className="animate-fade-in-up mt-10 flex flex-wrap gap-4"
            style={{ animationDelay: "450ms" }}
          >
            <Link to="/group-companies" className="btn-primary">
              {isArabic ? "شركاتنا" : "Our Group Companies"} <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact-us"
              className="inline-flex items-center justify-center gap-2 rounded-[var(--radius)] border-2 border-white/60 bg-transparent px-6 py-3 text-sm font-semibold text-white transition-colors duration-250 hover:border-[#7cb342] hover:bg-[#7cb342] hover:text-white"
            >
              {isArabic ? "تحدث معنا" : "Talk to us"}
            </Link>
          </div>
        </div>
      </section>

      <div className="animate-fade-in-up">
        <StatsCounters stats={statItems} />
      </div>

      <div
        className="animate-fade-in-up content-visibility-auto"
        style={{ animationDelay: "100ms" }}
      >
        <CompaniesScrollStackCondensed />
      </div>

      <div
        className="animate-fade-in-up content-visibility-auto"
        style={{ animationDelay: "200ms" }}
      >
        <IndustriesServed />
      </div>

      <div
        className="animate-fade-in-up content-visibility-auto"
        style={{ animationDelay: "300ms" }}
      >
        <CertificationsSection />
      </div>

      <div className="animate-fade-in-up" style={{ animationDelay: "400ms" }}>
        <ClientLogosCarousel logos={logos} />
      </div>

      <CorporateAv />

      <TestimonialsSection />

      {/* Why Towell section */}
      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">{isArabic ? "لماذا تويل" : "Why Towell"}</p>
            <SplitText
              tag="h2"
              text={
                isArabic
                  ? "معايير تجعلنا الخيار الأول."
                  : "Standards that make us the first choice."
              }
              className="mt-3 text-3xl md:text-5xl"
              textAlign="left"
              delay={35}
              duration={0.85}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          </div>
          <div>
            <Highlights />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-28">
        <div className="animate-fade-in-up">
          <p className="eyebrow">
            {isArabic
              ? "هندسة تترك البيئة أفضل مما وجدناها"
              : "Engineering that leaves the environment better than we found it"}
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl md:text-5xl">
            {isArabic
              ? "مبني على مبادئ تصمد أمام اختبار الزمن"
              : "Built on principles that stand the test of time"}
          </h2>
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <article
              key={p.key}
              className="animate-fade-in-up rounded-2xl border border-border border-t-2 border-t-accent bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <span className="surface-leaf flex size-12 items-center justify-center rounded-xl ring-1 ring-accent/30">
                <p.icon className="size-5 text-accent-strong" />
              </span>
              <h3 className="mt-6 text-lg text-primary">{p.title[lang]}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text[lang]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0F1A2E]">
        <div className="absolute inset-0">
          <DotField
            dotRadius={1}
            dotSpacing={18}
            bulgeStrength={30}
            glowRadius={100}
            gradientFrom="rgba(15, 26, 46, 0.3)"
            gradientTo="rgba(26, 45, 74, 0.2)"
            glowColor="#97CB46"
            style={{ position: "absolute", inset: 0 }}
          />
        </div>
        <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:py-24">
          <div className="animate-fade-in-up">
            <p className="eyebrow text-white/60">{isArabic ? "تنبيه" : "Notice"}</p>
            <h2 className="mt-3 text-3xl text-forest-foreground md:text-4xl">
              {isArabic ? "عروض توظيف احتيالية" : "Fraud recruitment offers"}
            </h2>
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          </div>
          <div className="mt-10 animate-fade-in-up" style={{ animationDelay: "150ms" }}>
            {isArabic ? (
              <>
                <p className="max-w-3xl text-sm leading-relaxed text-forest-foreground/80">
                  تعلن مجموعة تويل للهندسة للجمهور بأن عروض عمل وهمية يتم تداولها نيابة عن شركات
                  المجموعة من قبل أشخاص غير أخلاقيين ينتحلون صفة موظفين أو ممثلين أو وكلاء. يطلبون
                  تقديم طلبات تتطلب من المرشحين إيداع رسوم أو عمولات في حسابات بنكية، ويستخدمون
                  اسمنا وعلامتنا التجارية ونطاقنا وشعارنا دون إذن.
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-forest-foreground/80">
                  نحن لا نرسل عروض عمل من خدمات البريد الإلكتروني المجانية ولا نطلب أبداً الدفع من
                  المرشحين المحتملين. يتم التوظيف فقط من خلال قسم الموارد البشرية لدينا ووكالات
                  التوظيف المهنية التي لا تتقاضى أي رسوم. يرجى التحقق من أي مقابلة مع{" "}
                  <a
                    className="font-medium underline underline-offset-4 decoration-accent text-accent-strong"
                    href="mailto:teg-recruitments@towellengineering.com"
                  >
                    teg-recruitments@towellengineering.com
                  </a>
                  .
                </p>
              </>
            ) : (
              <>
                <p className="max-w-3xl text-sm leading-relaxed text-forest-foreground/80">
                  Towell Engineering Group hereby notifies the public that fake job offers are being
                  circulated on behalf of Towell Engineering Group companies by unscrupulous persons
                  posing as employees, representatives or agents. They solicit applications
                  requiring candidates to deposit fees or commission in bank accounts, and use our
                  name, trademark, domain name and logo without authorisation.
                </p>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-forest-foreground/80">
                  We do not send job offers from free email services and never request payment from
                  prospective candidates. Recruitment is done only through our own HR Department and
                  professional agencies who do not charge any fee. Please verify any interview call
                  with{" "}
                  <a
                    className="font-medium underline underline-offset-4 decoration-accent text-accent-strong"
                    href="mailto:teg-recruitments@towellengineering.com"
                  >
                    teg-recruitments@towellengineering.com
                  </a>
                  .
                </p>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
