import type { ReactNode } from "react";
import FoldText from "./FoldText";
import DotField from "./DotField";

export function PageHero({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden border-b-4 border-accent bg-[#0F1A2E]">
      {/* DotField interactive background */}
      <div className="absolute inset-0">
        <DotField
          dotRadius={1.5}
          dotSpacing={14}
          bulgeStrength={40}
          glowRadius={140}
          sparkle={false}
          waveAmplitude={0}
          gradientFrom="rgba(160, 180, 180, 0.25)"
          gradientTo="rgba(160, 180, 180, 0.15)"
          glowColor="#97CB46"
          style={{ position: "absolute", inset: 0 }}
        />
      </div>
      {/* Content layer */}
      <div className="relative mx-auto max-w-[1600px] px-5 py-20 md:py-28">
        <p className="text-xs font-bold tracking-[0.24em] text-[#97CB46] uppercase">{eyebrow}</p>
        <FoldText
          tag="h1"
          text={title}
          className="mt-4 max-w-3xl text-4xl text-white md:text-6xl"
          textAlign="left"
          stagger={0.05}
          duration={0.7}
          delay={0.2}
        />
        {description && (
          <p className="reveal reveal-up mt-6 max-w-2xl text-base text-white/80 md:text-lg" data-shown="true" style={{ ["--reveal-delay" as string]: "520ms" }}>
            {description}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
