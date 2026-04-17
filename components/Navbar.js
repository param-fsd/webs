"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

const primaryLinks = [
  { label: "WHO WE ARE", href: "/about" },
  { label: "WHAT WE DO", href: "/services" },
  { label: "PROJECTS", href: "/projects" },
  { label: "CONTACT US", href: "/contact" },
];

const secondaryLinks = [
  { label: "CAREERS", href: "/contact" },
  { label: "MEDIA CENTRE", href: "/projects" },
  { label: "SUSTAINABILITY", href: "/about" },
  { label: "INVESTOR RELATIONS", href: "/contact" },
  { label: "VIZIPA PRIVILEGE", href: "/projects" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (open) {
      html.classList.add("menu-open");
      body.classList.add("menu-open");
    } else {
      html.classList.remove("menu-open");
      body.classList.remove("menu-open");
    }

    return () => {
      html.classList.remove("menu-open");
      body.classList.remove("menu-open");
    };
  }, [open]);

  return (
    <>
      <header className="site-header overlay-header">
        <div className="nav-overlay-shell">
          <button
            type="button"
            className="menu-trigger"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="site-sidebar"
          >
            <span>MENU</span>
            <Menu size={24} strokeWidth={1.5} />
          </button>

          <Link href="/" className="center-brand">
            VIZIPA
          </Link>
        </div>
      </header>

      <div className={`sidebar-menu ${open ? "active" : ""}`} aria-hidden={!open}>
        <button
          type="button"
          className="sidebar-backdrop"
          onClick={() => setOpen(false)}
          aria-label="Close menu backdrop"
        />

        <aside id="site-sidebar" className="sidebar-panel">
          <div className="sidebar-top">
            <div className="sidebar-brand">VIZIPA</div>

            <button
              type="button"
              className="sidebar-close"
              onClick={() => setOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
          </div>

          <div className="sidebar-group sidebar-group-main">
            {primaryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link large-link"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
                <ArrowRight size={22} strokeWidth={1.25} />
              </Link>
            ))}
          </div>

          <div className="sidebar-group sidebar-group-secondary">
            {secondaryLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="sidebar-link"
                onClick={() => setOpen(false)}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </aside>
      </div>
    </>
  );
}