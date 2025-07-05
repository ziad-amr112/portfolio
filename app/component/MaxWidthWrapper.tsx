// MaxWidthWrapper.tsx
import React from "react";
import clsx from "clsx";

interface MaxWidthWrapperProps {
  className?: string;
  children: React.ReactNode;
  noPadding?: boolean;
  style?: React.CSSProperties;
  id?: string;
}

const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  className,
  children,
  noPadding = false,
  style,
  id,
}) => {
  return (
    <div
      id={id}
      style={style}
      className={clsx(
        className,
        "max-w-[1375px] w-full mx-auto",
        noPadding ? "py-0" : "py-5 lg:py-12",
        "px-5 md:px-10 lg:px-20"
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
