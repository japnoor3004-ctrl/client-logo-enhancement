import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { useLang } from "@/contexts/language";
import { PageHero } from "@/components/site/PageHero";
import { ContentPlaceholder } from "@/components/site/ContentPlaceholder";

import teamImg__ptr from "@/assets/mudhaibi-team.jpg.asset.json";
const teamImg = teamImg__ptr.url;
import careersImg__ptr from "@/assets/careers.jpg.asset.json";
const careersImg = careersImg__ptr.url;
import hse1__ptr from "@/assets/hse/hse-1.jpg.asset.json";
const hse1 = hse1__ptr.url;
import hse4__ptr from "@/assets/hse/hse-4.jpg.asset.json";
const hse4 = hse4__ptr.url;
import hse7__ptr from "@/assets/hse/hse-7.jpg.asset.json";
const hse7 = hse7__ptr.url;
import hse11__ptr from "@/assets/hse/hse-11.jpg.asset.json";
const hse11 = hse11__ptr.url;

export const Route = createFileRoute("/people-at-teg")({
  head: () => ({
    meta: [
      { title: "People at TEG | Towell Engineering Group" },
      {
        name: "description",
        content:
          "The people and culture behind Towell Engineering Group — our teams, engagement, training and professional development across Oman, the GCC and India.",
      },
      { property: "og:title", content: "People at TEG | Towell Engineering Group" },
      {
        property: "og:description",
        content: "The people, teams and culture behind Towell Engineering Group.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/people-at-teg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/people-at-teg" }],
  }),
  component: PeoplePage,
});

const gallery = [
  { src: teamImg, en: "Project team on site", ar: "فريق المشروع في الموقع" },
  { src: hse1, en: "Site teams at work", ar: "فرق العمل في الموقع" },
  { src: hse4, en: "Toolbox briefing", ar: "اجتماع السلامة اليومي" },
  { src: careersImg, en: "Working at Towell Engineering", ar: "العمل في تويل للهندسة" },
  { src: hse7, en: "Field crew", ar: "طاقم الموقع" },
  { src: hse11, en: "On-site collaboration", ar: "التعاون في الموقع" },
];

function PeoplePage() {
  const { isArabic } = useLang();

  const blocks = [
    {
      key: "engagement",
      title: isArabic ? "مشاركة الموظفين" : "Employee engagement",
      lead: isArabic
        ? "الأنشطة والمبادرات التي تجمع فرقنا عبر الشركات والمواقع."
        : "The activities and forums that bring our teams together across companies and sites.",
    },
    {
      key: "training",
      title: isArabic ? "التدريب والتطوير المهني" : "Training & professional development",
      lead: isArabic
        ? "برامج التدريب والتأهيل المهني المعتمدة داخل المجموعة."
        : "Structured training and professional development delivered across the group.",
    },
    {
      key: "culture",
      title: isArabic ? "ثقافة الفريق" : "Team culture",
      lead: isArabic
        ? "القيم والممارسات اليومية التي تشكّل طريقة عملنا معاً."
        : "The values and everyday practices that shape how our teams work together.",
    },
    {
      key: "achievements",
      title: isArabic ? "إنجازات ومبادرات الموظفين" : "Employee achievements & initiatives",
      lead: isArabic
        ? "التقديرات والمبادرات التي يقودها الموظفون."
        : "Recognition and initiatives led by our people.",
    },
  ];

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "الأشخاص في تويل" : "People at TEG"}
        title={isArabic ? "الأشخاص وراء كل مشروع." : "The people behind every project."}
        description={
          isArabic
            ? "تعمل فرقنا عبر إحدى عشرة شركة متخصصة في عمان والخليج والهند — في المكاتب والورش ومواقع المشاريع."
            : "Our teams work across eleven specialised companies in Oman, the GCC and India — in offices, fabrication yards and on project sites."
        }
      />

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid items-start gap-12 md:grid-cols-2">
          <div>
            <p className="eyebrow">{isArabic ? "مقدمة" : "Introduction"}</p>
            <h2 className="mt-3 text-3xl md:text-5xl">
              {isArabic ? "الجانب الإنساني للمجموعة" : "The human side of the group"}
            </h2>
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {isArabic
                ? "خلف كل مشروع فرق من المهندسين والفنيين وموظفي الإسناد الذين ينفذون العمل يوماً بعد يوم. هذه الصفحة مخصصة لهم — لثقافتهم وتطويرهم ومساهماتهم."
                : "Behind every project are the engineers, technicians and support teams who deliver the work, day after day. This page is dedicated to them — to our culture, development and the contribution of our people."}
            </p>
          </div>
          <ContentPlaceholder
            label={isArabic ? "نص المقدمة الرسمي" : "Official introduction copy"}
            className="md:mt-16"
          />
        </div>
      </section>

      <section aria-label={isArabic ? "صور الفرق" : "Team photographs"} className="mx-auto max-w-[1600px] px-5 pb-4">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {gallery.map((g, i) => (
            <li
              key={g.src}
              className="animate-fade-in-up group overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="overflow-hidden">
                <img
                  src={g.src}
                  alt={isArabic ? g.ar : g.en}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
              <p className="border-t border-border p-4 text-xs tracking-[0.14em] text-muted-foreground uppercase">
                {isArabic ? g.ar : g.en}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((b, i) => (
            <article
              key={b.key}
              className="animate-fade-in-up rounded-2xl border border-border border-t-2 border-t-accent bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <h3 className="text-lg text-primary">{b.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{b.lead}</p>
              <ContentPlaceholder className="mt-6" />
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 pb-24 md:pb-32">
        <div className="grid gap-8 rounded-2xl border border-border bg-card p-8 shadow-soft md:grid-cols-2 md:p-12">
          <div>
            <p className="eyebrow">{isArabic ? "انضم إلينا" : "Join us"}</p>
            <h2 className="mt-3 text-3xl md:text-4xl">
              {isArabic ? "ابنِ حياتك المهنية معنا" : "Build your career with us"}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {isArabic
                ? "تعرّف على الوظائف المتاحة حالياً عبر شركات المجموعة."
                : "See the roles currently open across our group companies."}
            </p>
            <Link
              to="/careers"
              className="btn-primary mt-8 inline-flex w-fit items-center gap-2"
            >
              {isArabic ? "الوظائف" : "View careers"} <ArrowRight className="size-4" />
            </Link>
          </div>
          <figure className="overflow-hidden rounded-2xl border border-border">
            <img
              src={careersImg}
              alt={isArabic ? "العمل في تويل للهندسة" : "Working at Towell Engineering"}
              loading="lazy"
              decoding="async"
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            />
          </figure>
        </div>
      </section>
    </>
  );
}
