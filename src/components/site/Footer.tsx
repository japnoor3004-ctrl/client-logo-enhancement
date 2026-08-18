import { Link } from "@tanstack/react-router";
import { Linkedin, Mail, Phone, MapPin, Printer } from "lucide-react";
import { COMPANY_LINKS } from "@/lib/companies";
import { TEG_LOGO_URL } from "@/lib/company-logos";
import DotField from "./DotField";
import { useLang } from "@/contexts/language";

const explore = [
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

const companies = COMPANY_LINKS;

const linkClass = "text-forest-foreground/80 transition-colors duration-200 hover:text-accent";

export function Footer() {
  const { isArabic } = useLang();
  return (
    <footer className="relative overflow-hidden mt-24 border-t-4 border-accent bg-[#0F1A2E]">
      <div className="absolute inset-0">
        <DotField
          dotRadius={1}
          dotSpacing={18}
          bulgeStrength={30}
          glowRadius={100}
          gradientFrom="rgba(15, 26, 46, 0.3)"
          gradientTo="rgba(26, 45, 74, 0.2)"
          glowColor="#97CB46"
          style={{ position: "absolute", inset: 0 }}
        />
      </div>
      <div className="relative">
        <div className="mx-auto grid max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white">
                <img
                  src={TEG_LOGO_URL}
                  alt="Towell Engineering Group"
                  width={44}
                  height={44}
                  loading="lazy"
                  className="h-full w-full object-contain p-1"
                />
              </span>
              <span className="font-display text-base leading-tight font-extrabold tracking-[0.12em] text-forest-foreground uppercase">
                Towell Engineering Group
              </span>
            </div>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-forest-foreground/75">
              {isArabic
                ? "مجموعة هندسية من الشركات المتخصصة في سلطنة عمان ودول مجلس التعاون الخليجي — تنفيذ مشاريع ذات جودة عالية في الوقت المحدد."
                : "An engineering conglomerate of specialised companies in the Sultanate of Oman and across the GCC — delivering quality projects, on time."}
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href="https://www.linkedin.com/company/towell-engineering-group/"
                aria-label={isArabic ? "تويل للهندسة على لينكدإن" : "Towell Engineering Group on LinkedIn"}
                target="_blank"
                rel="noreferrer"
                className="flex size-10 items-center justify-center rounded-xl border border-forest-foreground/25 text-forest-foreground transition-colors duration-200 hover:border-accent hover:bg-accent hover:text-forest"
              >
                <Linkedin className="size-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {isArabic ? "روابط سريعة" : "Quick Links"}
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {explore.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className={linkClass}>
                    {isArabic ? l.ar : l.en}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {isArabic ? "شركات المجموعة" : "Group Companies"}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5 text-sm">
              {companies.map((c) => (
                <li key={c.to}>
                  <Link to={c.to} className={linkClass}>
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold tracking-[0.2em] text-accent uppercase">
              {isArabic ? "الاتصال" : "Contact"}
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-forest-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>
                  {isArabic
                    ? "مجموعة تويل للهندسة، ص.ب 1667، ر.ب 131، العذيبة، مسقط، سلطنة عمان"
                    : "Towell Engineering Group, P.O. Box 1667, P.C. 131, Azaiba, Muscat, Sultanate of Oman"}
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href="tel:+96824526083" className={linkClass}>
                  +968 2452 6083 / 84
                </a>
              </li>
              <li className="flex gap-3">
                <Printer className="mt-0.5 size-4 shrink-0 text-accent" />
                <span>{isArabic ? "فاكس: 6423 2452 968+" : "Fax: +968 2452 6423"}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent" />
                <a href="mailto:teg@towellengineering.com" className={linkClass}>
                  teg@towellengineering.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-forest-foreground/15">
          <div className="mx-auto flex max-w-[1600px] flex-wrap items-center justify-between gap-3 px-5 py-5 text-xs text-forest-foreground/60">
            <p>
              © {new Date().getFullYear()}{" "}
              {isArabic
                ? "تويل للهندسة. جميع الحقوق محفوظة."
                : "Towell Engineering Group. All rights reserved."}
            </p>
            <p>
              {isArabic
                ? "مشاريع ذات جودة عالية. في الوقت المحدد."
                : "Quality Projects. Delivered. On Time."}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
