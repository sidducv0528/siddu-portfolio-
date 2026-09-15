"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronDown, ChevronUp, PlayCircle } from "lucide-react";
import Image from "next/image";
import { GithubIcon } from "./ui/Icons";
import { WarpLink } from "./WarpLink";

const projects = [
  {
    title: "Bank Loan Risk Analytics Dashboard",
    description: "Turned 38,576 raw loan applications into a 3-page executive Power BI report. Cleaned/analyzed in SQL Server, built a Power BI data model with DAX measures for portfolio-health and risk-segment answers.",
    tech: ["SQL Server (T-SQL)", "Power BI", "DAX", "Excel"],
    image: "https://raw.githubusercontent.com/sidducv0528/Bank-Loan-Report-Analysis/main/Assets./Banner.png",
    github: "https://github.com/sidducv0528/Bank-Loan-Report-Analysis",
    live: "https://app.powerbi.com/reportEmbed?reportId=6dfa0c60-4c16-4e68-ad75-9cfd44234c85&autoAuth=true&ctid=56c1d497-700b-49cf-8f8d-3dd6b20d522f",
    video: "https://youtu.be/SnEZMBiGmPE?si=hMPi24GpwdwpWDbP",
  },
  {
    title: "Meta Ad Performance Analysis",
    description: "Analyzed 400,000 Facebook/Instagram ad interaction events. Built a star schema and 13 DAX measures to answer which platform converts better and which ad format earns its budget.",
    tech: ["SQL", "Power BI", "DAX", "Star-Schema"],
    image: "https://img.youtube.com/vi/6xxJtfTGDLE/hqdefault.jpg",
    github: "https://github.com/sidducv0528/Meta-Ad-Performance-Analysis-PowerBI",
    live: "https://app.powerbi.com/reportEmbed?reportId=6272f43f-09cb-45ba-ba05-d0438c0a23c5&autoAuth=true&ctid=56c1d497-700b-49cf-8f8d-3dd6b20d522f",
    video: "https://youtu.be/6xxJtfTGDLE?si=80qTR1hQJnA8TDt2",
  },
  {
    title: "Walmart Sales Forecasting",
    description: "Built and deployed SARIMAX(1,1,1)(1,1,1,52) time-series models across all 45 Walmart stores, achieving ~3.66% MAPE. Shipped as a 6-page Streamlit dashboard.",
    tech: ["Python", "SARIMAX", "Time Series Forecasting", "Streamlit", "pandas"],
    image: "https://raw.githubusercontent.com/sidducv0528/Walmart-Sales-Forecasting/main/assets/screenshots/walmart-sales-forecasting-banner.png",
    github: "https://github.com/sidducv0528/Walmart-Sales-Forecasting",
    live: "https://walmart-sales-forecasting-stores.streamlit.app/",
    video: "https://youtu.be/UXW4FTEN994?si=LYXqcBWLxCjSkhsd",
  },
  {
    title: "Swiggy Sales Analysis Dashboard",
    description: "Interactive sales analysis dashboard built for Swiggy. Designed comprehensive data insights and visual analytics to track revenue and performance metrics.",
    tech: ["Excel", "Data Analysis", "Dashboarding", "Pivot Table"],
    image: "https://raw.githubusercontent.com/sidducv0528/Swiggy-Sales-Analysis-Dashboard/main/Assets/Swiggy_Thumbnail.png",
    github: "https://github.com/sidducv0528/Swiggy-Sales-Analysis-Dashboard",
    live: "https://onedrive.live.com/:x:/g/personal/CBF615F6CF8B4D72/IQC3o8yVFT9aTYvkOBoxL9JiAXMfOFXEnnTPoxHrWiEOqeo?resid=CBF615F6CF8B4D72!s95cca3b73f154d5a8be4381a312fd262&ithint=file%2Cxlsx&e=67fkd5&migratedtospo=true&redeem=aHR0cHM6Ly8xZHJ2Lm1zL3gvYy9jYmY2MTVmNmNmOGI0ZDcyL0lRQzNvOHlWRlQ5YVRZdmtPQm94TDlKaUFYTWZPRlhFbm5UUG94SHJXaUVPcWVvP2U9Njdma2Q1",
    video: "https://youtu.be/qVFuM5_s5vI?si=5Zet9tCXfp6FDGH-",
  },
  {
    title: "Used Phone Resale Price Predictor",
    description: "Trained a feed-forward ANN on 1M used-phone listings to predict resale price. R² ≈ 0.98, MAE ≈ ₹1,600. Served through a Streamlit form-based app.",
    tech: ["Python", "TensorFlow/Keras", "scikit-learn", "Streamlit"],
    image: "/images/projects/phone-price.png",
    github: "https://github.com/sidducv0528/phone-price-predictor",
    live: "https://phone-price-predictor-siddu.streamlit.app/",
    video: "https://youtu.be/CWqIut7CfO0?si=WjFFPCWhjwBF1mrJ",
  },
  {
    title: "IPL 2026 — From Ball to Trophy",
    description: "End-to-end analysis of the full IPL 2026 season — 17,477 records — from raw CSVs to an interactive Excel dashboard. Published as a dataset + notebook on Kaggle.",
    tech: ["Python", "Pandas", "Excel", "Kaggle"],
    image: "/images/projects/ipl.png",
    github: "https://github.com/sidducv0528/IPL-2026-Performance-Analytics",
    live: "https://github.com/sidducv0528/IPL-2026-Performance-Analytics",
  },
  {
    title: "ML Prediction Web App",
    description: "An interactive front-end simulation of 4 ML models' logic (churn, insurance, bank deposit, heart disease) — giving recruiters something clickable with zero setup.",
    tech: ["HTML5", "CSS3", "JavaScript", "ML"],
    image: "/images/projects/ml-webapp.png",
    github: "https://github.com/sidducv0528/ml-prediction-app",
    live: "https://sidducv0528.github.io/ml-prediction-app",
  },
  {
    title: "Smart Feedback & Student Performance System",
    description: "Automated academic workflow tool: attendance/marks analysis, automated weekly reports, feedback form ticket generator, and web-based ticket tracker.",
    tech: ["Google Apps Script", "JavaScript", "HTML/CSS", "Excel", "Dashboard", "Automation"],
    image: "/images/projects/smart-feedback.png",
    github: "https://github.com/sidducv0528/Student-Performance-Issue-Management-System",
    live: "https://github.com/sidducv0528/Student-Performance-Issue-Management-System",
    video: "https://youtu.be/24SNZvqx7Ls?si=YrT_9Zojy_sGCjCJ",
  },
  {
    title: "Heart Disease Prediction",
    description: "Decision Tree model to predict heart disease with 96.2% accuracy. Includes EDA, outlier treatment, and a documented pipeline.",
    tech: ["Python", "scikit-learn", "Decision Tree"],
    image: "/images/projects/heart-disease.png",
    github: "https://github.com/sidducv0528/heart-disease-prediction",
    live: "https://sidducv0528.github.io/ml-prediction-app/",
  },
  {
    title: "Bank Term Deposit Prediction",
    description: "Logistic Regression model to predict bank term deposits achieving an AUC of 0.992.",
    tech: ["Python", "Machine Learning", "Logistic Regression"],
    image: "/images/projects/bank-deposit.png",
    github: "https://github.com/sidducv0528/bank-deposit-prediction",
    live: "https://sidducv0528.github.io/ml-prediction-app/",
  },
  {
    title: "Insurance Premium Prediction",
    description: "Linear Regression model for insurance premium prediction with an R² of 0.875.",
    tech: ["Python", "Machine Learning", "Linear Regression"],
    image: "/images/projects/insurance.png",
    github: "https://github.com/sidducv0528/insurance-premium-prediction",
    live: "https://sidducv0528.github.io/ml-prediction-app/",
  },
  {
    title: "Customer Churn Prediction",
    description: "Random Forest classification model for predicting customer churn with 80% accuracy.",
    tech: ["Python", "Machine Learning", "Random Forest"],
    image: "/images/projects/customer-churn.png",
    github: "https://github.com/sidducv0528/customer-churn-random-forest",
    live: "https://sidducv0528.github.io/ml-prediction-app/",
  }
];

function ProjectCard({ project, index, isIdle }: { project: any; index: number; isIdle: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-50px" });

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current || isIdle) return; // Ignore mouse if somehow idle but moving
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // The base idle animation properties
  const idleAnimation = isIdle ? {
    y: [0, -15, 0],
    rotateX: [0, 5, -5, 0],
    rotateY: [0, -5, 5, 0],
    boxShadow: [
      "0px 0px 0px rgba(79,70,229,0)", 
      "0px 20px 40px rgba(79,70,229,0.2)", 
      "0px 0px 0px rgba(79,70,229,0)"
    ]
  } : {};

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={
        isIdle
          ? idleAnimation
          : isInView
          ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0, boxShadow: "none" }
          : { opacity: 0, y: 50 }
      }
      transition={
        isIdle
          ? {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: (index % 6) * 0.4, // Staggered wave effect
            }
          : { duration: 0.6, delay: (index % 6) * 0.1 }
      }
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isIdle ? 0 : rotateX,
          rotateY: isIdle ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
        className={`glass h-full rounded-2xl transition-colors group overflow-hidden flex flex-col ${isIdle ? 'border-primary/40' : 'border-primary/10 hover:border-primary/30'}`}
      >
        <div className={`absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent pointer-events-none transition-opacity duration-1000 ${isIdle ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`} />
        
        {/* Project Image Box */}
        <div className="w-full relative overflow-hidden aspect-video flex items-center justify-center border-b border-glass-border">
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent z-10" />
          
          {project.image ? (
            <motion.div 
              className="absolute inset-0 w-full h-full transform transition-transform duration-700 group-hover:scale-105"
            >
              <Image 
                src={project.image} 
                alt={project.title} 
                fill
                className="object-cover opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </motion.div>
          ) : (
            <div className="absolute inset-0 w-full h-full bg-primary/5 flex items-center justify-center">
              <span className="text-primary/30 font-semibold tracking-widest uppercase text-sm">No Preview</span>
            </div>
          )}
        </div>

        <div className="p-6 flex flex-col flex-grow relative z-20" style={{ transform: "translateZ(20px)" }}>
          <h3 className={`text-xl font-bold mb-3 transition-colors ${isIdle ? 'text-primary' : 'text-foreground group-hover:text-primary'}`}>
            {project.title}
          </h3>
          <p className="text-sm text-muted dark:text-gray-400 mb-6 flex-grow">
            {project.description}
          </p>
          
          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t: string) => (
                <span key={t} className="px-2 py-1 text-xs font-medium bg-primary/10 text-primary rounded-md border border-primary/20">
                  {t}
                </span>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 pt-4 border-t border-glass-border">
              {project.github && project.github !== "#" && (
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github} 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full bg-background/50 border border-glass-border hover:border-foreground/50 hover:text-foreground hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-all"
                >
                  <GithubIcon style={{ width: 14, height: 14 }} /> Code
                </motion.a>
              )}
              {project.live && project.live !== "#" && (
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.live} 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full bg-primary/10 border border-primary/30 text-primary hover:bg-primary hover:text-background hover:shadow-[0_0_15px_rgba(79,70,229,0.4)] transition-all"
                >
                  <ExternalLink size={14} /> Live Demo
                </motion.a>
              )}
              {project.video && (
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.video} 
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-full bg-red-500/10 border border-red-500/30 text-red-500 hover:bg-red-500 hover:text-background hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] transition-all"
                >
                  <PlayCircle size={14} /> Video
                </motion.a>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isIdle, setIsIdle] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const isSectionInView = useInView(sectionRef, { margin: "-100px" });
  const idleTimer = useRef<NodeJS.Timeout | null>(null);

  const displayedProjects = showAll ? projects : projects.slice(0, 6);

  useEffect(() => {
    const resetIdleTimer = () => {
      setIsIdle(false);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (isSectionInView) {
        idleTimer.current = setTimeout(() => {
          setIsIdle(true);
        }, 30000); // 30 seconds
      }
    };

    resetIdleTimer();

    window.addEventListener("mousemove", resetIdleTimer);
    window.addEventListener("keydown", resetIdleTimer);
    window.addEventListener("scroll", resetIdleTimer);
    window.addEventListener("click", resetIdleTimer);
    
    return () => {
      if (idleTimer.current) clearTimeout(idleTimer.current);
      window.removeEventListener("mousemove", resetIdleTimer);
      window.removeEventListener("keydown", resetIdleTimer);
      window.removeEventListener("scroll", resetIdleTimer);
      window.removeEventListener("click", resetIdleTimer);
    };
  }, [isSectionInView]);


  return (
    <section id="projects" ref={sectionRef} className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-muted dark:text-gray-400 max-w-2xl mx-auto">
            A selection of my best work across data analysis, business intelligence, and machine learning.
          </p>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} isIdle={isIdle} />
            ))}
          </AnimatePresence>
        </motion.div>

        {projects.length > 6 && (
          <div className="mt-16 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full glass border border-primary/30 text-foreground font-medium flex items-center gap-2 hover:bg-primary hover:text-white hover:border-transparent transition-all shadow-[0_0_15px_rgba(79,70,229,0.2)] hover:shadow-[0_0_25px_rgba(79,70,229,0.5)]"
            >
              {showAll ? (
                <>View Less <ChevronUp size={18} /></>
              ) : (
                <>View All Projects <ChevronDown size={18} /></>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

