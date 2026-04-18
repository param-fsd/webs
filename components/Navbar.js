"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Home,
  Info,
  Briefcase,
  Building2,
  Phone,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Services", href: "/services", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Building2 },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [showBottomBar, setShowBottomBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      const topNavbarVisibleLimit = 80;
      const bottomBarVisibleLimit = 140;

      setScrolled(currentScrollY > 20);

      // Top navbar visible only near hero/top section
      setHideNavbar(currentScrollY > topNavbarVisibleLimit);

      // Bottom floating navbar visible only after enough scroll
      setShowBottomBar(currentScrollY > bottomBarVisibleLimit);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`site-header clean-navbar ${hideNavbar ? "nav-hidden" : ""} ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        <div className="navbar-shell">
          <Link href="/" className="navbar-brand">
            Vizipa
          </Link>

          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <Link key={item.label} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <nav className={`bottom-tab-navbar ${showBottomBar ? "is-visible" : ""}`}>
        {navLinks.map((item) => {
          const Icon = item.icon;

          return (
            <Link key={item.label} href={item.href} className="bottom-tab-link">
              <Icon size={16} strokeWidth={1.8} />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>
    </>
  );
}