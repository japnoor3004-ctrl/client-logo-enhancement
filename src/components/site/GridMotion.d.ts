import type { ReactElement } from "react";

interface GridMotionProps {
  items?: (string | ReactElement)[];
  gradientColor?: string;
}

declare const GridMotion: (props: GridMotionProps) => ReactElement;
export default GridMotion;
