import { useLang } from "@/contexts/language";
import { Leaf, HardHat, Recycle, HeartHandshake } from "lucide-react";
import SplitText from "./SplitText";

const pillars = [
  {
    icon: Leaf,
    title_en: "Environmental responsibility",
    title_ar: "المسؤولية البيئية",
    text_en:
      "ISO 14001 environmental management across group operations, with active monitoring of emissions, waste and resource use on every project site.",
    text_ar:
      "إدارة بيئية وفقاً لمعيار ISO 14001 عبر عمليات المجموعة، مع مراقبة نشطة للانبعاثات والنفايات واستخدام الموارد في كل موقع مشروع.",
  },
  {
    icon: HardHat,
    title_en: "Workplace safety",
    title_ar: "السلامة في مكان العمل",
    text_en:
      "OHSAS 18001 / ISO 45001 aligned HSE systems, permit-to-work discipline, structured training and a zero-harm target on every site, every day.",
    text_ar:
      "أنظمة الصحة والسلامة والبيئة المتوافقة مع OHSAS 18001 / ISO 45001، وانضباط تصاريح العمل، والتدريب المنظم، وهدف عدم الضرر في كل موقع كل يوم.",
  },
  {
    icon: Recycle,
    title_en: "Sustainable engineering",
    title_ar: "الهندسة المستدامة",
    text_en:
      "Efficient designs, modern fabrication methods and long-life materials that reduce lifecycle impact for owners and the communities they serve.",
    text_ar:
      "تصاميم فعالة وأساليب تصنيع حديثة ومواد طويلة العمر تقلل من تأثير دورة الحياة للمالكين والمجتمعات التي يخدمونها.",
  },
  {
    icon: HeartHandshake,
    title_en: "Community development",
    title_ar: "تنمية المجتمع",
    text_en:
      "Local hiring, skills development and long-term supplier partnerships that support the growth of the industries and regions we operate in.",
    text_ar:
      "التوظيف المحلي وتطوير المهارات وشراكات الموردين طويلة الأمد التي تدعم نمو الصناعات والمناطق التي نعمل فيها.",
  },
];

export function SustainabilitySection() {
  const { isArabic } = useLang();

  return (
    <section
      aria-labelledby="sustainability-heading"
      className="mx-auto max-w-[1600px] px-5 py-20 md:py-24"
    >
      <div className="max-w-2xl">
        <p className="eyebrow">{isArabic ? "الاستدامة" : "Sustainability"}</p>
        <SplitText
          tag="h2"
          text={
            isArabic
              ? "نبني بمسؤولية، على المدى الطويل."
              : "Building responsibly, for the long term."
          }
          id="sustainability-heading"
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
            ? "الاستدامة في مجموعة تويل للهندسة جزء لا يتجزأ من كيفية تصميمنا وبنائنا وتشغيلنا — من الإشراف البيئي في الموقع إلى الأشخاص والمجتمعات التي تجعل عملنا ممكناً."
            : "Sustainability at Towell Engineering Group is embedded into how we design, build and operate — from environmental stewardship on site to the people and communities that make our work possible."}
        </p>
      </div>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p) => {
          const Icon = p.icon;
          return (
            <li
              key={p.title_en}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-[image:var(--gradient-forest)] text-forest-foreground shadow-soft">
                <Icon className="size-6" aria-hidden />
              </span>
              <SplitText
                tag="h3"
                text={isArabic ? p.title_ar : p.title_en}
                className="mt-5 font-display text-base font-bold text-primary"
                textAlign="left"
                delay={20}
                duration={0.6}
                from={{ opacity: 0, y: 20 }}
                to={{ opacity: 1, y: 0 }}
                threshold={0.15}
              />
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isArabic ? p.text_ar : p.text_en}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
