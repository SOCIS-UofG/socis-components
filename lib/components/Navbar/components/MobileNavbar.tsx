import { cn } from "../../../utils/cn";
import { FC, useState } from "react";
import MobileMenuBars from "./MobileMenuBars";
import { type NavbarProps } from "../Navbar.types";
import SOCISLogoWhite from "../../SOCISLogoWhite";

/**
 * Mobile navbar component
 *
 * @param props Navbar props
 * @returns JSX.Element
 */
const MobileNavbar: FC<NavbarProps> = (props): JSX.Element => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={cn(
        "fixed left-0 top-0 z-[110] flex w-screen flex-col items-start justify-start lg:hidden",
        props.className,
      )}
    >
      <div
        className={cn(
          "flex w-full flex-row items-center justify-between p-4",
          open ? "bg-secondary" : "",
        )}
      >
        <SOCISLogoWhite />

        <MobileMenuBars open={open} onClick={() => setOpen(!open)} />
      </div>

      {open && (
        <div
          className={cn(
            "flex h-auto w-full flex-col border-b border-b-primary bg-secondary px-4 pb-8 pt-6",
            props.className,
          )}
        >
          <a
            href="https://socis.ca/#"
            className={cn(
              "btn w-full transform cursor-pointer px-5 py-3 text-sm font-normal tracking-widest text-primary duration-300 ease-in-out hover:translate-x-4",
            )}
          >
            HOME
          </a>
          <a
            href="https://events.socis.ca"
            className={cn(
              "btn w-full transform cursor-pointer px-5 py-3 text-sm font-normal tracking-widest text-primary duration-300 ease-in-out hover:translate-x-4",
            )}
          >
            EVENTS
          </a>
          <a
            href="https://socis.ca/about"
            className={cn(
              "btn w-full transform cursor-pointer px-5 py-3 text-sm font-normal tracking-widest text-primary duration-300 ease-in-out hover:translate-x-4",
            )}
          >
            ABOUT US
          </a>
          <a
            href="https://socis.ca/membership"
            className={cn(
              "btn w-full transform cursor-pointer px-5 py-3 text-sm font-normal tracking-widest text-primary duration-300 ease-in-out hover:translate-x-4",
            )}
          >
            MEMBERSHIP
          </a>
          <a
            href="https://clubs.socis.ca"
            className={cn(
              "btn mb-4 w-full transform cursor-pointer px-5 py-3 text-sm font-normal tracking-widest text-primary duration-300 ease-in-out hover:translate-x-4",
            )}
          >
            CLUBS & INITIATIVES
          </a>
          <a
            href="https://account.socis.ca"
            className="btn mb-3.5 flex flex-col items-center justify-center gap-2 rounded-lg border border-primary bg-secondary px-5 py-3 hover:bg-emerald-900/50 disabled:opacity-50"
          >
            <p className="text-lg font-thin tracking-wider text-white duration-300 ease-in-out">
              ACCOUNT
            </p>
          </a>
        </div>
      )}
    </div>
  );
};

export default MobileNavbar;
