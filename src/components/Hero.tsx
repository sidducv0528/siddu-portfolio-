"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TypewriterEffect } from "./ui/TypewriterEffect";
import { ParticleBackground } from "./ui/ParticleBackground";
import { ArrowRight, Download, Mail, Database, ChartBar, Activity, ChevronDown } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";
import Image from "next/image";

export function Hero() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleDownload = () => {
    setIsResumeOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  const words = [
    "Data Analyst",
    "Statistics & Data Science",
    "Power BI Developer",
    "Machine Learning",
    "Vibe Coder",
    "AI Tools Expert",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <ParticleBackground />

      {/* Aurora Gradient Background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob" />
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-2000" />
      <div className="absolute -bottom-8 left-1/3 w-96 h-96 bg-accent/30 rounded-full mix-blend-multiply filter blur-[128px] animate-blob animation-delay-4000" />

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 flex flex-col justify-center"
        >
          <div className="space-y-4">
            <h2 className="text-xl md:text-2xl font-mono text-gray-600 dark:text-gray-400">
              Hi, I'm
            </h2>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white">
              Siddu Varikuppala
            </h1>
            <div className="text-2xl md:text-3xl font-semibold h-[2em] text-gray-800 dark:text-white/90">
              <TypewriterEffect words={words} />
            </div>
          </div>

          <p className="text-base md:text-lg text-gray-600 dark:text-white/70 max-w-xl leading-relaxed">
            Turn data into meaningful insights using Python, SQL, Machine Learning and Data Visualization. I am passionate about solving real-world problems and building impactful data-driven solutions.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200/50 dark:bg-[#0a0f1c]/80 text-sm font-medium text-gray-800 dark:text-white border border-gray-300 dark:border-white/10 backdrop-blur-sm">
              <span className="text-yellow-600 dark:text-yellow-400 font-bold">Py</span> Python
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200/50 dark:bg-[#0a0f1c]/80 text-sm font-medium text-gray-800 dark:text-white border border-gray-300 dark:border-white/10 backdrop-blur-sm">
              <Database size={16} className="text-cyan-600 dark:text-cyan-400" /> SQL
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200/50 dark:bg-[#0a0f1c]/80 text-sm font-medium text-gray-800 dark:text-white border border-gray-300 dark:border-white/10 backdrop-blur-sm">
              <Activity size={16} className="text-indigo-600 dark:text-indigo-400" /> Machine Learning
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-200/50 dark:bg-[#0a0f1c]/80 text-sm font-medium text-gray-800 dark:text-white border border-gray-300 dark:border-white/10 backdrop-blur-sm">
              <ChartBar size={16} className="text-blue-600 dark:text-blue-400" /> Data Visualization
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4 relative">
            <a
              href="#projects"
              className="px-8 py-3 rounded-full font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(79,70,229,0.3)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)]"
            >
              View My Projects <ArrowRight size={18} />
            </a>

            {/* Resume Dropdown */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="px-8 py-3 rounded-full font-semibold text-gray-900 dark:text-white border border-gray-400 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 hover:shadow-[0_0_20px_rgba(0,0,0,0.15)] dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all flex items-center gap-2"
              >
                <Download size={18} /> Download Resume <ChevronDown size={16} className={`transition-transform ${isResumeOpen ? "rotate-180" : ""}`} />
              </motion.button>

              <AnimatePresence>
                {isResumeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 left-0 w-64 p-2 rounded-2xl bg-white dark:bg-[#0a0f1c] border border-gray-200 dark:border-white/10 shadow-xl z-50"
                  >
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      href="/Data-Analyst-Resume.pdf"
                      download
                      onClick={handleDownload}
                      className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-sm font-medium text-gray-800 dark:text-white"
                    >
                      <div className="flex items-center justify-between">
                        <span>Data Analyst Resume</span>
                        <Download size={14} className="text-gray-500" />
                      </div>
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.95 }}
                      href="/Data-Science-Resume.pdf"
                      download
                      onClick={handleDownload}
                      className="block px-4 py-3 rounded-xl hover:bg-gray-100 dark:hover:bg-white/5 transition-colors text-sm font-medium text-gray-800 dark:text-white mt-1"
                    >
                      <div className="flex items-center justify-between">
                        <span>Data Science Resume</span>
                        <Download size={14} className="text-gray-500" />
                      </div>
                    </motion.a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="#contact"
              className="px-8 py-3 rounded-full font-semibold text-gray-900 dark:text-white border border-gray-400 dark:border-white/20 hover:bg-gray-100 dark:hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Mail size={18} /> Contact Me
            </a>
          </div>

          <div className="flex items-center gap-5 pt-6 text-gray-500 dark:text-white/50">
            <a href="https://linkedin.com/in/siddu-varikuppala" target="_blank" rel="noreferrer" className="hover:text-blue-600 dark:hover:text-white transition-colors">
              <LinkedinIcon style={{ width: 22, height: 22 }} />
            </a>
            <a href="https://github.com/sidducv0528" target="_blank" rel="noreferrer" className="hover:text-gray-900 dark:hover:text-white transition-colors">
              <GithubIcon style={{ width: 22, height: 22 }} />
            </a>
            <a href="mailto:john@example.com" className="hover:text-purple-600 dark:hover:text-white transition-colors">
              <Mail size={22} />
            </a>
          </div>
        </motion.div>

        {/* Right Side: Visuals */}
        <div className="relative h-[400px] lg:h-[600px] w-full flex items-center justify-center mt-8 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex items-center justify-center"
          >
            {/* Soft Pulsating Glow Behind Photo */}
            <motion.div 
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute w-[250px] h-[250px] lg:w-[350px] lg:h-[350px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-[60px] -z-10"
            />

            <Image 
              src="/images/projects/profile.jpg" 
              alt="V Siddu" 
              fill 
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain drop-shadow-[0_0_40px_rgba(120,0,255,0.2)] relative z-10" 
              priority
            />
          </motion.div>
        </div>
      </div>

      {/* Thank You Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5, filter: "blur(10px)" }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[100] px-6 py-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-2xl flex items-center gap-3 border border-white/20 backdrop-blur-lg"
          >
            <span className="text-2xl">🎉</span>
            Thanks for viewing my resume!
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
