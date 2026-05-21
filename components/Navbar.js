"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { X, ArrowRight } from "lucide-react";

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

const menuLinksTop = [
  { label: "Who we are", href: "/whoweare" },
  { label: "Projects", href: "/projects" },
  { label: "Contact us", href: "/contact" },
  { label: "Invest", href: "/invest" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleNavbar = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(currentScrollY <= 20 || currentScrollY < lastScrollY);

      if (pathname !== "/") {
        setDarkMode(true);
      } else {
        setDarkMode(currentScrollY > window.innerHeight * 0.68);
      }

      lastScrollY = currentScrollY;
    };

    handleNavbar();

    window.addEventListener("scroll", handleNavbar, { passive: true });

    return () => window.removeEventListener("scroll", handleNavbar);
  }, [pathname]);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);

    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`vzCustomNavbarRoot ${
          showNavbar ? "vzNavbarVisible" : "vzNavbarHidden"
        } ${darkMode ? "vzNavbarDark" : "vzNavbarLight"}`}
      >
        <button
          className="vzCustomMenuButton"
          onClick={() => setMenuOpen(true)}
          aria-label="Open Menu"
        >
          <span>MENU</span>

          <div className="vzCustomMenuLines">
            <i />
            <i />
          </div>
        </button>

        <Link href="/" className="vzCustomBrandLink">
          <span className="vzCustomBrandText">VIZIPA</span>
        </Link>
      </header>

      <div
        className={`vzCustomOverlay ${menuOpen ? "isOpen" : ""}`}
        onClick={() => setMenuOpen(false)}
      >
        <aside
          className={`vzCustomSlideMenu ${menuOpen ? "isOpen" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="vzCustomSlideTop">
            <Link
              href="/"
              className="vzCustomSlideLogo"
              onClick={() => setMenuOpen(false)}
            >
              <img src="/logo.png" alt="Vizipa" />
            </Link>

            <button
              className="vzCustomCloseButton"
              onClick={() => setMenuOpen(false)}
              aria-label="Close Menu"
            >
              <X size={28} strokeWidth={1.3} />
            </button>
          </div>

          <div className="vzCustomMenuSection vzCustomWhiteSection">
            {menuLinksTop.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="vzCustomSlideLink"
                onClick={() => setMenuOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowRight size={24} strokeWidth={1} />
              </Link>
            ))}
          </div>

          <div className="vzCustomMenuSection vzCustomGreySection">
            <div>
              <p className="vzCustomSocialTitle">Follow Us</p>

              <div className="vzCustomSocialWrap">
                <Link
                  href="https://www.instagram.com/vizipa.avalon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vzCustomSocialIcon"
                >
                  <InstagramSvg />
                </Link>

                <Link
                  href="https://www.facebook.com/vizipa.avalon/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vzCustomSocialIcon"
                >
                  <FacebookSvg />
                </Link>

                <Link
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="vzCustomSocialIcon"
                >
                  <YoutubeSvg />
                </Link>
              </div>
            </div>

            <Link
              href="/contact"
              className="vzCustomContactButton"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </aside>
      </div>
    </>
  );
}