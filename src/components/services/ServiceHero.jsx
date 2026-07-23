"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function ServiceHero({ service, icon }) {
  const { theme, eyebrow, h1, lede, heroStats } = service;

  return (
    <section
      id="service-hero"
      className="relative pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#f4f7f5]"
      aria-label={`${service.title} hero`}
    >
      {/* Soft background accents in the service's own color */}
      <div className={`absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-40 ${theme.soft}`} />
      <div className="absolute -bottom-32 -left-24 w-80 h-80 rounded-full blur-3xl opacity-30 bg-[#a7f3d0]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <span className={`inline-flex items-center gap-2 px-4 py-1.5 text-sm font-bold rounded-full mb-6 uppercase tracking-wide ${theme.chip}`}>
              {eyebrow}
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d2d2b] leading-[1.15] tracking-tight mb-6">
              {h1}
            </h1>

            <p className="text-base sm:text-lg text-[#4a4a48] leading-relaxed mb-8 max-w-xl">
              {lede}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="/#contact"
                className={`group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-base ${theme.solid} ${theme.solidHover} ${theme.ring}`}
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <a
                href="#process"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-[#2d2d2b] font-bold rounded-xl hover:border-gray-300 transition-all duration-300 text-base hover:-translate-y-0.5"
              >
                See how it works
              </a>
            </div>

            <div className="flex flex-wrap gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col justify-center bg-white rounded-xl px-4 py-3 border border-gray-100 shadow-sm"
                >
                  <p className="text-xl font-extrabold text-[#2d2d2b] leading-none">{stat.value}</p>
                  <p className="text-xs text-[#6b6b68] mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="flex justify-center items-center relative"
          >
            <div className={`absolute w-72 h-72 sm:w-80 sm:h-80 rounded-full ${theme.soft} blur-2xl opacity-70`} />
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-[2.5rem] bg-white shadow-xl border border-gray-100 flex items-center justify-center">
              <div className={`w-28 h-28 sm:w-32 sm:h-32 rounded-3xl flex items-center justify-center ${theme.iconBg}`}>
                {icon}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
