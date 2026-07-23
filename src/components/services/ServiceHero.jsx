"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

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
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 sm:mb-12"
        >
          <Link
            href="/services"
            className={`group inline-flex items-center gap-2 text-sm font-bold transition-colors duration-200 ${theme.heading} hover:opacity-70`}
          >
            <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
            Back to Services
          </Link>
        </motion.div>

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
            className="flex justify-center items-center relative perspective-1000"
          >
            <div className={`absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full ${theme.soft} blur-3xl opacity-70 animate-pulse`} style={{ animationDuration: '4s' }} />
            
            <motion.div 
              className="relative w-full max-w-md aspect-square rounded-[2.5rem] bg-white shadow-2xl border border-gray-100 flex items-center justify-center overflow-visible z-10"
              whileHover={{ scale: 1.02, rotateY: 5, rotateX: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem]">
                {service.image ? (
                  <motion.img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                ) : (
                  <div className={`w-full h-full flex items-center justify-center ${theme.iconBg}`}>
                    {icon}
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent opacity-50" />
              </div>

              {/* Parallax Floating Icon */}
              <motion.div 
                className={`absolute -bottom-8 -right-8 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl flex items-center justify-center shadow-xl backdrop-blur-md bg-white/90 border border-white ${theme.iconText} z-20`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: [0, -15, 0], opacity: 1 }}
                transition={{ 
                  y: { repeat: Infinity, duration: 4, ease: "easeInOut" },
                  opacity: { delay: 0.5, duration: 0.5 }
                }}
              >
                {icon}
              </motion.div>

              {/* Decorative abstract shape */}
              <motion.div
                className={`absolute -top-6 -left-6 w-16 h-16 rounded-full blur-xl opacity-60 ${theme.solid} z-0`}
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
