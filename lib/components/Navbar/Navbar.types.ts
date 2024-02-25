import { DetailedHTMLProps, HTMLAttributes } from "react";

export enum NavbarTabs {
  HOME,
  EVENTS,
  ABOUT,
  MEMBERSHIP,
  CLUBS,
}

export type HTMLNavProps = DetailedHTMLProps<
  HTMLAttributes<HTMLElement>,
  HTMLElement
>;

export interface CustomNavProps {
  underlined?: NavbarTabs;
}

export type NavbarProps = HTMLNavProps & CustomNavProps;

export interface CustomMenuBarsProps {
  open: boolean;
}

export type HTMLDivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export type MenuBarsProps = HTMLDivProps & CustomMenuBarsProps;
