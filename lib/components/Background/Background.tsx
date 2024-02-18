import { cn } from "../../utils/cn";
import { JSX, FC } from "react";
import { CustomBackgroundProps } from "./Background.types";

/**
 * Background Component
 *
 * @returns JSX.Element
 */
const Background: FC<CustomBackgroundProps> = (props): JSX.Element => (
  <div className={cn("relative", props.className)}>
    <h1
      className={cn(
        "fixed -top-80 left-1/2 -translate-x-1/2 transform text-[40rem] font-black",
        props.animated ? "animate-text-outline-emerald" : "text-outline-dark",
      )}
    >
      {props.text}
    </h1>
    <h1
      className={cn(
        "fixed left-1/2 top-8 -translate-x-1/2 transform text-[40rem] font-black",
        props.animated ? "animate-text-outline-emerald" : "text-outline-dark",
      )}
    >
      {props.text}
    </h1>
    <h1
      className={cn(
        "fixed left-1/2 top-96 -translate-x-1/2 transform text-[40rem] font-black",
        props.animated ? "animate-text-outline-emerald" : "text-outline-dark",
      )}
    >
      {props.text}
    </h1>
  </div>
);

/**
 * Export the component by default
 */
export default Background;
