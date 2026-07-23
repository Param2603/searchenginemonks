"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

export default function ServiceFAQ({ service }) {
  const { theme, faqs } = service;
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 sm:py-28 bg-[#f4f7f5]" aria-labelledby="service-faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className={`inline-block px-4 py-1.5 text-sm font-bold rounded-full mb-4 uppercase tracking-wide ${theme.chip}`}>
            FAQ
          </span>
          <h2 id="service-faq-heading" className="text-3xl sm:text-4xl font-extrabold text-[#2d3748] tracking-tight mb-4">
            Common questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.4 }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 rounded-2xl text-left transition-all duration-300 border ${
                    isOpen ? `${theme.soft} ${theme.border} shadow-md` : "bg-white border-gray-100 hover:border-gray-200 shadow-sm"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`service-faq-answer-${i}`}
                >
                  <span className={`text-base font-bold leading-snug transition-colors duration-200 ${isOpen ? theme.heading : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? `${theme.solid} text-white` : `${theme.iconBg} ${theme.iconText}`}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`service-faq-answer-${i}`}
                      role="region"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-3 text-[15px] text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
