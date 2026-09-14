"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export const TypewriterEffect = ({ words }: { words: string[] }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentWordIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === word) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCurrentText(
        word.substring(0, currentText.length + (isDeleting ? -1 : 1))
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentWordIndex, words]);

  return (
    <span className="inline-block min-h-[1.5em] text-gradient">
      {currentText}
      <motion.span
        animate={{ opacity: [0, 1, 0] }}
        transition={{ repeat: Infinity, duration: 0.8 }}
        className="inline-block w-1 h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
};
