import { ReactNode } from "react";

interface TypographyProps {
  children: ReactNode;
  className?: string;
}

export function TypographyH1({ children, className = "" }: TypographyProps) {
  return <h1 className={`text-4xl font-extrabold tracking-tight lg:text-5xl ${className}`}>{children}</h1>;
}

export function TypographyH2({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 ${className}`}>
      {children}
    </h2>
  );
}

export function TypographyH3({ children, className = "" }: TypographyProps) {
  return <h3 className={`text-2xl font-semibold tracking-tight ${className}`}>{children}</h3>;
}

export function TypographyH4({ children, className = "" }: TypographyProps) {
  return <h4 className={`text-xl font-semibold tracking-tight ${className}`}>{children}</h4>;
}

export function TypographyP({ children, className = "" }: TypographyProps) {
  return <p className={`leading-7 ${className}`}>{children}</p>;
}

export function TypographyBlockquote({ children, className = "" }: TypographyProps) {
  return <blockquote className={`mt-6 border-l-2 pl-6 italic ${className}`}>{children}</blockquote>;
}

export function TypographyTable({ children, className = "" }: TypographyProps) {
  return (
    <div className={`my-6 w-full overflow-y-auto ${className}`}>
      <table className="w-full">{children}</table>
    </div>
  );
}

export function TypographyList({ children, className = "" }: TypographyProps) {
  return <ul className={`my-6 ml-6 list-disc [&>li]:mt-2 ${className}`}>{children}</ul>;
}

export function TypographySmall({ children, className = "" }: TypographyProps) {
  return <small className={`text-sm font-medium leading-none ${className}`}>{children}</small>;
}
