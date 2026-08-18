import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { CompanyLayout } from "@/components/site/CompanyLayout";
import { useLang } from "@/contexts/language";
import heroImg from "@/assets/construction.jpg";

export const Route = createFileRoute("/two")({
  head: () => ({
    meta: [
      { title: "TWO — Taylor Woodrow Oman | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Taylor Woodrow Oman is one of the oldest 'Excellent' grade construction companies in Oman.",
      },
    ],
  }),
  component: Page,
});

const data = {
  eyebrow: { en: "TWO", ar: "TWO" },
  title: { en: "Taylor Woodrow Oman", ar: "تايلور وودرو عمان" },
  desc: {
    en: "One of the oldest 'Excellent' grade construction companies in the Sultanate of Oman — associated with the Towell Group since 1973 and fully owned by W.J. Towell since 2016.",
    ar: "واحدة من أقدم شركات المقاولات من الدرجة الممتازة في سلطنة عمان — مرتبطة بمجموعة توال منذ عام 1973 ومملوكة بالكامل لشركة W.J. Towell منذ عام 2016.",
  },
  intro1: {
    en: "Taylor Woodrow Oman has been building in the Sultanate for more than five decades. Associated with the Towell Group since 1973 and wholly owned by W.J. Towell since 2016, the company holds an 'Excellent' grade classification for large civil and building works.",
    ar: "تعمل تايلور وودرو عمان في البناء في السلطنة لأكثر من خمسة عقود. مرتبطة بمجموعة توال منذ عام 1973 ومملوكة بالكامل لشركة W.J. Towell منذ عام 2016، وتحمل تصنيف الدرجة الممتازة للأعمال المدنية والإنشائية الكبيرة.",
  },
  intro2: {
    en: "Its experience spans the defence, oil & gas and power sectors, together with commercial buildings and heavy civil infrastructure, delivered with the quality, safety and programme discipline expected on nationally significant projects.",
    ar: "تمتد خبرتها لتشمل قطاعات الدفاع والنفط والغاز والطاقة، بالإضافة إلى المباني التجارية والبنية التحتية المدنية الثقيلة، التي يتم تسليمها بجودة وسلامة وانضباط برمجي متوقع في المشاريع ذات الأهمية الوطنية.",
  },
  intro3en:
    "Company profile details, certifications and current capability statements are pending client confirmation — [Client Content Required].",
  intro3ar:
    "تفاصيل الملف التعريفي للشركة والشهادات وبيانات القدرات الحالية في انتظار تأكيد العميل — [محتوى العميل مطلوب].",
  note: {
    en: "Approved project references for Taylor Woodrow Oman are To be confirmed. No project names or clients are shown until official details are supplied — [Client Content Required].",
    ar: "مراجع المشاريع المعتمدة لشركة تايلور وودرو عمان قيد التأكيد. لن يتم عرض أسماء المشاريع أو العملاء حتى يتم توفير التفاصيل الرسمية — [محتوى العميل مطلوب].",
  },
};

function Page() {
  const { isArabic } = useLang();
  return (
    <CompanyLayout
      code="TWO"
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
      projectsNote={<>{isArabic ? data.note.ar : data.note.en}</>}
    />
  );
}
