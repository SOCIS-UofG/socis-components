import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { HTMLButtonProps } from "./Button.types";
// import { ButtonBase, ButtonProps } from "@mui/material";

/**
 * Button Component
 *
 * @returns JSX.Element
 */
const Button: FC<HTMLButtonProps> = (props): JSX.Element => (
  <button
    {...props}
    className={cn(
      "px-10 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50",
      props.className
    )}
  >
    {props.children}
  </button>
);

/**
 * Export the component by default
 */
export default Button;
