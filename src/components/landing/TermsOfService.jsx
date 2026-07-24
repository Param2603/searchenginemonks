"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { Scale, CheckCircle, AlertTriangle, HelpCircle, ChevronDown } from "lucide-react";

const sections = [
  {
    id: "agreement",
    number: "01",
    title: "Agreement to Terms",
    accent: "from-blue-600 to-indigo-600",
    lightAccent: "bg-blue-50 border-blue-100",
    dotColor: "bg-blue-500",
    icon: Scale,
    iconColor: "text-blue-600",
    content: "By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law. We reserve the right to update or modify these terms at any time without prior notice.",
  },
  {
    id: "use-license",
    number: "02",
    title: "Use License",
    accent: "from-emerald-600 to-teal-600",
    lightAccent: "bg-emerald-50 border-emerald-100",
    dotColor: "bg-emerald-500",
    icon: CheckCircle,
    iconColor: "text-emerald-600",
    bullets: ["You may not modify or copy the materials.", "You may not use the materials for any commercial purpose.", "You may not attempt to decompile or reverse engineer any software contained on the site.", "You may not remove any copyright or other proprietary notations from the materials."],
    content: "Permission is granted to temporarily download one copy of the materials on Search Engine Monks' website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:",
  },
  {
    id: "disclaimer",
    number: "03",
    title: "Disclaimer",
    accent: "from-amber-500 to-orange-500",
    lightAccent: "bg-amber-50 border-amber-100",
    dotColor: "bg-amber-500",
    icon: AlertTriangle,
    iconColor: "text-amber-600",
    content: "The materials on Search Engine Monks' website are provided on an 'as is' basis. Search Engine Monks makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights. Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.",
  },
  {
    id: "limitations",
    number: "04",
    title: "Limitations of Liability",
    accent: "from-rose-500 to-pink-600",
    lightAccent: "bg-rose-50 border-rose-100",
    dotColor: "bg-rose-500",
    icon: HelpCircle,
    iconColor: "text-rose-600",
    content: "In no event shall Search Engine Monks or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website, even if we or an authorized representative has been notified orally or in writing of the possibility of such damage.",
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
          <p className="text-slate-600 leading-relaxed text-base mb-0">{section.content}</p>
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

export default function TermsOfService() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <div className="min-h-screen bg-slate-50" ref={containerRef}>

      {/* ── Hero ── */}
      <div className="relative overflow-hidden bg-[#0A192F] pt-32 pb-28 lg:pt-44 lg:pb-40">
        <motion.div style={{ y: yParallax, opacity: opacityParallax }} className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-20 left-0 w-[600px] h-[600px] bg-blue-500/15 rounded-full blur-[130px]" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gradient-to-r from-blue-600/5 to-indigo-600/5 blur-3xl" />
        </motion.div>

        {/* Decorative grid lines */}
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/8 border border-white/15 text-white/70 text-sm font-medium mb-10 tracking-widest uppercase">
              Legal · Terms of Service
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-none tracking-tight">
              Terms of{" "}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Service</span>
                <motion.span
                  className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
              </span>
            </h1>
            <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mt-4">
              Last updated: October 24, 2023. Please read these terms carefully before using our services.
            </p>

            {/* Quick stat badges */}
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }} className="flex flex-wrap items-center justify-center gap-3 mt-10">
              {[{ label: "4 Sections", color: "bg-blue-500/20 border-blue-400/30 text-blue-300" }, { label: "Easy to Read", color: "bg-emerald-500/20 border-emerald-400/30 text-emerald-300" }, { label: "Legally Binding", color: "bg-rose-500/20 border-rose-400/30 text-rose-300" }].map((b) => (
                <span key={b.label} className={`px-4 py-1.5 rounded-full border text-sm font-medium ${b.color}`}>{b.label}</span>
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
          <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-blue-500 to-indigo-600 rounded-l-2xl" />
          <p className="text-slate-600 leading-relaxed text-base pl-2">
            These terms and conditions outline the rules and regulations for the use of Search Engine Monks's Website and Services. By accessing this website, we assume you accept these terms and conditions. Do not continue to use Search Engine Monks if you do not agree to take all of the terms and conditions stated on this page.
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
          className="mt-16 rounded-3xl bg-gradient-to-br from-[#0A192F] to-[#0d2137] p-10 md:p-14 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #3b82f6 0%, transparent 60%), radial-gradient(circle at 70% 50%, #6366f1 0%, transparent 60%)" }} />
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3">Questions about our terms?</h2>
            <p className="text-white/60 text-base mb-8 max-w-lg mx-auto">
              Our team is happy to clarify any part of these terms. Reach out and we'll get back to you promptly.
            </p>
            <a href="/#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-400 hover:to-indigo-400 text-white font-bold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-xl shadow-blue-900/40 hover:-translate-y-0.5 hover:shadow-blue-900/60">
              Contact Us
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
