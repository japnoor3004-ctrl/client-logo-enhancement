import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImg__ptr from "@/assets/pipeline.jpg.asset.json";

const heroImg = heroImg__ptr.url;

export const Route = createFileRoute("/tipco")({
  head: () => ({
    meta: [
      { title: "TIPCO — Towell Infrastructure Projects | Towell Engineering Group" },
      {
        name: "description",
        content: "TIPCO is the flagship 'Excellent Grade' EPC company of Towell Engineering Group.",
      },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "TIPCO", ar: "TIPCO" },
  title: {
    en: "Towell Infrastructure Projects Co. L.L.C",
    ar: "شركة توال لمشاريع البنية التحتية ش.م.م",
  },
  desc: {
    en: "The flagship 'Excellent Grade' Engineering, Procurement and Construction company of Towell Engineering Group — operating in all infrastructure sectors of the Sultanate of Oman.",
    ar: "شركة الهندسة والمشتريات والبناء الرائدة من الدرجة الممتازة لمجموعة توال للهندسة — تعمل في جميع قطاعات البنية التحتية في سلطنة عمان.",
  },
  intro: {
    en: "TIPCO is accredited with integrated quality management certifications of ISO 9001, OHSAS 18001 and ISO 14001 covering all its operations. The company delivers water transmission and distribution networks, reservoirs, pumping stations, roads and industrial estate infrastructure across the Sultanate.",
    ar: "TIPCO معتمدة بشهادات إدارة الجودة المتكاملة ISO 9001 و OHSAS 18001 و ISO 14001 التي تغطي جميع عملياتها. تقدم الشركة شبكات نقل وتوزيع المياه والخزانات ومحطات الضخ والطرق والبنية التحتية للمناطق الصناعية في جميع أنحاء السلطنة.",
  },
};

const projects = [
  {
    title: "CMEI Works for Sohar Refinery Improvement Project",
    location: "Sohar, Sultanate of Oman",
    client: "Daelim Petrofac JV (ORPIC)",
    nature:
      "Complete civil, mechanical, electrical and instrumentation works valued at USD 31.10 million — foundations for pipe sleepers, pumps, MTBE tank, bullets and tank pads; piping fabrication, installation, painting, NDT, testing and commissioning including tie-ins and spools; erection of rotary and static equipment such as bullets, the desalter package and pumps; erection of transformers, switchgears and MCC panels with cabling; and installation of complete field instruments and control valves.",
  } as const,
  {
    title: "Expansion of Water Distribution Networks in Bausher Wilayat — Package 1",
    location: "Bawsher",
    client: "Public Authority for Electricity and Water (PAEW)",
    nature:
      "Challenging inner-city project including construction of an elevated tank, ground reservoirs, pump station, tanker filling station and associated electrical, mechanical, SCADA and telecommunication works. The network consists of 146 km of DI and HDPE pipelines from 800 mm to 110 mm diameter.",
  } as const,
  {
    title: "Duqm Refinery EPC-1 Package 0",
    location: "Duqm",
    client: "Tecnicas Reunidas — Daewoo JV",
    nature:
      "Site preparation, temporary facilities and enabling infrastructure works for the largest EPC package of the Duqm refinery.",
  } as const,
  {
    title: "Water Transmission Lines TL01 & TL02",
    location: "Muscat",
    nature:
      "Almost 6,000 m of transmission pipeline for the Asian Beach Games site, delivered ahead of the stipulated time.",
  } as const,
];

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TIPCO"
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
