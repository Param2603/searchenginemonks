"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function ServicesHero() {
  return (
    <section className="relative pt-36 pb-20 sm:pb-28 overflow-hidden bg-[#f4f7f5]">
      {/* Decorative blobs */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-emerald-100 blur-3xl opacity-40" />
      <div className="absolute -bottom-40 -left-32 w-[400px] h-[400px] rounded-full bg-emerald-50 blur-3xl opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-emerald-50 to-transparent blur-3xl opacity-30" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 px-5 py-2 bg-white text-[#059669] text-sm font-bold rounded-full mb-8 tracking-widest uppercase shadow-sm border border-emerald-100">
            <Sparkles className="w-4 h-4" />
            What We Do
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-[#1e293b] tracking-tight mb-6 leading-[1.1]">
            Digital Marketing Services{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#10b981]">
              That Drive Growth
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed max-w-3xl mx-auto mb-10">
            From custom websites to AI-powered automation, we offer a complete
            suite of services designed to help Canadian businesses attract more
            customers, generate more leads, and grow faster online.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              Get a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="#all-services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white border-2 border-gray-200 text-[#2d2d2b] font-bold rounded-xl hover:border-emerald-300 transition-all duration-300 text-base hover:-translate-y-0.5"
            >
              Browse All Services
            </a>
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { value: "8+", label: "Core Services" },
            { value: "200+", label: "Projects Delivered" },
            { value: "98%", label: "Client Retention" },
            { value: "4.9★", label: "Average Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl px-4 py-5 border border-gray-100 shadow-sm"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-[#1e293b]">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-[#6b7280] mt-1 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
