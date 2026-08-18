import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImgAsset from "@/assets/electrical.jpg.asset.json";

const heroImg = heroImgAsset.url;

export const Route = createFileRoute("/telco")({
  head: () => ({
    meta: [
      { title: "TELCO — Towell Electrical Projects | Towell Engineering Group" },
      {
        name: "description",
        content:
          "TELCO delivers electrical and instrumentation contracting for the electrical sector, oil & gas, government and industrial clients across the Sultanate of Oman.",
      },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "TELCO", ar: "TELCO" },
  title: { en: "Towell Electrical Projects Co. L.L.C", ar: "شركة توال للمشاريع الكهربائية ش.م.م" },
  desc: {
    en: "Trading and contracting in electrical and instrumentation disciplines — working with electrical sector companies, oil & gas operators, government offices and leading business groups in Oman.",
    ar: "التجارة والمقاولات في تخصصات الكهرباء والأجهزة — العمل مع شركات القطاع الكهربائي ومشغلي النفط والغاز والمكاتب الحكومية ومجموعات الأعمال الرائدة في عمان.",
  },
};

const projects = [
  {
    title:
      "Design, Construction, Operation and Maintenance — Expansion Cell 2, Al-Multaqa Sanitary Landfill",
    location: "Al Amerat, Muscat",
    client: "Suez International",
    nature:
      "Electrical and instrumentation scope for the sanitary landfill expansion, including feeder pillar, panels, cabling, street lighting and PLC terminations.",
    bullets: [
      "1600 A MCCB feeder pillar with metering panel near the existing substation",
      "Local panel near the UF/RO container and timer panel for street lights",
      "LV cabling from transformer to feeder pillar, UF/RO container and street lights",
      "Cable supply, tray routing and terminations at field and PLC ends",
      "Terminations of all signals to the PLC marshalling unit and commissioning support",
    ],
  },
  {
    title: "Electrical & Instrumentation Vendor / Contractor Services",
    client: "Oil & gas, electrical sector and government clients",
    nature:
      "Trading and contracting in electrical and instrumentation disciplines — supply, installation, testing and commissioning of switchgear, panels, cabling and controls for nation-building projects across Oman.",
  },
];

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TELCO"
      name={data.title[isArabic ? "ar" : "en"]}
      hero={
        <PageHero
          eyebrow={data.eyebrow[isArabic ? "ar" : "en"]}
          title={data.title[isArabic ? "ar" : "en"]}
          description={data.desc[isArabic ? "ar" : "en"]}
        />
      }
      projects={projects}
    />
  );
}
