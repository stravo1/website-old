import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const [curtain, setCurtain] = useState(false);
  return (
    <>
      <div
        className={
          curtain
            ? "fixed z-10 top-0 opacity-60 bg-neutral-900 w-full h-screen transition-all"
            : "hidden transition-all"
        }
      ></div>
      <header className="sticky top-0 z-50 flex w-full items-center justify-center bg-white py-4">
        <div className="flex items-center justify-start w-full">
          <Link href="/">
            <a className="flex items-center justify-center">
              <Image
                src="/images/identicon.svg"
                width={100}
                height={44}
                objectFit="contain"
                priority={true}
                alt="stravo1 - identicon"
              />
            </a>
          </Link>
        </div>
        <nav className="hidden items-center md:gap-10 lg:gap-12 xl:gap-16 2xl:gap-20 md:flex font-cursive mx-12">
          <Link href="/work">
            <a className="select-none hover:text-red-500 transition-all">
              work
            </a>
          </Link>
          <Link href="/bio">
            <a className="select-none hover:text-red-500 transition-all">bio</a>
          </Link>
          <Link href="/contact">
            <a className="select-none hover:text-red-500 transition-all">
              contact
            </a>
          </Link>
        </nav>
        <MobileMenu setOpen={setCurtain} />
      </header>
    </>
  );
};

export default Header;
