"use client";

import { ArrowRight, Star, Shield, Award, Users, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const trustBadges = [
  { icon: Shield, label: "Google Partner" },
  { icon: Award, label: "Meta Partner" },
  { icon: Star, label: "5-Star Rated" },
  { icon: CheckCircle, label: "HubSpot Certified" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background sage green matching searchenginemonks.com */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#34d399] via-[#a7f3d0] to-[#d1fae5]" />

      {/* Animated blobs */}
      <motion.div
        className="absolute top-16 -left-16 w-72 h-72 bg-white/30 rounded-full blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 -right-16 w-96 h-96 bg-white/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-20" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 border border-[#6ee7b7]/50 backdrop-blur-sm rounded-full mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="text-sm font-semibold text-[#047857] tracking-wide">AI-Powered Digital Marketing</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-[#2d2d2b] leading-[1.1] tracking-tight mb-6"
            >
              Grow Your Business<br />with <span className="text-[#fb923c]">Smart Digital</span><br /><span className="text-[#fb923c]">Marketing</span> &amp; AI<br />Solutions
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.7 }}
              className="text-base sm:text-lg text-[#4a4a48] leading-relaxed mb-8 max-w-xl"
            >
              We help businesses increase leads, sales, and online visibility
              through websites, SEO, branding, and performance marketing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-all duration-300 shadow-lg shadow-[#059669]/30 hover:shadow-xl hover:-translate-y-0.5 text-base"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#6ee7b7] text-[#047857] font-bold rounded-xl hover:bg-white hover:border-[#059669] transition-all duration-300 text-base hover:-translate-y-0.5"
              >
                View Our Services
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: TrendingUp, value: "200+", label: "Projects Delivered" },
                { icon: Users, value: "150+", label: "Happy Clients" },
                { icon: Star, value: "4.9\u2605", label: "Google Rating" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/70 shadow-sm cursor-default"
                >
                  <div className="w-10 h-10 bg-[#d1fae5] rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#059669]" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-[#2d2d2b] leading-none">{stat.value}</p>
                    <p className="text-xs text-[#6b6b68] mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right – Animated Buddha */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center relative min-h-[380px] lg:min-h-[480px] mt-12 lg:mt-0"
          >
            <motion.div
              className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full bg-white/50 blur-2xl"
              animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-[320px] h-[320px] lg:w-[430px] lg:h-[430px] rounded-full border-2 border-[#6ee7b7]/30"
              animate={{ scale: [1, 1.06, 1], opacity: [0.3, 0.7, 0.3] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            />
            {/* 3 Massive Orange Rings for high visibility behind the head */}
            {/* Inner dashed ring */}
            <motion.div
              className="absolute w-[340px] h-[340px] lg:w-[480px] lg:h-[480px] -translate-y-[20px] rounded-full border-[3px] border-dashed border-[#fb923c]/90 shadow-[0_0_25px_rgba(251,146,60,0.4)]"
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />
            {/* Middle dotted/solid thin ring */}
            <motion.div
              className="absolute w-[380px] h-[380px] lg:w-[540px] lg:h-[540px] -translate-y-[20px] rounded-full border-2 border-dotted border-[#fb923c]/70"
              animate={{ rotate: 360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
            />
            {/* Outer faint dashed ring */}
            <motion.div
              className="absolute w-[420px] h-[420px] lg:w-[600px] lg:h-[600px] -translate-y-[20px] rounded-full border border-dashed border-[#fb923c]/50"
              animate={{ rotate: -360 }}
              transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[240px] h-[240px] lg:w-[330px] lg:h-[330px] rounded-full border border-[#059669]/20"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <motion.img
              src="/buddha.svg"
              alt="Search Engine Monks meditating Buddha mascot"
              loading="eager"
              className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px] drop-shadow-2xl z-10 select-none"
              animate={{ y: [0, -18, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              whileHover={{ scale: 1.07 }}
              className="absolute top-4 right-0 lg:top-8 lg:-right-2 bg-white rounded-2xl shadow-xl p-3 lg:p-4 flex items-center gap-2.5 lg:gap-3 z-20 border border-gray-100 cursor-default"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#d1fae5] rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-[#059669]" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs text-[#6b6b68] font-medium">Average ROI</p>
                <p className="text-sm lg:text-lg font-extrabold text-[#2d2d2b]">+340%</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              whileHover={{ scale: 1.07 }}
              className="absolute bottom-10 left-0 lg:bottom-14 lg:-left-2 bg-white rounded-2xl shadow-xl p-3 lg:p-4 flex items-center gap-2.5 lg:gap-3 z-20 border border-gray-100 cursor-default"
            >
              <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#fff8e6] rounded-xl flex items-center justify-center shrink-0">
                <Star className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500 fill-amber-500" />
              </div>
              <div>
                <p className="text-[10px] lg:text-xs text-[#6b6b68] font-medium">Google Rating</p>
                <p className="text-sm lg:text-lg font-extrabold text-[#2d2d2b]">4.9 / 5.0</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Trust Badges Strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="mt-16 pt-10 border-t border-[#6ee7b7]/30"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#6b6b68] mb-6 text-center">
            Certified &amp; Trusted By
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {trustBadges.map((badge, i) => (
              <motion.div
                key={badge.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + i * 0.1 }}
                whileHover={{ scale: 1.06, y: -2 }}
                className="flex items-center gap-2.5 px-5 py-3 bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl shadow-sm cursor-default transition-all duration-200"
              >
                <badge.icon className="w-4 h-4 text-[#059669]" />
                <span className="text-sm font-semibold text-[#4a4a48]">{badge.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
