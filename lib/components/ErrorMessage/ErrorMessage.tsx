import { JSX, FC, PropsWithChildren } from "react";
import { HTMLParaProps } from "./ErrorMessage.types";

const ErrorMessage: FC<PropsWithChildren<HTMLParaProps>> = (
  props
): JSX.Element => (
  <p
    {...props}
    className="text-center text-sm font-light text-red-500 lg:text-base"
  >
    {props.children}
  </p>
);

export default ErrorMessage;
