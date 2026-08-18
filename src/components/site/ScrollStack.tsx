import { useEffect, useLayoutEffect, useRef, type ReactNode } from "react";
import Lenis from "lenis";

/**
 * ScrollStack — a scroll-driven stacking-card component.
 * Cards stack on top of each other as the user scrolls the window,
 * scaling and blurring slightly to reveal each subsequent card.
 *
 * Only useWindowScroll={true} is supported here (inline on page).
 */

export type ScrollStackProps = {
  children: ReactNode;
  className?: string;
  itemDistance?: number;
  itemScale?: number;
  itemStackDistance?: number;
  stackPosition?: string; // e.g. "20%"
  scaleEndPosition?: string; // e.g. "10%"
  baseScale?: number;
  rotationAmount?: number;
  blurAmount?: number;
  useWindowScroll?: boolean;
};

export function ScrollStackItem({
  children,
  itemClassName = "",
}: {
  children: ReactNode;
  itemClassName?: string;
}) {
  return (
    <div
      className={`scroll-stack-card w-full ${itemClassName}`.trim()}
      style={{
        transformOrigin: "top center",
        willChange: "transform, filter",
      }}
    >
      {children}
    </div>
  );
}

export function ScrollStack({
  children,
  className = "",
  itemDistance = 100,
  itemScale = 0.03,
  itemStackDistance = 30,
  stackPosition = "20%",
  scaleEndPosition = "10%",
  baseScale = 0.85,
  rotationAmount = 0,
  blurAmount = 0,
  useWindowScroll = true,
}: ScrollStackProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const cardsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef<number | null>(null);
  const lenisRef = useRef<Lenis | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const cards = Array.from(container.querySelectorAll<HTMLElement>(".scroll-stack-card"));
    cardsRef.current = cards;
    const parsePct = (v: string, base: number) =>
      v.trim().endsWith("%") ? (parseFloat(v) / 100) * base : parseFloat(v);
    const vh = typeof window !== "undefined" ? window.innerHeight : 800;
    const stackPx = parsePct(stackPosition, vh);
    cards.forEach((c, i) => {
      c.style.position = "sticky";
      c.style.top = `${stackPx + i * itemStackDistance}px`;
      c.style.marginTop = i === 0 ? "0" : `${itemDistance}px`;
    });
  }, [itemDistance, itemStackDistance, stackPosition, children]);

  useEffect(() => {
    if (!useWindowScroll) return;
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;
    const raf = (time: number) => {
      lenis.raf(time);
      rafRef.current = requestAnimationFrame(raf);
    };
    rafRef.current = requestAnimationFrame(raf);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [useWindowScroll]);

  useEffect(() => {
    const parsePct = (v: string, base: number) =>
      v.trim().endsWith("%") ? (parseFloat(v) / 100) * base : parseFloat(v);

    let ticking = false;
    const update = () => {
      ticking = false;
      const cards = cardsRef.current;
      if (!cards.length) return;
      const vh = window.innerHeight;
      const stackPx = parsePct(stackPosition, vh);
      const scaleEndPx = parsePct(scaleEndPosition, vh);

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const settleTop = stackPx + i * itemStackDistance;
        const cardTop = rect.top;
        // Progress: 0 when card hasn't reached its settle position, 1 when fully passed the scaleEnd point.
        const denom = Math.max(1, settleTop - scaleEndPx);
        const raw = (settleTop - cardTop) / denom;
        const progress = Math.min(1, Math.max(0, raw));
        const targetScale = baseScale + i * itemScale;
        const scale = 1 - progress * (1 - targetScale);
        const rotate = progress * rotationAmount;
        const blur = progress * blurAmount;
        card.style.transform = `scale(${scale})${rotate ? ` rotate(${rotate}deg)` : ""}`;
        card.style.filter = blur ? `blur(${blur}px)` : "";
        card.style.zIndex = String(10 + i);
      });
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, [
    baseScale,
    itemScale,
    itemStackDistance,
    stackPosition,
    scaleEndPosition,
    rotationAmount,
    blurAmount,
  ]);

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  );
}

export default ScrollStack;
