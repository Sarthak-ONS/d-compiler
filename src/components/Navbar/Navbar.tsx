"use client";

import { cn } from "@/utils/util";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoTerminalOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdRoundaboutRight } from "react-icons/md";
import ThemeToggle from "@/components/ui/theme-toggle";
import { LANGUAGES } from "@/constant";

const NAVBAR_ITEMS = [
  {
    title: "Home",
    href: "/",
    icon: AiFillHome,
  },
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

const NAV_EXCULUDE_ROUTES = [...LANGUAGES.map((lang) => lang.href)];

function Navbar({ className }: { className?: string }) {
  const pathName = usePathname();
  const isNavbarVisible = NAV_EXCULUDE_ROUTES.includes(pathName);

  if (isNavbarVisible) {
    return null;
  }

  return (
    <nav
      className={cn(
        "fixed rounded-md inset-x-0 w-full max-w-[1200px] mx-auto z-[99999] flex justify-between text-white p-4  px-10 transform transition-transform duration-300 ease-in-out dark:bg-transparent bg-transparent",
        className
      )}
    >
      <Link
        href="/"
        className="text-xl font-normal cursor-pointer flex items-center gap-2 text-black dark:text-white"
      >
        <IoTerminalOutline />
        DCompiler
      </Link>
      <div className="flex gap-8">
        {NAVBAR_ITEMS.filter((item) => item.href !== pathName).map(
          (item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-black hover:text-gray-400 transition-colors flex items-center justify-center gap-2 text-sm font-medium cursor-pointer dark:text-white"
              target={item.target || "_self"}
            >
              {<item.icon className="text-lg cursor-pointer" />}
              {item.title}
            </Link>
          )
        )}
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
