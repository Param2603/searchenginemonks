"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ServiceCTA({ service }) {
  const { theme, ctaTitle, ctaDesc } = service;

  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`text-center rounded-3xl p-10 sm:p-14 shadow-xl ${theme.solid}`}
        >
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">{ctaTitle}</h2>
          <p className="text-white/85 mb-8 text-base max-w-xl mx-auto">{ctaDesc}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#2d2d2b] font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="tel:+14165550199"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/40 text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300 text-base"
            >
              <Phone className="w-4 h-4" />
              +1 (416) 555-0199
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
