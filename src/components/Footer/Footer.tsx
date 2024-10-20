"use client";

import { AiOutlineBug } from "react-icons/ai";
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
      <div className="w-full py-10 gap-5 text-xs dark:text-zinc-400 text-zinc-600 flex justify-center items-center flex-wrap max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <Link
          className="hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://www.github.com/Sarthak-ONS"
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
        >
          Portfolio
        </Link>
        <Link
          className="inline-flex hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://github.com/wajeshubham/snippng/issues/new"
        >
          <AiOutlineBug className="w-4 h-4 mr-1" /> Report a bug
        </Link>
        <Link
          className="inline-flex hover:underline hover:dark:text-white hover:text-zinc-900"
          href="https://github.com/wajeshubham/snippng/issues/new"
        >
          <AiOutlineBug className="w-4 h-4 mr-1" /> Request a feature
        </Link>{" "}
      </div>
    </footer>
  );
};

export default Footer;
