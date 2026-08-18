/**
 * DesktopMegaMenu
 *
 * An animated hover mega-menu for the DESKTOP navigation only (≥1024px).
 * Uses framer-motion for smooth dropdown reveal/hide.
 *
 * ── Nav structure ──
 *   Plain links: Home, Companies (dropdown), About Us, Products & Services, Projects,
 *                Careers, Media, HSE, Certificates, Vendor Registration, Contact Us
 *   Hover dropdown "Companies" → list of all 11 group companies with "View all →"
 *
 * ── Towell palette ──
 *   Panel bg:  #0F1A2E (navy)
 *   Text:      #FFFFFF / #A0B4B4 (light blue-grey)
 *   Hover:     #97CB46 (brand green)
 */

import { Link } from "@tanstack/react-router";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLang } from "@/contexts/language";
import { GROUP_COMPANIES } from "@/lib/companies";
import { CompanyLogo } from "./CompanyLogo";

const COMPANY_DATA = GROUP_COMPANIES;

/* ── Plain nav links ── */
interface NavPlain {
  labelEn: string;
  labelAr: string;
  href: string;
}

const PLAIN_LINKS: NavPlain[] = [
  { labelEn: "Home", labelAr: "الرئيسية", href: "/" },
  { labelEn: "About Us", labelAr: "من نحن", href: "/about-us" },
  { labelEn: "Products & Services", labelAr: "المنتجات والخدمات", href: "/products-services" },
  { labelEn: "Projects", labelAr: "المشاريع", href: "/projects" },
  { labelEn: "Careers", labelAr: "الوظائف", href: "/careers" },
  { labelEn: "Media", labelAr: "الإعلام", href: "/media" },
  { labelEn: "HSE", labelAr: "الصحة والسلامة", href: "/hse" },
  { labelEn: "Certificates", labelAr: "الشهادات", href: "/certificates" },
  { labelEn: "Vendor Registration", labelAr: "تسجيل الموردين", href: "/vendor-registration" },
  { labelEn: "Contact Us", labelAr: "اتصل بنا", href: "/contact-us" },
];

/* ── Animation variants ── */
const panelVariants = {
  hidden: { opacity: 0, y: -6, scaleY: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scaleY: 1,
    transition: { duration: 0.2, ease: "easeOut" as const },
  },
  exit: {
    opacity: 0,
    y: -6,
    scaleY: 0.96,
    transition: { duration: 0.15, ease: "easeIn" as const },
  },
};

/* ── Hover-detection ref hook ── */
function useHover<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const enter = () => setIsHovered(true);
    const leave = () => setIsHovered(false);

    el.addEventListener("mouseenter", enter);
    el.addEventListener("mouseleave", leave);

    return () => {
      el.removeEventListener("mouseenter", enter);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);

  return [ref, isHovered] as const;
}

/* ── Dropdown: About Us ── */
const ABOUT_LINKS = [
  { href: "/about-us", en: "About TEG", ar: "عن المجموعة" },
  { href: "/about-us", hash: "leadership", en: "Leadership", ar: "القيادة" },
  { href: "/people-at-teg", en: "People at TEG", ar: "الأشخاص في تويل" },
  { href: "/sustainability", en: "Sustainability", ar: "الاستدامة" },
  { href: "/csr", en: "CSR", ar: "المسؤولية الاجتماعية" },
] as const;

function AboutDropdown({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="min-w-[260px] p-5">
      <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-leaf uppercase">
        {isArabic ? "من نحن" : "About Us"}
      </p>
      <div className="grid gap-0.5">
        {ABOUT_LINKS.map((l) => (
          <Link
            key={l.en}
            to={l.href}
            hash={"hash" in l ? l.hash : undefined}
            className="group relative rounded-md px-3 py-2.5 text-[13px] font-semibold text-forest-foreground/80 transition-colors hover:text-forest-foreground"
          >
            {isArabic ? l.ar : l.en}
            <span className="absolute bottom-1 left-3 h-px w-0 bg-leaf transition-all duration-300 group-hover:w-[40%]" />
          </Link>
        ))}
      </div>
    </div>
  );
}

/* ── Dropdown: Companies (list style matching reference image) ── */
function CompaniesDropdown({ isArabic }: { isArabic: boolean }) {
  return (
    <div className="min-w-[340px] p-5">
      <p className="mb-3 text-[11px] font-bold tracking-[0.18em] text-leaf uppercase">
        {isArabic ? "شركات المجموعة" : "Group Companies"}
      </p>
      <div className="grid gap-0.5">
        {COMPANY_DATA.map((c) => (
          <Link
            key={c.slug}
            to={c.slug}
            className="group relative flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium text-forest-foreground/70 transition-colors hover:text-forest-foreground"
          >
            <CompanyLogo code={c.code} size={28} rounded="rounded" className="ring-0" />

            <div className="min-w-0 flex-1">
              <span className="block truncate text-[13px] font-semibold text-forest-foreground/80 group-hover:text-forest-foreground transition-colors">
                {c.code}
              </span>
              <span className="block truncate text-[10px] text-forest-foreground/50">
                {isArabic ? c.tag.ar : c.tag.en}
              </span>
            </div>
            <span className="absolute bottom-1 left-14 h-px w-0 bg-leaf transition-all duration-300 group-hover:w-[60%]" />
          </Link>
        ))}
      </div>
      <div className="mt-3 border-t border-primary/15 pt-3">
        <Link
          to="/group-companies"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-leaf transition-colors hover:text-forest-foreground"
        >
          {isArabic ? "عرض الكل ←" : "View all →"}
        </Link>
      </div>
    </div>
  );
}


/* ── Hover dropdown wrapper ── */
function DropdownTrigger({
  label,
  isArabic,
  href,
  panel = "companies",
}: {
  label: string;
  isArabic: boolean;
  href?: string;
  panel?: "companies" | "about";
}) {
  const [ref, isHovered] = useHover<HTMLDivElement>();

  return (
    <div ref={ref} className="relative flex items-center">
      {href ? (
        <Link
          to={href}
          activeProps={{ className: "text-primary bg-white/90 border-b-2 border-[#97CB46]!" }}
          className="flex items-center gap-1 rounded-md border-b-2 border-transparent px-3 py-2 text-[13px] font-medium text-foreground/75 transition-all duration-200 hover:border-[#97CB46] hover:bg-white/90 hover:text-primary"
        >
          {label}{" "}
          <ChevronDown
            className="size-3.5 transition-transform duration-200"
            style={{ rotate: isHovered ? "180deg" : "0deg" }}
          />
        </Link>
      ) : (
        <button className="flex cursor-default items-center gap-1 rounded-md px-3 py-2 text-[13px] font-medium text-foreground/75 transition-colors hover:text-accent-strong">
          {label}{" "}
          <ChevronDown
            className="size-3.5 transition-transform duration-200"
            style={{ rotate: isHovered ? "180deg" : "0deg" }}
          />
        </button>
      )}

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute top-full left-0 z-50 mt-2 origin-top overflow-hidden rounded-xl border border-primary/15 bg-forest shadow-2xl"
            style={{ boxShadow: "0 20px 60px -12px rgba(15,26,46,0.5)" }}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {panel === "about" ? (
              <AboutDropdown isArabic={isArabic} />
            ) : (
              <CompaniesDropdown isArabic={isArabic} />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── DesktopMegaMenu ── */
export function DesktopMegaMenu() {
  const { isArabic } = useLang();

  return (
    <nav className="flex items-center gap-0.5">
      {/* Home */}
      <NavPill href="/" label={isArabic ? "الرئيسية" : "Home"} />

      {/* About Us dropdown (About TEG, Leadership, People, Sustainability, CSR) */}
      <DropdownTrigger
        label={isArabic ? "من نحن" : "About Us"}
        isArabic={isArabic}
        href="/about-us"
        panel="about"
      />

      {/* Companies dropdown (after About Us) */}
      <DropdownTrigger label={isArabic ? "الشركات" : "Companies"} isArabic={isArabic} />


      {/* Products & Services — plain link, no dropdown */}
      <NavPill
        href="/products-services"
        label={isArabic ? "المنتجات والخدمات" : "Products & Services"}
      />

      {/* Remaining plain links */}
      {PLAIN_LINKS.slice(3).map((l) => (
        <NavPill key={l.href} href={l.href} label={isArabic ? l.labelAr : l.labelEn} />
      ))}
    </nav>
  );
}

/* ── Pill-style nav link ── */
function NavPill({ href, label }: { href: string; label: string }) {
  return (
    <Link
      to={href}
      activeOptions={{ exact: href === "/" }}
      activeProps={{ className: "text-primary bg-white/90 border-b-2 border-[#97CB46]!" }}
      className="rounded-md border-b-2 border-transparent px-3 py-2 text-[13px] font-medium text-foreground/75 transition-all duration-200 hover:border-[#97CB46] hover:bg-white/90 hover:text-primary"
    >
      {label}
    </Link>
  );
}
