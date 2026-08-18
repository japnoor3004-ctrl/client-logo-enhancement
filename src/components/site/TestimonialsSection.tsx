import { useLang } from "@/contexts/language";
import SplitText from "./SplitText";
import { Star, Building2 } from "lucide-react";

// ─── Placeholder testimonials — swap these with real client quotes later ───
const testimonials = [
  {
    quote_en:
      "Towell Engineering Group has been a reliable EPC partner on multiple complex projects. Their safety record and on-time delivery are exceptional.",
    quote_ar:
      "كانت مجموعة تويل للهندسة شريكاً موثوقاً في التوريد والبناء في العديد من المشاريع المعقدة. سجل السلامة والتسليم في الوقت المحدد استثنائيان.",
    role_en: "Senior Project Director",
    role_ar: "مدير مشاريع أول",
    company_en: "Major Oil & Gas EPC Contractor, Oman",
    company_ar: "مقاول توريد وبناء رئيسي للنفط والغاز، عمان",
    initials: "MK",
  },
  {
    quote_en:
      "The group's integrated approach — from design through fabrication to installation — saved us significant time and coordination overhead.",
    quote_ar:
      "النهج المتكامل للمجموعة — من التصميم عبر التصنيع إلى التركيب — وفر لنا وقتاً كبيراً وتكاليف التنسيق.",
    role_en: "Projects Director",
    role_ar: "مدير المشاريع",
    company_en: "Government Infrastructure Authority, UAE",
    company_ar: "هيئة البنية التحتية الحكومية، الإمارات",
    initials: "SA",
  },
  {
    quote_en:
      "Towell Engineering's commitment to HSE and quality standards matches our own. A partner we trust with our most demanding projects.",
    quote_ar:
      "التزام تويل للهندسة بمعايير الصحة والسلامة والبيئة والجودة يطابق معاييرنا. شريك نثق به في مشاريعنا الأكثر تطلباً.",
    role_en: "VP of Operations",
    role_ar: "نائب رئيس العمليات",
    company_en: "International Engineering Firm, Qatar",
    company_ar: "شركة هندسية دولية، قطر",
    initials: "RT",
  },
];

export function TestimonialsSection() {
  const { isArabic } = useLang();

  return (
    <section className="content-visibility-auto border-y border-border bg-secondary/40 py-24 md:py-28">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">{isArabic ? "ثقة العملاء" : "Client trust"}</p>
          <h2 className="mt-3 text-3xl md:text-5xl">
            {isArabic
              ? "موثوق من قادة الصناعة في جميع أنحاء مجلس التعاون"
              : "Trusted by industry leaders across the GCC"}
          </h2>
          <span className="mx-auto mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        </div>
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.role_en}
              className="animate-fade-in-up rounded-2xl border border-border bg-[#0F1A2E] p-8 shadow-soft transition-all duration-300 hover:shadow-lift"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              <div className="flex gap-1 text-[#97CB46]">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-white/80">
                {isArabic ? `"${t.quote_ar}"` : `"${t.quote_en}"`}
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-white/10 pt-4">
                <span className="flex size-10 items-center justify-center rounded-full bg-[#97CB46]/15 text-[#97CB46] text-sm font-bold">
                  {t.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#97CB46]">
                    {isArabic ? t.role_ar : t.role_en}
                  </p>
                  <p className="text-xs text-white/60">{isArabic ? t.company_ar : t.company_en}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
