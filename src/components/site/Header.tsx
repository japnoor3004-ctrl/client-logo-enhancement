import { Link, useNavigate } from "@tanstack/react-router";
import { Search, Globe } from "lucide-react";
import { TEG_LOGO_URL } from "@/lib/company-logos";
import { useLang } from "@/contexts/language";
import { COMPANY_LINKS } from "@/lib/companies";
import { StaggeredMenu } from "./StaggeredMenu";
import { DesktopMegaMenu } from "./DesktopMegaMenu";
import FoldText from "./FoldText";

const companies = COMPANY_LINKS;

const primary = [
  { to: "/", en: "Home", ar: "الرئيسية" },
  { to: "/about-us", en: "About Us", ar: "من نحن" },
  { to: "/products-services", en: "Products & Services", ar: "المنتجات والخدمات" },
  { to: "/projects", en: "Projects", ar: "المشاريع" },
  { to: "/careers", en: "Careers", ar: "الوظائف" },
  { to: "/media", en: "Media", ar: "الإعلام" },
  { to: "/hse", en: "HSE", ar: "الصحة والسلامة" },
  { to: "/certificates", en: "Certificates", ar: "الشهادات" },
  { to: "/vendor-registration", en: "Vendor Registration", ar: "تسجيل الموردين" },
  { to: "/contact-us", en: "Contact Us", ar: "اتصل بنا" },
] as const;

/** Nav items for the StaggeredMenu — Companies is an expandable group */
function buildMenuItems(isArabic: boolean) {
  return [
    { label: isArabic ? "الرئيسية" : "Home", link: "/" },
    {
      label: isArabic ? "من نحن" : "About Us",
      link: "/about-us",
      children: [
        { label: isArabic ? "عن المجموعة" : "About TEG", link: "/about-us" },
        { label: isArabic ? "القيادة" : "Leadership", link: "/about-us#leadership" },
        { label: isArabic ? "الأشخاص في تويل" : "People at TEG", link: "/people-at-teg" },
        { label: isArabic ? "الاستدامة" : "Sustainability", link: "/sustainability" },
        { label: isArabic ? "المسؤولية الاجتماعية" : "CSR", link: "/csr" },
      ],
    },
    {
      label: isArabic ? "الشركات" : "COMPANIES",
      link: "/group-companies",
      children: companies.map((c) => ({ label: c.label, link: c.to })),
    },
    { label: isArabic ? "المنتجات والخدمات" : "Products & Services", link: "/products-services" },
    { label: isArabic ? "المشاريع" : "Projects", link: "/projects" },
    { label: isArabic ? "الوظائف" : "Careers", link: "/careers" },
    { label: isArabic ? "الإعلام" : "Media", link: "/media" },
    { label: isArabic ? "الصحة والسلامة" : "HSE", link: "/hse" },
    { label: isArabic ? "الشهادات" : "Certificates", link: "/certificates" },
    { label: isArabic ? "تسجيل الموردين" : "Vendor Registration", link: "/vendor-registration" },
    { label: isArabic ? "اتصل بنا" : "Contact Us", link: "/contact-us" },
  ];
}

const SOCIAL_ITEMS = [
  { label: "LinkedIn", link: "https://www.linkedin.com/company/towell-engineering-group" },
];

export function Header() {
  const { isArabic, toggleLang } = useLang();
  const navigate = useNavigate();

  return (
    <>
      {/* ── Desktop header (hidden on mobile) ── */}
      <header className="sticky top-0 z-50 hidden border-b-2 border-accent bg-background/95 shadow-soft backdrop-blur-md lg:block">
        <div className="h-1 w-full bg-[image:var(--gradient-leaf)]" />
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-6 px-5 py-3">
          <Link to="/" className="flex items-center gap-3">
            <span className="flex size-16 items-center justify-center overflow-hidden rounded-xl bg-white ring-2 ring-accent shadow-[0_0_0_4px_color-mix(in_oklab,var(--accent)_18%,transparent)] transition-transform duration-300 hover:scale-105">
              <img
                src={TEG_LOGO_URL}
                alt="Towell Engineering Group"
                width={64}
                height={64}
                className="h-full w-full object-contain p-1.5"
              />
            </span>

            <span className="leading-tight">
              <FoldText
                key={isArabic ? "ar-1" : "en-1"}
                tag="span"
                text={isArabic ? "توال للهندسة" : "Towell Engineering"}
                splitBy="char"
                duration={0.55}
                stagger={0.035}
                className="block font-display text-sm font-extrabold tracking-[0.16em] text-primary uppercase"
              />
              <FoldText
                key={isArabic ? "ar-2" : "en-2"}
                tag="span"
                text={isArabic ? "المجموعة" : "Group"}
                splitBy="char"
                duration={0.5}
                stagger={0.04}
                delay={0.25}
                className="block text-[11px] tracking-[0.28em] text-muted-foreground uppercase"
              />
            </span>
          </Link>

          <nav className="flex items-center gap-1">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1.5 rounded-md px-2.5 py-1.5 text-[12px] font-semibold tracking-wider uppercase text-foreground/70 transition-colors hover:bg-white/90 hover:text-primary"
              aria-label={isArabic ? "تبديل اللغة" : "Switch language"}
            >
              <Globe className="size-3.5" />
              {isArabic ? "EN" : "عربي"}
            </button>
            <Link
              to="/search"
              search={{ q: "" }}
              aria-label={isArabic ? "البحث في الموقع" : "Search the website"}
              className="rounded-md p-2 text-foreground/70 transition-colors hover:bg-white/90 hover:text-primary"
            >
              <Search className="size-4" />
            </Link>

            {/* Desktop hover mega-menu (hidden on mobile) */}
            <DesktopMegaMenu />
          </nav>
        </div>
      </header>

      {/* ── Mobile: StaggeredMenu as fixed overlay (hidden on desktop) ── */}
      <div className="lg:hidden">
        <StaggeredMenu
          onNavigate={(href) => navigate({ to: href })}
          isFixed
          position="right"
          colors={["#0F1A2E", "#97CB46"]}
          menuButtonColor="#0F1A2E"
          openMenuButtonColor="#FFFFFF"
          accentColor="#97CB46"
          items={buildMenuItems(isArabic)}
          socialItems={SOCIAL_ITEMS}
          displaySocials
          displayItemNumbering
          closeOnClickAway
          logoUrl={TEG_LOGO_URL}
          logoLink="/"
          className="towell-mobile-nav"
          menuLabel={isArabic ? "القائمة" : "Menu"}
          closeLabel={isArabic ? "إغلاق" : "Close"}
          socialsTitle={isArabic ? "التواصل الاجتماعي" : "Socials"}
          navAriaLabel={isArabic ? "رأس التنقل الرئيسي" : "Main navigation header"}
          logoAriaLabel={isArabic ? "الشعار" : "Logo"}
          homeAriaLabel={isArabic ? "الانتقال إلى الصفحة الرئيسية" : "Go to homepage"}
          openMenuAriaLabel={isArabic ? "فتح القائمة" : "Open menu"}
          closeMenuAriaLabel={isArabic ? "إغلاق القائمة" : "Close menu"}
          socialLinksAriaLabel={isArabic ? "روابط التواصل الاجتماعي" : "Social links"}
          noItemsLabel={isArabic ? "لا توجد عناصر" : "No items"}
        />
      </div>
    </>
  );
}
