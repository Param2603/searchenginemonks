"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/service-data";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: "easeOut" },
  }),
};

export default function ServicesGrid() {
  return (
    <section
      id="all-services"
      className="py-20 sm:py-28 bg-[#f4f7f5] relative overflow-hidden"
      aria-labelledby="all-services-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-50" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-25" />
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-40" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#059669] text-sm font-bold rounded-full mb-6 tracking-widest uppercase shadow-sm border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            All Services
          </span>
          <h2
            id="all-services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#1e293b] tracking-tight mb-5 leading-tight"
          >
            Everything You Need to{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#10b981]">
              Succeed Online
            </span>
          </h2>
          <p className="text-base sm:text-lg text-[#475569] leading-relaxed">
            Click on any service to learn more about how we can help your
            business grow.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 sm:gap-8">
          {servicesData.map((service, i) => {
            const Icon = service.icon;
            const theme = service.theme;
            return (
              <motion.div
                key={service.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ y: -6, scale: 1.01 }}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className={`group relative flex flex-col sm:flex-row h-full bg-white rounded-[2rem] p-7 sm:p-8 shadow-xl shadow-gray-900/5 border border-transparent ${theme.borderHover} transition-all duration-500 overflow-hidden`}
                >
                  {/* Background blob on hover */}
                  <div
                    className={`absolute -right-10 -top-10 w-40 h-40 rounded-full ${theme.soft} opacity-40 group-hover:opacity-100 group-hover:scale-[5] transition-all duration-700 ease-out -z-[1]`}
                  />

                  {/* Icon */}
                  <div
                    className={`relative w-16 h-16 ${theme.iconBg} rounded-2xl flex items-center justify-center shrink-0 mb-5 sm:mb-0 sm:mr-6 shadow-sm`}
                  >
                    <Icon
                      className={`w-8 h-8 ${theme.iconText}`}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative flex-1 min-w-0">
                    <h3
                      className={`text-xl font-bold text-[#1e293b] mb-2 group-hover:${theme.heading} transition-colors duration-300`}
                    >
                      {service.title}
                    </h3>
                    <p className="text-[15px] text-[#475569] leading-relaxed mb-4 line-clamp-2">
                      {service.lede}
                    </p>

                    {/* Feature tags */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {service.features.slice(0, 3).map((f) => (
                        <span
                          key={f.title}
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${theme.chip}`}
                        >
                          {f.title}
                        </span>
                      ))}
                    </div>

                    <div
                      className={`inline-flex items-center gap-2 text-sm font-bold ${theme.heading} transition-colors duration-300`}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
