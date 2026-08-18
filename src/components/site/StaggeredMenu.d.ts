export interface StaggeredMenuItem {
  label: string;
  link: string;
  ariaLabel?: string;
  children?: { label: string; link: string }[];
}

export interface StaggeredMenuProps {
  position?: "left" | "right";
  colors?: string[];
  items?: StaggeredMenuItem[];
  socialItems?: { label: string; link: string }[];
  displaySocials?: boolean;
  displayItemNumbering?: boolean;
  className?: string;
  logoUrl?: string;
  logoLink?: string;
  menuButtonColor?: string;
  openMenuButtonColor?: string;
  accentColor?: string;
  changeMenuColorOnOpen?: boolean;
  isFixed?: boolean;
  closeOnClickAway?: boolean;
  onMenuOpen?: () => void;
  onMenuClose?: () => void;
  menuLabel?: string;
  closeLabel?: string;
  socialsTitle?: string;
  navAriaLabel?: string;
  logoAriaLabel?: string;
  homeAriaLabel?: string;
  openMenuAriaLabel?: string;
  closeMenuAriaLabel?: string;
  socialLinksAriaLabel?: string;
  noItemsLabel?: string;
  onNavigate?: (href: string) => void;
}

export declare const StaggeredMenu: React.FC<StaggeredMenuProps>;
export default StaggeredMenu;
