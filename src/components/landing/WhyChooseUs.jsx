"use client";

import { motion } from "framer-motion";
import { BarChart3, Lightbulb, DollarSign, Brain, HeadphonesIcon, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: BarChart3, title: "Results-Driven Approach", description: "Every strategy we create is tied to measurable KPIs. We track, analyze, and optimize continuously to ensure your investment delivers maximum return. No vanity metrics — just real business outcomes." },
  { icon: Lightbulb, title: "Creative Team", description: "Our team of designers, developers, and marketers bring diverse expertise and fresh perspectives. We combine creativity with data-driven insights to produce campaigns that stand out and convert." },
  { icon: DollarSign, title: "Affordable Solutions", description: "Premium digital marketing does not have to break the bank. We offer flexible pricing packages designed for small businesses, startups, and growing brands across Canada." },
  { icon: Brain, title: "AI-Powered Marketing", description: "We stay ahead of the curve by integrating cutting-edge AI tools into our workflows. From automated content creation to predictive analytics, we leverage technology to give you a competitive edge." },
  { icon: HeadphonesIcon, title: "Dedicated Support", description: "You're never left in the dark. Every client gets a dedicated account manager, weekly progress reports, and 24/7 access to our support team. We're your growth partners." },
  { icon: ShieldCheck, title: "Proven Track Record", description: "With 200+ projects delivered and a 98% client retention rate, our results speak for themselves. We've helped businesses across Canada grow their online presence and revenue." },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#f4f7f5]" aria-labelledby="why-us-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left sticky side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-28"
          >
            <span className="inline-block px-4 py-1.5 bg-[#d1fae5] text-[#047857] text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2 id="why-us-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d3748] tracking-tight mb-6">
              Why Businesses Trust{" "}
              <span className="text-[#059669]">Search Engine Monks</span>
            </h2>
            <p className="text-lg text-[#4a5568] leading-relaxed mb-8">
              We don't just deliver services — we deliver growth. Our holistic approach combines cutting-edge technology with proven marketing strategies to help your business thrive in the digital landscape.
            </p>
            <div className="flex items-center gap-6">
              {[
                { value: "98%", label: "Client Retention" },
                { value: "5+", label: "Years Experience" },
                { value: "24/7", label: "Support" },
              ].map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-12 bg-gray-200" />}
                  <motion.div
                    className="text-center"
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <p className="text-3xl font-extrabold text-[#059669]">{stat.value}</p>
                    <p className="text-sm text-[#4a5568] mt-1">{stat.label}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right cards */}
          <div className="space-y-5">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ x: 6, boxShadow: "0 8px 30px rgba(5,150,105,0.12)" }}
                className="group flex gap-5 p-6 rounded-2xl border border-[#d1fae5] hover:border-[#6ee7b7] transition-all duration-300 cursor-default"
              >
                <div className="shrink-0 w-12 h-12 bg-[#d1fae5] rounded-xl flex items-center justify-center group-hover:bg-[#a7f3d0] transition-colors duration-200">
                  <reason.icon className="w-6 h-6 text-[#059669]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#2d3748] mb-1.5 group-hover:text-[#059669] transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
