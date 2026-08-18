import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImgAsset from "@/assets/water-plant.jpg.asset.json";

const heroImg = heroImgAsset.url;

export const Route = createFileRoute("/teg-abu-dhabi")({
  head: () => ({
    meta: [
      { title: "Towell Engineering Group — Abu Dhabi" },
      { name: "description", content: "The Abu Dhabi operation of Towell Engineering Group." },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "Abu Dhabi", ar: "أبو ظبي" },
  title: { en: "Towell Engineering Group — Abu Dhabi", ar: "مجموعة توال للهندسة — أبو ظبي" },
  desc: {
    en: "The group's Abu Dhabi operation, serving oil & gas, industrial and infrastructure clients in the United Arab Emirates.",
    ar: "مكتب المجموعة في أبو ظبي، يخدم عملاء النفط والغاز والصناعة والبنية التحتية في دولة الإمارات العربية المتحدة.",
  },
  intro1: {
    en: "Towell Engineering Group's Abu Dhabi operation brings the group's engineering, fabrication and construction capability to oil & gas, industrial and infrastructure clients in the United Arab Emirates.",
    ar: "يجلب مكتب مجموعة توال للهندسة في أبو ظبي قدرات المجموعة الهندسية والتصنيعية والإنشائية لعملاء النفط والغاز والصناعة والبنية التحتية في دولة الإمارات العربية المتحدة.",
  },
  intro2en:
    "Local registration details, office address and contact information are To be confirmed — [Client Content Required].",
  intro2ar:
    "تفاصيل التسجيل المحلي وعنوان المكتب ومعلومات الاتصال قيد التأكيد — [محتوى العميل مطلوب].",
  note: {
    en: "Project references for the Abu Dhabi operation are To be confirmed — [Client Content Required].",
    ar: "مراجع المشاريع لمكتب أبو ظبي قيد التأكيد — [محتوى العميل مطلوب].",
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
