"use client";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { TypographyH1, TypographyP } from "./TypoGraphy";
import { Button } from "@/components/ui/button";

type HeroSectionProps = {
  title: React.ReactNode;
  subtitle: string;
  buttonText: string;
  onButtonClick?: () => void;
  className?: string;
};

const HeroSection = ({
  title = "Default Title",
  subtitle = "Default subtitle text.",
  buttonText = "Click Me",
  onButtonClick,
  className = "",
}: HeroSectionProps) => {
  return (
    <div
      className={`relative bg-gray-100 text-black dark:bg-black dark:text-white min-h-screen flex justify-center items-center px-8 md:px-16 ${className}`}
    >
      <MaxWidthWrapper className="relative z-20 text-center flex flex-col items-center gap-4">
        <TypographyH1 className="text-5xl md:text-7xl text-black dark:text-white">
          {title}
        </TypographyH1>
        <TypographyP className="max-w-2xl text-gray-700 dark:text-gray-200">
          {subtitle}
        </TypographyP>
        <Button
          onClick={onButtonClick}
          aria-label={buttonText}
          className="mt-4 rounded-full text-lg px-6 py-3 bg-black text-white dark:bg-white dark:text-black border border-black dark:border-white transition-colors"
        >
          {buttonText}
        </Button>
      </MaxWidthWrapper>
    </div>
  );
};

export default HeroSection;
