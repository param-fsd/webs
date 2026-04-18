"use client";

import Link from "next/link";

export default function QuoteSection() {
  return (
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

        {/* Premium CTA */}
        <Link href="/contact" className="quote-cta">
          Enquire Now
        </Link>
      </div>
    </section>
  );
}