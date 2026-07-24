"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Users, Lightbulb, Target, Rocket } from "lucide-react";

const values = [
  { title: "Innovation First", description: "We constantly explore new technologies and AI-driven strategies to keep our clients ahead of the curve.", icon: Lightbulb, bg: "bg-emerald-100", borderHover: "hover:border-emerald-200", color: "text-emerald-600" },
  { title: "Data-Driven Decisions", description: "Every campaign and design choice is backed by solid data and analytics to ensure maximum ROI.", icon: Target, bg: "bg-blue-50", borderHover: "hover:border-blue-200", color: "text-blue-600" },
  { title: "Client Success", description: "Your growth is our growth. We build long-term partnerships focused on tangible, real-world results.", icon: Users, bg: "bg-orange-50", borderHover: "hover:border-orange-200", color: "text-orange-600" },
  { title: "Rapid Execution", description: "We don't just talk; we deliver. Our agile workflow ensures high-quality projects are launched fast.", icon: Rocket, bg: "bg-violet-50", borderHover: "hover:border-violet-200", color: "text-violet-600" },
];

function ParallaxValueCard({ item, index }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
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
        transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
        style={{
          rotateX,
          rotateY,
        }}
        className="h-full cursor-pointer"
      >
        <div
          className={`group relative flex flex-col h-full bg-white rounded-3xl p-8 shadow-xl shadow-gray-900/5 border border-transparent ${item.borderHover} transition-all duration-500 overflow-hidden z-10`}
        >
          {/* Decorative blob expanding on hover (After Effect) */}
          <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full ${item.bg} opacity-50 group-hover:opacity-100 group-hover:scale-[6] transition-all duration-700 ease-out -z-10`} />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[2px] -z-10" />

          <motion.div
            className={`relative w-16 h-16 ${item.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden`}
            whileHover={{ rotate: [0, -10, 10, -5, 0] }}
            transition={{ duration: 0.6 }}
          >
            <item.icon className={`relative w-8 h-8 ${item.color}`} />
          </motion.div>
          
          <h3 
            className="text-2xl font-bold text-[#1e293b] mb-4 group-hover:text-[#047857] transition-colors duration-300"
          >
            {item.title}
          </h3>
          
          <p 
            className="text-base text-[#475569] leading-relaxed flex-1"
          >
            {item.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

export default function AboutUs() {
  return (
    <section className="pt-32 pb-24 sm:pt-40 sm:pb-32 bg-sage-50 relative overflow-hidden" aria-labelledby="about-heading">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-emerald-200 to-transparent opacity-50" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro Section */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 sm:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-sage-600 text-sm font-bold rounded-full mb-6 tracking-widest uppercase shadow-sm border border-emerald-100">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Who We Are
            </span>
            <h1 id="about-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e293b] tracking-tight mb-6 leading-tight">
              Driven by Passion, <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-sage-600 to-[#10b981]">Powered by Data</span>
            </h1>
            <p className="text-lg sm:text-xl text-[#475569] leading-relaxed mb-8">
              At Search Engine Monks, we believe that every business deserves an outstanding digital presence. 
              We blend creative design with analytical precision to craft strategies that don't just look beautiful, 
              but perform remarkably well. Our mission is to elevate Canadian businesses to new heights online.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold text-sage-600">50+</span>
                <span className="text-sm font-semibold text-[#475569] uppercase tracking-wide mt-1">Projects Delivered</span>
              </div>
              <div className="w-px bg-emerald-200 hidden sm:block"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-extrabold text-sage-600">5x</span>
                <span className="text-sm font-semibold text-[#475569] uppercase tracking-wide mt-1">Average ROI</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-4xl overflow-hidden shadow-2xl border-4 border-white">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Our Team Collaboration" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none"></div>
            </div>
            {/* Floating Element */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-emerald-100"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center">
                  <Users className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1e293b]">Dedicated Team</p>
                  <p className="text-xs text-[#475569]">Always at your service</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1e293b] tracking-tight mb-4">
            Our Core <span className="text-sage-600">Values</span>
          </h2>
          <p className="text-lg text-[#475569]">
            The principles that guide our work, our culture, and our partnerships.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {values.map((item, i) => (
            <ParallaxValueCard key={item.title} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
