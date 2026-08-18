import { useEffect, useRef, useState } from "react";

export type CounterStat = {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

function useCountUp(target: number, active: boolean, duration = 1600) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, active, duration]);

  return value;
}

function StatItem({ stat, active }: { stat: CounterStat; active: boolean }) {
  const value = useCountUp(stat.value, active);
  return (
    <div className="group rounded-2xl border border-border border-b-4 border-b-accent bg-card p-8 text-center transition-all duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift">
      <p className="inline-flex items-baseline justify-center font-display text-4xl font-extrabold text-accent-strong md:text-5xl">
        {stat.prefix}
        {value.toLocaleString()}
        {stat.suffix && (
          <span
            className="ml-0.5 text-[#0F1A2E]"
            style={{ fontFamily: "system-ui, -apple-system, sans-serif" }}
          >
            {stat.suffix}
          </span>
        )}
      </p>
      <p className="mt-3 text-sm font-medium text-muted-foreground">{stat.label}</p>
    </div>
  );
}

import { useLang } from "@/contexts/language";
import SplitText from "./SplitText";

export function StatsCounters({ stats }: { stats: CounterStat[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const { isArabic } = useLang();

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
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="surface-leaf border-y-2 border-accent/40 py-16 md:py-20">
      <div ref={ref} className="mx-auto max-w-[1600px] px-5">
        <p className="eyebrow text-center">{isArabic ? "بالأرقام" : "By the numbers"}</p>
        <SplitText
          tag="h2"
          text={
            isArabic ? "مجموعة بنيت على عقود من الإنجاز" : "A group built on decades of delivery"
          }
          className="mt-3 text-center text-3xl md:text-4xl"
          textAlign="center"
          delay={35}
          duration={0.85}
          from={{ opacity: 0, y: 30 }}
          to={{ opacity: 1, y: 0 }}
        />
        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {stats.map((s) => (
            <StatItem key={s.label} stat={s} active={active} />
          ))}
        </div>
      </div>
    </section>
  );
}
