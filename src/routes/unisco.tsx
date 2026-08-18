import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";

export const Route = createFileRoute("/unisco")({
  head: () => ({
    meta: [
      { title: "UNISCO — United Industrial Services | Towell Engineering Group" },
      {
        name: "description",
        content: "UNISCO is the largest steel fabrication company in the Sultanate of Oman.",
      },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "UNISCO", ar: "UNISCO" },
  title: { en: "United Industrial Services Co. L.L.C", ar: "شركة الخدمات الصناعية المتحدة ش.م.م" },
  desc: {
    en: "The largest steel fabrication company in the Sultanate of Oman — serving major end users and EPC contractors across the GCC and beyond.",
    ar: "أكبر شركة تصنيع صلب في سلطنة عمان — تخدم كبار المستخدمين النهائيين ومقاولي EPC في جميع أنحاء دول مجلس التعاون الخليجي وما وراءها.",
  },
  intro: {
    en: "The technical expertise available at UNISCO makes it possible to conform to stringent code and customer requirements for structural steel, pipe spooling, blasting, painting and specialised cladding across refinery, steel and industrial sectors.",
    ar: "الخبرة الفنية المتوفرة في UNISCO تجعل من الممكن الامتثال لمتطلبات التعليمات البرمجية والعملاء الصارمة للصلب الإنشائي وتجميع الأنابيب والتفجير والدهان والتكسية المتخصصة عبر قطاعات التكرير والصلب والصناعة.",
  },
};

const projects = [
  {
    title: "Ras Al Khair Aluminium Smelter",
    location: "Ras Al Khair, Saudi Arabia",
    client: "Ma'aden & Alcoa JV",
    nature:
      "Heavy steel fabrication for one of the world's largest aluminium smelters — pot shell fabrication, pot superstructures, heavy steel structures and aluminium smelter components, delivered to international quality standards.",
  } as const,
  {
    title: "Vale Iron Ore Pelletizing Plant",
    location: "Sultanate of Oman",
    client: "Vale",
    nature:
      "Supply and fabrication of approximately 23,000 MT of structural steel and plate works for heavy industrial and mining infrastructure, including material supply.",
  } as const,
  {
    title: "Yibal Khuff Project",
    location: "Yibal Khuff, Sultanate of Oman",
    client: "Petroleum Development Oman (PDO)",
    nature:
      "Fabrication of more than 10,500 MT of structural steel — pipe racks, pipe bridges, equipment buildings and equipment support structures for one of Oman's major oil and gas developments.",
  } as const,
  {
    title: "Barka Independent Water Plant (IWP)",
    location: "Barka, Sultanate of Oman",
    client: "SUEZ / TIPCO – OPWP",
    nature:
      "Supply, fabrication and installation of structural steel, pipe rack structures, equipment buildings and SWRO skid frames for the 281,000 m³/day Phase 4 desalination plant, including detail engineering, painting and trial assembly.",
  } as const,
];

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="UNISCO"
      name={data.title[isArabic ? "ar" : "en"]}
      hero={
        <PageHero
          eyebrow={data.eyebrow[isArabic ? "ar" : "en"]}
          title={data.title[isArabic ? "ar" : "en"]}
          description={data.desc[isArabic ? "ar" : "en"]}
        />
      }
      intro={<p>{isArabic ? data.intro.ar : data.intro.en}</p>}
      projects={projects}
    />
  );
}
