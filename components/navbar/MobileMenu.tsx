"use client";

import Link from "next/link";
import { useState } from "react";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="md:hidden">
      <div
        className="flex flex-col gap-[4.5px] cursor-pointer"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {isOpen ? (
          <Cross2Icon className="text-purple-700 text-2xl font-semibold" />
        ) : (
          <HamburgerMenuIcon className="text-purple-700 text-2xl font-semibold" />
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/">Friends</Link>
          <Link href="/">Groups</Link>
          <Link href="/">Stories</Link>
          <Link href="/">Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
