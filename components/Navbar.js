"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  Home,
  Info,
  Briefcase,
  Building2,
  Phone,
  Menu,
  X,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About", href: "/about", icon: Info },
  { label: "Who we are", href: "/whoweare", icon: Briefcase },
  { label: "Projects", href: "/projects", icon: Building2 },
  { label: "Contact", href: "/contact", icon: Phone },
];

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [hideNavbar, setHideNavbar] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isMobile = window.innerWidth <= 1100;

      setScrolled(scrollY > 20);

      if (isMobile) {
        setHideNavbar(false);
      } else {
        setHideNavbar(scrollY > 80);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`site-header clean-navbar 
        ${hideNavbar ? "nav-hidden" : ""} 
        ${scrolled || !isHome || menuOpen ? "nav-scrolled" : ""}`}
      >
        <div className="navbar-shell">
          <Link href="/" className="navbar-brand">
            Vizipa
          </Link>

          {/* Desktop Nav */}
          <nav className="desktop-nav">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`nav-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div className={`mobile-menu-overlay ${menuOpen ? "active" : ""}`}>
        <div className="mobile-menu-panel">
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`mobile-menu-link ${
                  pathname === item.href ? "active" : ""
                }`}
              >
                <Icon size={18} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}