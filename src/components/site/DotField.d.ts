import { ComponentProps, FC } from "react";

interface DotFieldProps extends Omit<ComponentProps<"div">, "style"> {
  dotRadius?: number;
  dotSpacing?: number;
  cursorRadius?: number;
  cursorForce?: number;
  bulgeOnly?: boolean;
  bulgeStrength?: number;
  glowRadius?: number;
  sparkle?: boolean;
  waveAmplitude?: number;
  gradientFrom?: string;
  gradientTo?: string;
  glowColor?: string;
  style?: React.CSSProperties;
}

export declare const DotField: FC<DotFieldProps>;
export default DotField;
