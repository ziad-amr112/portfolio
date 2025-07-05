import React from "react";
import MaxWidthWrapper from "./MaxWidthWrapper";

interface FlexWrapperProps {
  className?: string;
  children: React.ReactNode;
  useMaxWidthWrapper?: boolean;
}

const FlexWrapper: React.FC<FlexWrapperProps> = ({
  className = "",
  children,
  useMaxWidthWrapper = true,
}) => {
  const content = (
    <div className={`flex gap-5 w-full flex-col md:flex-row lg:gap-8 ${className}`}>
      {children}
    </div>
  );

  if (useMaxWidthWrapper) {
    return <MaxWidthWrapper>{content}</MaxWidthWrapper>;
  }

  return content;
};

export default FlexWrapper;
