// Logo.tsx
import Link from "next/link";
import { LOGOPATH, LOGOTEXT } from "../constants";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" aria-label="Go to homepage" className="flex items-center gap-2">
      <Image
        src={LOGOPATH}
        alt="logo"
        width={56}
        height={56}
        className="w-14 rounded-full"
        priority
      />
      {LOGOTEXT && <p className="text-gray-50">{LOGOTEXT}</p>}
    </Link>
  );
};

export default Logo;
