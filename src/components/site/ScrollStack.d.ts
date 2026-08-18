import type { ReactElement, ReactNode } from "react";

interface ScrollStackProps {
  children?: ReactNode;
  className?: string;
}

interface ScrollStackItemProps {
  children?: ReactNode;
  itemClassName?: string;
}

export const ScrollStackItem: (props: ScrollStackItemProps) => ReactElement;

declare const ScrollStack: (props: ScrollStackProps) => ReactElement;
export default ScrollStack;
