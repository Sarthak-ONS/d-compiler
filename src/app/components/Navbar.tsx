"use client";
import { cn } from "@/app/utils/util";
import Link from "next/link";

import { IoTerminalOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { MdRoundaboutRight } from "react-icons/md";
import ThemeToggle from "./ui/theme-toggle";

const NAVBAR_ITEMS = [
  {
    title: "Compile",
    href: "/compile",
    icon: MdRoundaboutRight,
  },
  {
    title: "Github",
    href: "https://github.com/Sarthak-ONS/d-compiler",
    icon: FaGithub,
    target: "_blank",
  },
];

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "font-sans top-4 fixed rounded-md inset-x-0 w-full max-w-[1200px] mx-auto z-[99999] flex justify-between text-white p-4  px-10 transform transition-transform duration-300 ease-in-out dark:bg-transparent bg-white",
        className
      )}
    >
      <div className="text-xl font-normal cursor-pointer flex items-center gap-2 text-black dark:text-white">
        <IoTerminalOutline />
        DCompiler
      </div>
      <div className="flex gap-8">
        {NAVBAR_ITEMS.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="text-black hover:text-gray-400 transition-colors flex items-center justify-center gap-2 text-sm font-medium cursor-pointer dark:text-white"
            target={item.target || "_self"}
          >
            {<item.icon className="text-lg cursor-pointer" />}
            {item.title}
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </div>
  );
}

export default Navbar;
