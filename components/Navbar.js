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
  const [showBottomBar, setShowBottomBar] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (isMobile) {
        setHideNavbar(currentScrollY > 80);
        setShowBottomBar(true);
      } else {
        setHideNavbar(currentScrollY > 80);
        setShowBottomBar(currentScrollY > 140);
      }
    };

    checkViewport();
    handleScroll();

    window.addEventListener("resize", checkViewport);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", checkViewport);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMobile]);

  return (
    <>
      <header
        className={`site-header clean-navbar 
        ${hideNavbar ? "nav-hidden" : ""} 
        ${scrolled || !isHome ? "nav-scrolled" : ""}`}
      >
        <div className="navbar-shell">
          <Link href="/" className="navbar-brand">
  <img
    src="/logo.png"
    alt="Vizipa"
    className="navbar-logo"
  />
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

      <nav
        className={`bottom-tab-navbar ${
          showBottomBar || isMobile ? "is-visible" : ""
        }`}
      >
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