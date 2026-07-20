"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { SiGoogle } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "Why Us", href: "#why-us" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo Section */}
          <a href="#" className="flex items-center gap-3 group" aria-label="Search Engine Monks Home">
            <div className="flex items-center gap-3">
              {/* Complex SVG Logo */}
              <div className="w-12 h-12 flex items-center justify-center">
                <svg
                  width="100%"
                  height="100%"
                  viewBox="0 0 100 100"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  {/* Intricate Circular Wreath/Filigree (Matches Screenshot pattern) */}
                  <path
                    d="M 50 10 C 27.91 10 10 27.91 10 50 C 10 72.09 27.91 90 50 90 C 72.09 90 90 72.09 90 50 C 90 27.91 72.09 10 50 10 Z M 50 15 C 69.33 15 85 30.67 85 50 C 85 69.33 69.33 85 50 85 C 30.67 85 15 69.33 15 50 C 15 30.67 30.67 15 50 15 Z"
                    fill="none"
                    stroke="#a0b8a0"
                    strokeWidth="1.5"
                    strokeDasharray="4,2"
                  />
                  {/* Detailed stylized Filigree details (simplified for SVG, but complex) */}
                  <path
                    d="M 50 12 A 38 38 0 0 1 88 50 M 50 88 A 38 38 0 0 1 12 50 M 12 50 A 38 38 0 0 1 50 12 M 88 50 A 38 38 0 0 1 50 88"
                    fill="none"
                    stroke="#8c9e8c"
                    strokeWidth="1"
                    strokeDasharray="2,3"
                  />

                  {/* Cartoon Buddha Monk (Matches Screenshot details) */}
                  <g transform="translate(32, 28) scale(0.38)">
                    {/* Head and Face */}
                    <circle cx="50" cy="35" r="22" fill="#ffe0bd" />
                    <circle cx="50" cy="35" r="22" fill="none" stroke="#e0ac80" strokeWidth="1" />
                    <circle cx="43" cy="32" r="2" fill="#5c4033" />
                    <circle cx="57" cy="32" r="2" fill="#5c4033" />
                    <path d="M 46 42 Q 50 45 54 42" fill="none" stroke="#5c4033" strokeWidth="1" />
                    <path d="M 49 48 Q 50 51 51 48" fill="none" stroke="#5c4033" strokeWidth="1" />
                    {/* Body/Robes */}
                    <path d="M 35 55 L 65 55 L 60 85 L 40 85 Z" fill="#d37d6e" />
                    <path d="M 35 55 L 65 55 L 60 85 L 40 85 Z" fill="none" stroke="#b06456" strokeWidth="1" />
                    <path d="M 42 55 L 58 55" stroke="#b06456" strokeWidth="1.5" />
                    {/* Hands */}
                    <ellipse cx="38" cy="62" rx="4" ry="7" fill="#ffe0bd" />
                    <ellipse cx="62" cy="62" rx="4" ry="7" fill="#ffe0bd" />
                  </g>
                </svg>
              </div>

              {/* Text: Search Engine Monks */}
              <div className="flex flex-col leading-tight">
                <span className="text-xl font-bold text-[#3a5a40] tracking-tight">
                  Search Engine Monks
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-[#d37d6e] hover:bg-[#d37d6e]/10 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3a5a40] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-all shadow-md hover:shadow-lg"
            >
              <SiGoogle className="w-4 h-4" />
              Free Consultation
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:text-[#3a5a40] rounded-lg hover:bg-[#3a5a40]/10 transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-gray-600 hover:text-[#3a5a40] hover:bg-[#3a5a40]/10 rounded-lg transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block mt-3 text-center px-5 py-3 bg-[#3a5a40] text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity"
              >
                Book Free Consultation
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}