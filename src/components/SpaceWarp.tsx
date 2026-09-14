"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export const SpaceWarp = ({ children }: { children: React.ReactNode }) => {
  const [isWarping, setIsWarping] = useState(true);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Stop the warp after 2.5 seconds
    const timer = setTimeout(() => {
      setIsWarping(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isWarping || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { x: number; y: number; z: number }[] = [];
    const numStars = 400;
    
    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * width - width / 2,
        y: Math.random() * height - height / 2,
        z: Math.random() * width,
      });
    }

    let speed = 2;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.2)";
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      speed += 0.5; // Accelerate for the warp effect

      stars.forEach((star) => {
        star.z -= speed;

        if (star.z <= 0) {
          star.x = Math.random() * width - width / 2;
          star.y = Math.random() * height - height / 2;
          star.z = width;
        }

        const px = cx + (star.x / star.z) * width;
        const py = cy + (star.y / star.z) * width;
        const radius = Math.max(0, (1 - star.z / width) * 3);

        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        
        // Draw trailing lines to emphasize speed
        if (speed > 10) {
            const prevPx = cx + (star.x / (star.z + speed)) * width;
            const prevPy = cy + (star.y / (star.z + speed)) * width;
            ctx.beginPath();
            ctx.moveTo(prevPx, prevPy);
            ctx.lineTo(px, py);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - star.z / width})`;
            ctx.lineWidth = radius;
            ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isWarping]);

  return (
    <>
      <AnimatePresence>
        {isWarping && (
          <motion.div
            key="warp-overlay"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center pointer-events-none"
          >
            <canvas ref={canvasRef} className="absolute inset-0" />
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 1.5, opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="relative z-10 text-white font-mono text-4xl md:text-6xl font-bold tracking-[0.2em] uppercase mix-blend-difference"
            >
              Entering Portfolio
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={!isWarping ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </>
  );
};
