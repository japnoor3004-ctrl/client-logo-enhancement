import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImg__ptr from "@/assets/refinery.jpg.asset.json";
const heroImg = heroImg__ptr.url;

export const Route = createFileRoute("/tesco")({
  head: () => ({
    meta: [
      { title: "TESCO — Towell Engineering Services | Towell Engineering Group" },
      {
        name: "description",
        content:
          "TESCO delivers EPC, construction and engineered products for oil & gas, refinery, petrochemical and power industries.",
      },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "TESCO", ar: "TESCO" },
  title: { en: "Towell Engineering Services Co. L.L.C", ar: "شركة توال للخدمات الهندسية ش.م.م" },
  desc: {
    en: "Established in 2004 with a strong bias towards oil & gas — EPC and construction, engineered products and long-term maintenance for refinery, petrochemical and power industries.",
    ar: "تأسست في عام 2004 مع توجه قوي نحو النفط والغاز — الهندسة والمشتريات والبناء والمنتجات الهندسية والصيانة طويلة الأجل لصناعات التكرير والبتروكيماويات والطاقة.",
  },
  intro: {
    en: "TESCO is accredited to ISO 9001:2015, OHSAS 18001:2007 and ISO 14001:2015. The company partners with international principals to supply cranes, process equipment, water treatment plants, loading arms, valves and power generation spares across the region.",
    ar: "TESCO معتمدة وفقاً لـ ISO 9001:2015 و OHSAS 18001:2007 و ISO 14001:2015. تتعاون الشركة مع وكلاء دوليين لتوريد الرافعات ومعدات المعالجة ومحطات معالجة المياه وأذرع التحميل والصمامات وقطع غيار توليد الطاقة في جميع أنحاء المنطقة.",
  },
};

const projects = [
  {
    title: "Electromechanical Works for Area 0 — Duqm Refinery EPC-1",
    location: "Duqm, Sultanate of Oman",
    client: "Tecnicas Reunidas Daewoo LLC (TRD)",
    nature:
      "Complete electromechanical works for Area 0 (cooling tower and interconnecting pipe rack) within the largest package of the Duqm refinery.",
    bullets: [
      "Erection of piping including pipe supports",
      "Erection of steel structure",
      "Equipment erection: cooling tower, pumps and other equipment",
      "Painting and insulation works",
      "E&I: switchgear, transformers, UPS, panels and MV/LV/control cabling",
    ],
  },
  {
    title: "MEI Works for Package 2 (Flare Area) — Duqm Refinery EPC-2",
    location: "Duqm, Sultanate of Oman",
    client: "Petrofac — Samsung JV",
    nature:
      "Complete mechanical, electrical and instrumentation works for the Flare Area (Package 2) of the offsites and utilities scope.",
    bullets: [
      "Piping works and erection of structural steel",
      "180 m flare with derrick structure, LPG bullet erection and drums",
      "Complete E&I works",
    ],
  },
  {
    title: "Mechanical Works for Polypropylene & Utilities Area",
    location: "Sultanate of Oman",
    client: "Tecnimont",
    nature:
      "Mechanical works for the polypropylene and utilities area — USD 60.0 million, 2017 – 2019, approximately 6,500,000 total project man-hours.",
    bullets: [
      "Piping (CS, SS, DSS & GRP) — 323,000 inch-dia, size range 1\" to 44\"",
      "Static equipment erection — 2,705 MT",
      "Rotary equipment erection — 659 MT",
      "Structure works — 7,136 MT",
      "Loop reactor, pipe rack, silo, knock-out drum and GRP erection",
    ],
  },

];

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TESCO"
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
