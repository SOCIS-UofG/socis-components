import { JSX, FC } from "react";
import { cn } from "../../utils/cn";
import DefaultNavbar from "./components/DefaultNavbar";
import MobileNavbar from "./components/MobileNavbar";
import { NavbarProps } from "./Navbar.types";

/**
 * Navbar component
 *
 * @param props Navbar props
 * @returns JSX.Element
 */
const Navbar: FC<NavbarProps> = (props): JSX.Element => (
  <>
    <DefaultNavbar
      {...props}
      className={cn("hidden flex-auto lg:flex", props.className)}
    />
    <MobileNavbar {...props} className={cn("lg:hidden", props.className)} />
  </>
);

export default Navbar;
