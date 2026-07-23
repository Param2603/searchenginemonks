"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md border-b border-[#a7f3d0]/60 shadow-md"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* Logo */}
          <a href="/" className="flex items-center gap-3 group" aria-label="Search Engine Monks Home">
            <img
              src="/logo.svg"
              alt="Search Engine Monks Logo"
              className="h-14 lg:h-[4.5rem] w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="relative px-3 py-2 text-sm font-semibold text-[#4a4a48] hover:text-[#059669] transition-colors duration-200 rounded-lg hover:bg-[#d1fae5]/60 group"
              >
                {link.label}
                <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#059669] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-[#059669] text-white text-sm font-bold rounded-xl hover:bg-[#047857] transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-[#4a4a48] hover:text-[#059669] rounded-lg hover:bg-[#d1fae5] transition-colors duration-200"
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
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-[#a7f3d0]/60 shadow-xl"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="block px-4 py-3 text-sm font-semibold text-[#4a4a48] hover:text-[#059669] hover:bg-[#d1fae5]/60 rounded-xl transition-colors duration-200"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3.5 bg-[#059669] text-white text-sm font-bold rounded-xl hover:bg-[#047857] transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
