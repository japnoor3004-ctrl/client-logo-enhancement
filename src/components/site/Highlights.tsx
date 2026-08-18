import { Check } from "lucide-react";
import { useLang } from "@/contexts/language";
import { COMPANY_COUNT } from "@/lib/companies";

// ─── Placeholder highlights — swap these lines with real content later ───
const highlights = [
  {
    en: "25 years of EPC delivery across the GCC",
    ar: "25 عاماً من تقديم المشاريع عبر دول مجلس التعاون الخليجي",
  },
  {
    en: "ISO 9001, ISO 14001, ISO 45001 certified",
    ar: "شهادات ISO 9001 و ISO 14001 و ISO 45001",
  },
  {
    en: "In-house fabrication, engineering and construction capability",
    ar: "قدرات التصنيع والهندسة والبناء الذاتية",
  },
  {
    en: "Trusted by owners, EPC contractors and government clients",
    ar: "موثوق من المالكين ومقاولي التوريد والبناء والعملاء الحكوميين",
  },
  {
    en: `${COMPANY_COUNT} specialised companies under one group standard`,
    ar: "إحدى عشر شركة متخصصة تحت معيار مجموعة واحد",
  },
  {
    en: "Zero-harm culture with stop-work authority for every worker",
    ar: "ثقافة عدم الضرر مع سلطة إيقاف العمل لكل عامل",
  },
];

export function Highlights({ items }: { items?: { en: string; ar: string }[] }) {
  const { isArabic } = useLang();
  const list = items ?? highlights;

  return (
    <ul className="space-y-4">
      {list.map((item) => (
        <li key={item.en} className="flex items-start gap-3">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-[#97CB46]/20">
            <Check className="size-3.5 text-[#97CB46]" strokeWidth={3} />
          </span>
          <span className="text-sm font-semibold leading-relaxed text-foreground md:text-base">
            {isArabic ? item.ar : item.en}
          </span>
        </li>
      ))}
    </ul>
  );
}
