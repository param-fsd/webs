"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export default function HeroSection() {
  const slides = [
    {
      line1: "The Vision",
      line2: "of Excellence",
    },
    {
      line1: "Crafting Legacies,",
      line2: "One Plot at a Time.",
    },
    {
      line1: "Rooted in the Sanskrit word",
      line2: "for home and belonging.",
    },
    {
      line1: "Vizipa Constructions brings",
      line2: "world-class precision to life.",
    },
    {
      line1: "Shaping Bangalore’s most",
      line2: "promising landscapes.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7600);

    return () => clearInterval(interval);
  }, [slides.length]);

  const currentSlide = slides[activeSlide] || slides[0];

  return (
    <>
      <section className="vzHeroMain">
        <video
  suppressHydrationWarning
  className="vzHeroVideo"
  autoPlay
  muted
  loop
  playsInline
  preload="auto"
>
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        <div className="vzHeroOverlay" />

        <div className="vzHeroContent">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              className="vzHeroTextWrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1.4,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <h1 className="vzHeroWhiteTitle">
                <motion.div
                  className="vzHeroLineWrap topLine"
                  initial={{
                    opacity: 0,
                    y: 28,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1.8,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {currentSlide.line1}
                </motion.div>

                <motion.div
                  className="vzHeroLineWrap bottomLine"
                  initial={{
                    opacity: 0,
                    y: 28,
                    filter: "blur(8px)",
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                  }}
                  transition={{
                    duration: 1.8,
                    delay: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {currentSlide.line2}
                </motion.div>
              </h1>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <style jsx>{`
        .vzHeroMain {
          position: relative;
          width: 100%;
          height: 93vh;
          min-height: 112svh;
          overflow: hidden;
          background: #000;
        }

        .vzHeroVideo {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center center;
          z-index: 0;
          transform: scale(1.03);
        }

        .vzHeroOverlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.08),
              rgba(0, 0, 0, 0.24)
            ),
            linear-gradient(
              90deg,
              rgba(0, 0, 0, 0.14),
              rgba(0, 0, 0, 0.08)
            );
        }

        .vzHeroContent {
          position: relative;
          z-index: 2;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 0 32px;
          transform: translateY(30px);
        }

        .vzHeroTextWrap {
          width: 100%;
          max-width: 1100px;
          will-change: opacity, transform, filter;
        }

        .vzHeroWhiteTitle {
          margin: 0 !important;
          padding: 0 !important;
          color: #ffffff !important;
          -webkit-text-fill-color: #ffffff !important;
          font-family: "Cormorant Garamond", Georgia, serif !important;
          font-size: clamp(34px, 3.5vw, 56px) !important;
          font-weight: 500 !important;
          letter-spacing: -0.03em !important;
          text-align: center !important;
          text-shadow:
            0 8px 30px rgba(0, 0, 0, 0.45),
            0 2px 10px rgba(0, 0, 0, 0.22) !important;

          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .vzHeroLineWrap {
          display: block;
          width: 100%;
        }

        .topLine {
          line-height: 0.95 !important;
        }

        .bottomLine {
          margin-top: -4px !important;
          line-height: 0.95 !important;
        }

        @media (max-width: 768px) {
          .vzHeroMain {
            height: 108vh;
            min-height: 108svh;
          }

          .vzHeroContent {
            padding: 0 22px;
            transform: translateY(20px);
          }

          .vzHeroWhiteTitle {
            font-size: clamp(26px, 7vw, 42px) !important;
          }

          .topLine,
          .bottomLine {
            line-height: 1 !important;
          }

          .bottomLine {
            margin-top: -2px !important;
          }
        }

        @media (max-width: 480px) {
          .vzHeroContent {
            transform: translateY(22px);
          }

          .vzHeroWhiteTitle {
            font-size: clamp(22px, 8vw, 34px) !important;
          }

          .topLine,
          .bottomLine {
            line-height: 1.02 !important;
          }
        }
      `}</style>
    </>
  );
}