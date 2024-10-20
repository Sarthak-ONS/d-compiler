"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { IoLogoJavascript, IoLogoPython } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { TbBrandCpp } from "react-icons/tb";
import Link from "next/link";

const LANGUAGES = [
  {
    title: "Javascript",
    icon: IoLogoJavascript,
    href: "/compile/javascript",
  },
  {
    title: "Python",
    icon: IoLogoPython,
    href: "/compile/python",
  },
  {
    title: "Java",
    icon: FaJava,
    href: "/compile/java",
  },
  {
    title: "C++",
    icon: TbBrandCpp,
    href: "/compile/cpp",
  },
];

const page = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="flex flex-col items-center py-20 h-screen">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <h3 className="text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-normal tracking-tight text-black dark:text-white">
          Select a language
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-10">
          {LANGUAGES.map(({ title: title, icon: Icon, href: href }, index) => (
            <Link
              key={index}
              href={href}
              className="flex flex-col items-center gap-2 text-black dark:text-white
              bg-white dark:bg-gray-200 p-8 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl
              "
            >
              <Icon className="text-6xl" />
              <span className="text-lg md:text-xl lg:text-2xl font-normal tracking-tight">
                {title}
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
