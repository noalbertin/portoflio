'use client'

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const isDark = theme === "dark";

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-16 h-8 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
        ${isDark ? "bg-slate-800" : "bg-indigo-400"}`}
      aria-label="Changer le thème"
    >
      <span
        className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center
          transform transition-transform duration-300 ease-in-out
          ${isDark ? "translate-x-8" : "translate-x-1"}`}
      >
        {isDark ? (
          <LuSun className="text-amber-400 text-sm" />
        ) : (
          <FaMoon className="text-slate-700 text-sm" />
        )}
      </span>
    </button>
  );
};

export default ThemeToggle;