"use client";

import { Button } from "@/components/ui/moving-border";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <section className="min-h-screen max-w-[1200px] relative mx-auto flex flex-col items-center justify-center gap-2">
        <div className="absolute inset-x-0 top-[-10rem] z-0 transform-gpu overflow-hidden blur-3xl sm:top-[-10rem]">
          <svg
            className="relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]"
            viewBox="0 0 1155 678"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)"
              fillOpacity=".3"
              d="M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z"
            />
            <defs>
              <linearGradient
                id="45de2b6b-92d5-4d68-a6a0-9b9b2abad533"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#9089FC" />
                <stop offset={1} stopColor="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h2 className="text-center text-4xl md:text-4xl lg:text-7xl py-2 md:py-10 relative z-20 font-normal tracking-tight text-black dark:text-white">
          DynamicCode, <br /> DebugCompile.
        </h2>
        <h6 className="text-center text-xs md:text-sm lg:text-lg py-2 md:py-10 relative z-20 font-normal tracking-tight text-black dark:text-white">
          Built with Next.js, TailwindCSS, and TypeScript.
        </h6>
        <Button
          borderRadius="1.75rem"
          className="bg-white dark:bg-pink-300 text-black dark:text-white text-xl font-semibold"
          onClick={() => router.push("/compile")}
        >
          Get Started
        </Button>
      </section>
    </div>
  );
}
