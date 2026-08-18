import { useLang, t, type TranslationSet } from "@/contexts/language";
import {
  HardHat,
  Eye,
  HeartHandshake,
  ShieldCheck,
  Users,
  Leaf,
  Lightbulb,
  Target,
  Gem,
} from "lucide-react";
import SplitText from "./SplitText";

/* ─── Bilingual content ─── */

const pillars: {
  tag: TranslationSet;
  title: TranslationSet;
  text: TranslationSet;
  icon: React.ElementType;
  gradientClass: string;
}[] = [
  {
    icon: HardHat,
    tag: { en: "MISSION", ar: "الرسالة" },
    title: {
      en: "Deliver engineering excellence, on time.",
      ar: "تقديم التميز الهندسي في الوقت المحدد.",
    },
    text: {
      en: "Execute complex EPC, industrial and infrastructure projects to the highest international standards — safely, sustainably, and within committed schedule and budget.",
      ar: "تنفيذ مشاريع التوريد والبناء والهندسة الصناعية والبنية التحتية المعقدة وفقاً لأعلى المعايير الدولية — بأمان واستدامة وضمن الجدول الزمني والميزانية المحددة.",
    },
    gradientClass: "icon-gradient-brand-blue",
  },
  {
    icon: Eye,
    tag: { en: "VISION", ar: "الرؤية" },
    title: {
      en: "Oman's most trusted engineering group.",
      ar: "أكثر مجموعة هندسية ثقةً في سلطنة عمان.",
    },
    text: {
      en: "To be the partner of choice for owners and EPC contractors across the GCC and India — recognised for technical capability, HSE performance, and long-term client relationships.",
      ar: "أن نكون الشريك المفضل لأصحاب المشاريع ومقاولي التوريد والبناء في دول مجلس التعاون والهندية — معترف بنا لقدرتنا التقنية وأداء الصحة والسلامة والبيئة والعلاقات طويلة الأمد مع العملاء.",
    },
    gradientClass: "icon-gradient-brand-green",
  },
  {
    icon: HeartHandshake,
    tag: { en: "PURPOSE", ar: "الغرض" },
    title: {
      en: "Build the infrastructure of a growing nation.",
      ar: "بناء البنية التحتية لدولة نامية.",
    },
    text: {
      en: "From refineries and power plants to ports, roads and defence facilities, we build the assets that power industry and improve everyday life in the communities we operate in.",
      ar: "من المصفات ومحطات الطاقة إلى الموانئ والطرق والمرافق الدفاعية، نبني الأصول التي تدعم الصناعة وتحسن الحياة اليومية في المجتمعات التي نعمل فيها.",
    },
    gradientClass: "icon-gradient-brand-combo",
  },
];

const values: {
  title: TranslationSet;
  text: TranslationSet;
  icon: React.ElementType;
}[] = [
  {
    icon: ShieldCheck,
    title: { en: "Safety first", ar: "السلامة أولاً" },
    text: {
      en: "Zero harm is non-negotiable. Every worker goes home safe, every day.",
      ar: "الصفر ضرر غير قابل للتفاوض. كل عامل يعود إلى المنزل بأمان كل يوم.",
    },
  },
  {
    icon: Gem,
    title: { en: "Integrity", ar: "النزاهة" },
    text: {
      en: "We keep our word — with clients, partners, employees and communities.",
      ar: "نفي بوعودنا — مع العملاء والشركاء والموظفين والمجتمعات.",
    },
  },
  {
    icon: Users,
    title: { en: "People-powered", ar: "مدعوم بالمواهب البشرية" },
    text: {
      en: "1,000+ engineers, technicians and professionals form our true capability.",
      ar: "أكثر من 1000 مهندس وفني ومحترف يشكّلون قدرتنا الحقيقية.",
    },
  },
  {
    icon: Lightbulb,
    title: { en: "Innovation", ar: "الابتكار" },
    text: {
      en: "Digital delivery, modern methods and continuous improvement in everything we do.",
      ar: "التنفيذ الرقمي والأساليب الحديثة والتحسين المستمر في كل ما نفعله.",
    },
  },
  {
    icon: Leaf,
    title: { en: "Sustainability", ar: "الاستدامة" },
    text: {
      en: "ISO 14001 environmental stewardship and responsible resource use.",
      ar: "إدارة بيئية وفقاً لمعيار ISO 14001 واستخدام المسؤول للموارد.",
    },
  },
  {
    icon: Target,
    title: { en: "Delivery excellence", ar: "التميز في التنفيذ" },
    text: {
      en: "On time, on budget, on specification — measured on every project.",
      ar: "في الوقت المحدد، ضمن الميزانية، وفق المواصفات — قياساً في كل مشروع.",
    },
  },
];

export function MissionVisionValues() {
  const { lang, isArabic } = useLang();

  return (
    <section aria-labelledby="mvv-heading" className="border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="max-w-2xl">
          <p className="eyebrow">{isArabic ? "ما يحركنا" : "What drives us"}</p>
          <SplitText
            tag="h2"
            text={isArabic ? "الرسالة والرؤية والغرض" : "Mission, vision & purpose"}
            id="mvv-heading"
            className="mt-3 text-3xl md:text-5xl"
            textAlign="left"
            delay={35}
            duration={0.85}
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        </div>

        {/* Mission / Vision / Purpose cards */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((p) => {
            const Icon = p.icon;
            return (
              <article
                key={p.tag.en}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
              >
                <div
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-1 bg-[image:var(--gradient-leaf)] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
                {/* Icon circle with gradient */}
                <div className={`icon-gradient-wrapper ${p.gradientClass}`}>
                  <Icon className="size-7" strokeWidth={1.8} aria-hidden />
                </div>
                <p className="mt-6 text-[11px] font-bold tracking-[0.2em] text-accent-strong uppercase">
                  {t(p.tag, lang)}
                </p>
                <SplitText
                  tag="h3"
                  text={t(p.title, lang)}
                  className="mt-2 font-display text-xl font-bold text-primary"
                  textAlign="left"
                  delay={20}
                  duration={0.6}
                  from={{ opacity: 0, y: 20 }}
                  to={{ opacity: 1, y: 0 }}
                  threshold={0.15}
                />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {t(p.text, lang)}
                </p>
              </article>
            );
          })}
        </div>

        {/* Core values */}
        <div className="mt-16">
          <SplitText
            tag="h3"
            text={isArabic ? "القيم الأساسية" : "Core values"}
            className="font-display text-xl font-bold text-primary md:text-2xl"
            textAlign="left"
            delay={30}
            duration={0.7}
            from={{ opacity: 0, y: 20 }}
            to={{ opacity: 1, y: 0 }}
          />
          <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <li
                  key={v.title.en}
                  className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-soft transition-shadow hover:shadow-lift"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-strong">
                    <Icon className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-primary">
                      {t(v.title, lang)}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {t(v.text, lang)}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
