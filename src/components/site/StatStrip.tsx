import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/language";

// ─── Placeholder stats — swap these with real values later ───
const stats = [
  { number: "25", suffix: "+", label_en: "Years", label_ar: "سنوات" },
  { number: "11", label_en: "Companies", label_ar: "شركات" },
  { number: "3", label_en: "Continents", label_ar: "قارات" },
  { number: "", label_en: "ISO Certified", label_ar: "معتمد ISO" },
];

function CountUp({ target, active }: { target: number; active: boolean }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active || target === 0) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / 1400, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active]);
  return <>{value}</>;
}

export function StatStrip() {
  const { isArabic } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setActive(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="border-b border-white/10 bg-[#0F1A2E]">
      <div className="mx-auto grid max-w-[1600px] grid-cols-2 gap-0 px-5 sm:grid-cols-4">
        {stats.map((s, i) => {
          const numVal = parseInt(s.number, 10);
          return (
            <div
              key={s.label_en}
              className={`flex flex-col items-center gap-1 py-6 sm:py-8 ${
                i < stats.length - 1 ? "sm:border-r sm:border-white/10" : ""
              } ${i === 0 ? "" : "border-t border-white/10 sm:border-t-0"}`}
            >
              <p className="font-display text-3xl font-extrabold tracking-tight text-white md:text-4xl">
                {s.number ? <CountUp target={numVal} active={active} /> : ""}
                {s.suffix && <span className="text-[#97CB46]">{s.suffix}</span>}
                {!s.number && (
                  <span className="text-[#97CB46] text-2xl">
                    {isArabic ? "معتمد" : "Certified"}
                  </span>
                )}
              </p>
              <p className="text-xs font-medium tracking-[0.18em] text-white/70 uppercase">
                {isArabic ? s.label_ar : s.label_en}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
