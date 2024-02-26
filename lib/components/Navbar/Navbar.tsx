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
      const navbarDesktop = document.querySelector(".navbar-desktop");
      if (navbarDesktop) {
        if (window.scrollY > 0) {
          navbarDesktop.classList.add("bg-secondary");
        } else {
          navbarDesktop.classList.remove("bg-secondary");
        }
      }

      const navbarMobile = document.querySelector(".navbar-mobile");
      if (navbarMobile) {
        if (window.scrollY > 0) {
          navbarMobile.classList.add("bg-secondary");
        } else {
          navbarMobile.classList.remove("bg-secondary");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <DefaultNavbar
        {...props}
        className={cn("navbar-desktop", props.className)}
      />
      <MobileNavbar
        {...props}
        className={cn("navbar-mobile", props.className)}
      />
    </>
  );
};

export default Navbar;
