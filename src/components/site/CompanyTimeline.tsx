import { useLang } from "@/contexts/language";
import { useState } from "react";
import { yearsOfExcellence } from "@/lib/companies";
import { Building2, Factory, Flame, Globe2, Hammer, Sprout, Zap } from "lucide-react";
import SplitText from "./SplitText";

type Milestone = {
  year: string;
  title_en: string;
  title_ar: string;
  body_en: string;
  body_ar: string;
  icon: React.ComponentType<{ className?: string }>;
};

const milestones: Milestone[] = [
  {
    year: "1999",
    title_en: "A one-man venture in Muscat",
    title_ar: "مشروع فردي في مسقط",
    body_en:
      "Mr. Balaji Srinivasan starts the business from a single room in Al Wadi Al Kabir, trading gas turbine and diesel engine spare parts.",
    body_ar:
      "السيد بالاجي سرينيفاسان يبدأ العمل من غرفة واحدة في الوادي الكبير، متاجراً بقطع غيار التوربينات الغازية ومحركات الديزل.",
    icon: Sprout,
  },
  {
    year: "2001",
    title_en: "TIPCO founded",
    title_ar: "تأسيس TIPCO",
    body_en:
      "Towell Infrastructure Projects Co. is established and quickly earns 'Excellent Grade' EPC accreditation for infrastructure works across the Sultanate of Oman.",
    body_ar:
      "تأسست شركة تويل للمشاريع البنية التحتية وسرعان ما حصلت على اعتماد 'درجة ممتاز' في التوريد والبناء للأعمال البنية التحتية في جميع أنحاء سلطنة عمان.",
    icon: Building2,
  },
  {
    year: "2004",
    title_en: "TESCO enters oil & gas",
    title_ar: "TESCO تدخل قطاع النفط والغاز",
    body_en:
      "Towell Engineering Services Co. is set up with a strong bias towards refinery, petrochemical and power projects — accredited to ISO 9001, OHSAS 18001 and ISO 14001.",
    body_ar:
      "تأسست شركة تويل للخدمات الهندسية مع توجه قوي نحو مشاريع المصافي والبتروكيماويات والطاقة — معتمدة وفقاً لمعايير ISO 9001 و OHSAS 18001 و ISO 14001.",
    icon: Flame,
  },
  {
    year: "2006",
    title_en: "UNISCO becomes Oman's largest fabricator",
    title_ar: "UNISCO تصبح أكبر مصنّع في عمان",
    body_en:
      "United Industrial Services Co. scales into the largest steel fabrication company in Oman, supplying structural steel and pipe spools to EPC contractors across the GCC.",
    body_ar:
      "شركة الخدمات الصناعية المتحدة تتوسع لتصبح أكبر شركة تصنيع حديد في عمان، وتزويد الحديد الهيكلي وأنابيب التوصيل لمقاولي التوريد والبناء في جميع أنحاء الخليج.",
    icon: Factory,
  },
  {
    year: "2008",
    title_en: "TDOS launches drilling operations",
    title_ar: "TDOS تطلق عمليات الحفر",
    body_en:
      "Towell Drilling and Oilfield Services begins operating hydraulic top-drive rigs across Oman, India and the wider MENA region.",
    body_ar:
      "تبدأ شركة تويل للحفر والخدمات النفطية تشغيل منصات الحفر الهيدروليكية في عمان والهند ومنطقة الشرق الأوسط وشمال أفريقيا.",
    icon: Hammer,
  },
  {
    year: "2012",
    title_en: "TEIL opens in India",
    title_ar: "TEIL تفتتح في الهند",
    body_en:
      "A 20-acre fabrication facility with a 10,000 m² covered shed comes online at Indapur MIDC, Pune — extending the group's capability to the Indian market.",
    body_ar:
      "منشأة تصنيع على مساحة 20 فداناً مع سقيفة مغطاة بمساحة 10,000 متر مربع تبدأ العمل في إندابور MIDC، بون — لتوسيع قدرة المجموعة إلى السوق الهندي.",
    icon: Globe2,
  },
  {
    year: "2015",
    title_en: "TELCO scales E&I contracting",
    title_ar: "TELCO توسع مقاولات الكهرباء والأجهزة",
    body_en:
      "Towell Electrical Projects Co. broadens its trading and contracting portfolio in electrical and instrumentation disciplines for oil & gas, government and industrial clients.",
    body_ar:
      "توسع شركة تويل للمشاريع الكهربائية محفظتها التجارية والمقاولاتية في تخصصات الكهرباء والأجهزة لعملاء النفط والغاز والحكومة والصناعة.",
    icon: Zap,
  },
  {
    year: "Today",
    title_en: "A group across three continents",
    title_ar: "مجموعة عبر ثلاث قارات",
    body_en:
      "Twelve specialised engineering companies and regional operations, over 1,000 employees, and delivery across Oman, the GCC, India and Europe under a single group standard.",
    body_ar:
      "إحدى عشر شركة هندسية متخصصة وعمليات إقليمية، وأكثر من 1,000 موظف، وتسليم عبر عمان والخليج والهند وأوروبا تحت معيار مجموعة واحد.",
    icon: Globe2,
  },
];

export function CompanyTimeline() {
  const { isArabic } = useLang();
  const [active, setActive] = useState(0);
  const current = milestones[active];
  const Icon = current.icon;

  return (
    <section className="relative overflow-hidden bg-muted/40 py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="max-w-3xl">
          <p className="eyebrow">{isArabic ? "رحلتنا" : "Our Journey"}</p>
          <SplitText
            tag="h2"
            text={
              isArabic
                ? `${yearsOfExcellence()} سنة من الإنجازات الهندسية.`
                : `${yearsOfExcellence()} years of engineering milestones.`
            }
            className="mt-3 text-3xl md:text-5xl"
            textAlign="left"
            delay={35}
            duration={0.85}
            from={{ opacity: 0, y: 30 }}
            to={{ opacity: 1, y: 0 }}
          />
          <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {isArabic
              ? "اختر سنة لترى اللحظات التي شكلت مجموعة تويل للهندسة — من مشروع فردي في مسقط إلى مجموعة تعمل عبر ثلاث قارات."
              : "Select a year to see the moments that shaped Towell Engineering Group — from a single-room venture in Muscat to a group operating across three continents."}
          </p>
        </div>

        {/* Rail */}
        <div className="mt-14">
          <div className="relative">
            <div className="pointer-events-none absolute inset-x-0 top-5 h-px bg-border" />
            <div
              className="pointer-events-none absolute top-5 left-0 h-px bg-[image:var(--gradient-leaf)] transition-all duration-500"
              style={{
                width: `${((active + 0.5) / milestones.length) * 100}%`,
              }}
            />
            <div
              className="relative grid gap-2"
              style={{ gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))` }}
            >
              {milestones.map((m, i) => {
                const isActive = i === active;
                return (
                  <button
                    key={m.year}
                    type="button"
                    onClick={() => setActive(i)}
                    className="group flex flex-col items-center gap-3 text-center focus:outline-none"
                    aria-pressed={isActive}
                  >
                    <span
                      className={[
                        "relative flex size-10 items-center justify-center rounded-full border-2 transition-all duration-300",
                        isActive
                          ? "scale-110 border-accent bg-[image:var(--gradient-leaf)] shadow-soft"
                          : "border-border bg-card group-hover:border-accent/60",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "size-2.5 rounded-full transition-colors",
                          isActive
                            ? "bg-primary-foreground"
                            : "bg-muted-foreground/60 group-hover:bg-accent",
                        ].join(" ")}
                      />
                    </span>
                    <span
                      className={[
                        "font-display text-sm font-bold tracking-tight transition-colors",
                        isActive
                          ? "text-primary"
                          : "text-muted-foreground group-hover:text-primary",
                      ].join(" ")}
                    >
                      {m.year}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detail card */}
          <div className="mt-10 grid gap-6 rounded-2xl border border-border bg-card p-8 shadow-soft md:grid-cols-[auto_1fr] md:gap-10 md:p-10">
            <div className="flex size-16 items-center justify-center rounded-xl bg-[image:var(--gradient-forest)] text-forest-foreground shadow-soft">
              <Icon className="size-8" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.2em] text-accent-strong uppercase">
                {current.year}
              </p>
              <SplitText
                tag="h3"
                text={isArabic ? current.title_ar : current.title_en}
                className="mt-2 text-2xl leading-tight text-primary md:text-3xl"
                textAlign="left"
                delay={25}
                duration={0.6}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
              />
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                {isArabic ? current.body_ar : current.body_en}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
