"use client";

import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { FolderGit2, Users, GraduationCap, Database } from "lucide-react";

export function About() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const stats = [
    { label: "Portfolio Projects", value: 12, suffix: "+", icon: FolderGit2, color: "text-blue-500" },
    { label: "LinkedIn Connections", value: 500, suffix: "+", icon: Users, color: "text-indigo-500" },
    { label: "CGPA (Expected)", value: 8.5, suffix: "", decimals: 1, icon: GraduationCap, color: "text-emerald-500" },
    { label: "Records Analyzed", value: 400, suffix: "K+", icon: Database, color: "text-orange-500" },
  ];

  const skillPills = [
    "Python",
    "SQL",
    "Power BI",
    "DAX",
    "Excel",
    "Machine Learning",
    "Data Visualization",
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section id="about" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Left Column: About Section */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-muted dark:text-gray-300 leading-relaxed">
              I'm a Hyderabad-based data analyst in my final year of B.Sc. (Honours) in Mathematics, Statistics & Data Science, currently strengthening my skills through a Data Science with AI certification with IIT Roorkee. I specialize in turning raw, messy data into dashboards and models people can actually act on — from cleaning and querying in Python and SQL, to building business intelligence reports in Power BI and DAX, to predictive models using Random Forest, ANN, and time series forecasting.
            </p>
            <p className="text-lg text-muted dark:text-gray-300 leading-relaxed">
              Across 12+ portfolio projects and 400K+ records analyzed, I've worked on loan risk analytics, ad performance dashboards, sales forecasting, and price prediction — each one built end-to-end, from raw data to a deployed, shareable tool.
            </p>
            
            <div className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Core Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skillPills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 glass rounded-full text-sm font-medium text-foreground hover:text-primary border border-primary/20 hover:border-primary/50 transition-all cursor-default shadow-sm hover:shadow-primary/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Statistics */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
              <div
                key={index}
                className="glass p-5 md:p-8 rounded-2xl border-glass-border flex flex-col items-center justify-center text-center hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Glow Background */}
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Icon */}
                <div className={`mb-3 md:mb-4 p-3 rounded-full bg-background/50 group-hover:scale-110 transition-transform duration-300 ${stat.color}`}>
                   <Icon size={28} />
                </div>

                <div className="text-3xl md:text-5xl font-bold text-primary mb-2 flex items-baseline justify-center relative z-10 group-hover:text-glow transition-all duration-300">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={2.5}
                      decimals={stat.decimals || 0}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xs md:text-base font-medium text-muted dark:text-gray-400 relative z-10 group-hover:text-foreground transition-colors duration-300">
                  {stat.label}
                </div>
              </div>
            )})}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
