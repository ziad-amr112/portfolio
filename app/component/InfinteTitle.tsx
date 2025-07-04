"use client";
import gsap from "gsap";
import React, { useEffect } from "react";
import { TypographyP } from "./TypoGraphy";

const InfinteTitle = ({
  text,
  className,
  cancelAnimation = false,
}: {
   className?: string;
  text: React.ReactNode;
  cancelAnimation?: boolean;
}) => {
  const ref = React.useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (cancelAnimation) return;
    const ctx = gsap.context(() => {
      if (!cancelAnimation) {
        const titleEl = ref.current?.querySelector(".title");
        if (titleEl) {
          gsap.fromTo(titleEl, { opacity: 0.5 }, { opacity: 1, repeat: -1, yoyo: true });
        }
      }
    });
    return () => ctx.revert();
  }, [cancelAnimation]);
  return (
    <div ref={ref}>
      <TypographyP className={`title text-black dark:text-main2 ${className || ""}`}>{text}</TypographyP>
    </div>
  );
};

export default InfinteTitle;
