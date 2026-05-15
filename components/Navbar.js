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

      if (currentScrollY <= 20) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY;

      if (pathname !== "/") {
        setDarkMode(true);
      } else {
        setDarkMode(currentScrollY > window.innerHeight * 0.68);
      }
    };

    handleNavbar();

    window.addEventListener("scroll", handleNavbar, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleNavbar);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
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

      <style jsx global>{`
        .vzCustomNavbarRoot {
          position: fixed !important;
          top: 0 !important;
          left: 0 !important;
          width: 100% !important;
          height: 84px !important;
          z-index: 2500 !important;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          pointer-events: none !important;

          transition:
            transform 0.38s ease,
            opacity 0.38s ease,
            background 0.35s ease,
            box-shadow 0.35s ease,
            backdrop-filter 0.35s ease !important;
        }

        .vzNavbarVisible {
          transform: translateY(0) !important;
          opacity: 1 !important;
        }

        .vzNavbarHidden {
          transform: translateY(-120%) !important;
          opacity: 0 !important;
        }

        .vzNavbarLight {
          background: transparent !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .vzNavbarDark {
          background: rgba(255, 255, 255, 0.94) !important;
          box-shadow: 0 10px 32px rgba(0, 0, 0, 0.07) !important;
          backdrop-filter: blur(14px) !important;
          -webkit-backdrop-filter: blur(14px) !important;
        }

        .vzCustomBrandLink {
          pointer-events: auto !important;
          display: inline-flex !important;
          align-items: center !important;
          justify-content: center !important;
          text-decoration: none !important;
        }

        .vzCustomBrandText {
          display: inline-block !important;
          font-family: "Cormorant Garamond", Georgia, serif !important;
          font-size: clamp(24px, 2.2vw, 36px) !important;
          font-weight: 900 !important;
          letter-spacing: 0.08em !important;

          transition:
            color 0.35s ease,
            text-shadow 0.35s ease !important;

          -webkit-font-smoothing: antialiased !important;
        }

        .vzCustomMenuButton {
          pointer-events: auto !important;

          position: absolute !important;
          left: 78px !important;
          top: 30px !important;

          display: flex !important;
          align-items: center !important;
          gap: 14px !important;

          border: 0 !important;
          background: transparent !important;

          cursor: pointer !important;
          padding: 0 !important;

          font-size: 14px !important;
          font-weight: 500 !important;
          letter-spacing: 0.04em !important;
          text-transform: uppercase !important;

          transition: color 0.35s ease !important;
        }

        .vzCustomMenuLines {
          display: flex !important;
          flex-direction: column !important;
          gap: 7px !important;
        }

        .vzCustomMenuLines i {
          display: block !important;
          height: 1.5px !important;
          border-radius: 20px !important;
          transition: background 0.35s ease !important;
        }

        .vzCustomMenuLines i:first-child {
          width: 30px !important;
        }

        .vzCustomMenuLines i:last-child {
          width: 18px !important;
        }

        .vzNavbarLight .vzCustomBrandText {
          color: #ffffff !important;
          text-shadow:
            0 8px 30px rgba(0, 0, 0, 0.45),
            0 2px 10px rgba(0, 0, 0, 0.25) !important;
        }

        .vzNavbarLight .vzCustomMenuButton {
          color: #ffffff !important;
        }

        .vzNavbarLight .vzCustomMenuLines i {
          background: #ffffff !important;
        }

        .vzNavbarDark .vzCustomBrandText {
          color: #111111 !important;
          text-shadow: none !important;
        }

        .vzNavbarDark .vzCustomMenuButton {
          color: #111111 !important;
        }

        .vzNavbarDark .vzCustomMenuLines i {
          background: #111111 !important;
        }

        .vzCustomOverlay {
          position: fixed !important;
          inset: 0 !important;
          z-index: 4000 !important;

          background: rgba(0, 0, 0, 0.28) !important;

          opacity: 0 !important;
          visibility: hidden !important;

          transition:
            opacity 0.35s ease,
            visibility 0.35s ease !important;
        }

        .vzCustomOverlay.isOpen {
          opacity: 1 !important;
          visibility: visible !important;
        }

        .vzCustomSlideMenu {
          width: 380px !important;
          max-width: 88vw !important;
          height: 100vh !important;

          background: #ffffff !important;
          transform: translateX(-100%) !important;

          transition:
            transform 0.48s cubic-bezier(0.77, 0, 0.175, 1) !important;

          overflow-y: auto !important;
        }

        .vzCustomSlideMenu.isOpen {
          transform: translateX(0) !important;
        }

        .vzCustomSlideTop {
          height: 78px !important;

          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;

          padding: 0 24px 0 34px !important;

          background: #ffffff !important;
        }

        .vzCustomSlideLogo img {
          width: 118px !important;
          height: auto !important;
          object-fit: contain !important;
          display: block !important;
        }

        .vzCustomCloseButton {
          border: 0 !important;
          background: transparent !important;

          display: grid !important;
          place-items: center !important;

          cursor: pointer !important;

          color: #111 !important;
          padding: 0 !important;
        }

        .vzCustomMenuSection {
          display: flex !important;
          flex-direction: column !important;
        }

        .vzCustomWhiteSection {
          background: #ffffff !important;
          padding: 18px 28px 36px 40px !important;
        }

        .vzCustomGreySection {
          background: #ededed !important;

          padding: 34px 30px 40px 40px !important;

          min-height: calc(100vh - 320px) !important;

          display: flex !important;
          flex-direction: column !important;
          justify-content: flex-end !important;
          gap: 28px !important;
        }

        .vzCustomSlideLink {
          min-height: 58px !important;

          display: flex !important;
          align-items: center !important;
          justify-content: space-between !important;

          gap: 18px !important;

          text-decoration: none !important;

          color: #3f4d5f !important;

          text-transform: uppercase !important;

          font-size: 15px !important;
          font-weight: 400 !important;
          letter-spacing: 0.03em !important;

          transition:
            transform 0.28s ease,
            color 0.28s ease !important;
        }

        .vzCustomSlideLink:hover {
          color: #111 !important;
          transform: translateX(4px) !important;
        }

        .vzCustomSocialTitle {
          margin: 0 0 14px !important;

          font-size: 11px !important;
          font-weight: 600 !important;

          letter-spacing: 0.14em !important;
          text-transform: uppercase !important;

          color: #777 !important;
        }

        .vzCustomSocialWrap {
          display: flex !important;
          align-items: center !important;
          gap: 14px !important;
        }

        .vzCustomSocialIcon {
          width: 42px !important;
          height: 42px !important;

          border-radius: 999px !important;

          border: 1px solid rgba(0, 0, 0, 0.08) !important;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          color: #111 !important;

          background: rgba(255, 255, 255, 0.72) !important;

          transition: all 0.28s ease !important;
        }

        .vzCustomSocialIcon:hover {
          transform: translateY(-3px) !important;
          background: #111 !important;
          color: #ffffff !important;
        }

        .vzCustomContactButton {
          min-height: 52px !important;

          display: flex !important;
          align-items: center !important;
          justify-content: center !important;

          border-radius: 6px !important;

          background: #111111 !important;
          color: #ffffff !important;

          text-decoration: none !important;

          font-size: 13px !important;
          font-weight: 500 !important;

          letter-spacing: 0.08em !important;
          text-transform: uppercase !important;

          transition: all 0.3s ease !important;
        }

        .vzCustomContactButton:hover {
          background: #2b2b2b !important;
          transform: translateY(-2px) !important;
        }

        @media (max-width: 768px) {
          .vzCustomNavbarRoot {
            height: 72px !important;
          }

          .vzCustomBrandText {
            font-size: clamp(20px, 5vw, 30px) !important;
            letter-spacing: 0.08em !important;
          }

          .vzCustomMenuButton {
            left: 24px !important;
            top: 25px !important;
            font-size: 13px !important;
          }

          .vzCustomMenuLines i:first-child {
            width: 26px !important;
          }

          .vzCustomMenuLines i:last-child {
            width: 16px !important;
          }

          .vzCustomSlideMenu {
            width: 360px !important;
          }

          .vzCustomSlideTop {
            padding-left: 28px !important;
          }

          .vzCustomWhiteSection,
          .vzCustomGreySection {
            padding-left: 30px !important;
          }

          .vzCustomSlideLink {
            min-height: 54px !important;
            font-size: 14px !important;
          }
        }

        @media (max-width: 480px) {
          .vzCustomBrandText {
            font-size: clamp(18px, 6vw, 26px) !important;
            letter-spacing: 0.08em !important;
          }

          .vzCustomMenuButton span {
            display: none !important;
          }

          .vzCustomSlideMenu {
            max-width: 90vw !important;
          }

          .vzCustomSlideLogo img {
            width: 104px !important;
          }

          .vzCustomSlideLink {
            font-size: 13px !important;
          }

          .vzCustomGreySection {
            padding-right: 24px !important;
          }
        }
      `}</style>
    </>
  );
}