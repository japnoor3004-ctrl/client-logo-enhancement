import { useEffect, useRef, useState, type CSSProperties, type ElementType } from "react";

export type FoldTextProps = {
  text: string;
  className?: string;
  style?: CSSProperties;
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  /** Split granularity. */
  splitBy?: "char" | "word";
  hinge?: "top" | "bottom";
  /** Seconds. */
  duration?: number;
  /** Seconds between units. */
  stagger?: number;
  /** Seconds before the first unit animates. */
  delay?: number;
  perspective?: number;
  /** 0 - 1, how dark the crease starts. */
  creaseShading?: number;
  textAlign?: CSSProperties["textAlign"];
  /** Called once the last unit has folded open. */
  onComplete?: () => void;
};

/** power3.out */
const EASE = "cubic-bezier(0.215, 0.61, 0.355, 1)";
/** Never animate more than this many units independently. */
const MAX_STAGGERED = 28;

function useInViewOnce<T extends HTMLElement>(rootMargin = "-8% 0px") {
  const ref = useRef<T | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin },
    );
    io.observe(node);
    return () => io.disconnect();
  }, [rootMargin, shown]);

  return { ref, shown };
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

/**
 * Folds each character (or word) open on a hinge as it first enters the
 * viewport. Plays once, respects prefers-reduced-motion, and uses only
 * compositor-friendly transform/opacity so scrolling stays smooth.
 */
export default function FoldText({
  text,
  className = "",
  style,
  tag = "p",
  splitBy = "char",
  hinge = "top",
  duration = 0.65,
  stagger = 0.045,
  delay = 0,
  perspective = 700,
  creaseShading = 0.55,
  textAlign,
  onComplete,
}: FoldTextProps) {
  const Tag = tag as ElementType;
  const { ref, shown } = useInViewOnce<HTMLElement>();
  const reduced = usePrefersReducedMotion();
  const done = useRef(false);

  const words = text.split(" ");
  const active = shown || reduced;

  useEffect(() => {
    if (!active || done.current) return;
    done.current = true;
    if (!onComplete) return;
    const total = reduced ? 0 : (delay + duration + stagger * MAX_STAGGERED) * 1000;
    const t = setTimeout(onComplete, total);
    return () => clearTimeout(t);
  }, [active, delay, duration, stagger, reduced, onComplete]);

  let index = 0;

  return (
    <Tag
      ref={ref as never}
      className={className}
      style={{
        textAlign,
        perspective: `${perspective}px`,
        ...style,
      }}
    >
      {words.map((word, w) => (
        <span
          key={`${word}-${w}`}
          style={{ display: "inline-block", whiteSpace: "nowrap", transformStyle: "preserve-3d" }}
        >
          {(splitBy === "char" ? Array.from(word) : [word]).map((unit, i) => {
            const step = Math.min(index++, MAX_STAGGERED);
            const d = reduced ? 0 : delay + step * stagger;
            return (
              <span
                key={`${unit}-${i}`}
                aria-hidden="true"
                style={{
                  display: "inline-block",
                  transformOrigin: hinge === "top" ? "50% 0%" : "50% 100%",
                  backfaceVisibility: "hidden",
                  willChange: active ? "auto" : "transform, opacity",
                  opacity: active ? 1 : 0,
                  filter: active ? "none" : `brightness(${1 - creaseShading})`,
                  transform: active
                    ? "none"
                    : `translateY(0.12em) rotateX(${hinge === "top" ? -88 : 88}deg)`,
                  transition: reduced
                    ? "none"
                    : `transform ${duration}s ${EASE} ${d}s, opacity ${duration * 0.8}s ${EASE} ${d}s, filter ${duration}s ${EASE} ${d}s`,
                }}
              >
                {unit}
              </span>
            );
          })}
          {w < words.length - 1 ? (
            <span aria-hidden="true" style={{ display: "inline-block" }}>
              &nbsp;
            </span>
          ) : null}
        </span>
      ))}
      <span className="sr-only">{text}</span>
    </Tag>
  );
}