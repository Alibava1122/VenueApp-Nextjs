"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { ChevronDownIcon } from "@/app/components/icons/ChevronDownIcon";
import { UserIcon } from "@/app/components/icons/UserIcon";

function MenuIcon() {
  return (
    <div className="flex flex-col gap-[3px]">
      <span className="w-5 h-[2px] bg-black rounded"></span>
      <span className="w-5 h-[2px] bg-black rounded"></span>
      <span className="w-5 h-[2px] bg-black rounded"></span>
    </div>
  );
}

const dropdownStyles =
  "rounded-2xl shadow-md px-4 py-3 pr-10 text-[15px] font-semibold text-orange-500 appearance-none bg-white";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`
        fixed top-0 left-0  right-0 flex items-center justify-between
        px-3 md:px-10 py-4 transition-all duration-300
        ${isScrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}
    >
      {/* Logo */}
      <div>
        <Image src="/assets/logo.png" alt="Logo" width={60} height={60} priority />
      </div>

      {/* DESKTOP */}
      <div className="hidden md:flex items-center gap-4">
        <div className="relative hidden lg:block">
          <select className={dropdownStyles} defaultValue="add">
            <option value="add">Add Your Listing</option>
            <option value="rent">List a Rental</option>
            <option value="sell">List for Sale</option>
          </select>
          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="relative hidden lg:block">
          <select className={dropdownStyles} defaultValue="en">
            <option value="en">EN</option>
            <option value="fr">FR</option>
            <option value="es">ES</option>
          </select>
          <ChevronDownIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
        </div>

        <div className="flex items-center border-none gap-3 h-12 w-13 rounded-2xl bg-white px-3 shadow-md">
          <UserIcon />
        </div>
      </div>

      {/* MOBILE */}
      <div className="flex md:hidden items-center gap-3">
        <div className="relative">
          <select className="rounded-xl bg-white border px-3 py-2 pr-10 text-[14px] font-semibold text-black appearance-none w-full">
            <option>Add Your Listing</option>
            <option>List a Rental</option>
            <option>List for Sale</option>
          </select>

          <ChevronDownIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
        </div>

        <div className="w-10 h-10 rounded-full bg-white border flex items-center justify-center">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
