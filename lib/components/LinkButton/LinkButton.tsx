import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLLinkProps } from "./LinkButton.types";

/**
 * Link Button Component
 *
 * @returns JSX.Element
 */
const LinkButton: FC<HTMLLinkProps> = (props): JSX.Element => (
  <a
    {...props}
    className={cn(
      "btn flex flex-col items-center justify-center rounded-lg border border-primary bg-secondary px-10 py-3 text-base font-thin tracking-wider text-white duration-300 ease-in-out hover:bg-emerald-950/50 disabled:opacity-50",
      props.className,
    )}
  >
    {props.children}
  </a>
);

/**
 * Export the component by default
 */
export default LinkButton;
