"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { FileText, Eye, Shield, Lock, ChevronDown } from "lucide-react";

const sections = [
  {
    id: "information-collection",
    number: "01",
    title: "Information We Collect",
    accent: "from-emerald-600 to-teal-600",
    lightAccent: "bg-emerald-50 border-emerald-100",
    dotColor: "bg-emerald-500",
    icon: FileText,
    iconColor: "text-emerald-600",
    content: "We collect information you provide directly to us, such as when you create or modify your account, request services, contact customer support, or otherwise communicate with us. This information may include:",
    bullets: [
      "Name, email address, phone number, and postal address.",
      "Billing and payment information.",
      "Information about your business and marketing goals.",
      "Any other information you choose to provide.",
    ],
  },
  {
    id: "how-we-use",
    number: "02",
    title: "How We Use Your Information",
    accent: "from-cyan-500 to-blue-500",
    lightAccent: "bg-cyan-50 border-cyan-100",
    dotColor: "bg-cyan-500",
    icon: Eye,
    iconColor: "text-cyan-600",
    content: "We use the information we collect to provide, maintain, and improve our services, including to:",
    bullets: [
      "Deliver the marketing and SEO services you request.",
      "Process transactions and send related information.",
      "Send technical notices, updates, security alerts, and support messages.",
      "Respond to your comments, questions, and requests.",
      "Analyze trends, usage, and activities in connection with our services.",
    ],
  },
  {
    id: "information-sharing",
    number: "03",
    title: "Sharing of Information",
    accent: "from-violet-500 to-purple-600",
    lightAccent: "bg-violet-50 border-violet-100",
    dotColor: "bg-violet-500",
    icon: Shield,
    iconColor: "text-violet-600",
    content: "We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers. We may use third-party service providers to help us operate our business and the Site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes provided that you have given us your permission.",
  },
  {
    id: "data-security",
    number: "04",
    title: "Data Security",
    accent: "from-rose-500 to-pink-600",
    lightAccent: "bg-rose-50 border-rose-100",
    dotColor: "bg-rose-500",
    icon: Lock,
    iconColor: "text-rose-600",
    content: "We adopt appropriate data collection, storage and processing practices and security measures to protect against unauthorized access, alteration, disclosure or destruction of your personal information, username, password, transaction information and data stored on our Site. Sensitive and private data exchange between the Site and its Users happens over a SSL secured communication channel and is encrypted and protected with digital signatures.",
  },
];

function AccordionItem({ section, index }) {
  const [open, setOpen] = useState(index === 0);
  const Icon = section.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      id={section.id}
      className="scroll-mt-28 group"
    >
      <button
        onClick={() => setOpen(!open)}
        className={`w-full flex items-center gap-5 p-6 md:p-8 rounded-2xl border-2 text-left transition-all duration-400 ${
          open
            ? `bg-gradient-to-r ${section.accent} border-transparent text-white shadow-2xl scale-[1.01]`
            : "bg-white border-slate-100 text-slate-800 hover:border-slate-200 hover:shadow-lg hover:-translate-y-0.5"
        }`}
      >
        {/* Number */}
        <span className={`text-5xl font-black leading-none shrink-0 transition-colors duration-300 ${open ? "text-white/20" : "text-slate-100"}`}>
          {section.number}
        </span>

        {/* Icon */}
        <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 ${open ? "bg-white/20" : section.lightAccent + " border"}`}>
          <Icon className={`w-5 h-5 ${open ? "text-white" : section.iconColor}`} />
        </div>

        {/* Title */}
        <span className="flex-1 text-lg md:text-xl font-bold">
          {section.title}
        </span>

        {/* Chevron */}
        <ChevronDown className={`w-5 h-5 shrink-0 transition-all duration-400 ${open ? "rotate-180 text-white/70" : "text-slate-400 group-hover:text-slate-600"}`} />
      </button>

      {/* Expanded Content */}
      <motion.div
        initial={false}
        animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="overflow-hidden"
      >
        <div className={`mx-1 rounded-b-2xl border-x-2 border-b-2 ${section.lightAccent} px-8 py-7`}>
          <p className="text-slate-600 leading-relaxed text-base">{section.content}</p>
          {section.bullets && (
            <ul className="mt-4 space-y-2.5">
              {section.bullets.map((b) => (
                <li key={b} className="flex items-start gap-3 text-slate-600 text-sm">
                  <span className={`mt-1.5 w-2 h-2 rounded-full ${section.dotColor} shrink-0`} />
                  {b}
                </li>
              ))}
            </ul>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function PrivacyPolicy() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-50" ref={containerRef}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#064e3b] pt-32 pb-28 lg:pt-44 lg:pb-40">
        <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 right-0 w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-teal-500/15 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-emerald-600/5 to-teal-600/5 blur-3xl" />
        </motion.div>

        {/* Decorative dots pattern */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/8 border border-white/15 text-white/70 text-sm font-medium mb-10 tracking-widest uppercase">
              Legal · Privacy Policy
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              Privacy{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300">Policy</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
              Last updated: October 24, 2023. We respect your privacy and are committed to protecting your personal data with the highest standards.
            </p>

            {/* Quick stat badges */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {[
                { label: "4 Sections", color: "bg-emerald-500/20 border-emerald-400/30 text-emerald-300" },
                { label: "SSL Secured", color: "bg-teal-500/20 border-teal-400/30 text-teal-300" },
                { label: "GDPR Aligned", color: "bg-cyan-500/20 border-cyan-400/30 text-cyan-300" },
              ].map((b) => (
                <span key={b.label} className={`px-4 py-1.5 rounded-full border text-sm font-medium ${b.color}`}>
                  {b.label}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* Intro box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative bg-white rounded-2xl border border-slate-100 shadow-sm p-8 mb-10 overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-emerald-500 to-teal-600 rounded-l-2xl" />
          <p className="text-slate-600 leading-relaxed text-base pl-2">
            Search Engine Monks ("we," "us," or "our") operates the searchenginemonks.com website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data.
          </p>
        </motion.div>

        {/* Accordion sections */}
        <div className="space-y-4">
          {sections.map((section, index) => (
            <AccordionItem key={section.id} section={section} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl bg-gradient-to-br from-[#064e3b] to-[#0a5c46] p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #34d399 0%, transparent 60%), radial-gradient(circle at 70% 50%, #0d9488 0%, transparent 60%)" }}
          />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Questions about our privacy policy?</h2>
            <p className="text-white/60 text-base mb-8 max-w-lg mx-auto">
              Our team is happy to clarify any part of our privacy practices. Reach out and we'll get back to you promptly.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-emerald-900/40 hover:-translate-y-0.5 hover:shadow-emerald-900/60"
            >
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
