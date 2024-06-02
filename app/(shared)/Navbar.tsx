"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const items = [
  { label: "Home", path: "/" },
  { label: "Collections", path: "/collections" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  const handleClick = (path: string) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <nav
      className={`px-4 md:px-8 w-full bg-slate-600 h-24 flex items-center justify-between md:justify-around mx-auto text-white`}>
      <Link
        href="/"
        className="flex items-center gap-3 text-2xl font-medium text-white">
        Logo
      </Link>
      <div className="hidden md:flex items-center gap-9">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.path}
            className={`text-xl text-white ${
              pathname === item.path
                ? "opacity-100 font-semibold"
                : "opacity-75 font-normal"
            }`}>
            {item.label}
          </Link>
        ))}
      </div>

      <div className="block md:hidden relative">
        <div
          onClick={() => setIsOpen((prev) => !prev)}
          className="size-8 flex flex-col items-center justify-center gap-2">
          <div
            className={`h-1 w-full transition duration-300 ease-in ${
              isHomePage ? "bg-white" : "bg-[#fff]"
            } ${isOpen ? "-rotate-45 translate-y-3" : "rotate-0"}`}></div>
          <div
            className={`h-1 w-full transition duration-300 ease-in ${
              isHomePage ? "bg-white" : "bg-[#fff]"
            } ${isOpen ? "opacity-0" : "opacity-100"}`}></div>
          <div
            className={`h-1 w-full transition duration-300 ease-in ${
              isHomePage ? "bg-white" : "bg-[#fff]"
            } ${isOpen ? "rotate-45 -translate-y-3" : "rotate-0"}`}></div>
        </div>
        <div
          className={`absolute z-[99] top-full mt-4 right-0 w-48 bg-white flex flex-col items-center gap-4 p-8 rounded-xl transition-all duration-300 ${
            isOpen
              ? "scale-100 opacity-100"
              : "scale-0 -translate-y-24 translate-x-16 overflow-hidden opacity-0"
          }`}>
          {items.map((item) => (
            <Link
              key={item.label}
              onClick={() => handleClick(item.path)}
              href={item.path}
              className={`text-black ${
                pathname === item.path
                  ? "font-semibold"
                  : "opacity-75 font-normal"
              }`}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
