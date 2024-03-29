import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLButtonProps } from "./Button.types";

/**
 * Button Component
 *
 * @returns JSX.Element
 */
const Button: FC<HTMLButtonProps> = (props): JSX.Element => (
  <button
    {...props}
    className={cn(
      "btn flex flex-col items-center justify-center rounded-lg border border-primary bg-secondary px-10 py-3 text-base font-thin tracking-wider text-white duration-300 ease-in-out hover:bg-emerald-950/50 disabled:opacity-50",
      props.className,
    )}
  >
    {props.children}
  </button>
);

/**
 * Export the component by default
 */
export default Button;
