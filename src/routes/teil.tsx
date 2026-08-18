import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImg__ptr from "@/assets/fabrication.jpg.asset.json";

const heroImg = heroImg__ptr.url;

export const Route = createFileRoute("/teil")({
  head: () => ({
    meta: [
      { title: "TEIL — Towell Engineering International | Towell Engineering Group" },
      {
        name: "description",
        content:
          "TEIL is Towell Engineering Group's fabrication facility in Indapur MIDC, Pune — 20 acres with a 10,000 m² covered shed serving steel, oil & gas and infrastructure clients in India.",
      },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "TEIL", ar: "TEIL" },
  title: { en: "Towell Engineering International L.L.P", ar: "توال للهندسة الدولية L.L.P" },
  desc: {
    en: "State-of-the-art fabrication facility at Indapur MIDC, Pune — 20 acres with a 10,000 m² covered shed, bringing the group's international experience to India.",
    ar: "منشأة تصنيع متطورة في إندابور MIDC، بونه — 20 فدانًا بسقيفة مغطاة بمساحة 10,000 متر مربع، تجلب خبرة المجموعة الدولية إلى الهند.",
  },
};

const projects = [
  {
    title: "33 KVA Substation Building",
    location: "Dolvi",
    client: "JSW Steel Ltd",
    duration: "4 months",
    nature: "Design, detailing, fabrication and erection of a 33 KVA substation building.",
  } as const,
  {
    title: "DCPL — Coke Plant Structural Works",
    location: "Dolvi",
    client: "Dolvi Coke Plant Ltd",
    duration: "8 months",
    nature:
      "Design, detailing, fabrication and erection of various structural works — ETP, ammonia recovery, sulphur recovery, benzol, GCM battery, waste heat recovery, BOD building and platforms.",
  } as const,
  {
    title: "Warehouse — PEB Building",
    location: "Jaigarh Port, Ratnagiri",
    client: "JSW Jaigarh Ltd",
    duration: "8 months",
    nature: "Design, detailing, fabrication and erection of a pre-engineered building warehouse.",
  } as const,
  {
    title: "LCP-4 Building",
    location: "Dolvi",
    client: "JSW Steel Ltd",
    duration: "6 months",
    nature:
      "Design, detailing, fabrication and erection of the Lime Calcination Plant building and pipe racks.",
  } as const,
  {
    title: "Coke Feeding System",
    location: "Dolvi",
    client: "JSW Steel Ltd",
    duration: "6 months",
    nature:
      "Design, detailing, fabrication and erection of the coke feeding system — raw material handling.",
  } as const,
  {
    title: "2200 TPD Oxygen Plant",
    location: "Jaigarh Port, Ratnagiri",
    client: "Dolvi",
    duration: "6 months",
    nature: "Design, detailing, fabrication and erection of the oxygen building and pipe racks.",
  } as const,
];

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TEIL"
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
