"use client";

import { useState } from "react";
import LeadPopup from "./LeadPopup"; // adjust path if needed

export default function QuoteSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <section className="quote-section">
        {/* Background */}
        <div className="quote-bg" />

        {/* Overlay */}
        <div className="quote-overlay" />

        {/* Content */}
        <div className="quote-content page-shell">
          <p className="quote-text">
            "At Vizipa we are committed to offering the best value to our
            customers, providing unparalleled service and quality homes at the
            most competitive prices."
          </p>

          <button
            type="button"
            className="quote-cta"
            onClick={() => setShowPopup(true)}
          >
            Enquire Now
          </button>
        </div>
      </section>

      {showPopup && <LeadPopup forceOpen onClose={() => setShowPopup(false)} />}
    </>
  );
}