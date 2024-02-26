import { cn } from "../../../utils/cn";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { type NavbarProps, NavbarTabs } from "../Navbar.types";

/**
 * Default navbar component
 *
 * @param props Navbar props
 * @returns JSX.Element
 */
const DefaultNavbar: FC<NavbarProps> = (props): JSX.Element => {
  return (
    <nav
      {...props}
      className={cn(
        "fixed z-50 hidden w-screen flex-auto flex-row items-center justify-between px-12 py-7 pr-20 lg:flex",
        props.className,
      )}
    >
      <Image
        src="/images/logo.png"
        alt="..."
        width={75}
        height={75}
        className="btn duration-300 ease-in-out hover:scale-105"
        priority={true}
      />
      <div className="flex flex-row items-center justify-center gap-16">
        <Link
          href="https://socis.ca"
          className="btn group flex flex-col items-center justify-center gap-2"
        >
          <p className="text-lg font-thin tracking-wider text-white duration-300 ease-in-out group-hover:scale-110">
            HOME
          </p>
          <span
            className={cn(
              "m-1 block h-px bg-primary duration-300 ease-in-out group-hover:w-3/5",
              props.underlined === NavbarTabs.HOME ? "w-3/5" : "w-0",
            )}
          ></span>
        </Link>
        <Link
          href="https://events.socis.ca"
          className="btn group flex flex-col items-center justify-center gap-2"
        >
          <p className="text-lg font-thin tracking-wider text-white duration-300 ease-in-out group-hover:scale-110">
            EVENTS
          </p>
          <span
            className={cn(
              "m-1 block h-px bg-primary duration-300 ease-in-out group-hover:w-3/5",
              props.underlined === NavbarTabs.EVENTS ? "w-3/5" : "w-0",
            )}
          ></span>
        </Link>
        <Link
          href="https://socis.ca/about"
          className="btn group flex flex-col items-center justify-center gap-2"
        >
          <p className="text-lg font-thin tracking-wider text-white duration-300 ease-in-out group-hover:scale-110">
            ABOUT US
          </p>
          <span
            className={cn(
              "m-1 block h-px bg-primary duration-300 ease-in-out group-hover:w-3/5",
              props.underlined === NavbarTabs.ABOUT ? "w-3/5" : "w-0",
            )}
          ></span>
        </Link>
        <Link
          href="https://socis.ca/membership"
          className="btn group flex flex-col items-center justify-center gap-2"
        >
          <p className="text-lg font-thin tracking-wider text-white duration-300 ease-in-out group-hover:scale-110">
            MEMBERSHIP
          </p>
          <span
            className={cn(
              "m-1 block h-px bg-primary duration-300 ease-in-out group-hover:w-3/5",
              props.underlined === NavbarTabs.MEMBERSHIP ? "w-3/5" : "w-0",
            )}
          ></span>
        </Link>
        <Link
          href="https://clubs.socis.ca"
          className="btn group flex flex-col items-center justify-center gap-2"
        >
          <p className="text-lg font-thin tracking-wider text-white duration-300 ease-in-out group-hover:scale-110">
            CLUBS
          </p>
          <span
            className={cn(
              "m-1 block h-px bg-primary duration-300 ease-in-out group-hover:w-3/5",
              props.underlined === NavbarTabs.MEMBERSHIP ? "w-3/5" : "w-0",
            )}
          ></span>
        </Link>
        <Link
          href="https://account.socis.ca"
          className="btn mb-3.5 flex flex-col items-center justify-center gap-2 rounded-lg border border-primary bg-secondary px-5 py-3 text-lg font-thin tracking-wider text-white duration-300 ease-in-out hover:bg-emerald-900/50 disabled:opacity-50"
        >
          ACCOUNT
        </Link>
      </div>
    </nav>
  );
};

export default DefaultNavbar;
