"use client";

import React, { useEffect, useState, useCallback } from "react";
import { HiOutlineBars2 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import Link from "next/link";
import { NAV_LINKS } from "./NavBar";
import { MAINCOLOR } from "../constants";

const PhoneNav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openAnimation = useCallback(() => {
    const tl = gsap.timeline();
    tl.to(".bgbtn", { backgroundColor: "black" })
      .to(".slide2", { x: 0 })
      .to(".link", { opacity: 0.6, stagger: 0.3 });
    return tl;
  }, []);

  const closeAnimation = useCallback(() => {
    const tl = gsap.timeline({
      onComplete: () => setIsOpen(false),
    });
    tl.to(".bgbtn", { backgroundColor: MAINCOLOR })
      .to(".link", { opacity: 0, stagger: 0.3 })
      .to(".slide2", { x: "100%" });
    return tl;
  }, []);

  const handleToggle = () => {
    if (!isOpen) {
      setIsOpen(true);
      openAnimation();
    } else {
      closeAnimation();
    }
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".icon",
        { opacity: 0 },
        { opacity: 1, duration: 0.2, ease: "power2.out" }
      );
    });
    return () => ctx.revert();
  }, [isOpen]);

  return (
    <>
      <div
        onClick={handleToggle}
        className="rounded-full ml-auto w-10 z-[99999] relative h-10 flex bgbtn items-center justify-center bg-main text-white cursor-pointer"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleToggle()}
      >
        {isOpen ? (
          <IoMdClose className="text-2xl icon" />
        ) : (
          <HiOutlineBars2 className="text-2xl icon" />
        )}
      </div>

      {/* Slide menu */}
      <div
        className="slide2 fixed inset-0 z-[89] bg-main2 translate-x-full flex flex-col items-center justify-center mdg:hidden w-full h-screen"
        style={{ transition: "transform 0.5s ease" }}
      >
        <ul className="flex flex-col gap-5 mx-auto lg:ml-40 items-start text-white text-5xl lg:text-7xl uppercase">
          {NAV_LINKS.map((link, i) => (
            <li
              key={link.link || i}
              onClick={closeAnimation}
              className={`link opacity-0 hover:opacity-100 hover:translate-x-4 duration-150 cursor-pointer`}
              style={{ marginLeft: `${i * 10}px` }}
            >
              <Link href={link.link ? `#${link.link}` : "#"}>{link.text}</Link>
            </li>
          ))}
        </ul>

        <a
          href="tel:+201551364515"
          className="text-sm text-white absolute bottom-2 left-2 w-fit"
        >
          +20 155 136 4515
        </a>
      </div>
    </>
  );
};

export default PhoneNav;
