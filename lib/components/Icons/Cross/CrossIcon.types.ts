import { SVGProps } from "react";

export type HTMLSVGProps = SVGProps<SVGSVGElement>;
export interface CustomIconProps {
  stokeColor?: string;
}

export type CrossIconProps = HTMLSVGProps & CustomIconProps;
