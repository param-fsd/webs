"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);
  const [dots, setDots] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const dotInterval = setInterval(() => {
      setDots((prev) => {
        if (prev.length >= 3) return "";
        return prev + ".";
      });
    }, 500);

    return () => clearInterval(dotInterval);
  }, []);

  if (!loading) return null;

  return (
    <>
      <style jsx>{`
        .page-loader {
          position: fixed;
          inset: 0;
          width: 100%;
          height: 100vh;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 99999;
        }

        .loader-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
        }

        .loader-logo {
          width: 75px;
          height: 75px;
          object-fit: contain;
          animation: pulse 1.5s infinite ease-in-out;
        }

        .loader-text {
          font-size: 13px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #000;
          font-weight: 500;
          display: flex;
          align-items: center;
        }

        .dots {
          display: inline-block;
          width: 30px;
          text-align: left;
        }

        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }

          50% {
            transform: scale(1.08);
            opacity: 1;
          }

          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
      `}</style>

      <div className="page-loader">
        <div className="loader-content">
          <img
            src="/favi.png"
            alt="Loading"
            className="loader-logo"
          />

          <p className="loader-text">
            Loading
            <span className="dots">{dots}</span>
          </p>
        </div>
      </div>
    </>
  );
}