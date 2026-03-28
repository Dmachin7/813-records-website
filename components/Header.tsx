"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "ABOUT", href: "#about" },
  { label: "ARTISTS", href: "#artists" },
  { label: "RELEASES", href: "#releases" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`sticky top-0 z-30 bg-arcade-black transition-all duration-300 ${
        scrolled ? "border-b-4 border-arcade-yellow" : "border-b-2 border-arcade-yellow"
      }`}
      style={{
        boxShadow: scrolled
          ? "0 4px 0 0 #FFD700, 0 0 20px rgba(255,215,0,0.15)"
          : "0 2px 0 0 #FFD700",
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 group focus:outline-none"
          aria-label="813 Records - scroll to top"
        >
          <span
            className="font-pixel text-arcade-yellow text-sm sm:text-base leading-none group-hover:animate-neon-pulse"
            style={{
              textShadow:
                "0 0 4px #FFD700, 0 0 8px #FFD700, 0 0 16px rgba(255,215,0,0.4)",
              animation: "neonPulse 2.5s ease-in-out infinite",
            }}
          >
            813 RECORDS
          </span>
          <span
            className="font-pixel text-arcade-yellow text-sm sm:text-base leading-none animate-blink"
            aria-hidden="true"
          >
            _
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden sm:flex items-center gap-6 lg:gap-10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="nav-link font-pixel text-arcade-white text-xs hover:text-arcade-yellow transition-colors duration-200 pixel-underline focus:outline-none"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="sm:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block w-6 h-0.5 bg-arcade-yellow transition-all duration-200 ${
                menuOpen
                  ? i === 0
                    ? "rotate-45 translate-y-2"
                    : i === 2
                    ? "-rotate-45 -translate-y-2"
                    : "opacity-0"
                  : ""
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-40 border-t border-arcade-yellow" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-3 gap-4 bg-arcade-gray">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-pixel text-arcade-white text-xs hover:text-arcade-yellow transition-colors text-left focus:outline-none"
            >
              &gt; {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
