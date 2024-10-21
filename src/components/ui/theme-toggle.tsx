import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";
import {
  AiOutlineMoon as MoonIcon,
  AiOutlineSun as SunIcon,
} from "react-icons/ai";

const ThemeToggle = () => {
  const { toggleTheme } = useContext(ThemeContext);

  const disableTransitionsTemporarily = () => {
    document.documentElement.classList.add("[&_*]:!transition-none");
    window.setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 0);
  };

  const toggleMode = () => {
    disableTransitionsTemporarily();
    const isDarkMode = document.documentElement.classList.toggle("dark");
    window.localStorage.isDarkMode = isDarkMode;
    toggleTheme();
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full bg-white px-3 py-2 shadow-lg ring-1 ring-gray-300 backdrop-blur transition dark:bg-white"
      onClick={toggleMode}
    >
      <SunIcon className="h-6 w-6 pink-yellow-500 dark:hidden text-pink-600" />
      <MoonIcon className="hidden h-6 w-6 text-pink-400 dark:block dark:text-pink-300 dark:group-text-pink-400" />
    </button>
  );
};

export default ThemeToggle;
