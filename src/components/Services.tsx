"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { LineChart, LayoutDashboard, BrainCircuit, FileSearch, DatabaseZap, Lightbulb } from "lucide-react";

const services = [
  {
    title: "Data Analysis & Reporting",
    description: "Transforming complex datasets into clear, actionable reports and insights to drive business strategy.",
    icon: <LineChart size={32} />,
  },
  {
    title: "Power BI Dashboard Development",
    description: "Designing interactive, end-to-end dashboards that provide real-time visibility into key performance indicators.",
    icon: <LayoutDashboard size={32} />,
  },
  {
    title: "Predictive Modeling & ML",
    description: "Building machine learning models (Regression, Random Forest, ANN) for accurate forecasting and trend prediction.",
    icon: <BrainCircuit size={32} />,
  },
  {
    title: "Data Cleaning & Visualization",
    description: "Structuring messy data and creating compelling visual narratives that make data easy to understand.",
    icon: <FileSearch size={32} />,
  },
  {
    title: "SQL Database Analysis",
    description: "Writing complex queries, optimizing data models, and performing deep-dive analysis directly in SQL databases.",
    icon: <DatabaseZap size={32} />,
  },
  {
    title: "AI-Assisted Analytics Consulting",
    description: "Leveraging modern AI tools and methodologies to accelerate data science workflows and uncover hidden patterns.",
    icon: <Lightbulb size={32} />,
  },
];

export function Services() {
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

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 relative z-10" ref={ref}>
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive data solutions tailored to help businesses leverage their data for maximum impact.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="glass p-8 rounded-2xl border-primary/10 hover:border-primary/50 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="w-16 h-16 rounded-2xl bg-background/50 border border-glass-border flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
