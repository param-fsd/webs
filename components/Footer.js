"use client";

import Link from "next/link";
import {
  MapPin,
  Phone,
  Clock3,
  ChevronRight,
  Star,
} from "lucide-react";

function InstagramSvg({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FacebookSvg({ size = 18 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.84c0-2.52 1.49-3.91 3.77-3.91 1.09 0 2.23.2 2.23.2v2.47h-1.25c-1.24 0-1.63.78-1.63 1.57v1.89h2.77l-.44 2.91h-2.33V22C18.34 21.24 22 17.08 22 12.06Z" />
    </svg>
  );
}

function YoutubeSvg({ size = 19 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.58 7.19a2.75 2.75 0 0 0-1.94-1.95C17.93 4.78 12 4.78 12 4.78s-5.93 0-7.64.46a2.75 2.75 0 0 0-1.94 1.95A28.7 28.7 0 0 0 2 12a28.7 28.7 0 0 0 .42 4.81 2.75 2.75 0 0 0 1.94 1.95c1.71.46 7.64.46 7.64.46s5.93 0 7.64-.46a2.75 2.75 0 0 0 1.94-1.95A28.7 28.7 0 0 0 22 12a28.7 28.7 0 0 0-.42-4.81ZM10 15.27V8.73L15.5 12 10 15.27Z" />
    </svg>
  );
}

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
  const socialStyle = {
    width: "36px",
    height: "36px",
    borderRadius: "50%",
    border: "1px solid rgba(255,255,255,0.14)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "inherit",
    textDecoration: "none",
    transition: "all 0.25s ease",
  };

  return (
    <footer className="footer-clean">
      <div className="page-shell footer-grid-clean">
        <div className="footer-col">
          <h3 className="footer-heading">Vizipa</h3>

          <p className="footer-text">
            Vizipa Avalon is a spacious and meticulously planned plotted layout,
            complemented by lush green parks, located in a prime area near
            Whitefield, Hoskote, Budigere Cross, Malur and STRR.
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "10px", margin: "18px 0 20px" }}>
            <Link href="https://www.instagram.com/vizipa.avalon" target="_blank" rel="noopener noreferrer" style={socialStyle}>
              <InstagramSvg />
            </Link>

            <Link href="https://www.facebook.com/vizipa.avalon/" target="_blank" rel="noopener noreferrer" style={socialStyle}>
              <FacebookSvg />
            </Link>

            <Link href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer" style={socialStyle}>
              <YoutubeSvg />
            </Link>
          </div>

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

        <div className="footer-col">
          <h3 className="footer-heading">Office</h3>

          <div className="footer-contact">
            <div>
              <MapPin size={16} />
              <p>1669, 27th Main Rd, HSR Layout, Bengaluru, Karnataka 560102</p>
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

      <div className="footer-bottom-clean">
        <p>
          © 2026 Vizipa. All rights reserved. Designed & Developed by Luminexa
          Technologies
        </p>
      </div>
    </footer>
  );
}