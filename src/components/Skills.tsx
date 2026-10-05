"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { SiPython, SiPandas, SiNumpy, SiScikitlearn, SiTensorflow, SiKeras } from "react-icons/si";
import { FaDatabase, FaChartLine, FaChartArea, FaFileExcel, FaRobot, FaCode, FaBrain, FaNetworkWired, FaChartBar, FaProjectDiagram } from "react-icons/fa";

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
      { name: "XGBoost", icon: FaProjectDiagram, color: "#124B8B" },
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
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: -40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
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

        <div className="space-y-12 overflow-hidden">
          {skillCategories.map((category, catIdx) => {
            const isEven = catIdx % 2 === 0;
            return (
              <div key={category.title} className="relative w-full">
                <h3 className="text-xl font-medium mb-6 text-foreground/90 border-b border-glass-border pb-2 inline-block">
                  {category.title}
                </h3>
                
                {/* Marquee Container with fade masks */}
                <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] group">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="flex shrink-0 gap-4 pr-4"
                      animate={{ x: isEven ? ["0%", "-100%"] : ["-100%", "0%"] }}
                      transition={{ 
                        duration: 30, 
                        ease: "linear", 
                        repeat: Infinity 
                      }}
                    >
                      {category.skills.map((skill) => {
                        const Icon = skill.icon;
                        return (
                          <div
                            key={skill.name}
                            className="group/card relative flex items-center gap-3 bg-secondary/5 dark:bg-background/40 hover:bg-background/80 border border-glass-border rounded-xl px-5 py-3 cursor-default transition-all duration-300 overflow-hidden shrink-0 hover:-translate-y-1 hover:shadow-lg"
                            style={{"--hover-color": skill.color} as React.CSSProperties}
                          >
                            <div 
                              className="absolute inset-0 opacity-0 group-hover/card:opacity-10 transition-opacity duration-300 pointer-events-none"
                              style={{ backgroundColor: skill.color }}
                            />
                            
                            <div 
                              className="absolute left-0 top-0 bottom-0 w-1 opacity-0 group-hover/card:opacity-100 transition-opacity duration-300"
                              style={{ backgroundColor: skill.color }}
                            />

                            <div className="transition-transform duration-300 group-hover/card:scale-110">
                              <Icon size={22} style={{ color: skill.color }} />
                            </div>
                            <span className="font-semibold text-sm tracking-wide text-foreground/90 group-hover/card:text-foreground transition-colors whitespace-nowrap">
                              {skill.name}
                            </span>
                          </div>
                        );
                      })}
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
