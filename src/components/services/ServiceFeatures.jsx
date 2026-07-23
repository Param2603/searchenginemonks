"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ServiceFeatures({ service }) {
  const { theme, features } = service;

  return (
    <section className="py-20 sm:py-28 bg-white" aria-labelledby="features-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full mb-4 uppercase tracking-wide ${theme.chip}`}>
            What&apos;s Included
          </span>
          <h2 id="features-heading" className="text-3xl sm:text-4xl font-extrabold text-[#2d3748] tracking-tight mb-4">
            Everything this service covers
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            No half-measures — every piece of the service that moves the needle for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`group bg-[#f4f7f5] rounded-2xl p-6 shadow-sm border ${theme.border} ${theme.borderHover} transition-all duration-300`}
            >
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${theme.iconBg}`}>
                <CheckCircle2 className={`w-5 h-5 ${theme.iconText}`} />
              </div>
              <h3 className="text-base font-bold text-[#2d3748] mb-2">{feature.title}</h3>
              <p className="text-sm text-[#4a5568] leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
