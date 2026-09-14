"use client";

import React from "react";
import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/Icons";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative z-10 border-t border-glass-border bg-background/50 backdrop-blur-xl pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-mono text-gradient">SV.</h3>
            <p className="text-muted dark:text-gray-400 max-w-xs">
              Building reliable dashboards, predictive models, and data-driven solutions.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-muted">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Socials</h4>
            <div className="flex gap-4">
              <a href="https://linkedin.com/in/siddu-data" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:text-primary hover:border-primary/50 transition-colors">
                <LinkedinIcon style={{ width: 20, height: 20 }} />
              </a>
              <a href="https://github.com/sidducv0528" target="_blank" rel="noopener noreferrer" className="p-2 rounded-full glass hover:text-primary hover:border-primary/50 transition-colors">
                <GithubIcon style={{ width: 20, height: 20 }} />
              </a>
              <a href="mailto:sidducv0528@gmail.com" className="p-2 rounded-full glass hover:text-primary hover:border-primary/50 transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted">
            &copy; {new Date().getFullYear()} Siddu Varikuppala. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-primary text-white hover:bg-primary/90 transition-colors shadow-lg flex items-center justify-center group"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
