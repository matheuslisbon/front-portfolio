'use client'
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const TypewriterEffect = ({ text, speed = 100 }: { text: string; speed?: number }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < text.length) {
          return prev + 1;
        } else {
          clearInterval(interval);
          return prev;
        }
      });
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ fontFamily: "monospace", fontSize: "24px" }}
    >
      {text.substring(0, currentIndex)}
    </motion.div>
  );
};

export default TypewriterEffect;
