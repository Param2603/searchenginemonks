"use client";

import { motion } from "framer-motion";

export default function ServiceProcess({ service }) {
  const { theme, process } = service;

  return (
    <section id="process" className="py-24 sm:py-32 bg-[#f4f7f5] relative overflow-hidden" aria-labelledby="process-heading">
      {/* Decorative subtle background elements */}
      <div className={`absolute -right-40 top-20 w-96 h-96 ${theme.soft} rounded-full blur-3xl opacity-50`} />
      <div className={`absolute -left-40 bottom-20 w-96 h-96 ${theme.soft} rounded-full blur-3xl opacity-40`} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full mb-6 uppercase tracking-widest shadow-sm border ${theme.border} ${theme.chip}`}>
            Our Process
          </span>
          <h2 id="process-heading" className="text-4xl sm:text-5xl font-extrabold text-[#1e293b] tracking-tight mb-6 leading-tight">
            How we get you there
          </h2>
          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
            A clear, structured process so you always know what&apos;s happening and when.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`group relative flex flex-col bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden z-10 h-full`}
            >
              {/* Expandable blob for hover/after effect originating from bottom-left */}
              <div className={`absolute -left-8 -bottom-8 w-40 h-40 rounded-full ${theme.soft} opacity-40 group-hover:scale-[3.5] transition-transform duration-700 ease-out -z-10`} />
              <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px] -z-10" />

              {/* Connector line for large screens */}
              {i < process.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-full w-full h-[2px] -ml-4 z-0">
                  <div className="w-full h-full bg-gradient-to-r from-gray-200 to-transparent" />
                </div>
              )}

              <motion.div 
                className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden z-10 ${theme.iconBg}`}
                whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                transition={{ duration: 0.6 }}
              >
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className={`relative font-heading font-extrabold text-lg ${theme.iconText}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
              </motion.div>
              
              <h3 className={`text-xl font-bold text-[#1e293b] mb-4 group-hover:${theme.heading} transition-colors duration-300 z-10`}>
                {step.title}
              </h3>
              
              <p className="text-[15px] text-[#475569] leading-relaxed flex-grow z-10">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
