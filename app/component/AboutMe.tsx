import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";
import InfinteTitle from "./InfinteTitle";
import { TypographyH2, TypographyP } from "./TypoGraphy";

const AboutMe = ({
  text,
  height = "h-60",
  name = "Ziad",
}: {
  text?: string;
  height?: string;
  name: string;
}) => {
  return (
    <MaxWidthWrapper id="about" className="relative mb-24">
      <div className={`flex flex-col gap-4 lg:flex-row ${height}`}>
        <div className="flex flex-col gap-4">
          <TypographyH2 className="flex items-center gap-3 text-main">
            <InfinteTitle text="ABOUT" />
            ME
          </TypographyH2>
          <TypographyP>{text}</TypographyP>
        </div>
      </div>
      <h4 className="text-7xl opacity-60 font-bold lg:block hidden text-main2 absolute right-10 bottom-0">
        {name}
      </h4>
    </MaxWidthWrapper>
  );
};

export default AboutMe;
