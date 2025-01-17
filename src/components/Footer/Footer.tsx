"use client";

import { AiOutlineBug, AiFillCaretUp } from "react-icons/ai";
import Link from "next/link";
import React from "react";
import { LANGUAGES } from "@/constant";
import { usePathname } from "next/navigation";

const NAV_EXCULUDE_ROUTES = [...LANGUAGES.map((lang) => lang.href)];

const Footer = () => {
  const pathName = usePathname();
  const isNavbarVisible = NAV_EXCULUDE_ROUTES.includes(pathName);

  if (isNavbarVisible) {
    return null;
  }

  return (
    <footer className="w-full bg-transparent">
      <div
        className="text-center
      dark:text-zinc-400 text-zinc-600 text-sm"
      >
        Made with ❤️ by Sarthak Agarwal
      </div>
      <div className="w-full py-6 gap-5 text-xs dark:text-zinc-400 text-zinc-600 flex justify-center items-center flex-wrap max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <Link
          className="hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://www.github.com/Sarthak-ONS"
          target="_blank"
        >
          GitHub
        </Link>
        <Link
          className="hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://www.linkedin.com/in/sarthak-agarwal-925431192/"
        >
          LinkedIn
        </Link>
        <Link
          className="hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://sarthakag.dev"
          target="_blank"
        >
          Portfolio
        </Link>
        <Link
          className="inline-flex hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://github.com/Sarthak-ONS/d-compiler"
          target="_blank"
        >
          <AiOutlineBug className="w-4 h-4 mr-1" /> Report a bug
        </Link>
        <Link
          className="inline-flex hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://github.com/Sarthak-ONS/d-compiler"
          target="_blank"
        >
          <AiFillCaretUp className="w-4 h-4 mr-1" /> Request a feature
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
