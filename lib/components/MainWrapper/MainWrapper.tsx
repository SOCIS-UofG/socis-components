import { JSX, FC, PropsWithChildren } from "react";
import { cn } from "../../utils/cn";
import { HTMLMainProps } from "./MainWrapper.types";

const MainWrapper: FC<PropsWithChildren<HTMLMainProps>> = (
  props
): JSX.Element => (
  <main
    {...props}
    className={cn(
      "flex min-h-screen items-center justify-center",
      props.className?.includes("flex-wrap") ? "" : "flex-col",
      props.className
    )}
  >
    {props.children}
  </main>
);

export default MainWrapper;
