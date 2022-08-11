import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "animate.css";

const MobileMenu = ({ setOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="relative md:hidden">
        <button
          onClick={(e) => {
            e.preventDefault();
            if (!menuOpen) {
              document
                .getElementById("menu")
                .setAttribute("style", "height:15rem");
            } else
              document
                .getElementById("menu")
                .setAttribute("style", "height:0%");
            setMenuOpen((arg) => !arg);
            setOpen((arg) => !arg);
          }}
        >
          <Image
            src={menuOpen ? "/images/close.svg" : "/images/menu.svg"}
            width={100}
            height={44}
            objectFit="contain"
            priority={true}
            alt="stravo1 - identicon"
          />
        </button>
        <div id="menu" className="fixed left-0 top-16 w-full bg-white drop-shadow-md">
          <div
            className={
              menuOpen
                ? "flex flex-col justify-between h-full py-10 px-2"
                : "hidden"
            }
          >
            <Link href={"/work"}>
              <a className="font-cursive w-full flex p-4 select-none hover:text-red-500 transition-all animate__animated animate__fadeInLeft animate__faster delay_125">
                work
              </a>
            </Link>
            <Link href={"/bio"}>
              <a className="font-cursive w-full flex  p-4 select-none hover:text-red-500 transition-all animate__animated animate__fadeInLeft animate__faster delay_175">
                bio
              </a>
            </Link>
            <Link href={"/contact"}>
              <a className="font-cursive w-full flex  p-4 select-none hover:text-red-500 transition-all animate__animated animate__fadeInLeft animate__faster delay_225">
                contact
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
