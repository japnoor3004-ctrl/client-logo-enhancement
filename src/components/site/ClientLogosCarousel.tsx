import { useLang } from "@/contexts/language";
import SplitText from "./SplitText";
import { CLIENT_LOGOS, resolveClientLogoUrl } from "@/lib/client-logos";

type Logo = { id: string; name: string; logo_url?: string | null; website?: string | null };


function LogoCard({ logo, eager }: { logo: Logo; eager: boolean }) {
  const inner = logo.logo_url ? (
    <img
      src={logo.logo_url}
      alt={`${logo.name} logo`}
      width={240}
      height={100}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      draggable={false}
      className="max-h-14 w-auto max-w-[190px] object-contain transition duration-500 ease-out select-none"
    />
  ) : (
    <span className="px-2 text-center font-display text-[0.7rem] leading-tight font-bold tracking-wide text-[#0F1A2E]/70 uppercase">
      {logo.name}
    </span>
  );

  const card = (
    <span className="group/card relative flex h-[104px] w-[220px] shrink-0 items-center justify-center overflow-hidden rounded-2xl bg-white px-5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.45)] ring-1 ring-white/10 transition duration-500 ease-out will-change-transform group-hover/card:ring-[#97CB46]/50 hover:-translate-y-1 hover:shadow-[0_18px_40px_-14px_rgba(151,203,70,0.45)] hover:ring-[#97CB46]/60">
      <span className="pointer-events-none absolute inset-0 bg-[image:var(--gradient-leaf)] opacity-0 transition-opacity duration-500 group-hover/card:opacity-[0.06]" />
      {inner}
    </span>
  );

  if (logo.website) {
    return (
      <li className="shrink-0">
        <a
          href={logo.website}
          target="_blank"
          rel="noopener noreferrer nofollow"
          aria-label={`${logo.name} — opens in a new tab`}
          className="block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-[#97CB46] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0F1A2E]"
        >
          {card}
        </a>
      </li>
    );
  }
  return <li className="shrink-0">{card}</li>;
}

function MarqueeRow({
  items,
  reverse,
  duration,
  eager,
}: {
  items: Logo[];
  reverse?: boolean;
  duration: number;
  eager: boolean;
}) {
  const loop = [...items, ...items];
  return (
    <ul
      aria-hidden={reverse ? "true" : undefined}
      className="marquee-track flex w-max items-center gap-6"
      style={{
        animationName: reverse ? "marquee-reverse" : "marquee",
        animationDuration: `${duration}s`,
        animationTimingFunction: "linear",
        animationIterationCount: "infinite",
      }}
    >
      {loop.map((logo, i) => (
        <LogoCard key={`${logo.id}-${i}`} logo={logo} eager={eager && i < 8} />
      ))}
    </ul>
  );
}

export function ClientLogosCarousel({ logos }: { logos: Logo[] }) {
  const { isArabic } = useLang();
  const withArt = logos
    .filter((l) => !!l.logo_url)
    .map((l) => ({ ...l, logo_url: resolveClientLogoUrl(l.logo_url) }));
  const items: Logo[] = withArt.length > 0 ? withArt : CLIENT_LOGOS;


  const mid = Math.ceil(items.length / 2);
  const rowOne = items.slice(0, mid);
  const rowTwo = items.length > 6 ? items.slice(mid) : items;

  return (
    <section
      aria-labelledby="clients-heading"
      className="relative overflow-hidden border-b border-white/10 bg-[#0F1A2E] py-20 md:py-24"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-1/2 left-1/2 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#97CB46]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5">
        <p className="text-center text-xs font-bold tracking-[0.24em] text-[#97CB46] uppercase">
          {isArabic ? "موثوق من قبل" : "Trusted by"}
        </p>
        <SplitText
          tag="h2"
          text={
            isArabic
              ? "الملاك ومقاولو التوريد والبناء والعملاء الحكوميون"
              : "Owners, EPC contractors and government clients"
          }
          id="clients-heading"
          className="mt-4 text-center font-display text-2xl font-bold text-white md:text-3xl"
          textAlign="center"
          delay={35}
          duration={0.85}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />
        <span className="mx-auto mt-5 block h-1 w-16 rounded-full bg-[image:var(--gradient-leaf)]" />
      </div>

      <div
        className="marquee-mask group relative mt-14 flex flex-col gap-6 overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 7%, black 93%, transparent)",
        }}
      >
        <MarqueeRow items={rowOne} duration={64} eager />
        <MarqueeRow items={rowTwo} duration={78} reverse eager={false} />
      </div>

      <p className="relative mt-10 text-center text-xs text-white/45">
        {isArabic
          ? `أكثر من ${items.length} عميلاً من كبار الملاك والمقاولين والجهات الحكومية`
          : `${items.length}+ owners, EPC contractors and government entities served`}
      </p>
    </section>
  );
}
