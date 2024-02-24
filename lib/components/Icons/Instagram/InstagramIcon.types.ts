import { SVGProps } from "react";

export type HTMLSVGProps = SVGProps<SVGSVGElement>;
export type IconProps = HTMLSVGProps & {
    pathFill?: string
};