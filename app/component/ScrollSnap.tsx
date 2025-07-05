"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MaxWidthWrapper from "./MaxWidthWrapper";
import Image from "next/image";
import InfinteTitle from "./InfinteTitle";
import { TypographyH1, TypographyH2, TypographyP } from "./TypoGraphy";

gsap.registerPlugin(ScrollTrigger);

interface HorizontalScrollItem {
  title?: string;
  description?: string;
  img: string;
  alt?: string;
}

interface HorizontalScrollProps {
  items: HorizontalScrollItem[];
  paragraph?: string;
}

const HorizontalScroll: React.FC<HorizontalScrollProps> = ({ items, paragraph }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".panel");

      // Title animation
      ScrollTrigger.create({
        trigger: ".title",
        animation: gsap.from(".title", { x: -100, opacity: 0.4 }),
        scrub: true,
      });

      // Initial section animation
      const animatopn = (section: HTMLElement) => gsap.to(section.querySelector(".innersection"), { y: 0, opacity: 1 });
      ScrollTrigger.create({
        trigger: ".container",
        animation: animatopn(sections[0]),
        start: "top 20%",
        toggleActions: "play none none reverse",
        onEnter: () => setCurrentIndex(0),
      });
      const animationx = gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: ".container",
          pin: true,
          scrub: 1.5,
          snap: {
            snapTo: 1 / (sections.length - 1),
            duration: 1.5,
          },
end: () => ("+=" + (document.querySelector(".container") as HTMLElement)?.offsetWidth) as any,
        },
      });

      // Animate each section on enter
      sections.slice(1).forEach((section, index) => {
        ScrollTrigger.create({
          trigger: section,
          start: "left 60%",
          onEnter: () => setCurrentIndex(index + 1),
          onEnterBack: () => setCurrentIndex(index + 1),
          animation: animatopn(section),
          toggleActions: "play none none reverse",
          containerAnimation: animationx,
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <MaxWidthWrapper id="services" className="flex !pt-20 flex-col container items-start">
      <TypographyH1 className="text-stroke flex gap-3 lg:text-7xl text-main uppercase">
        <InfinteTitle text="My" /> Services
      </TypographyH1>
      <TypographyP className="max-w-lg text-black dark:text-gray-50">{paragraph}</TypographyP>

      <div className={`flex flex-nowrap h-screen`} style={{ width: `${items.length * 100}vw` }}>
        {items.map((item, index) => (
          <MaxWidthWrapper
            noPadding
            key={index}
            className="flex flex-col lg:flex-row !pl-0 panel w-screen text-white"
          >
            {/* Left content */}
            <div className="flex innersection flex-col gap-4 w-full lg:w-1/2 items-center lg:items-start justify-center lg:justify-start -translate-y-10 opacity-0 px-4 py-8 lg:py-0 mt-0 lg:mt-24">
              <p className="stroke-text text-5xl sm:text-7xl md:text-8xl lg:text-[140px] leading-none font-extrabold">
                <span>0</span>
                {index + 1}
              </p>
              <TypographyH2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-black dark:text-white mt-4 font-bold text-center lg:text-left">
                {item.title || "Add the title of your services"}
              </TypographyH2>
              <TypographyP className="text-xs sm:text-sm md:text-base lg:text-lg text-black dark:text-gray-300 text-center lg:text-left">
                {item.description || "Add any description you want here!"}
              </TypographyP>
            </div>

            {/* Right image */}
            <div className="relative h-[30vh] sm:h-[40vh] md:h-[60vh] lg:h-[80vh] w-full lg:w-1/2 flex items-center justify-center">
              <Image
                fill
                className="object-contain slideimg"
                src={item.img}
                alt={item.alt || "Image"}
                sizes="(max-width: 768px) 80vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
              />
            </div>
          </MaxWidthWrapper>
        ))}

        {/* Counter display */}
        <div className="fixed top-4 right-4 lg:top-20 lg:right-10 text-white z-50">
          <span className="text-lg sm:text-xl lg:text-2xl stroke-text font-bold">{`0${currentIndex + 1}`}</span>
          <span className="text-base sm:text-lg lg:text-xl"> / 0{items.length}</span>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default HorizontalScroll;
