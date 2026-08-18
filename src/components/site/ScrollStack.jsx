import { useRef, useEffect } from "react";
import "./ScrollStack.css";

export const ScrollStackItem = ({ children, itemClassName = "" }) => (
  <div className={`scroll-stack-item ${itemClassName}`.trim()}>
    <div className="scroll-stack-card">{children}</div>
  </div>
);

const ScrollStack = ({ children, className = "" }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = Array.from(el.querySelectorAll(".scroll-stack-item"));
    if (!items.length) return;

    // Reversed sticky offsets: last DOM card sticks highest, first sticks lowest
    items.forEach((item, i) => {
      const reversedIndex = items.length - 1 - i;
      item.style.top = `${Math.min(60 + reversedIndex * 14, 300)}px`;
      item.style.zIndex = `${i + 1}`;
    });

    let ticking = false;

    const update = () => {
      const scrollY = window.scrollY;
      const viewH = window.innerHeight;

      items.forEach((item, i) => {
        const rect = item.getBoundingClientRect();
        const docTop = rect.top + scrollY;
        const reversedIndex = items.length - 1 - i;
        const stickyTop = Math.min(60 + reversedIndex * 14, 300);

        // Progress: 0 → 1 as card enters its sticky zone
        const trigger = docTop - stickyTop;
        const distance = scrollY - trigger;
        const range = viewH * 0.6;

        let progress;
        if (distance <= 0) {
          progress = 0;
        } else if (distance >= range) {
          progress = 1;
        } else {
          progress = distance / range;
        }

        // Scale from 1 down to a minimum — reversed: later DOM items scale less
        const minScale = Math.max(0.78, 0.92 - reversedIndex * 0.01);
        const scale = 1 - progress * (1 - minScale);

        const card = item.querySelector(".scroll-stack-card");
        if (card) {
          card.style.transform = `scale(${scale.toFixed(4)})`;
          card.style.transformOrigin = "top center";
          card.style.willChange = "transform";
        }
      });

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    // Run once to set initial state
    update();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={`scroll-stack-section ${className}`.trim()}>
      {children}
      {/* Spacer so user can scroll past the last stacked card */}
      <div className="scroll-stack-spacer" aria-hidden="true" />
    </div>
  );
};

export { ScrollStack };
export default ScrollStack;
