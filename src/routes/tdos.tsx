import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImgAsset from "@/assets/pipeline.jpg.asset.json";

const heroImg = heroImgAsset.url;

export const Route = createFileRoute("/tdos")({
  head: () => ({
    meta: [
      { title: "TDOS — Towell Drilling & Oilfield Services | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Established in 2008, TDOS operates hydraulic top-drive drilling rigs for top-hole and CBM drilling across Oman and India, with a strong HSE record.",
      },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "TDOS", ar: "TDOS" },
  title: {
    en: "Towell Drilling & Oilfield Services Co. L.L.C",
    ar: "شركة توال للحفر والخدمات النفطية ش.م.م",
  },
  desc: {
    en: "Established in 2008, TDOS operates state-of-the-art hydraulic top-drive drilling rigs for top-hole and coal bed methane drilling in Oman and India.",
    ar: "تأسست في عام 2008، تدير TDOS أحدث أجهزة الحفر الهيدروليكية ذات المحرك العلوي لحفر الثقوب العلوية وغاز الميثان من طبقات الفحم في عمان والهند.",
  },
  intro1: {
    en: "TDOS was established in 2008 as the drilling and oilfield services arm of Towell Engineering Group. The company operates hydraulic top-drive rigs designed for fast, safe top-hole drilling and coal bed methane (CBM) operations, supporting national oil companies and international operators.",
    ar: "تأسست TDOS في عام 2008 كذراع الحفر والخدمات النفطية لمجموعة توال للهندسة. تدير الشركة أجهزة حفر هيدروليكية ذات محرك علوي مصممة للحفر السريع والآمن للثقوب العلوية وعمليات غاز الميثان من طبقات الفحم، لدعم شركات النفط الوطنية والمشغلين الدوليين.",
  },
  intro2: {
    en: "The business is built around a disciplined HSE culture, experienced crews and in-house maintenance capability, allowing rigs to be mobilised and operated reliably in remote desert and field locations across Oman and India.",
    ar: "تم بناء العمل حول ثقافة الصحة والسلامة والبيئة المنضبطة، وأطقم العمل ذات الخبرة وقدرة الصيانة الداخلية، مما يسمح بتجهيز وتشغيل أجهزة الحفر بشكل موثوق في المواقع الصحراوية والحقلية النائية في جميع أنحاء عمان والهند.",
  },
  intro3en:
    "Detailed rig specifications, fleet numbers and operating statistics are available on request — [Client Content Required].",
  intro3ar:
    "مواصفات أجهزة الحفر التفصيلية وأعداد الأسطول وإحصائيات التشغيل متاحة عند الطلب — [محتوى العميل مطلوب].",
  noteTitle: { en: "Projects", ar: "المشاريع" },
  noteDesc: {
    en: "Official project and client references for TDOS have not been released for publication. [Client Content Required] — please provide approved project names, clients and durations and they will be published here in the same format used across the other group companies.",
    ar: "لم يتم الإفراج عن مراجع المشاريع والعملاء الرسمية لـ TDOS للنشر. [محتوى العميل مطلوب] — يرجى تقديم أسماء المشاريع والعملاء والمدة المعتمدة وسيتم نشرها هنا بنفس التنسيق المستخدم في شركات المجموعة الأخرى.",
  },
};

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TDOS"
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
          <p>{isArabic ? data.intro2.ar : data.intro2.en}</p>
          <p>{isArabic ? data.intro3ar : data.intro3en}</p>
        </>
      }
      projects={[]}
      projectsNote={<>{isArabic ? data.noteDesc.ar : data.noteDesc.en}</>}
    />
  );
}
