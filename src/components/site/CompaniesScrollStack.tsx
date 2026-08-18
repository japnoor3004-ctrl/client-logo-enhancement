import { Link } from "@tanstack/react-router";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";
import { GROUP_COMPANIES, COMPANY_COUNT } from "@/lib/companies";
import { useLang } from "@/contexts/language";
import { ArrowRight } from "lucide-react";
import { CompanyLogo } from "./CompanyLogo";

const CARD_BG = "#FFFFFF";
const NAME_COLOR = "#0F1A2E"; // Towell navy blue
const TAGLINE_COLOR = "#97CB46"; // Green for taglines
const DESCRIPTION_COLOR = "#4B5563"; // Grey for descriptions
const GREEN_GLOW = "0 0 40px rgba(151, 203, 70, 0.15), 0 0 80px rgba(151, 203, 70, 0.06)";

function LogoSlot({ code, size }: { code: string; size: number }) {
  return <CompanyLogo code={code} size={size} />;
}

/** Condensed variant — for the home page. */
export function CompaniesScrollStackCondensed() {
  const { isArabic } = useLang();
  return (
    <section className="relative bg-background py-20 md:py-24">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-10 text-center">
          <p className="eyebrow">{isArabic ? "مجموعتنا" : "Our Group"}</p>
          <h2 className="mt-3 text-3xl md:text-5xl">
            {isArabic ? "شركات المجموعة" : "Our Group Companies"}
          </h2>
          <span className="mx-auto mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
        </div>

        <ScrollStack
          useWindowScroll
          itemDistance={60}
          itemScale={0.02}
          itemStackDistance={20}
          stackPosition="22%"
          scaleEndPosition="8%"
          baseScale={0.9}
          rotationAmount={0}
          blurAmount={0}
        >
          {GROUP_COMPANIES.map((c) => (
            <ScrollStackItem key={c.code}>
              <Link
                to={c.slug}
                style={{ backgroundColor: CARD_BG, borderRadius: 24, boxShadow: GREEN_GLOW }}
                className="mx-auto flex min-h-[10rem] w-full max-w-3xl items-center gap-6 px-8 py-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_60px_rgba(151,203,70,0.25),0_0_100px_rgba(151,203,70,0.1)] md:py-8 md:px-12"
              >
                <LogoSlot code={c.code} size={80} />
                <div className="flex-1">
                  <h3
                    style={{ color: NAME_COLOR }}
                    className="font-display text-2xl font-bold md:text-3xl"
                  >
                    {c.code}
                  </h3>
                  <p
                    style={{ color: TAGLINE_COLOR }}
                    className="mt-1 text-sm font-medium md:text-base"
                  >
                    {isArabic ? c.tag.ar : c.tag.en}
                  </p>
                  <p
                    style={{ color: DESCRIPTION_COLOR }}
                    className="mt-3 max-w-xl text-xs leading-relaxed md:text-sm"
                  >
                    {isArabic ? c.description.ar : c.description.en}
                  </p>
                </div>
                <ArrowRight className="size-5 shrink-0 text-gray-400" />
              </Link>
            </ScrollStackItem>
          ))}
        </ScrollStack>

        <div className="mt-12 flex justify-center">
          <Link to="/group-companies" className="btn-primary">
            {isArabic ? "عرض جميع الشركات ←" : "View All Companies →"}
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Fuller variant — for the About Us page. */
export function CompaniesScrollStackFull() {
  const { isArabic } = useLang();
  return (
    <section className="relative bg-background py-24 md:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <div className="mb-14 text-center">
          <p className="eyebrow">{isArabic ? "هيكل المجموعة" : "Group structure"}</p>
          <h2 className="mt-3 text-3xl md:text-5xl">
            {isArabic ? "شركات المجموعة" : "Our Group Companies"}
          </h2>
          <span className="mx-auto mt-5 block h-1 w-20 rounded-full bg-[image:var(--gradient-leaf)]" />
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {isArabic
              ? `${COMPANY_COUNT} شركة متخصصة، تُدار كل منها باستقلالية، وتقدم مشاريع الهندسة والبناء والطاقة تحت معيار مجموعة واحد.`
              : `${COMPANY_COUNT} specialised companies, each independently managed, delivering engineering, construction and energy projects under one group standard.`}
          </p>
        </div>

        <ScrollStack
          useWindowScroll
          itemDistance={100}
          itemScale={0.03}
          itemStackDistance={30}
          stackPosition="20%"
          scaleEndPosition="10%"
          baseScale={0.85}
          rotationAmount={0}
          blurAmount={0}
        >
          {GROUP_COMPANIES.map((c) => (
            <ScrollStackItem key={c.code}>
              <article
                style={{ backgroundColor: CARD_BG, borderRadius: 28, boxShadow: GREEN_GLOW }}
                className="mx-auto flex min-h-[14rem] w-full max-w-4xl flex-col gap-6 p-8 md:flex-row md:items-center md:p-10"
              >
                <LogoSlot code={c.code} size={100} />
                <div className="flex-1">
                  <h3
                    style={{ color: NAME_COLOR }}
                    className="font-display text-3xl font-bold md:text-4xl"
                  >
                    {c.code}
                  </h3>
                  <p
                    style={{ color: TAGLINE_COLOR }}
                    className="mt-2 text-base font-medium md:text-lg"
                  >
                    {isArabic ? c.tag.ar : c.tag.en}
                  </p>
                  <p
                    style={{ color: DESCRIPTION_COLOR }}
                    className="mt-4 max-w-2xl text-sm leading-relaxed md:text-base"
                  >
                    {isArabic ? c.description.ar : c.description.en}
                  </p>
                  <Link
                    to={c.slug}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-500 transition-colors hover:text-[#0F1A2E]"
                  >
                    {isArabic ? "اعرف المزيد" : "Learn More"}
                    <ArrowRight className="size-4" />
                  </Link>
                </div>
                <ArrowRight className="size-6 shrink-0 text-gray-400 hidden md:block" />
              </article>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
