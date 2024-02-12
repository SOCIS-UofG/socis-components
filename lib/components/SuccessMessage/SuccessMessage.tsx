import { JSX, FC, PropsWithChildren } from "react";
import { HTMLParaProps } from "./SuccessMessage.types";

const SuccessMessage: FC<PropsWithChildren<HTMLParaProps>> = (
  props,
): JSX.Element => (
  <p
    {...props}
    className="text-center text-sm font-light text-green-500 lg:text-base"
  >
    {props.children}
  </p>
);

export default SuccessMessage;
