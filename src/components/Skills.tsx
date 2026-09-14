"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras } from "react-icons/si";
import { FaDatabase, FaChartLine, FaChartArea, FaFileExcel, FaRobot, FaCode, FaBrain, FaNetworkWired, FaChartBar } from "react-icons/fa";

const skillCategories = [
  {
    title: "Languages & Databases",
    skills: [
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "SQL", icon: FaDatabase, color: "#4479A1" },
    ]
  },
  {
    title: "Libraries & Frameworks",
    skills: [
      { name: "Pandas", icon: SiPandas, color: "#150458" },
      { name: "NumPy", icon: SiNumpy, color: "#013243" },
      { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
      { name: "TensorFlow", icon: SiTensorflow, color: "#FF6F00" },
      { name: "Keras", icon: SiKeras, color: "#D00000" },
      { name: "Matplotlib", icon: FaChartLine, color: "#11557c" },
      { name: "Seaborn", icon: FaChartArea, color: "#4C72B0" },
    ]
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Power BI", icon: FaChartBar, color: "#F2C811" },
      { name: "Excel", icon: FaFileExcel, color: "#217346" },
      { name: "AI Tools", icon: FaRobot, color: "#6366f1" },
      { name: "Vibe Coder", icon: FaCode, color: "#ec4899" },
    ]
  },
  {
    title: "Core Concepts",
    skills: [
      { name: "Machine Learning", icon: FaBrain, color: "#10b981" },
      { name: "Deep Learning Fundamentals", icon: FaNetworkWired, color: "#3b82f6" },
    ]
  }
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 120, damping: 12 }
    },
  };

  return (
    <section id="skills" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Technologies & <span className="text-gradient">Tools</span>
          </h2>
          <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
            I work with a range of modern tools and technologies to build data-driven solutions.
          </p>
        </div>

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
            >
              <h3 className="text-xl font-medium mb-6 text-foreground/90 border-b border-glass-border pb-2 inline-block">
                {category.title}
              </h3>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-wrap gap-4"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      variants={itemVariants}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group relative flex items-center gap-3 bg-secondary/5 dark:bg-background/40 hover:bg-background/80 border border-glass-border rounded-xl px-5 py-3 cursor-default transition-colors duration-300 overflow-hidden"
                      style={{"--hover-color": skill.color} as React.CSSProperties}
                    >
                      {/* Glow effect that appears on hover using the CSS variable */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"
                        style={{ backgroundColor: skill.color }}
                      />
                      
                      {/* Left glowing border on hover */}
                      <div 
                        className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ backgroundColor: skill.color }}
                      />

                      <div className="transition-transform duration-300 group-hover:scale-110">
                        <Icon size={22} style={{ color: skill.color }} />
                      </div>
                      <span className="font-semibold text-sm tracking-wide text-foreground/90 group-hover:text-foreground transition-colors">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
