"use client";

import { motion } from "framer-motion";

export default function ServiceStats({ service }) {
  const { theme, stats } = service;

  return (
    <section className="py-16 bg-white" aria-label="Key results">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 rounded-3xl p-10 border ${theme.border} ${theme.soft}`}>
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.4 }}
              className="text-center"
            >
              <p className={`text-2xl sm:text-3xl font-heading font-extrabold ${theme.heading}`}>{stat.value}</p>
              <p className="text-sm text-[#4a5568] mt-1">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
