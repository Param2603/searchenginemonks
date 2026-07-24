"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { portfolio as projects } from "@/constants/portfolioData";

function ParallaxCard({ project, index }) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ delay: index * 0.07, duration: 0.5, ease: "easeOut" }}
        style={{ rotateX, rotateY }}
        className="h-full"
      >
        <Link
          href={`/portfolio/${project.slug}`}
          className={`group relative flex flex-col h-full bg-white rounded-4xl overflow-hidden shadow-xl shadow-gray-900/5 border border-transparent ${project.borderHover} transition-all duration-500 z-10`}
        >
          {/* Decorative blob expanding on hover */}
          <div
            className={`absolute -right-6 -top-6 w-32 h-32 rounded-full ${project.bg} opacity-50 group-hover:opacity-100 group-hover:scale-[8] transition-all duration-700 ease-out -z-10`}
          />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] -z-10" />

          {/* Card Visual Header */}
          <div
            className="relative h-56 bg-cover bg-center p-6 flex flex-col justify-between overflow-hidden rounded-t-4xl m-2"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300 rounded-t-3xl" />

            <span className="self-start px-3 py-1 bg-white/95 text-sage-700 text-xs font-bold rounded-full z-10 shadow-sm backdrop-blur-sm">
              {project.category}
            </span>

            <div className="flex items-end justify-between z-10">
              <div className="self-end bg-white rounded-xl shadow-lg px-4 py-2">
                <p className="text-base font-extrabold text-[#1e293b]">{project.stat}</p>
              </div>
              <div className="w-10 h-10 bg-white/95 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-md group-hover:scale-110">
                <ArrowUpRight className="w-5 h-5 text-sage-600 group-hover:rotate-12 transition-transform" />
              </div>
            </div>
          </div>

          {/* Card Body */}
          <div className="p-6 flex-1 flex flex-col z-10 relative bg-transparent">
            <h3 className="text-xl font-bold text-[#1e293b] mb-3 group-hover:text-sage-700 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-[15px] text-[#475569] leading-relaxed mb-6 flex-1">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 ${project.bg} text-gray-700 text-xs font-semibold rounded-md shadow-sm`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-24 sm:py-32 bg-white relative overflow-hidden"
      aria-labelledby="portfolio-heading"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-sage-200 to-transparent opacity-50" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-sage-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-sage-50 text-sage-600 text-sm font-bold rounded-full mb-6 tracking-widest uppercase shadow-sm border border-sage-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Our Portfolio
          </span>
          <h2
            id="portfolio-heading"
            className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e293b] tracking-tight mb-6 leading-tight"
          >
            Real Results for{" "}
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-sage-600 to-[#10b981]">
              Real Businesses
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
            Explore our latest projects and see how we've helped businesses across Canada
            achieve remarkable digital growth with beautiful design and strategic marketing.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, i) => (
            <ParallaxCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
