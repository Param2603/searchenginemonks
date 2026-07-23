"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What makes Search Engine Monks different from other SEO agencies?",
    answer: "We combine AI-powered tools with battle-tested SEO strategies tailored specifically for the Canadian market. Unlike generic agencies, we assign a dedicated account manager to every client, offer transparent weekly reporting, and tie every strategy to measurable business outcomes — not vanity metrics.",
  },
  {
    question: "How long does it take to see results from SEO?",
    answer: "SEO is a long-term investment. Most clients begin seeing noticeable improvements in organic rankings and traffic within 3–6 months. Significant results — such as first-page rankings for competitive keywords — typically materialize within 6–12 months, depending on your industry and current website authority.",
  },
  {
    question: "Do you offer services for small businesses and startups?",
    answer: "Absolutely. We have flexible, budget-conscious packages designed specifically for small businesses and startups across Canada. Our goal is to deliver enterprise-grade digital marketing results at pricing that makes sense for growing companies.",
  },
  {
    question: "Can you manage both Google Ads and Meta Ads simultaneously?",
    answer: "Yes! We offer integrated multi-channel advertising strategies that coordinate your Google Ads and Meta Ads campaigns for maximum reach and consistent messaging. Our certified specialists ensure every dollar of your ad spend is optimized for conversions.",
  },
  {
    question: "What industries do you specialize in?",
    answer: "We have experience across a wide range of industries including e-commerce, real estate, healthcare, legal, SaaS, retail, hospitality, and professional services. Our team researches your specific industry landscape before crafting any strategy.",
  },
  {
    question: "How do you measure and report on campaign performance?",
    answer: "Every client receives a dedicated reporting dashboard with real-time access to key metrics. We provide weekly email summaries and monthly in-depth reports covering organic traffic, keyword rankings, ad performance, leads generated, and ROI. We schedule regular review calls to discuss results and next steps.",
  },
  {
    question: "Do you offer website design along with digital marketing?",
    answer: "Yes — we are a full-service digital agency. From custom website design and development to SEO, paid advertising, branding, and content creation, we handle every aspect of your digital presence under one roof.",
  },
  {
    question: "What is the minimum contract length?",
    answer: "We offer both monthly rolling contracts and longer-term packages. We believe in earning your business every month, so we don't lock clients into lengthy contracts. However, longer commitments allow us to execute more comprehensive strategies that deliver even stronger results.",
  },
];

export default function FAQAccordion({ 
  customFaqs, 
  title = "Frequently Asked", 
  highlight = "Questions",
  subtitle = "Everything you need to know about working with Search Engine Monks. Can't find your answer?"
}) {
  const [openIndex, setOpenIndex] = useState(null);
  const displayFaqs = customFaqs || faqs;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#f4f7f5]" aria-labelledby="faq-heading">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d1fae5] text-[#047857] text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
            FAQ
          </span>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d3748] tracking-tight mb-4">
            {title} <span className="text-[#059669]">{highlight}</span>
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed max-w-2xl mx-auto">
            {subtitle}{" "}
            <a href="#contact" className="text-[#059669] font-semibold hover:underline transition-all">Contact us</a>.
          </p>
        </motion.div>

        <div className="space-y-3">
          {displayFaqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
              >
                <motion.button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  whileHover={{ backgroundColor: isOpen ? "rgba(167,243,208,0.6)" : "rgba(209,250,229,0.7)" }}
                  className={`w-full flex items-center justify-between gap-4 px-6 py-5 rounded-2xl text-left transition-all duration-300 border ${
                    isOpen
                      ? "bg-[#a7f3d0]/60 border-[#6ee7b7] shadow-md"
                      : "bg-[#f4f7f5] border-[#d1fae5] hover:border-[#6ee7b7] shadow-sm"
                  }`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${i}`}
                  id={`faq-question-${i}`}
                >
                  <span className={`text-base font-bold leading-snug transition-colors duration-200 ${isOpen ? "text-[#059669]" : "text-gray-800"}`}>
                    {faq.question}
                  </span>
                  <span className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? "bg-[#059669] text-white rotate-0" : "bg-[#d1fae5] text-[#059669]"}`}>
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${i}`}
                      role="region"
                      aria-labelledby={`faq-question-${i}`}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-3 text-[15px] text-gray-600 leading-relaxed bg-[#f4f7f5]/50 rounded-b-2xl -mt-2 border-l border-r border-b border-[#6ee7b7]/50">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-14 text-center bg-[#059669] rounded-3xl p-10 shadow-xl"
        >
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">
            Still have questions?
          </h3>
          <p className="text-[#a7f3d0] mb-7 text-base">
            Our team is here to help. Book a free 30-minute consultation with one of our digital marketing experts.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#f4f7f5] text-[#059669] font-bold rounded-xl hover:bg-[#f4f7f5] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Book Free Consultation
          </a>
        </motion.div>
      </div>
    </section>
  );
}
