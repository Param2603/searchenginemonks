"use client";

import { motion } from "framer-motion";

export default function ServiceProcess({ service }) {
  const { theme, process } = service;

  return (
    <section id="process" className="py-20 sm:py-28 bg-[#f4f7f5]" aria-labelledby="process-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full mb-4 uppercase tracking-wide ${theme.chip}`}>
            Our Process
          </span>
          <h2 id="process-heading" className="text-3xl sm:text-4xl font-extrabold text-[#2d3748] tracking-tight mb-4">
            How we get you there
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            A clear, structured process so you always know what&apos;s happening and when.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <span className={`inline-flex items-center justify-center w-9 h-9 rounded-lg font-heading font-bold text-sm mb-4 ${theme.iconBg} ${theme.iconText}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-base font-bold text-[#2d3748] mb-2">{step.title}</h3>
              <p className="text-sm text-[#4a5568] leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
