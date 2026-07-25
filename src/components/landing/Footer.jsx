"use client";

import { Phone, Mail, MapPin, ArrowUp } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const footerLinks = {
  services: [
    { label: "Website Design & Development", href: "/services/website-design-development" },
    { label: "SEO Services", href: "/services/seo-services" },
    { label: "Social Media Marketing", href: "/services/social-media-marketing" },
    { label: "Google Ads", href: "/services/google-ads" },
    { label: "Meta Ads", href: "/services/meta-ads" },
    { label: "Branding & Graphic Design", href: "/services/branding-graphic-design" },
    { label: "AI Marketing Solutions", href: "/services/ai-marketing-solutions" },
    { label: "Content Creation", href: "/services/content-creation" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Our Team", href: "/our-team" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
    { label: "Case Studies", href: "/portfolio" },
  ],
  support: [
    { label: "Contact Us", href: "/#contact" },
    { label: "FAQ", href: "/#faq" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

const socials = [
  { icon: FaFacebookF, href: "#", label: "Facebook" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
];

const columnVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1, duration: 0.6, ease: "easeOut" } }),
};

export default function Footer() {
  return (
    <footer className="bg-[#064e3b] text-emerald-100/80 relative overflow-hidden" aria-label="Site footer">

      {/* Ambient glow blobs for depth */}
      <motion.div
        className="absolute -top-24 left-1/4 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#fb923c]/5 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* CTA Banner */}
      <div className="bg-[#0A192F] relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              Ready to Grow Your Business?
            </h3>
            <p className="text-slate-300 text-base">
              Get a free consultation and custom strategy for your brand.
            </p>
          </div>
          <motion.a
            href="/#contact"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.97 }}
            className="shrink-0 px-8 py-4 bg-[#059669] text-white font-extrabold rounded-xl hover:bg-[#047857] transition-colors duration-300 shadow-xl shadow-[#059669]/20 hover:shadow-[#059669]/40 text-base"
          >
            Book Free Consultation
          </motion.a>
        </motion.div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <motion.div
            custom={0}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="sm:col-span-2 lg:col-span-1"
          >
            <a href="/" className="inline-flex items-center gap-3 mb-6 group" aria-label="Search Engine Monks">
              <img src="/logo-white-text.png" alt="Search Engine Monks Logo" className="h-12 md:h-14 w-auto transition-transform duration-300 group-hover:scale-105" />
            </a>
            <p className="text-sm text-emerald-100/70 leading-relaxed mb-6">
              A full-service digital marketing agency helping Canadian businesses grow through innovative websites, SEO, branding, and AI-powered marketing solutions.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                <Phone className="w-4 h-4 text-[#6ee7b7]" />
                <span>+1 (416) 555-0199</span>
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                <Mail className="w-4 h-4 text-[#6ee7b7]" />
                <span>hello@searchenginemonks.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm hover:text-white hover:translate-x-1 transition-all duration-200 cursor-pointer">
                <MapPin className="w-4 h-4 text-[#6ee7b7]" />
                <span>Toronto, Ontario, Canada</span>
              </div>
            </div>
          </motion.div>

          {/* Services */}
          <motion.div
            custom={1}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {footerLinks.services.map((service) => (
                <li key={service.label}>
                  <a href={service.href} className="group inline-flex items-center text-sm text-emerald-100/70 hover:text-white transition-colors duration-200">
                    <span className="relative">
                      {service.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#6ee7b7] group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div
            custom={2}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center text-sm text-emerald-100/70 hover:text-white transition-colors duration-200">
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#6ee7b7] group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support + Socials */}
          <motion.div
            custom={3}
            variants={columnVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Support</h4>
            <ul className="space-y-2.5">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="group inline-flex items-center text-sm text-emerald-100/70 hover:text-white transition-colors duration-200">
                    <span className="relative">
                      {link.label}
                      <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#6ee7b7] group-hover:w-full transition-all duration-300" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-3 mt-7">
              {socials.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  whileHover={{ scale: 1.15, y: -3, rotate: -6 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-9 h-9 bg-[#047857] hover:bg-[#0A192F] text-white rounded-lg flex items-center justify-center shadow-sm hover:shadow-lg hover:shadow-emerald-900/30"
                >
                  <s.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#047857] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-emerald-100/60">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            &copy; {new Date().getFullYear()} Search Engine Monks. All rights reserved.
          </motion.p>
          <motion.a
            href="#hero"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.92 }}
            animate={{ y: [0, -4, 0] }}
            transition={{ y: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
            className="p-2.5 bg-[#047857] hover:bg-[#0A192F] text-white rounded-xl shadow-sm hover:shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" />
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
