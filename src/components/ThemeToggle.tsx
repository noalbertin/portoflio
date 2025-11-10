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
    <motion.button
      onClick={toggleTheme}
      aria-label="Changer le thème"
      className="relative p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all duration-300 group overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Glow effect au hover */}
      <motion.div
        className={`absolute -inset-1 rounded-xl blur-lg opacity-0 group-hover:opacity-40 transition-opacity duration-500 ${
          isDark 
            ? 'bg-gradient-to-r from-amber-500 to-orange-500' 
            : 'bg-gradient-to-r from-indigo-500 to-purple-500'
        }`}
      />

      {/* Fond animé */}
      <motion.div
        animate={{
          background: isDark 
            ? 'linear-gradient(135deg, rgba(251, 191, 36, 0.1), rgba(249, 115, 22, 0.1))'
            : 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(168, 85, 247, 0.1))'
        }}
        transition={{ duration: 0.5 }}
        className="absolute inset-0 rounded-xl"
      />

      {/* Icône animée */}
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={isDark ? "sun" : "moon"}
          initial={{ rotate: -180, scale: 0, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          exit={{ rotate: 180, scale: 0, opacity: 0 }}
          transition={{ 
            duration: 0.4,
            type: "spring",
            stiffness: 200,
            damping: 20
          }}
          className="relative z-10"
        >
          {isDark ? (
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              <LuSun className="text-amber-400 text-base drop-shadow-[0_0_8px_rgba(251,191,36,0.5)]" />
            </motion.div>
          ) : (
            <motion.div
              animate={{ 
                rotate: [0, -10, 10, -10, 0],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <FaMoon className="text-indigo-400 text-base drop-shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Particles effect */}
      <AnimatePresence>
        {isDark && (
          <>
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={`particle-${i}`}
                className="absolute w-1 h-1 bg-amber-400 rounded-full"
                initial={{ 
                  x: 0, 
                  y: 0, 
                  opacity: 0,
                  scale: 0
                }}
                animate={{ 
                  x: [0, (i - 1) * 15],
                  y: [0, -15 - i * 5],
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeOut"
                }}
                style={{
                  left: '50%',
                  top: '50%',
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default ThemeToggle;