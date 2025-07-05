"use client";

import Link from "next/link";
import React from "react";
import PhoneNav from "./PhoneNav";
import Logo from "./Logo";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { ModeToggle } from "./ToggleDarkLight";

export const NAV_LINKS = [
  { text: "Home", link: "" },
  { text: "About", link: "about" },
  { text: "Projects", link: "projects" },
  { text: "Contact", link: "contact" },
  { text: "Services", link: "services" },
];

const NavBar = React.memo(() => {
  return (
    <header>
      <nav className="fixed z-50 inset-0 h-fit w-full bg-white/80 dark:bg-black/60 backdrop-blur-md backdrop-blur-sm">
        <MaxWidthWrapper noPadding className="flex pt-5 h-fit justify-between items-center">
          <Logo />
          <div className="flex items-center gap-5">
            <ul className="hidden lg:flex items-center gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.text}>
                  <Link
                    href={`#${link.link}`}
                    className="text-gray-800 dark:text-gray-100 hover:text-main dark:hover:text-main transition-colors duration-200"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="block lg:hidden">
              <PhoneNav />
            </div>
            <ModeToggle />
          </div>
        </MaxWidthWrapper>
      </nav>
    </header>
  );
});

export default NavBar;
