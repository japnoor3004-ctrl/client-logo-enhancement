import { useLang } from "@/contexts/language";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/vendor-registration")({
  head: () => ({
    meta: [
      { title: "Vendor Registration | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Register as a supplier, subcontractor or service provider with Towell Engineering Group companies in Oman and the GCC.",
      },
      { property: "og:title", content: "Vendor Registration | Towell Engineering Group" },
      {
        property: "og:description",
        content:
          "Become an approved vendor for Towell Engineering Group's infrastructure, oil & gas and construction companies.",
      },
    ],
  }),
  component: VendorPage,
});

const steps = [
  {
    n: "01",
    title_en: "Prepare your documents",
    title_ar: "جهز مستنداتك",
    text_en:
      "Commercial registration, Chamber of Commerce certificate, VAT/tax card, ISO or HSE certifications, company profile and past performance references.",
    text_ar:
      "السجل التجاري وشهادة الغرفة التجارية وبطاقة الضريبة وشهادات ISO وشهادات الصحة والسلامة والملف الشخصي للشركة ومراجع الأداء السابق.",
  },
  {
    n: "02",
    title_en: "Submit your application",
    title_ar: "تقديم طلبك",
    text_en:
      "Email the completed vendor registration pack to our procurement team, stating the categories of supply or services you wish to be registered for.",
    text_ar:
      "أرسل حزمة تسجيل الموردين المكتملة إلى فريق المشتريات لديك، مع ذكر فئات التوريد أو الخدمات التي ترغب في التسجيل لها.",
  },
  {
    n: "03",
    title_en: "Evaluation & approval",
    title_ar: "التقييم والموافقة",
    text_en:
      "Our procurement, QA/QC and HSE teams assess capability, compliance and sustainability performance before adding you to the approved vendor list.",
    text_ar:
      "تقوم فرق المشتريات وضمان الجودة والسلامة بتقييم القدرة والامتثال وأداء الاستدامة قبل إضافتك إلى قائمة الموردين المعتمدين.",
  },
];

function VendorPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "تسجيل الموردين" : "Vendor Registration"}
        title={
          isArabic ? "كن شريكاً مع مجموعة تويل للهندسة" : "Partner with Towell Engineering Group"
        }
        description={
          isArabic
            ? "نعمل مع الموردين والمقاولين من الباطن ومقدمي الخدمات الذين يشاركوننا معاييرنا للجودة والسلامة والمسؤولية البيئية."
            : "We work with suppliers, subcontractors and service providers who share our standards for quality, safety and environmental responsibility."
        }
      />
      <section className="mx-auto max-w-5xl px-5 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <article key={s.n} className="rounded-xl border border-border bg-card p-6 shadow-soft">
              <span className="font-display text-3xl font-extrabold text-accent-strong">{s.n}</span>
              <h2 className="mt-3 text-lg">{isArabic ? s.title_ar : s.title_en}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {isArabic ? s.text_ar : s.text_en}
              </p>
            </article>
          ))}
        </div>
        <form
          className="mt-14 rounded-xl border border-border bg-card p-7 shadow-soft"
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-xl">
            {isArabic ? "استفسار تسجيل مورد" : "Vendor registration enquiry"}
          </h2>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            {[
              { en: "Company name", ar: "اسم الشركة" },
              { en: "Contact person", ar: "جهة الاتصال" },
              { en: "Email address", ar: "البريد الإلكتروني" },
              { en: "Telephone", ar: "الهاتف" },
              { en: "Commercial registration no.", ar: "رقم السجل التجاري" },
              { en: "Country of registration", ar: "دولة التسجيل" },
              { en: "Category of supply / service", ar: "فئة التوريد / الخدمة" },
              { en: "Website", ar: "الموقع الإلكتروني" },
            ].map((f) => (
              <label key={f.en} className="block text-sm font-medium">
                {isArabic ? f.ar : f.en}
                <input
                  type="text"
                  className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
                />
              </label>
            ))}
          </div>
          <label className="mt-5 block text-sm font-medium">
            {isArabic ? "وصف مختصر للشركة" : "Brief company description"}
            <textarea
              rows={4}
              className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-ring/30"
            />
          </label>
          <button
            type="submit"
            className="mt-6 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {isArabic ? "إرسال الاستفسار" : "Submit enquiry"}
          </button>
          <p className="mt-4 text-xs text-muted-foreground">
            {isArabic
              ? "يمكنك أيضاً إرسال حزمة التسجيل مباشرة إلى"
              : "You may also email your registration pack directly to"}{" "}
            <a
              className="text-primary underline underline-offset-4"
              href="mailto:teg@towellengineering.com"
            >
              teg@towellengineering.com
            </a>
            .
          </p>
        </form>
      </section>
    </>
  );
}
