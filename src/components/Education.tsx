"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { GraduationCap, Award, BookOpen, ShieldCheck, ExternalLink, Laptop, Briefcase, Trophy } from "lucide-react";

const educationData = [
  {
    title: "Data Science Internship",
    institution: "QSpiders",
    duration: "Present",
    details: "Currently gaining hands-on industry experience as a Data Science Intern.",
    icon: <Laptop size={24} />,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "Professional Certificate in Data Science with AI",
    institution: "IIT Roorkee",
    duration: "Enrolled",
    details: "Comprehensive training in AI and Data Science methodologies.",
    icon: <Award size={24} />,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Data Analyst with AI Internship",
    institution: "IBM (45 Days Virtual Internship)",
    duration: "Completed",
    details: "Real-world job simulation focused on data analytics and AI applications.",
    icon: <Briefcase size={24} />,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "Hackathon Participant",
    institution: "Open Innovation",
    duration: "Completed",
    details: "Collaborated and competed to build innovative data-driven solutions.",
    icon: <Trophy size={24} />,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    title: "B.Sc. (Honours) Mathematics, Statistics & Computer Science",
    institution: "A.V. Arts, Science and Commerce College",
    duration: "Expected 2027",
    details: "Current CGPA: 8.5 (3rd Year). Deep dive into statistical modeling, mathematics, and core computer science.",
    icon: <GraduationCap size={24} />,
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "NCC 'B' Certificate",
    institution: "National Cadet Corps",
    duration: "Completed (A Grade)",
    details: "Developed strong leadership, discipline, and teamwork skills alongside my degree.",
    icon: <ShieldCheck size={24} />,
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Intermediate (MPC)",
    institution: "Sri Medhav College",
    duration: "Passed 2024",
    details: "Scored 91%. Specialized in Mathematics, Physics, and Chemistry.",
    icon: <BookOpen size={24} />,
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    title: "10th Standard",
    institution: "High School Education",
    duration: "Passed 2022",
    details: "Scored 9.2/10 CGPA.",
    icon: <BookOpen size={24} />,
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

export function Education() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);

  return (
    <section id="education" className="py-24 relative z-10" ref={containerRef}>
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My <span className="text-gradient">Journey</span>
          </h2>
          <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
            From exploring the fundamentals to building real-world solutions. Every step, a new skill.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-glass-border transform md:-translate-x-1/2">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-primary via-secondary to-accent origin-top"
            />
          </div>

          <div className="space-y-12 md:space-y-24">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <TimelineItem
                  key={index}
                  item={item}
                  isEven={isEven}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ item, isEven, index }: { item: any; isEven: boolean; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <div
      ref={ref}
      className={`relative flex flex-col md:flex-row items-start ${
        isEven ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Icon Node */}
      <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 mt-1 z-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
          className={`w-14 h-14 rounded-full glass flex items-center justify-center ${item.color} ${item.bgColor} border-2 border-background shadow-lg`}
        >
          {item.icon}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? "md:pl-16" : "md:pr-16"}`}>
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 50 : -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="glass p-6 md:p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border-primary/10 hover:border-primary/30 group"
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
            <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              {item.title}
            </h3>
            <span className="text-sm font-medium px-3 py-1 bg-background/50 rounded-full whitespace-nowrap text-muted">
              {item.duration}
            </span>
          </div>
          <h4 className="text-lg font-semibold text-muted dark:text-gray-300 mb-2">
            {item.institution}
          </h4>
          <p className="text-muted dark:text-gray-400 mb-4">
            {item.details}
          </p>
          {item.link && (
            <a 
              href={item.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              <ExternalLink size={16} />
              View Certificate
            </a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
