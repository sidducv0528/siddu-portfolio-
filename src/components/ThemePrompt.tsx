"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemePrompt() {
  const [isOpen, setIsOpen] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    // Check if the user has already chosen a theme preference via the prompt
    const hasPrompted = localStorage.getItem("theme-prompt-seen");
    if (!hasPrompted) {
      // Delay slightly for effect
      const timer = setTimeout(() => setIsOpen(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleSelectTheme = (theme: "light" | "dark") => {
    setTheme(theme);
    localStorage.setItem("theme-prompt-seen", "true");
    setIsOpen(false);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-md bg-white/20 dark:bg-black/40 backdrop-blur-2xl border border-white/40 dark:border-white/10 rounded-[2rem] p-8 shadow-[0_0_50px_rgba(0,0,0,0.3)] flex flex-col items-center text-center overflow-hidden"
          >
            {/* Glossy gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none" />
            
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 relative z-10 drop-shadow-md">
              Welcome! 👋
            </h2>
            <p className="text-gray-800 dark:text-gray-300 mb-8 relative z-10 font-medium">
              Choose your preferred viewing experience.
            </p>

            <div className="flex gap-5 w-full relative z-10">
              <button
                onClick={() => handleSelectTheme("light")}
                className="flex-1 group flex flex-col items-center gap-4 p-6 rounded-3xl bg-white/60 dark:bg-white/5 border border-white/60 dark:border-white/10 hover:bg-white dark:hover:bg-white/10 hover:border-blue-400 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] transition-all duration-300"
              >
                <div className="p-4 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full group-hover:scale-110 group-hover:rotate-12 transition-transform duration-300 shadow-sm">
                  <Sun size={32} />
                </div>
                <span className="font-bold text-gray-800 dark:text-gray-200">Light Mode</span>
              </button>

              <button
                onClick={() => handleSelectTheme("dark")}
                className="flex-1 group flex flex-col items-center gap-4 p-6 rounded-3xl bg-gray-900/60 dark:bg-black/50 border border-gray-700 dark:border-white/10 hover:bg-gray-900 dark:hover:bg-black/80 hover:border-purple-400 hover:shadow-[0_0_30px_rgba(168,85,247,0.3)] transition-all duration-300"
              >
                <div className="p-4 bg-purple-900/50 text-purple-400 rounded-full group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-300 shadow-sm">
                  <Moon size={32} />
                </div>
                <span className="font-bold text-white">Dark Mode</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
