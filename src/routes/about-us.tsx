import { createFileRoute, Link } from "@tanstack/react-router";
import heritageImgAsset from "@/assets/hero-site.jpg.asset.json";

import { useLang } from "@/contexts/language";
import { PageHero } from "@/components/site/PageHero";
import { CompanyTimeline } from "@/components/site/CompanyTimeline";
import { LeadershipSection } from "@/components/site/LeadershipSection";
import { MissionVisionValues } from "@/components/site/MissionVisionValues";
import { IndustriesServed } from "@/components/site/IndustriesServed";
import { StatsCounters } from "@/components/site/StatsCounters";
import { CeoMessage } from "@/components/site/CeoMessage";
import { SustainabilitySection } from "@/components/site/SustainabilitySection";
import { GROUP_COMPANIES, COMPANY_COUNT, yearsOfExcellence } from "@/lib/companies";
import { CompanyLogo } from "@/components/site/CompanyLogo";
import { ShieldCheck } from "lucide-react";
import ScrollStack, { ScrollStackItem } from "@/components/site/ScrollStack";
import { ArrowRight } from "lucide-react";

const heritageImg = heritageImgAsset.url;

export const Route = createFileRoute("/about-us")({
  head: () => ({
    meta: [
      { title: "About Us | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Founded by Balaji Srinivasan, Towell Engineering Group has grown into eleven specialised engineering, construction and energy companies across Oman, the GCC and India.",
      },
      { property: "og:title", content: "About Towell Engineering Group" },
      {
        property: "og:description",
        content: "Who we are and the eleven group companies behind Towell Engineering Group.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about-us" },
    ],
    links: [{ rel: "canonical", href: "/about-us" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "من نحن" : "Who we are"}
        title={
          isArabic
            ? "مشروع فردي في 1999. مجموعة شركات متخصصة اليوم."
            : "A one-man venture in 1999. A group of specialised companies today."
        }
        description={
          isArabic
            ? "تويل للهندسة — الذراع الهندسية لمجموعة دبليو جيه تويل — هي شركة شابة وديناميكية وناجحة تضم شركات هندسية متخصصة تدار بإحترافية."
            : "Towell Engineering — the engineering arm of the W.J. Towell group — is a young, dynamic and successful business comprising specialised, professionally managed engineering companies."
        }
      />

      <section className="mx-auto max-w-6xl px-5 py-20 md:py-24">
        <div className="grid items-start gap-10 md:grid-cols-[280px_1fr]">
          <figure className="overflow-hidden rounded-2xl border border-border bg-card shadow-lift">
            <img
              src={heritageImg}
              alt={
                isArabic
                  ? "فريق توال للهندسة في أحد مواقع المشاريع"
                  : "Towell Engineering team on a project site"
              }
              width={840}
              height={630}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover"
            />

            <figcaption className="border-t border-border p-4">
              <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                {isArabic ? "صورة تاريخية للشركة" : "Historic Company Photo"}
              </p>
            </figcaption>
          </figure>

          <div>
            <p className="eyebrow">{isArabic ? "قصتنا" : "Our story"}</p>
            <div className="mt-5 space-y-5 text-base leading-relaxed text-muted-foreground">
              {isArabic ? (
                <>
                  <p>
                    تأسست كمشروع فردي على يد{" "}
                    <strong className="text-foreground">السيد بالاجي سرينيفاسان</strong> — مؤسس
                    ورئيس مجلس الإدارة التنفيذي للمجموعة والمدير العام لمجموعة تويل للهندسة — كانت
                    البداية متواضعة جداً، في غرفة واحدة في الوادي الكبير، مسقط، سلطنة عمان، للتعامل
                    مع قطع غيار التوربينات الغازية ومحركات الديزل.
                  </p>
                  <p>
                    هذا المشروع الفردي — بذرة صغيرة زرعت في عام 1999 — نما اليوم ليصبح مجموعة من
                    الشركات المتخصصة في مجالات الهندسة والبناء والمشاريع والخدمات الأخرى. رأس المال
                    المستثمر هو العمل الجاد والابتكار في النهج والفطنة التجارية والرغبة الشديدة في
                    المنافسة بين اللاعبين الراسخين في مجال المشاريع الهندسية في عمان.
                  </p>
                  <p>
                    اليوم، تعتبر هذه المجموعة الهندسية واحدة من أفضل الشركات أداءً في مجموعة تويل
                    ومن الأفضل في قطاعات عملياتها.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Founded as a one-man operation by{" "}
                    <strong className="text-foreground">Mr. Balaji Srinivasan</strong> — the
                    Founder, Group CEO & Managing Director of Towell Engineering Group — the
                    beginning was very humble, in one room at Al Wadi Al Kabir, Muscat, Sultanate of
                    Oman, dealing with gas turbine and diesel engine spare parts.
                  </p>
                  <p>
                    This one-man venture — a small seed sown in 1999 — has today grown into a
                    cluster of specialised companies in the fields of engineering, construction,
                    projects and other services. The capital invested is sheer hard work, innovation
                    in approach, business acumen and an insatiable urge to make it big among the
                    established players in the engineering project business in Oman.
                  </p>
                  <p>
                    Today, this engineering conglomerate is regarded as one of the top performing
                    companies in the Towell group and one of the best in the sectors of its
                    operations.
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <StatsCounters
        stats={[
          {
            value: yearsOfExcellence(),
            suffix: "+",
            label: isArabic ? "سنوات من التميز" : "Years of Excellence",
          },
          { value: COMPANY_COUNT, label: isArabic ? "شركات المجموعة" : "Group Companies" },
          { value: 500, suffix: "+", label: isArabic ? "مشاريع مكتملة" : "Completed Projects" },
          { value: 1000, suffix: "+", label: isArabic ? "موظف" : "Employees" },
          { value: 5, label: isArabic ? "دول" : "Countries" },
        ]}
      />

      <MissionVisionValues />
      <CeoMessage />
      <CompanyTimeline />
      <LeadershipSection />
      <IndustriesServed />
      <SustainabilitySection />

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid gap-10 rounded-2xl border border-border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:p-12">
          <div className="flex size-16 items-center justify-center rounded-xl bg-[image:var(--gradient-forest)] text-forest-foreground shadow-soft">
            <ShieldCheck className="size-8" />
          </div>
          <div>
            <p className="eyebrow">{isArabic ? "التزام الصحة والسلامة" : "HSE commitment"}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              {isArabic ? "عدم الضرر أمر غير قابل للتفاوض." : "Zero harm is non-negotiable."}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {isArabic
                ? "تتم إدارة أداء الصحة والسلامة والبيئة كمعيار للمجموعة بدلاً من ممارسة مشروع بمشروع. تعمل شركاتنا التشغيلية وفق أنظمة إدارة معتمدة — ISO 9001 و ISO 14001 و OHSAS 18001 / ISO 45001 — مع تدريب منظم وانضباط تصاريح العمل وتقارير الحوادث وتدقيق الصحة والسلامة والبيئة من العملاء في كل موقع."
                : "Health, safety and environmental performance is managed as a group standard rather than a project-by-project exercise. Our operating companies work to certified management systems — ISO 9001, ISO 14001 and OHSAS 18001 / ISO 45001 — with structured training, permit-to-work discipline, incident reporting and client HSE audits across every site."}
            </p>
            <Link
              to="/hse"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent-strong transition-colors hover:text-primary"
            >
              {isArabic ? "اقرأ نهج الصحة والسلامة ←" : "Read our HSE approach →"}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:pb-32">
        <p className="eyebrow">{isArabic ? "هيكل المجموعة" : "Group structure"}</p>
        <h2 className="mt-3 text-3xl md:text-5xl">
          {isArabic
            ? `${COMPANY_COUNT} شركة متخصصة. معيار واحد.`
            : `${COMPANY_COUNT} specialised companies. One standard.`}
        </h2>
        <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          {isArabic
            ? "كل شركة تدار بشكل مستقل بقدراتها وتصنيفاتها وشهاداتها — وتقدم تحت معيار مجموعة واحد للسلامة والجودة والتسليم في الوقت المحدد."
            : "Each company is independently managed with its own capabilities, grades and certifications — and delivers under one group standard for safety, quality and on-time performance."}
        </p>
        <ScrollStack
          useWindowScroll
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
          rotationAmount={0}
          blurAmount={0}
        >
          {GROUP_COMPANIES.map((c) => (
            <ScrollStackItem key={c.code}>
              <Link
                to={c.slug}
                className="group mx-auto flex min-h-[10rem] w-full max-w-4xl items-center gap-6 rounded-3xl border border-[#97CB46]/10 bg-white px-8 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#97CB46]/30 hover:shadow-[0_0_60px_rgba(151,203,70,0.25),0_0_100px_rgba(151,203,70,0.1)] md:py-8 md:px-12"
                style={{
                  boxShadow: "0 0 40px rgba(151, 203, 70, 0.12), 0 0 80px rgba(151, 203, 70, 0.05)",
                }}
              >
                <CompanyLogo code={c.code} size={80} />

                <div className="flex-1">
                  <h3
                    style={{ color: "#0F1A2E" }}
                    className="font-display text-2xl font-bold md:text-3xl"
                  >
                    {c.code}
                  </h3>
                  <p style={{ color: "#97CB46" }} className="mt-1 text-sm font-medium md:text-base">
                    {isArabic ? c.tag.ar : c.tag.en}
                  </p>
                  <p
                    style={{ color: "#4B5563" }}
                    className="mt-3 max-w-2xl text-xs leading-relaxed md:text-sm"
                  >
                    {isArabic ? c.description.ar : c.description.en}
                  </p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-gray-400" />
              </Link>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </section>
    </>
  );
}
