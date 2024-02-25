import { JSX, FC, useEffect } from "react";
import { cn } from "../../utils/cn";
import DefaultNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";
import { NavbarProps } from "./Navbar.types";

/**
 * Navbar component
 *
 * @param props Navbar props
 * @returns JSX.Element
 */
const Navbar: FC<NavbarProps> = (props): JSX.Element => {
  // when the user scrolls, set the background to secondary
  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector("nav");
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add("bg-secondary");
        } else {
          navbar.classList.remove("bg-secondary");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <DefaultNavbar {...props} className={cn("navbar", props.className)} />
      <MobileNavbar {...props} className={cn("navbar", props.className)} />
    </>
  );
};

export default Navbar;
