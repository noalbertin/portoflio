// components/Loader.tsx
'use client'

import React from "react";
import { motion } from "framer-motion";

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-amber-50 to-slate-100 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">
        {/* Particules flottantes dorées */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-amber-400/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              x: [-10, 10, -10],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Mesh gradient overlay doré */}
        <div className="absolute inset-0 bg-gradient-to-r from-amber-400/5 via-yellow-400/5 to-amber-400/5 dark:from-amber-900/10 dark:via-yellow-800/10 dark:to-amber-900/10 animate-pulse" />
      </div>

      {/* Logo avec bounce */}
      <div className="relative z-10">
        <img
          src="/logo.png"
          alt="Logo"
          className="w-50 h-50 animate-bounce mb-4"
        />
      </div>

      {/* Grille décorative */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.04)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)]" />
    </div>
  );
};

export default Loader;