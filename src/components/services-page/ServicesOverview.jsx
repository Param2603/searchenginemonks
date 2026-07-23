"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Custom strategy for every client — no cookie-cutter plans",
  "Dedicated account manager with direct access",
  "Transparent monthly reporting in plain language",
  "Proven results across 200+ projects in Canada",
  "Full-service team — design, dev, ads, SEO, content under one roof",
  "AI-powered tools for smarter, faster campaigns",
];

export default function ServicesOverview() {
  return (
    <section className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-emerald-50 text-emerald-700 text-sm font-bold rounded-full mb-6 uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight mb-5 leading-tight">
              One agency.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#10b981]">
                Every digital channel covered.
              </span>
            </h2>
            <p className="text-[#475569] text-base sm:text-lg leading-relaxed mb-8">
              Instead of juggling multiple freelancers and agencies, work with a
              single team that handles everything from website design to ad
              campaigns, SEO to content — all working together toward one goal:
              growing your business.
            </p>
            <ul className="space-y-4">
              {benefits.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-[#374151] text-sm sm:text-base font-medium">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Right — visual card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-emerald-100 rounded-full blur-3xl opacity-40" />
            <div className="relative bg-gradient-to-br from-[#f4f7f5] to-white rounded-3xl p-8 sm:p-10 border border-gray-100 shadow-xl">
              <div className="space-y-5">
                {[
                  { label: "Organic Traffic Growth", value: "+320%", bar: "82%" },
                  { label: "Conversion Rate", value: "4.8%", bar: "68%" },
                  { label: "Lead Generation", value: "+250%", bar: "75%" },
                  { label: "ROI on Ad Spend", value: "5.2×", bar: "90%" },
                ].map((metric, i) => (
                  <motion.div
                    key={metric.label}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[#374151]">
                        {metric.label}
                      </span>
                      <span className="text-sm font-extrabold text-[#059669]">
                        {metric.value}
                      </span>
                    </div>
                    <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-[#059669] to-[#10b981] rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: metric.bar }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 + i * 0.15, ease: "easeOut" }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-[#9ca3af] mt-6 text-center">
                Average results across our client portfolio
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
