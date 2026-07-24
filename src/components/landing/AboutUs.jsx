"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, useInView, animate } from "framer-motion";
import {
  Lightbulb, Target, Users, Rocket, Brain, Globe, TrendingUp,
  Award, Shield, CheckCircle, Star, Zap, Heart, Search, Sparkles
} from "lucide-react";

/* ─── Animated Counter ────────────────────────────────────────────────── */
function AnimatedCounter({ to, suffix = "", prefix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to]);

  return (
    <span ref={ref}>
      {prefix}{value}{suffix}
    </span>
  );
}

/* ─── Parallax Value Card ─────────────────────────────────────────────── */
const values = [
  {
    title: "Innovation First",
    description: "We constantly explore cutting-edge AI tools and emerging platforms to keep your brand ahead of every competitor.",
    icon: Brain,
    gradient: "from-emerald-400 to-teal-500",
    bg: "bg-emerald-50",
    border: "hover:border-emerald-300",
    glow: "group-hover:shadow-emerald-200/60",
    iconColor: "text-emerald-600",
  },
  {
    title: "Data-Driven Results",
    description: "Every campaign decision is backed by real analytics. We track, measure, and optimise continuously for maximum ROI.",
    icon: Target,
    gradient: "from-orange-400 to-amber-500",
    bg: "bg-orange-50",
    border: "hover:border-orange-300",
    glow: "group-hover:shadow-orange-200/60",
    iconColor: "text-orange-500",
  },
  {
    title: "Client Partnership",
    description: "We don't treat you as a ticket number. Your success is our success — we're invested partners in your growth journey.",
    icon: Heart,
    gradient: "from-pink-400 to-rose-500",
    bg: "bg-pink-50",
    border: "hover:border-pink-300",
    glow: "group-hover:shadow-pink-200/60",
    iconColor: "text-pink-500",
  },
  {
    title: "Rapid Execution",
    description: "Speed without compromise. Our agile team ships high-quality campaigns, websites, and strategies fast.",
    icon: Zap,
    gradient: "from-violet-400 to-purple-600",
    bg: "bg-violet-50",
    border: "hover:border-violet-300",
    glow: "group-hover:shadow-violet-200/60",
    iconColor: "text-violet-600",
  },
];

function ValueCard({ item, index }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(useSpring(y, { stiffness: 300, damping: 30 }), [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(useSpring(x, { stiffness: 300, damping: 30 }), [-0.5, 0.5], ["-12deg", "12deg"]);

  const move = (e) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const leave = () => { x.set(0); y.set(0); };

  return (
    <div style={{ perspective: 1000 }}>
      <motion.div
        ref={ref}
        onMouseMove={move}
        onMouseLeave={leave}
        style={{ rotateX, rotateY }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ delay: index * 0.12, duration: 0.6, ease: "easeOut" }}
        whileHover={{ y: -8 }}
        className="h-full cursor-default"
      >
        <div
          className={`group relative h-full bg-white rounded-3xl p-8 border border-gray-100 ${item.border} shadow-lg ${item.glow} hover:shadow-2xl transition-all duration-500 overflow-hidden`}
        >
          {/* gradient blob */}
          <div className={`absolute -top-8 -right-8 w-32 h-32 rounded-full bg-gradient-to-br ${item.gradient} opacity-10 group-hover:opacity-20 group-hover:scale-150 transition-all duration-700`} />

          {/* icon */}
          <motion.div
            className={`relative w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-5 shadow-sm`}
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.5 }}
          >
            <item.icon className={`w-7 h-7 ${item.iconColor}`} />
          </motion.div>

          <h3 className="text-xl font-extrabold text-[#1e293b] mb-3 group-hover:text-[#059669] transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-[15px] text-[#64748b] leading-relaxed">
            {item.description}
          </p>

          {/* bottom accent line */}
          <div className={`absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r ${item.gradient} transition-all duration-500 rounded-b-3xl`} />
        </div>
      </motion.div>
    </div>
  );
}

/* ─── Journey / Timeline ─────────────────────────────────────────────── */
const milestones = [
  {
    year: "2018",
    title: "Founded in Canada",
    desc: "Search Engine Monks was born with a clear mission — to help Canadian businesses dominate the digital landscape.",
    icon: Rocket,
    gradient: "from-emerald-500 to-teal-400",
    cardBg: "bg-gradient-to-br from-emerald-50 to-teal-50",
    border: "border-emerald-200",
    iconBg: "bg-emerald-500",
    yearColor: "text-emerald-600",
    yearBg: "bg-emerald-100",
    glow: "shadow-emerald-200",
    dot: "from-emerald-400 to-teal-500",
    dotShadow: "shadow-emerald-300/60",
    number: "01",
  },
  {
    year: "2019",
    title: "First 50 Clients",
    desc: "Word-of-mouth and real SEO results fuelled explosive growth across retail, healthcare, and professional services.",
    icon: Users,
    gradient: "from-orange-400 to-amber-500",
    cardBg: "bg-gradient-to-br from-orange-50 to-amber-50",
    border: "border-orange-200",
    iconBg: "bg-orange-500",
    yearColor: "text-orange-600",
    yearBg: "bg-orange-100",
    glow: "shadow-orange-200",
    dot: "from-orange-400 to-amber-500",
    dotShadow: "shadow-orange-300/60",
    number: "02",
  },
  {
    year: "2021",
    title: "Google & Meta Partner",
    desc: "Officially certified as a Google Partner and Meta Business Partner, unlocking exclusive tools and premium ad placements.",
    icon: Award,
    gradient: "from-blue-500 to-violet-500",
    cardBg: "bg-gradient-to-br from-blue-50 to-violet-50",
    border: "border-blue-200",
    iconBg: "bg-blue-500",
    yearColor: "text-blue-600",
    yearBg: "bg-blue-100",
    glow: "shadow-blue-200",
    dot: "from-blue-400 to-violet-500",
    dotShadow: "shadow-blue-300/60",
    number: "03",
  },
  {
    year: "2023",
    title: "AI Division Launched",
    desc: "We integrated AI-powered marketing — chatbots, predictive analytics, and smart automation — to give clients an unfair advantage.",
    icon: Brain,
    gradient: "from-violet-500 to-pink-500",
    cardBg: "bg-gradient-to-br from-violet-50 to-pink-50",
    border: "border-violet-200",
    iconBg: "bg-violet-500",
    yearColor: "text-violet-600",
    yearBg: "bg-violet-100",
    glow: "shadow-violet-200",
    dot: "from-violet-400 to-pink-500",
    dotShadow: "shadow-violet-300/60",
    number: "04",
  },
  {
    year: "2025+",
    title: "200+ Projects & Growing",
    desc: "Expanding our expert team and service offerings to empower businesses across North America and beyond.",
    icon: TrendingUp,
    gradient: "from-teal-400 to-emerald-500",
    cardBg: "bg-gradient-to-br from-teal-50 to-emerald-50",
    border: "border-teal-200",
    iconBg: "bg-teal-500",
    yearColor: "text-teal-600",
    yearBg: "bg-teal-100",
    glow: "shadow-teal-200",
    dot: "from-teal-400 to-emerald-500",
    dotShadow: "shadow-teal-300/60",
    number: "05",
  },
];

function MilestoneCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: "easeOut" }}
      whileHover={{ y: -10, scale: 1.03 }}
      className="relative flex-shrink-0 w-64 sm:w-72 cursor-default"
    >
      {/* Card */}
      <div className={`relative ${item.cardBg} border ${item.border} rounded-3xl p-7 shadow-xl ${item.glow} hover:shadow-2xl transition-all duration-500 overflow-hidden h-full`}>

        {/* Big faded number background */}
        <span className="absolute -bottom-4 -right-2 text-[7rem] font-black text-black/5 leading-none select-none pointer-events-none">
          {item.number}
        </span>

        {/* Top row: icon + year badge */}
        <div className="flex items-start justify-between mb-5">
          <motion.div
            className={`w-12 h-12 ${item.iconBg} rounded-2xl flex items-center justify-center shadow-lg`}
            whileHover={{ rotate: [0, -12, 12, -6, 0] }}
            transition={{ duration: 0.5 }}
          >
            <item.icon className="w-6 h-6 text-white" />
          </motion.div>
          <span className={`inline-flex items-center px-3 py-1.5 ${item.yearBg} ${item.yearColor} text-xs font-extrabold rounded-full tracking-widest`}>
            {item.year}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-lg font-extrabold text-[#1e293b] mb-3 leading-snug">
          {item.title}
        </h4>

        {/* Desc */}
        <p className="text-sm text-[#64748b] leading-relaxed relative z-10">
          {item.desc}
        </p>

        {/* Bottom gradient bar */}
        <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} rounded-b-3xl`} />
      </div>
    </motion.div>
  );
}

/* ─── Differentiators ────────────────────────────────────────────────── */
const differentiators = [
  { icon: Search, label: "SEO-First Strategy", desc: "Every project starts with keyword and competitor research." },
  { icon: Globe, label: "Full-Stack Digital", desc: "Design → SEO → Ads → Analytics under one roof." },
  { icon: Award, label: "Certified Experts", desc: "Google, Meta, HubSpot, and AI-certified professionals." },
  { icon: TrendingUp, label: "Measurable ROI", desc: "Monthly reporting with KPIs tied to your business goals." },
  { icon: Shield, label: "No Lock-In Contracts", desc: "We earn your trust every month with real results." },
  { icon: Sparkles, label: "AI-Powered Edge", desc: "Proprietary AI tools for content, ads, and forecasting." },
];

/* ─── Main Component ─────────────────────────────────────────────────── */
export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#f8faf9]"
      aria-labelledby="about-heading"
    >
      {/* ── Decorative top line ── */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-300 to-transparent opacity-60" />

      {/* ── BG blobs ── */}
      <div className="absolute -left-40 top-20 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-25 pointer-events-none" />
      <div className="absolute -right-40 top-1/3 w-[400px] h-[400px] bg-orange-100 rounded-full blur-3xl opacity-20 pointer-events-none" />
      <div className="absolute left-1/4 bottom-0 w-[300px] h-[300px] bg-violet-100 rounded-full blur-3xl opacity-20 pointer-events-none" />

      {/* ════════════════════════════════════════════════
          HERO INTRO — Story & Stats
      ════════════════════════════════════════════════ */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20 sm:pb-28">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 text-xs font-bold rounded-full mb-6 tracking-widest uppercase shadow-sm border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Who We Are
            </span>

            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e293b] leading-[1.08] tracking-tight mb-6"
            >
              We Are the{" "}
              <span className="relative">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                  Digital Monks
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
                  className="absolute bottom-1 left-0 right-0 h-3 bg-emerald-100 -z-0 origin-left rounded-full"
                />
              </span>{" "}
              of <br className="hidden sm:block" />Digital Marketing
            </h2>

            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed mb-8 max-w-xl">
              Founded in Canada, <strong className="text-[#1e293b]">Search Engine Monks</strong> is a full-service
              digital marketing agency that blends Zen-like focus with cutting-edge AI to deliver results that actually
              move the needle. We don't just run campaigns — we engineer growth.
            </p>

            <p className="text-base text-[#64748b] leading-relaxed mb-10 max-w-xl">
              From skyrocketing your Google rankings and crafting stunning websites, to launching high-converting ad
              campaigns across every platform — our team of certified monks obsess over your success.
            </p>

            {/* CTA */}
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-400/30 hover:shadow-emerald-400/50 hover:shadow-xl transition-all duration-300 text-base"
            >
              <Rocket className="w-5 h-5" />
              Start Your Growth Journey
            </motion.a>
          </motion.div>

          {/* Right — stats + image card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80"
                alt="Search Engine Monks team collaboration"
                className="w-full h-80 sm:h-96 object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-amber-500 fill-amber-400" />
                  </div>
                  <div>
                    <p className="text-sm font-extrabold text-[#1e293b]">4.9★ Google Rating</p>
                    <p className="text-xs text-[#64748b]">Based on 120+ verified reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-5 shadow-2xl border border-emerald-100"
            >
              <p className="text-3xl font-extrabold text-emerald-600 leading-none">
                <AnimatedCounter to={200} suffix="+" />
              </p>
              <p className="text-xs font-semibold text-[#64748b] mt-1 uppercase tracking-wide">Projects Delivered</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-4 -left-6 bg-white rounded-2xl p-5 shadow-2xl border border-orange-100"
            >
              <p className="text-3xl font-extrabold text-orange-500 leading-none">
                <AnimatedCounter to={340} suffix="%" prefix="+" />
              </p>
              <p className="text-xs font-semibold text-[#64748b] mt-1 uppercase tracking-wide">Average Client ROI</p>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Stats Row ─────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 sm:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8"
        >
          {[
            { value: 200, suffix: "+", label: "Projects Delivered", icon: Rocket, color: "text-emerald-600", bg: "bg-emerald-50" },
            { value: 150, suffix: "+", label: "Happy Clients",      icon: Users,  color: "text-orange-500", bg: "bg-orange-50" },
            { value: 8,   suffix: "+", label: "Years of Experience",icon: Award,  color: "text-violet-600", bg: "bg-violet-50" },
            { value: 340, suffix: "%", prefix: "+", label: "Avg. Client ROI", icon: TrendingUp, color: "text-teal-600", bg: "bg-teal-50" },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="group relative bg-white rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-2xl border border-gray-100 hover:border-emerald-200 transition-all duration-400 text-center overflow-hidden"
            >
              <div className={`absolute -top-6 -right-6 w-20 h-20 rounded-full ${s.bg} opacity-40 group-hover:opacity-80 group-hover:scale-[3] transition-all duration-600`} />
              <div className={`relative w-12 h-12 ${s.bg} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                <s.icon className={`w-6 h-6 ${s.color}`} />
              </div>
              <p className={`text-4xl font-extrabold ${s.color} leading-none mb-2`}>
                <AnimatedCounter to={s.value} suffix={s.suffix} prefix={s.prefix ?? ""} />
              </p>
              <p className="text-sm font-semibold text-[#64748b] uppercase tracking-wide">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ════════════════════════════════════════════════
          OUR JOURNEY — Colourful Cards
      ════════════════════════════════════════════════ */}
      <div className="relative py-20 sm:py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f16] via-[#0f2419] to-[#0a1a14]" />
        {/* Subtle grid */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E\")" }} />
        {/* Color blobs */}
        <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-600/15 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-violet-500/8 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16 sm:mb-20"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/15 text-emerald-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              From Startup to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400">
                Industry Leader
              </span>
            </h2>
            <p className="text-lg text-white/55 leading-relaxed">
              Every milestone is a chapter in our mission to transform Canadian digital marketing.
            </p>
          </motion.div>

          {/* Connector line + cards row */}
          <div className="relative">
            {/* Horizontal connector line (desktop) */}
            <div className="hidden lg:block absolute top-[3.75rem] left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500/20 via-white/20 to-emerald-500/20 z-0" />

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {milestones.map((item, i) => (
                <div key={item.year} className="relative flex flex-col items-center">
                  {/* Connector dot above card */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.12 + 0.2, type: "spring", stiffness: 300 }}
                    className={`relative z-20 w-7 h-7 rounded-full bg-gradient-to-br ${item.dot} shadow-lg ${item.dotShadow} ring-4 ring-white/10 mb-5 flex-shrink-0`}
                  >
                    {/* Pulse ring */}
                    <motion.div
                      animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
                      transition={{ repeat: Infinity, duration: 2.5, delay: i * 0.4 }}
                      className={`absolute inset-0 rounded-full bg-gradient-to-br ${item.dot} opacity-60`}
                    />
                  </motion.div>

                  {/* Milestone Card */}
                  <MilestoneCard item={item} index={i} />
                </div>
              ))}
            </div>
          </div>

          {/* Bottom caption */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.7 }}
            className="text-center text-white/35 text-sm mt-12 tracking-wide"
          >
            🚀 And the story continues — our best chapter is still being written.
          </motion.p>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          OUR CORE VALUES
      ════════════════════════════════════════════════ */}
      <div className="relative py-20 sm:py-28 bg-[#f8faf9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-emerald-700 text-xs font-bold rounded-full mb-6 tracking-widest uppercase shadow-sm border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Core Values
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#1e293b] tracking-tight mb-4">
              The Principles That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-400">
                Drive Us
              </span>
            </h2>
            <p className="text-lg text-[#64748b] leading-relaxed">
              These aren't just words on a wall — they shape every campaign, every line of code, and every client conversation.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((item, i) => (
              <ValueCard key={item.title} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>

      {/* ════════════════════════════════════════════════
          WHY CHOOSE US — Differentiators
      ════════════════════════════════════════════════ */}
      <div className="relative py-20 sm:py-28 overflow-hidden">
        {/* Dark gradient bg */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f2419] via-[#0d1f1a] to-[#0a1a14]" />
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-600/10 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-emerald-400 text-xs font-bold rounded-full mb-6 tracking-widest uppercase border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Why Search Engine Monks
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              What Makes Us{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Different
              </span>
            </h2>
            <p className="text-lg text-white/60 leading-relaxed">
              Hundreds of agencies promise results. We build systems that guarantee them.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((d, i) => (
              <motion.div
                key={d.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 hover:border-emerald-500/40 rounded-3xl p-7 transition-all duration-400 overflow-hidden"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/0 to-teal-500/0 group-hover:from-emerald-500/10 group-hover:to-teal-500/5 transition-all duration-500 rounded-3xl" />

                <div className="relative flex items-start gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500/30 transition-colors duration-300">
                    <d.icon className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300">
                      {d.label}
                    </h4>
                    <p className="text-sm text-white/55 leading-relaxed">{d.desc}</p>
                  </div>
                </div>

                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.4, duration: 0.5 }}
                  className="absolute bottom-0 left-0 h-0.5 w-full bg-gradient-to-r from-emerald-500 to-teal-400 origin-left opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
              </motion.div>
            ))}
          </div>

          {/* CTA banner */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-3xl p-8 sm:p-10"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
                Ready to <span className="text-emerald-400">Grow Your Business?</span>
              </h3>
              <p className="text-white/60 text-base">
                Book a free 30-minute strategy session with our team — no strings attached.
              </p>
            </div>
            <motion.a
              href="/#contact"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="flex-shrink-0 inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-2xl shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/50 hover:shadow-xl transition-all duration-300 text-base whitespace-nowrap"
            >
              <CheckCircle className="w-5 h-5" />
              Get Free Strategy Session
            </motion.a>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
