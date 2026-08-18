import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImgAsset from "@/assets/fabrication.jpg.asset.json";

const heroImg = heroImgAsset.url;

export const Route = createFileRoute("/teg-qatar")({
  head: () => ({
    meta: [
      { title: "Towell Engineering Group — Qatar" },
      { name: "description", content: "The Qatar operation of Towell Engineering Group." },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "Qatar", ar: "قطر" },
  title: { en: "Towell Engineering Group — Qatar", ar: "مجموعة توال للهندسة — قطر" },
  desc: {
    en: "The group's Qatar operation, supporting energy, industrial and infrastructure clients in the State of Qatar.",
    ar: "مكتب المجموعة في قطر، لدعم عملاء الطاقة والصناعة والبنية التحتية في دولة قطر.",
  },
  intro1: {
    en: "Towell Engineering Group's Qatar operation extends the group's engineering, fabrication and construction capability to clients in the State of Qatar, backed by the resources of the parent companies in Oman.",
    ar: "يمتد مكتب مجموعة توال للهندسة في قطر بقدرات المجموعة الهندسية والتصنيعية والإنشائية لعملاء في دولة قطر، مدعوماً بموارد الشركات الأم في عمان.",
  },
  intro2en:
    "Local registration details, office address and contact information are To be confirmed — [Client Content Required].",
  intro2ar:
    "تفاصيل التسجيل المحلي وعنوان المكتب ومعلومات الاتصال قيد التأكيد — [محتوى العميل مطلوب].",
  note: {
    en: "Project references for the Qatar operation are To be confirmed — [Client Content Required].",
    ar: "مراجع المشاريع لمكتب قطر قيد التأكيد — [محتوى العميل مطلوب].",
  },
};

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TEG"
      name={data.title[isArabic ? "ar" : "en"]}
      hero={
        <PageHero
          eyebrow={data.eyebrow[isArabic ? "ar" : "en"]}
          title={data.title[isArabic ? "ar" : "en"]}
          description={data.desc[isArabic ? "ar" : "en"]}
        />
      }
      intro={
        <>
          <p>{isArabic ? data.intro1.ar : data.intro1.en}</p>
          <p>{isArabic ? data.intro2ar : data.intro2en}</p>
        </>
      }
      projects={[]}
      projectsNote={<>{isArabic ? data.note.ar : data.note.en}</>}
    />
  );
}
