import { JSX, FC } from "react";
import { cn } from "../../utils/cn";
import DefaultNavbar from "./components/DefaultNavbar";
import MobileNavbar from "./components/MobileNavbar";
import { SessionProvider } from "next-auth/react";
import { NavbarProps } from "./Navbar.types";

/**
 * Navbar component
 *
 * @param props Navbar props
 * @returns JSX.Element
 */
const Navbar: FC<NavbarProps> = (props): JSX.Element => (
  <SessionProvider>
    <DefaultNavbar
      className={cn("hidden flex-auto lg:flex", props.className)}
      {...props}
    />
    <MobileNavbar className={cn("lg:hidden", props.className)} {...props} />
  </SessionProvider>
);

export default Navbar;
