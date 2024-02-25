import { cn } from "../../../utils/cn";
import { JSX, FC } from "react";
import { MenuBarsProps } from "../Navbar.types";

/**
 * Menu bars component
 *
 * @param props Menu bars props
 * @returns JSX.Element
 */
const MobileMenuBars: FC<MenuBarsProps> = (props): JSX.Element => {
  const Bar = (props: { className?: string }): JSX.Element => {
    return (
      <span
        className={cn("h-0.5 rounded-full bg-white", props.className)}
      ></span>
    );
  };

  return (
    <div
      onClick={props.onClick}
      className={cn(
        "group fixed right-8 top-8 flex cursor-pointer flex-col items-end justify-end space-y-2.5 p-3",
        props.className,
      )}
    >
      <Bar
        className={
          props.open
            ? "w-10 translate-y-3.5 rotate-45 transform duration-300 ease-in-out group-hover:-rotate-45"
            : "w-10"
        }
      />
      <Bar className={props.open ? "opacity-0" : "w-10"} />
      <Bar
        className={
          props.open
            ? "w-10 -translate-y-[10px] -rotate-45 transform duration-300 ease-in-out group-hover:rotate-45"
            : "w-10"
        }
      />
    </div>
  );
};

export default MobileMenuBars;
