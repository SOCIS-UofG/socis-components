import { FC } from "react";
import { CrossIconProps } from "./CrossIcon.types";

const CrossIcon: FC<CrossIconProps> = (props): JSX.Element => (
  <svg
    width="25px"
    height="25px"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7 17L16.8995 7.10051"
      className={`stroke-${props.stokeColor}`}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 7.00001L16.8995 16.8995"
      className={`stroke-${props.stokeColor}`}
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

export default CrossIcon;
