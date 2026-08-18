/**
 * Single source of truth for the Towell Engineering Group companies.
 * Content is taken from the official group profile (towellengineering.net).
 * Anything not officially published is explicitly marked as
 * "To be confirmed" / "[Client Content Required]" — never invented.
 */

export const FOUNDING_YEAR = 2001;

export function yearsOfExcellence(now: Date = new Date()) {
  return now.getFullYear() - FOUNDING_YEAR;
}

export type TranslationSet = { en: string; ar: string };

export type GroupCompany = {
  slug:
    | "/tipco"
    | "/tesco"
    | "/unisco"
    | "/telco"
    | "/tcc"
    | "/teil"
    | "/tdos"
    | "/two"
    | "/teg-kuwait"
    | "/teg-qatar"
    | "/teg-abu-dhabi"
    | "/nxtlevvel-biochem";
  code: string;
  name: TranslationSet;
  tag: TranslationSet;
  description: TranslationSet;
};

export const GROUP_COMPANIES: GroupCompany[] = [
  {
    slug: "/tipco",
    code: "TIPCO",
    name: {
      en: "Towell Infrastructure Projects Co. L.L.C",
      ar: "شركة توال لمشاريع البنية التحتية ش.م.م",
    },
    tag: {
      en: "Excellent Grade EPC",
      ar: "هندسة ومشتريات وبناء من الدرجة الممتازة",
    },
    description: {
      en: "Flagship EPC company delivering water, roads, reservoirs and infrastructure projects across the Sultanate of Oman.",
      ar: "الشركة الرائدة في مجال الهندسة والمشتريات والبناء، تقدم مشاريع المياه والطرق والخزانات والبنية التحتية في جميع أنحاء سلطنة عمان.",
    },
  },
  {
    slug: "/tesco",
    code: "TESCO",
    name: {
      en: "Towell Engineering Services Co. L.L.C",
      ar: "شركة توال للخدمات الهندسية ش.م.م",
    },
    tag: {
      en: "Oil, Gas & Power",
      ar: "النفط والغاز والطاقة",
    },
    description: {
      en: "EPC, construction and engineered products for oil & gas, refinery, petrochemical and power industries — ISO 9001, OHSAS 18001, ISO 14001 accredited.",
      ar: "الهندسة والمشتريات والبناء والمنتجات الهندسية لصناعات النفط والغاز والتكرير والبتروكيماويات والطاقة — معتمدة بـ ISO 9001 و OHSAS 18001 و ISO 14001.",
    },
  },
  {
    slug: "/unisco",
    code: "UNISCO",
    name: {
      en: "United Industrial Services Co. L.L.C",
      ar: "شركة الخدمات الصناعية المتحدة ش.م.م",
    },
    tag: {
      en: "Steel Fabrication",
      ar: "تصنيع الصلب",
    },
    description: {
      en: "The largest steel fabrication company in the Sultanate of Oman — structural steel, pipe spools and cladding for major EPC contractors across the GCC.",
      ar: "أكبر شركة تصنيع صلب في سلطنة عمان — صلب إنشائي وأنابيب مجمعة وكساء لمقاولي الهندسة والمشتريات والبناء الرائديين في دول مجلس التعاون الخليجي.",
    },
  },
  {
    slug: "/telco",
    code: "TELCO",
    name: {
      en: "Towell Electrical Projects Co. L.L.C",
      ar: "شركة توال للمشاريع الكهربائية ش.م.م",
    },
    tag: {
      en: "Electrical & Instrumentation",
      ar: "كهرباء وأجهزة",
    },
    description: {
      en: "Electrical and instrumentation contracting for the electrical sector, oil & gas, government and industrial clients across Oman.",
      ar: "مقاولات الكهرباء والأجهزة لشركات القطاع الكهربائي وعملاء النفط والغاز والحكومة والصناعة في جميع أنحاء عمان.",
    },
  },
  {
    slug: "/tcc",
    code: "TCC",
    name: {
      en: "Towell Construction & Co. L.L.C",
      ar: "شركة توال للمقاولات ش.م.م",
    },
    tag: {
      en: "Civil & Electro-mechanical",
      ar: "أعمال مدنية وكهروميكانيكية",
    },
    description: {
      en: "'Excellent' grade civil and electro-mechanical contractor for industrial buildings, warehouses and factories across the Sultanate of Oman.",
      ar: "مقاولات مدنية وكهروميكانيكية من الدرجة الممتازة للمباني الصناعية والمستودعات والمصانع في جميع أنحاء سلطنة عمان.",
    },
  },
  {
    slug: "/teil",
    code: "TEIL",
    name: {
      en: "Towell Engineering International L.L.P",
      ar: "توال للهندسة الدولية L.L.P",
    },
    tag: {
      en: "India Operations",
      ar: "العمليات في الهند",
    },
    description: {
      en: "Indapur MIDC (Pune) fabrication facility — 20 acres with a 10,000 m² covered shed serving steel, oil & gas and infrastructure clients across India.",
      ar: "منشأة التصنيع في إندابور MIDC (بونه) — 20 فدانًا بسقيفة مغطاة 10,000 متر مربع تخدم عملاء الصلب والنفط والغاز والبنية التحتية في جميع أنحاء الهند.",
    },
  },
  {
    slug: "/tdos",
    code: "TDOS",
    name: {
      en: "Towell Drilling & Oilfield Services Co. L.L.C",
      ar: "شركة توال للحفر والخدمات النفطية ش.م.م",
    },
    tag: {
      en: "Drilling & Oilfield",
      ar: "حفر وخدمات نفطية",
    },
    description: {
      en: "Established in 2008. Hydraulic top-drive rigs for top-hole and CBM drilling in Oman and India, with an impeccable safety record and PDO Goal Zero recognition.",
      ar: "تأسست في عام 2008. أجهزة حفر هيدروليكية ذات محرك علوي للحفر العلوي وغاز الميثان من طبقات الفحم في عمان والهند، مع سجل سلامة مثالي وتقدير هدف الصفر من قبل هيئة البترول العمانية.",
    },
  },
  {
    slug: "/two",
    code: "TWO",
    name: {
      en: "Taylor Woodrow Oman",
      ar: "تايلور وودرو عمان",
    },
    tag: {
      en: "Large Civil & Building",
      ar: "أعمال مدنية وإنشائية كبرى",
    },
    description: {
      en: "One of the oldest 'Excellent' grade construction companies in Oman — part of the Towell Group since 1973 — specialised in defence, oil & gas and power sectors.",
      ar: "واحدة من أقدم شركات المقاولات من الدرجة الممتازة في عمان — جزء من مجموعة توال منذ عام 1973 — متخصصة في قطاعات الدفاع والنفط والغاز والطاقة.",
    },
  },
  {
    slug: "/teg-kuwait",
    code: "KUWAIT",
    name: {
      en: "Towell Engineering Group — Kuwait",
      ar: "مجموعة توال للهندسة — الكويت",
    },
    tag: {
      en: "Regional Operation",
      ar: "عمل إقليمي",
    },
    description: {
      en: "The group's Kuwait operation, extending Towell Engineering's project delivery capability across the northern GCC.",
      ar: "مكتب المجموعة في الكويت، لتوسيع قدرة توال للهندسة على تسليم المشاريع عبر شمال دول مجلس التعاون الخليجي.",
    },
  },
  {
    slug: "/teg-qatar",
    code: "QATAR",
    name: {
      en: "Towell Engineering Group — Qatar",
      ar: "مجموعة توال للهندسة — قطر",
    },
    tag: {
      en: "Regional Operation",
      ar: "عمل إقليمي",
    },
    description: {
      en: "The group's Qatar operation, supporting energy, industrial and infrastructure clients in the State of Qatar.",
      ar: "مكتب المجموعة في قطر، لدعم عملاء الطاقة والصناعة والبنية التحتية في دولة قطر.",
    },
  },
  {
    slug: "/teg-abu-dhabi",
    code: "ABU DHABI",
    name: {
      en: "Towell Engineering Group — Abu Dhabi",
      ar: "مجموعة توال للهندسة — أبو ظبي",
    },
    tag: {
      en: "Regional Operation",
      ar: "عمل إقليمي",
    },
    description: {
      en: "The group's Abu Dhabi operation, serving oil & gas, industrial and infrastructure clients in the United Arab Emirates.",
      ar: "مكتب المجموعة في أبو ظبي، لخدمة عملاء النفط والغاز والصناعة والبنية التحتية في دولة الإمارات العربية المتحدة.",
    },
  },
  {
    slug: "/nxtlevvel-biochem",
    code: "NXTLEVVEL BIOCHEM",
    name: {
      en: "NXTLEVVEL BIOCHEM",
      ar: "نكست ليفل بيوكيم",
    },
    tag: {
      en: "Biochemicals & Green Chemistry",
      ar: "الكيماويات الحيوية والكيمياء الخضراء",
    },
    description: {
      en: "The biochemicals arm of Towell Engineering Group — bio-based chemistry and sustainable process solutions for industry.",
      ar: "الذراع الكيميائية الحيوية لمجموعة توال للهندسة — كيمياء قائمة على المصادر الحيوية وحلول عمليات مستدامة للصناعة.",
    },
  },
];

export const COMPANY_COUNT = GROUP_COMPANIES.length;

/** Compact list used by the header dropdown, footer and mobile menu. */
export const COMPANY_LINKS = GROUP_COMPANIES.map((c) => ({
  to: c.slug,
  label: c.code,
}));

export const CONTENT_REQUIRED = "[Client Content Required]";
export const TO_BE_CONFIRMED = "To be confirmed";
