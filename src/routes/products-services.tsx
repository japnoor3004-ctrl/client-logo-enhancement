import { useLang } from "@/contexts/language";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";

export const Route = createFileRoute("/products-services")({
  head: () => ({
    meta: [
      { title: "Products & Services | Towell Engineering Group" },
      {
        name: "description",
        content:
          "Material handling equipment, oil & gas process packages, water treatment plants, loading arms, power generation spares and flow control products supplied by TESCO.",
      },
      { property: "og:title", content: "Products & Services | Towell Engineering Group" },
      {
        property: "og:description",
        content:
          "Cranes and hoists, gas sweetening plants, desalination and sewage treatment, loading arms, valves and power generation spares.",
      },
    ],
  }),
  component: ProductsPage,
});

const groups = [
  {
    title_en: "Material Handling Services & Spares",
    title_ar: "خدمات المناولة وقطع الغيار",
    intro_en: "TESCO supplies an extensive range of material handling products such as:",
    intro_ar: "توريد مجموعة واسعة من منتجات المناولة مثل:",
    items: [
      { en: "Overhead cranes", ar: "رافعات علوية" },
      { en: "Underhung cranes", ar: "رافعات معلقة" },
      { en: "Portal cranes or gantry cranes", ar: "رافعات بوابية" },
      { en: "Jib cranes", ar: "رافعات ذراعية" },
      { en: "Wire rope hoists", ar: "روافع حبال سلكية" },
      { en: "Electric chain hoists", ar: "روافع سلسلة كهربائية" },
      { en: "Maintenance of existing overhead cranes", ar: "صيانة الرافعات العلوية الحالية" },
    ],
    note_en:
      "We also provide complete crane kits and crane components, with excellence in product development and customisation.",
    note_ar: "نوفر أيضاً مجموعات رافعات كاملة ومكوناتها مع التميز في تطوير المنتج وتخصيصه.",
  },
  {
    title_en: "Oil & Gas Process Equipment",
    title_ar: "معدات معالجة النفط والغاز",
    intro_en: "TESCO is involved in the supply of engineered products such as:",
    intro_ar: "توريد منتجات هندسية مثل:",
    items: [
      { en: "Gas sweetening / dehydration plants", ar: "محطات تحلية / تجفيف الغاز" },
      { en: "Fuel / gas conditioning skids", ar: "منصات تكييف الوقود / الغاز" },
      { en: "Dew point control units", ar: "وحدات التحكم بنقطة الندى" },
      { en: "Solid removal & handling systems", ar: "أنظمة إزالة المواد الصلبة" },
      { en: "De-sander & de-oiling units", ar: "وحدات إزالة الرمل والزيت" },
      { en: "Produced water treatment packages", ar: "حزم معالجة المياه المنتجة" },
      { en: "Air coolers", ar: "مبردات هواء" },
      { en: "Direct & indirect fired heaters", ar: "سخانات مباشرة وغير مباشرة" },
      { en: "Electrical heaters", ar: "سخانات كهربائية" },
    ],
  },
  {
    title_en: "Critical Equipment",
    title_ar: "المعدات الحرجة",
    intro_en: "TESCO also supplies critical equipment such as:",
    intro_ar: "توريد معدات حرجة مثل:",
    items: [
      { en: "Columns & their internals", ar: "الأعمدة ومكوناتها الداخلية" },
      { en: "Reactors", ar: "مفاعلات" },
      { en: "High pressure vessels", ar: "أوعية ضغط عالي" },
      { en: "Boilers", ar: "غلايات" },
      {
        en: "Heat exchangers including stainless steel, duplex & titanium",
        ar: "مبادلات حرارية تشمل الفولاذ المقاوم للصدأ والتيتانيوم",
      },
    ],
  },
  {
    title_en: "Water Treatment Equipment",
    title_ar: "معدات معالجة المياه",
    intro_en: "Sustainable water solutions supplied and maintained by TESCO:",
    intro_ar: "حلول مياه مستدامة من TESCO:",
    items: [
      { en: "Reverse osmosis", ar: "التناضح العكسي" },
      { en: "Sewage treatment plants", ar: "محطات معالجة الصرف الصحي" },
      { en: "Desalination plants", ar: "محطات تحلية المياه" },
      { en: "Odour control plants", ar: "محطات التحكم بالروائح" },
      {
        en: "Performance monitoring and chemical supply",
        ar: "مراقبة الأداء وتوريد المواد الكيميائية",
      },
    ],
  },
  {
    title_en: "Loading Arms & Tank Related Products",
    title_ar: "أذرع التحميل ومنتجات الخزانات",
    intro_en: "Products supplied:",
    intro_ar: "المنتجات الموردة:",
    items: [
      { en: "Truck loading arms", ar: "أذرع تحميل الشاحنات" },
      { en: "Marine loading arms", ar: "أذرع تحميل بحرية" },
      { en: "Flow metering skids", ar: "منصات قياس التدفق" },
      { en: "Aluminium dome roofs for storage tanks", ar: "أسقف قبة ألومنيوم للخزانات" },
      { en: "Internal & external floating roofs", ar: "أسقف عائمة داخلية وخارجية" },
    ],
  },
  {
    title_en: "Power Generation Spares",
    title_ar: "قطع غيار توليد الطاقة",
    intro_en:
      "TESCO supports with the supply of spares for power generating equipment and periodical maintenance.",
    intro_ar: "توريد قطع غيار لمعدات توليد الطاقة والصيانة الدورية.",
    items: [],
  },
  {
    title_en: "Flow Control Products",
    title_ar: "منتجات التحكم في التدفق",
    intro_en: "Products for water, gas and sewage industries including:",
    intro_ar: "منتجات لصناعات المياه والغاز والصرف الصحي تشمل:",
    items: [
      { en: "Gate valves", ar: "صمامات بوابة" },
      { en: "Butterfly valves", ar: "صمامات فراشة" },
      { en: "Air valves", ar: "صمامات هواء" },
      { en: "Swing check valves", ar: "صمامات فحص تأرجحية" },
    ],
    note_en:
      "Most of the valves are produced to international standards such as ISO, CEN, DIN, NF, BS, AWWA.",
    note_ar: "معظم الصمامات منتجة وفق المعايير الدولية مثل ISO, CEN, DIN, NF, BS, AWWA.",
  },
];

function ProductsPage() {
  const { isArabic } = useLang();

  return (
    <>
      <PageHero
        eyebrow={isArabic ? "المنتجات والخدمات" : "Products & Services"}
        title={
          isArabic
            ? "منتجات هندسية للطاقة والمياه والصناعة"
            : "Engineered products for energy, water and industry"
        }
        description={
          isArabic
            ? "موردة ومركبة ومصانة من قبل شركة تويل للخدمات الهندسية (TESCO)."
            : "Supplied, installed and maintained by Towell Engineering Services Co. L.L.C (TESCO) and its partner principals."
        }
      />
      <section className="mx-auto max-w-[1600px] px-5 py-20 md:py-24">
        <div className="grid gap-6 md:grid-cols-2">
          {groups.map((g) => (
            <article
              key={g.title_en}
              className="rounded-xl border border-border bg-card p-7 shadow-soft"
            >
              <h2 className="text-xl text-primary">{isArabic ? g.title_ar : g.title_en}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {isArabic ? g.intro_ar : g.intro_en}
              </p>
              {g.items.length > 0 && (
                <ul className="mt-4 grid gap-2 text-sm text-foreground/85">
                  {g.items.map((i) => (
                    <li key={i.en} className="flex gap-2">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                      {isArabic ? i.ar : i.en}
                    </li>
                  ))}
                </ul>
              )}
              {g.note_en && (
                <p className="mt-4 border-t border-border pt-4 text-xs leading-relaxed text-muted-foreground">
                  {isArabic ? g.note_ar : g.note_en}
                </p>
              )}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
