"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { services } from "@/constants/servicesData";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services", isDropdown: true },
  { label: "Why Us", href: "/#why-us" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Testimonials", href: "/#testimonials" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesDropdown(false);
      }
    };

    if (servicesDropdown) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [servicesDropdown]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/97 backdrop-blur-md border-b border-sage-200/60 shadow-md"
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
              className="h-14 lg:h-18 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group" ref={link.isDropdown ? dropdownRef : null}>
                {link.isDropdown ? (
                  <button
                    onMouseEnter={() => setServicesDropdown(true)}
                    onMouseLeave={() => setServicesDropdown(false)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setServicesDropdown(!servicesDropdown);
                      }
                    }}
                    aria-haspopup="true"
                    aria-expanded={servicesDropdown}
                    aria-label="Services dropdown menu"
                    className="relative px-3 py-2 text-sm font-semibold text-charcoal hover:text-sage-600 transition-colors duration-200 rounded-lg hover:bg-sage-100/60 flex items-center gap-1 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
                  >
                    {link.label}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${servicesDropdown ? 'rotate-180' : ''}`} />
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-sage-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                  </button>
                ) : (
                  <a
                    href={link.href}
                    className="relative px-3 py-2 text-sm font-semibold text-charcoal hover:text-sage-600 transition-colors duration-200 rounded-lg hover:bg-sage-100/60 group focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
                  >
                    {link.label}
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-sage-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-200 rounded-full" />
                  </a>
                )}

                {/* Desktop Services Dropdown */}
                {link.isDropdown && (
                  <AnimatePresence>
                    {servicesDropdown && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        onMouseEnter={() => setServicesDropdown(true)}
                        onMouseLeave={() => setServicesDropdown(false)}
                        role="menu"
                        className="absolute top-full left-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-sage-100 p-3 z-50"
                      >
                        <div className="space-y-1.5 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-sage-200 scrollbar-track-transparent">
                          {services.map((svc) => (
                            <a
                              key={svc.slug}
                              href={`/services/${svc.slug}`}
                              onClick={() => setServicesDropdown(false)}
                              role="menuitem"
                              className="group flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-sage-100/50 transition-all duration-300 focus:outline-none focus:bg-sage-100/50 focus:ring-2 focus:ring-sage-600"
                            >
                              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${svc.bg}`}>
                                <svc.icon className={`w-4 h-4 ${svc.color}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-semibold text-[#2d3748] group-hover:text-sage-600 transition-colors">
                                  {svc.title}
                                </p>
                                <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                                  {svc.description}
                                </p>
                              </div>
                              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-sage-600 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-0.5" />
                            </a>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 bg-sage-600 text-white text-sm font-bold rounded-xl hover:bg-sage-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Get a Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-200" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-charcoal hover:text-sage-600 rounded-lg hover:bg-sage-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-600"
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
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-sage-200/60 shadow-xl"
          >
            <div className="px-4 py-5 space-y-1">
              {navLinks.map((link, i) => (
                <div key={link.label}>
                  {link.isDropdown ? (
                    <>
                      <motion.button
                        onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                        initial={{ opacity: 0, x: -16 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            setMobileServicesOpen(!mobileServicesOpen);
                          }
                        }}
                        aria-haspopup="true"
                        aria-expanded={mobileServicesOpen}
                        className="w-full flex items-center justify-between px-4 py-3 text-sm font-semibold text-charcoal hover:text-sage-600 hover:bg-sage-100/60 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-600"
                      >
                        {link.label}
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                      </motion.button>
                      <AnimatePresence>
                        {mobileServicesOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2 }}
                            role="menu"
                            className="pl-4 space-y-1 mt-1"
                          >
                            {services.map((svc) => (
                              <a
                                key={svc.slug}
                                href={`/services/${svc.slug}`}
                                onClick={() => {
                                  setMobileOpen(false);
                                  setMobileServicesOpen(false);
                                }}
                                role="menuitem"
                                className="flex items-start gap-3 px-4 py-2.5 text-xs font-semibold text-[#2d3748] hover:text-sage-600 hover:bg-sage-100/30 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-600"
                              >
                                <div className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${svc.bg}`}>
                                  <svc.icon className={`w-3 h-3 ${svc.color}`} />
                                </div>
                                <div className="flex-1 min-w-0">
                                  <p className="font-semibold">{svc.title}</p>
                                  <p className="text-gray-500 line-clamp-1">{svc.description}</p>
                                </div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <motion.a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      initial={{ opacity: 0, x: -16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block px-4 py-3 text-sm font-semibold text-charcoal hover:text-sage-600 hover:bg-sage-100/60 rounded-xl transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sage-600"
                    >
                      {link.label}
                    </motion.a>
                  )}
                </div>
              ))}
              <motion.a
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="flex items-center justify-center gap-2 mt-4 px-5 py-3.5 bg-sage-600 text-white text-sm font-bold rounded-xl hover:bg-sage-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
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
