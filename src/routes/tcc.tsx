import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImgAsset from "@/assets/construction.jpg.asset.json";

const heroImg = heroImgAsset.url;

export const Route = createFileRoute("/tcc")({
  head: () => ({
    meta: [
      { title: "TCC — Towell Construction | Towell Engineering Group" },
      {
        name: "description",
        content:
          "TCC is an 'Excellent' grade civil construction and electro-mechanical contractor delivering industrial buildings, warehouses and factories across the Sultanate of Oman.",
      },
    ],
  }),
  component: Page,
});

const projects = [
  {
    title: "Sandan Industrial Light City",
    location: "Halban",
    client: "Sandan",
    nature: "Industrial development with a built-up area of 170,000 m².",
  },
  {
    title: "Civil Works for Pelletising Plant",
    location: "Sohar",
    client: "Vale, Brazil",
    nature: "Civil works for a steel pelletising plant of 9 million tons per annum capacity.",
  },
  {
    title: "Future Pipes Industries Warehouse",
    location: "Sohar",
    client: "Future Pipes Industries",
    nature: "Industrial warehouse with a built-up area of 4,000 m².",
  },
  {
    title: "Jotun New Factory",
    location: "Rusail",
    client: "Jotun, Norway",
    nature: "Industrial factory with a built-up area of 22,000 m².",
  },
  {
    title: "Civil Works for Steel Rolling Mills",
    location: "Sohar",
    client: "Sharq Sohar",
    nature: "Civil works for a steel rolling mill of 800 tons per day capacity.",
  },
];

const data = {
  eyebrow: { en: "TCC", ar: "TCC" },
  title: { en: "Towell Construction & Co. L.L.C", ar: "شركة توال للمقاولات ش.م.م" },
  desc: {
    en: "An 'Excellent' grade construction company delivering civil construction and allied electro-mechanical works. Landmark projects successfully completed in Muscat, Sur, Sohar and other regions of Oman.",
    ar: "شركة مقاولات من الدرجة الممتازة تقدم أعمال البناء المدني والأعمال الكهروميكانيكية المساندة. تم إنجاز مشاريع بارزة في مسقط وصور وصحار ومناطق أخرى من سلطنة عمان.",
  },
};

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TCC"
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
