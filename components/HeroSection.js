"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
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
        <motion.div
          className="hero-content hero-content-compact"
        >
          <p className="eyebrow light">The Vision of Excellence</p>
          <h1>Crafting Legacies, One Plot at a Time.</h1>
          <p>
            Rooted in the Sanskrit word for home, Vizipa Constructions brings world-class precision
            to Bangalore’s most promising landscapes.
          </p>
        </motion.div>
      </div>
    </section>
  );
}