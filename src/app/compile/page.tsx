/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";
import { FUN_FACTS, LANGUAGES } from "@/constant";
import { Button } from "@/components/ui/moving-border";
import { GiBrain } from "react-icons/gi";
import { IoIosArrowForward } from "react-icons/io";

import { useRef, useState } from "react";

const Page = () => {
  const ref = useRef<any>(null);

  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * FUN_FACTS.length)
  );

  const { fact } = FUN_FACTS[randomIndex];

  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="flex flex-col items-center py-20 min-h-screen">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="var(--pink-700)"
        />
        <h3 className="text-2xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-normal tracking-tight text-black dark:text-white">
          Select a language
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mt-10">
          {LANGUAGES.map(({ title: title, icon: Icon, href: href, id }) => (
            <Link
              key={id}
              href={href}
              className="flex flex-col items-center gap-2 text-black dark:text-white
              bg-white dark:bg-gray-200 p-8 rounded-md shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl w-[250px] sm:w-full"
            >
              <Icon className="text-6xl" />
              <span className="text-lg md:text-xl lg:text-2xl font-normal tracking-tight">
                {title}
              </span>
            </Link>
          ))}
        </div>
        <div className="my-10" />
        <Button
          className="bg-white dark:bg-pink-300 text-black dark:text-white text-sm font-normal"
          onClick={() => ref.current.scrollIntoView({ behavior: "smooth" })}
        >
          Read fun facts &nbsp;&nbsp;
          <GiBrain className="inline-block text-xl" />
        </Button>
      </section>
      <section
        ref={ref}
        className="flex flex-col items-center justify-center h-[250px] bg-white dark:bg-gray-200 p-8 rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.2)] max-w-3xl mx-2  sm:mx-auto  relative"
      >
        <div className="flex flex-col gap-4 justify-center items-center">
          <p className="text-lg md:text-xl lg:text-3xl max-w-md text-center font-normal tracking-tight text-black dark:text-white">
            {fact}
          </p>
        </div>
        <IoIosArrowForward
          className="bg-white text-black absolute bottom-6 right-6 h-4 w-4 cursor-pointer rounded-full"
          onClick={() => {
            const newIndex = Math.floor(Math.random() * FUN_FACTS.length);
            setRandomIndex(newIndex);
          }}
        />
      </section>
      <div className="mt-24"></div>
    </div>
  );
};

export default Page;
