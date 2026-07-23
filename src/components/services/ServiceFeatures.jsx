"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Sparkles, Rocket, Target, Star, Layers, Activity } from "lucide-react";

const featureIcons = [Zap, Shield, Sparkles, Rocket, Target, Star, Layers, Activity];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.6, ease: "easeOut" },
  }),
};

export default function ServiceFeatures({ service }) {
  const { theme, features } = service;

  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden" aria-labelledby="features-heading">
      {/* Decorative subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-bold rounded-full mb-6 uppercase tracking-widest shadow-sm border ${theme.border} ${theme.chip}`}>
            What&apos;s Included
          </span>
          <h2 id="features-heading" className="text-4xl sm:text-5xl font-extrabold text-[#1e293b] tracking-tight mb-6 leading-tight">
            Everything this service covers
          </h2>
          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
            No half-measures — every piece of the service that moves the needle for your business.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => {
            const Icon = featureIcons[i % featureIcons.length];
            return (
              <motion.div
                key={feature.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -8, scale: 1.02 }}
                className={`group relative flex flex-col bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 hover:border-transparent transition-all duration-500 overflow-hidden z-10 h-full`}
              >
                {/* Expandable blob for hover/after effect */}
                <div className={`absolute -right-8 -top-8 w-40 h-40 rounded-full ${theme.soft} opacity-40 group-hover:scale-[3.5] transition-transform duration-700 ease-out -z-10`} />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px] -z-10" />

                <motion.div 
                  className={`relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden ${theme.iconBg}`}
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className={`relative w-7 h-7 ${theme.iconText}`} />
                </motion.div>
                
                <h3 className={`text-xl font-bold text-[#1e293b] mb-4 group-hover:${theme.heading} transition-colors duration-300`}>
                  {feature.title}
                </h3>
                
                <p className="text-[15px] text-[#475569] leading-relaxed flex-grow">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
