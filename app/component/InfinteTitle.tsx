"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { TypographyP } from "./TypoGraphy";

interface InfinteTitleProps {
  text: React.ReactNode;
  className?: string;
  cancelAnimation?: boolean;
}

const InfinteTitle: React.FC<InfinteTitleProps> = ({ text, className = "", cancelAnimation = false }) => {
  const ref = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cancelAnimation) return;
    const ctx = gsap.context(() => {
      const titleEl = ref.current?.querySelector(".title");
      if (titleEl) {
        gsap.fromTo(titleEl, { opacity: 0.5 }, { opacity: 1, repeat: -1, yoyo: true, duration: 1 });
      }
    }, ref);

    return () => ctx.revert();
  }, [cancelAnimation]);

  return (
    <div ref={ref} aria-hidden="true">
      <TypographyP className={`title text-black dark:text-main2 ${className}`}>
        {text}
      </TypographyP>
    </div>
  );
};

export default InfinteTitle;
