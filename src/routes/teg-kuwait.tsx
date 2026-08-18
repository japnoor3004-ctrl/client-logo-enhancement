import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImgAsset from "@/assets/refinery.jpg.asset.json";

const heroImg = heroImgAsset.url;

export const Route = createFileRoute("/teg-kuwait")({
  head: () => ({
    meta: [
      { title: "Towell Engineering Group — Kuwait" },
      { name: "description", content: "The Kuwait operation of Towell Engineering Group." },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "Kuwait", ar: "الكويت" },
  title: { en: "Towell Engineering Group — Kuwait", ar: "مجموعة توال للهندسة — الكويت" },
  desc: {
    en: "The group's Kuwait operation, extending Towell Engineering's project delivery capability across the northern GCC.",
    ar: "مكتب المجموعة في الكويت، لتوسيع قدرة توال للهندسة على تسليم المشاريع عبر شمال دول مجلس التعاون الخليجي.",
  },
  intro1: {
    en: "Towell Engineering Group's Kuwait operation supports energy, industrial and infrastructure clients in the State of Kuwait, drawing on the engineering, fabrication and construction resources of the wider group.",
    ar: "يدعم مكتب مجموعة توال للهندسة في الكويت عملاء الطاقة والصناعة والبنية التحتية في دولة الكويت، بالاعتماد على الموارد الهندسية والتصنيعية والإنشائية للمجموعة الأوسع.",
  },
  intro2en:
    "Local registration details, office address and contact information are To be confirmed — [Client Content Required].",
  intro2ar:
    "تفاصيل التسجيل المحلي وعنوان المكتب ومعلومات الاتصال قيد التأكيد — [محتوى العميل مطلوب].",
  note: {
    en: "Project references for the Kuwait operation are To be confirmed — [Client Content Required].",
    ar: "مراجع المشاريع لمكتب الكويت قيد التأكيد — [محتوى العميل مطلوب].",
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
