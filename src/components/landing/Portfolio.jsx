"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const projects = [
  { title: "FreshBite E-Commerce Redesign", category: "Website Design & SEO", description: "Complete e-commerce overhaul resulting in 180% increase in online sales and 45% improvement in organic traffic within 6 months.", tags: ["Shopify", "SEO", "UI/UX"], image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=600&q=80", stat: "+180% Sales" },
  { title: "UrbanNest Real Estate Platform", category: "Web Development & Branding", description: "Modern property listing platform with AI-powered search, generating 3x more qualified leads for a Toronto-based real estate firm.", tags: ["Next.js", "AI", "Branding"], image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80", stat: "3x Leads" },
  { title: "HealthFirst Clinic Marketing", category: "Google Ads & SEO", description: "Comprehensive digital marketing strategy for a healthcare startup, achieving top-3 Google rankings for 15+ high-value keywords.", tags: ["Google Ads", "Local SEO", "Content"], image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=600&q=80", stat: "Top-3 Ranking" },
  { title: "StyleHub Fashion Brand", category: "Social Media & Meta Ads", description: "Full-funnel social media campaign across Instagram and Facebook, driving 250% increase in brand awareness and 120% ROAS.", tags: ["Meta Ads", "Content", "Strategy"], image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=600&q=80", stat: "120% ROAS" },
  { title: "TechFlow SaaS Landing Page", category: "Website Design & Content", description: "High-converting landing page for a B2B SaaS startup, improving trial signups by 220% with A/B tested copy and design.", tags: ["React", "Copywriting", "CRO"], image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80", stat: "+220% Signups" },
  { title: "GreenLeaf Cannabis Retail", category: "Full Digital Marketing", description: "End-to-end digital presence for a Canadian cannabis retailer — from branding to Google Ads, driving 400% revenue growth in one year.", tags: ["Branding", "Ads", "SEO"], image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=600&q=80", stat: "+400% Revenue" },
];

function ParallaxCard({ project, index }) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out the motion
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Rotate based on mouse position
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["12deg", "-12deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-12deg", "12deg"]);

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
        viewport={{ once: true }}
        transition={{ delay: index * 0.1, duration: 0.6 }}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="h-full cursor-pointer"
      >
        <div
          style={{ transform: "translateZ(30px)", transformStyle: "preserve-3d" }}
          className="group bg-[#f4f7f5] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl border border-[#d1fae5] hover:border-[#6ee7b7] transition-all duration-300 h-full flex flex-col relative"
        >
          {/* Card Visual Header */}
          <div 
            className="relative h-56 bg-cover bg-center p-6 flex flex-col justify-between overflow-hidden"
            style={{ backgroundImage: `url(${project.image})`, transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
            
            <motion.span 
              style={{ transform: "translateZ(50px)" }}
              className="self-start px-3 py-1 bg-[#f4f7f5]/95 text-[#059669] text-xs font-bold rounded-full z-10 shadow-sm"
            >
              {project.category}
            </motion.span>
            
            <div className="flex items-end justify-between z-10" style={{ transformStyle: "preserve-3d" }}>
              <motion.div 
                style={{ transform: "translateZ(60px)" }} 
                className="self-end bg-[#f4f7f5] rounded-xl shadow-lg px-4 py-2"
              >
                <p className="text-base font-extrabold text-[#2d3748]">{project.stat}</p>
              </motion.div>
              <motion.div 
                style={{ transform: "translateZ(40px)" }} 
                className="w-8 h-8 bg-[#f4f7f5]/95 rounded-lg flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200 shadow-md"
              >
                <ArrowUpRight className="w-4 h-4 text-[#059669]" />
              </motion.div>
            </div>
          </div>

          {/* Card Body */}
          <motion.div 
            style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} 
            className="p-6 flex-1 flex flex-col z-10 relative bg-[#f4f7f5]"
          >
            <h3 className="text-base font-bold text-[#2d3748] mb-2 group-hover:text-[#059669] transition-colors duration-200">
              {project.title}
            </h3>
            <p className="text-sm text-[#4a5568] leading-relaxed mb-4 flex-1">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="px-2.5 py-1 bg-[#d1fae5] text-[#047857] text-xs font-semibold rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-[#e6f2ec]" aria-labelledby="portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d1fae5] text-[#047857] text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
            Our Portfolio
          </span>
          <h2 id="portfolio-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d3748] tracking-tight mb-4">
            Real Results for{" "}
            <span className="text-[#059669]">Real Businesses</span>
          </h2>
          <p className="text-lg text-[#4a5568] leading-relaxed">
            Explore our latest projects and see how we've helped businesses across Canada achieve remarkable digital growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ParallaxCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
