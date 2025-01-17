/* eslint-disable @typescript-eslint/no-explicit-any */
import type { Config } from "tailwindcss";
const {
  default: flattenColorPalette,
  // eslint-disable-next-line @typescript-eslint/no-require-imports
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        foreground: "hsl(0, 0%, 100%)",
        background: "#000000",
        secondaryBg: "hsl(250, 21%, 11%)",
        blue: {
          50: "hsl(220, 55%, 10%)",
          100: "hsl(220, 55%, 13%)",
          200: "hsl(220, 62%, 25%)",
          300: "hsl(220, 68%, 35%)",
          400: "hsl(220, 72%, 45%)",
          500: "hsl(220, 80%, 55%)",
          600: "hsl(220, 80%, 65%)",
          700: "hsl(220, 80%, 75%)",
          800: "hsl(220, 80%, 85%)",
          900: "hsl(220, 80%, 95%)",
          950: "hsl(220, 55%, 97%)",
        },
        cyan: {
          50: "hsl(180, 25%, 10%)",
          100: "hsl(180, 36%, 11%)",
          200: "hsl(180, 45%, 16%)",
          300: "hsl(180, 50%, 28%)",
          400: "hsl(180, 50%, 38%)",
          500: "hsl(180, 50%, 44%)",
          600: "hsl(180, 50%, 62%)",
          700: "hsl(180, 50%, 72%)",
          800: "hsl(180, 50%, 80%)",
          900: "hsl(180, 58%, 91%)",
          950: "hsl(180, 40%, 97%)",
        },
        gray: {
          50: "hsl(248, 21%, 13%)",
          100: "hsl(246, 18%, 15%)",
          200: "hsl(246, 11%, 22%)",
          300: "hsl(246, 8%, 35%)",
          400: "hsl(246, 7%, 45%)",
          500: "hsl(246, 6%, 55%)",
          600: "hsl(246, 6%, 65%)",
          700: "hsl(246, 6%, 78%)",
          800: "hsl(246, 6%, 87%)",
          900: "hsl(246, 6%, 95%)",
          950: "hsl(246, 4%, 97%)",
        },
        red: {
          50: "hsl(1, 35%, 10%)",
          100: "hsl(1, 45%, 12%)",
          200: "hsl(1, 55%, 20%)",
          300: "hsl(1, 62%, 28%)",
          400: "hsl(1, 62%, 35%)",
          500: "hsl(1, 62%, 44%)",
          600: "hsl(1, 62%, 60%)",
          700: "hsl(1, 62%, 76%)",
          800: "hsl(1, 64%, 85%)",
          900: "hsl(1, 68%, 95%)",
          950: "hsl(1, 55%, 98%)",
        },
        pink: {
          50: "hsl(270, 38%, 12%)",
          100: "hsl(270, 40%, 16%)",
          200: "hsl(270, 45%, 24%)",
          300: "hsl(270, 50%, 32%)",
          400: "hsl(270, 55%, 43%)",
          500: "hsl(270, 60%, 52%)",
          600: "hsl(270, 70%, 65%)",
          700: "hsl(270, 70%, 75%)",
          800: "hsl(270, 70%, 85%)",
          900: "hsl(270, 70%, 95%)",
          950: "hsl(270, 70%, 98%)",
        },
        green: {
          50: "hsl(152, 15%, 10%)",
          100: "hsl(152, 26%, 11%)",
          200: "hsl(152, 32%, 16%)",
          300: "hsl(152, 38%, 24%)",
          400: "hsl(152, 38%, 34%)",
          500: "hsl(152, 38%, 42%)",
          600: "hsl(152, 38%, 60%)",
          700: "hsl(152, 38%, 70%)",
          800: "hsl(152, 38%, 80%)",
          900: "hsl(152, 38%, 91%)",
          950: "hsl(152, 40%, 97%)",
        },
        yellow: {
          50: "hsl(44, 40%, 08%)",
          100: "hsl(44, 40%, 10%)",
          200: "hsl(44, 50%, 16%)",
          300: "hsl(44, 62%, 25%)",
          400: "hsl(44, 70%, 40%)",
          500: "hsl(44, 74%, 52%)",
          600: "hsl(44, 78%, 62%)",
          700: "hsl(44, 78%, 72%)",
          800: "hsl(44, 78%, 80%)",
          900: "hsl(44, 78%, 90%)",
          950: "hsl(44, 75%, 97%)",
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
        spotlight: "spotlight 2s ease .75s 1 forwards",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
