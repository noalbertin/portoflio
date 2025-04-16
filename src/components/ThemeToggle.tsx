'use client'

import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { FaMoon } from "react-icons/fa";
import { LuSun } from "react-icons/lu";
import { motion, AnimatePresence } from "framer-motion";

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
    <motion.span
      layout
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 30,
      }}
      className={`absolute top-1 w-6 h-6 rounded-full bg-white shadow-lg flex items-center justify-center`}
      animate={{
        x: isDark ? 32 : 4, // position selon le thème
      }}
    >
      <AnimatePresence mode="wait">
        {isDark ? (
          <motion.div
            key="sun"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <LuSun className="text-amber-400 text-sm" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoon className="text-slate-700 text-sm" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.span>
  </button>
  );
};

export default ThemeToggle;