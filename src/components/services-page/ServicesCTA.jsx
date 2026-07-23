"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function ServicesCTA() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center rounded-3xl p-10 sm:p-14 shadow-xl bg-gradient-to-br from-[#059669] to-[#047857] relative overflow-hidden"
        >
          {/* Subtle pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-60 h-60 bg-white rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full blur-3xl" />
          </div>

          <div className="relative">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mb-4">
              Not sure which service is right for you?
            </h2>
            <p className="text-white/85 mb-8 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Book a free 30-minute consultation. We&apos;ll review your current
              digital presence and recommend the services that will have the
              biggest impact on your business.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#059669] font-bold rounded-xl hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
