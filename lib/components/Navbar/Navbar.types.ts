export enum NavbarTabs {
  HOME,
  EVENTS,
  ABOUT,
  MEMBERSHIP,
}

export interface NavbarProps {
  className?: string;
  underlined?: NavbarTabs;
}

export interface MobileMenuBarsProps {
  className?: string;
  open: boolean;
  onClick: () => void;
}
