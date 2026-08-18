import { useLang } from "@/contexts/language";
import SplitText from "./SplitText";

import {
  Droplets,
  Flame,
  Zap,
  Factory,
  Building2,
  HardHat,
  Ship,
  Fuel,
  Landmark,
} from "lucide-react";

type Industry = {
  icon: React.ComponentType<{ className?: string }>;
  name_en: string;
  name_ar: string;
  blurb_en: string;
  blurb_ar: string;
};

const industries: Industry[] = [
  {
    icon: Fuel,
    name_en: "Oil & Gas",
    name_ar: "النفط والغاز",
    blurb_en: "Upstream, midstream and refinery EPC, fabrication and long-term maintenance.",
    blurb_ar: "خدمات التوريد والبناء والتصنيع والصيانة طويلة الأمد للمشاريع النفطية.",
  },
  {
    icon: Flame,
    name_en: "Refinery & Petrochemical",
    name_ar: "المصافي والبتروكيماويات",
    blurb_en: "Process plants, pipe spools and structural steel for petrochemical facilities.",
    blurb_ar: "مصانع المعالجة وأنابيب التوصيل والحديد الإنشائي للمنشآت البتروكيماوية.",
  },
  {
    icon: Zap,
    name_en: "Power & Energy",
    name_ar: "الطاقة والكهرباء",
    blurb_en: "Electrical and instrumentation contracting for utilities and generation.",
    blurb_ar: "مقاولات الكهرباء والأجهزة لقطاع المرافق وتوليد الطاقة.",
  },
  {
    icon: Droplets,
    name_en: "Water & Wastewater",
    name_ar: "المياه والصرف الصحي",
    blurb_en: "Reservoirs, treatment plants and transmission networks across Oman.",
    blurb_ar: "خزانات ومحطات معالجة وشبكات نقل عبر سلطنة عمان.",
  },
  {
    icon: Building2,
    name_en: "Infrastructure & Roads",
    name_ar: "البنية التحتية والطرق",
    blurb_en: "Roads, bridges and civil infrastructure delivered under 'Excellent' EPC grade.",
    blurb_ar: "طرق وجسور وبنية تحتية مدنية بدرجة 'ممتاز' في التوريد والبناء.",
  },
  {
    icon: Factory,
    name_en: "Industrial Buildings",
    name_ar: "المباني الصناعية",
    blurb_en: "Warehouses, factories and pre-engineered buildings for global industrials.",
    blurb_ar: "مستودعات ومصانع ومباني مسبقة الهندسة للصناعات العالمية.",
  },
  {
    icon: HardHat,
    name_en: "Steel Fabrication",
    name_ar: "تصنيع الحديد",
    blurb_en: "Structural steel, PEB, cladding and pipe spools at GCC scale.",
    blurb_ar: "حديد إنشائي ومباني مسبقة الهندسة وتكسية وأنابيب على نطاق دول الخليج.",
  },
  {
    icon: Ship,
    name_en: "Ports & Marine",
    name_ar: "الموانئ والبحرية",
    blurb_en: "Marine, port and jetty civil works for logistics and heavy industry.",
    blurb_ar: "أعمال مدنية بحرية وموانئ وأرصفة للوجستيات والصناعات الثقيلة.",
  },
  {
    icon: Landmark,
    name_en: "Government & Defence",
    name_ar: "الحكومة والدفاع",
    blurb_en: "Trusted delivery on government, defence and public-sector programmes.",
    blurb_ar: "تنفيذ موثوق لبرامج الحكومة والدفاع والقطاع العام.",
  },
];

export function IndustriesServed() {
  const { isArabic } = useLang();

  return (
    <section className="relative bg-background py-24 md:py-32">
      <div className="mx-auto max-w-[1600px] px-5">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">{isArabic ? "القطاعات التي نخدمها" : "Industries We Serve"}</p>
            <SplitText
              tag="h2"
              text={
                isArabic
                  ? "التسليم الهندسي عبر تسعة قطاعات أساسية."
                  : "Engineering delivery across nine core sectors."
              }
              className="mt-3 max-w-2xl text-3xl md:text-5xl"
              textAlign="left"
              delay={35}
              duration={0.85}
              from={{ opacity: 0, y: 30 }}
              to={{ opacity: 1, y: 0 }}
            />
            <span className="mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {isArabic
              ? "من النفط والغاز إلى البنية التحتية المدنية، مجموعتنا تجمع القدرات الهندسية والتصنيعية والإنشائية تحت سقف واحد."
              : "From upstream oil & gas to civil infrastructure, our group brings sector-specific engineering, fabrication and construction capability under one roof."}
          </p>
        </div>

        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((s) => {
            const Icon = s.icon;
            return (
              <li
                key={s.name_en}
                className="group relative flex gap-5 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent hover:shadow-lift"
              >
                <span
                  aria-hidden
                  className="flex size-14 shrink-0 items-center justify-center rounded-xl bg-[image:var(--gradient-leaf-soft)] text-accent-strong ring-1 ring-accent/30 transition-colors group-hover:bg-[image:var(--gradient-forest)] group-hover:text-forest-foreground group-hover:ring-primary/30"
                >
                  <Icon className="size-7" />
                </span>
                <div className="min-w-0">
                  <SplitText
                    tag="h3"
                    text={isArabic ? s.name_ar : s.name_en}
                    className="text-lg leading-tight text-primary"
                    textAlign="left"
                    delay={20}
                    duration={0.6}
                    from={{ opacity: 0, y: 20 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.15}
                  />
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {isArabic ? s.blurb_ar : s.blurb_en}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
