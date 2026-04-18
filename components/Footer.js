"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  ChevronRight,
  Star,
} from "lucide-react";

function StarRating({ rating = 5 }) {
  return (
    <div className="footer-stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          fill={i < rating ? "currentColor" : "none"}
          strokeWidth={1.8}
        />
      ))}
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="footer-clean">
      <div className="page-shell footer-grid-clean">
        
        {/* LEFT */}
        <div className="footer-col">
          <h3 className="footer-heading">Vizipa</h3>

          <p className="footer-text">
            Vizipa Avalon is a spacious and meticulously planned plotted layout,
            complemented by lush green parks, located in a prime area near
            Whitefield, Hoskote, Budigere Cross, Malur and STRR.
          </p>

          {/* ⭐ GOOGLE REVIEW BLOCK */}
          <div className="footer-review">
            <div className="footer-review-top">
              <span className="footer-google-badge">Google</span>
              <StarRating rating={5} />
            </div>

            <div className="footer-review-meta">
              <span className="footer-rating">4.7</span>
              <span className="footer-reviews">(53 Reviews)</span>
            </div>
          </div>
        </div>

        {/* CENTER */}
        <div className="footer-col">
          <h3 className="footer-heading">Plots in Bangalore</h3>

          <div className="footer-links-clean">
            <Link href="#"><ChevronRight size={14} /> Whitefield</Link>
            <Link href="#"><ChevronRight size={14} /> Hoskote</Link>
            <Link href="#"><ChevronRight size={14} /> Budigere Cross</Link>
            <Link href="#"><ChevronRight size={14} /> Malur</Link>
            <Link href="#"><ChevronRight size={14} /> Near STRR</Link>
          </div>
        </div>

        {/* RIGHT */}
        <div className="footer-col">
          <h3 className="footer-heading">Office</h3>

          <div className="footer-contact">
            <div>
              <MapPin size={16} />
              <p>
                1669, 27th Main Rd, HSR Layout,
                Bengaluru, Karnataka 560102
              </p>
            </div>

            <div>
              <Phone size={16} />
              <p>+91 9108005198</p>
            </div>

            <div>
              <Clock3 size={16} />
              <p>Mon - Sat: 9:00 - 18:00</p>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom-clean">
        <p>
          © 2026 Vizipa. All rights reserved.  
          Designed & Developed by Luminexa Technologies
        </p>
      </div>
    </footer>
  );
}