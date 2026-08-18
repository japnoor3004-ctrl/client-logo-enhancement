import FoldText from "./FoldText";

type Props = {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Legacy: per-character stagger in milliseconds. */
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: string;
  from?: Record<string, unknown>;
  to?: Record<string, unknown>;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  id?: string;
  onLetterAnimationComplete?: () => void;
};

/**
 * Compatibility wrapper: the site's signature typography animation is now
 * FoldText. Existing SplitText call sites keep working unchanged.
 */
export default function SplitText({
  text,
  className,
  style,
  delay = 45,
  duration = 0.65,
  splitType = "chars",
  textAlign,
  tag = "p",
  onLetterAnimationComplete,
}: Props) {
  return (
    <FoldText
      text={text}
      tag={tag}
      className={className}
      style={style}
      textAlign={textAlign}
      splitBy={splitType.startsWith("word") ? "word" : "char"}
      stagger={Math.min(delay, 60) / 1000}
      duration={duration}
      onComplete={onLetterAnimationComplete}
    />
  );
}
