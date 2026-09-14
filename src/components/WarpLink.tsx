"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function WarpLink({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const [isWarping, setIsWarping] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWarping(true);
    
    // After animation, open the link in a new tab (or same tab)
    // Here we use a new tab for external links usually, but if it's a transition,
    // let's just open in a new tab and then hide the warp effect
    setTimeout(() => {
      window.open(href, "_blank");
      
      // Clean up the warp effect after they've "traveled"
      setTimeout(() => {
        setIsWarping(false);
      }, 500);
    }, 1500);
  };

  return (
    <>
      <a href={href} onClick={handleClick} className={className}>
        {children}
      </a>

      {/* The Space Travel / Warp Speed overlay */}
      <AnimatePresence>
        {isWarping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
          >
            {/* Generating stars stretching into lines */}
            {[...Array(50)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-white rounded-full"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
                initial={{
                  width: "2px",
                  height: "2px",
                  opacity: Math.random(),
                  scale: 0,
                  z: -1000
                }}
                animate={{
                  width: "150px",
                  height: "2px",
                  opacity: [0, 1, 0],
                  scale: [0, 2, 5],
                  x: (Math.random() - 0.5) * 2000,
                  y: (Math.random() - 0.5) * 2000,
                  z: 1000
                }}
                transition={{
                  duration: 1 + Math.random() * 0.5,
                  repeat: Infinity,
                  ease: "easeIn",
                }}
              />
            ))}
            
            {/* Center glow effect */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: [0, 0.8, 1], scale: [0, 2, 50] }}
              transition={{ duration: 1.5, ease: "easeIn" }}
              className="absolute w-32 h-32 bg-primary rounded-full blur-[100px]"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
