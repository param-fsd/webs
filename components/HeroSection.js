"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  const sentences = [
    "The Vision of Excellence",
    "Crafting Legacies, One Plot at a Time.",
    "Rooted in the Sanskrit word for home,",
    "Vizipa Constructions brings world-class precision",
    "to Bangalore’s most promising landscapes.",
  ];

  const [currentSentence, setCurrentSentence] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSentence((prev) =>
        prev === sentences.length - 1 ? 0 : prev + 1
      );
    }, 2600);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay" />

      <div className="hero-content-wrap page-shell">
        <div className="hero-content hero-content-compact">
          
          <div className="hero-single-line-wrap">
            <AnimatePresence mode="wait">
              <motion.h1
                key={currentSentence}
                className="hero-single-line"
                initial={{
                  opacity: 0,
                  y: 35,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -35,
                }}
                transition={{
                  duration: 0.9,
                  ease: "easeInOut",
                }}
              >
                {sentences[currentSentence]}
              </motion.h1>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}