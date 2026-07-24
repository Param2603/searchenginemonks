"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase, MapPin, Clock, ArrowRight, CheckCircle2 } from "lucide-react";

const perks = [
  "Remote-first culture",
  "Competitive compensation",
  "Health & wellness benefits",
  "Continuous learning budget",
  "Flexible working hours",
  "Latest tech equipment"
];

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote (Canada)",
    type: "Full-time",
    description: "We are looking for an experienced developer with deep knowledge in Next.js, Node.js, and modern cloud architecture."
  },
  {
    id: 2,
    title: "Digital Marketing Strategist",
    department: "Marketing",
    location: "Toronto, ON",
    type: "Full-time",
    description: "Join our core team to design and execute high-performing SEO and paid media campaigns for top-tier clients."
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Contract",
    description: "Help us create stunning, conversion-focused websites and brand identities with a strong eye for aesthetics and usability."
  },
  {
    id: 4,
    title: "AI Solutions Architect",
    department: "Engineering",
    location: "Remote (US/Canada)",
    type: "Full-time",
    description: "Lead the integration of LLMs and AI automation tools into our internal workflows and client deliverables."
  }
];

export default function Careers() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 400]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Parallax Background */}
        <motion.div 
          style={{ y: yParallax }}
          className="absolute inset-0 z-0 bg-[#064e3b]"
        >
          <div className="absolute inset-0 bg-[#064e3b]/90 z-10 mix-blend-multiply" />
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Team working together" 
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-4 max-w-4xl mx-auto mt-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white backdrop-blur-md border border-white/20 font-medium text-sm mb-6">
              Join Our Team
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight drop-shadow-xl">
              Build the Future of <br className="hidden md:block"/> 
              <span className="text-[#34d399] drop-shadow-[0_0_20px_rgba(52,211,153,0.5)]">Digital Marketing</span>
            </h1>
            <p className="text-xl text-white/90 leading-relaxed font-light drop-shadow-md">
              We are on a mission to empower businesses with cutting-edge tech and brilliant design. Come do the best work of your life.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* Left Column: Perks & Culture */}
          <div className="lg:col-span-4 space-y-12">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold text-foreground mb-6">
                Why Work With Us?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                We believe in giving our team the autonomy, tools, and support they need to thrive. No micromanagement, just results.
              </p>
              
              <ul className="space-y-4">
                {perks.map((perk, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-foreground font-medium"
                  >
                    <CheckCircle2 className="w-5 h-5 text-[#059669] shrink-0" />
                    {perk}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Floating Visual Accent */}
            <div className="relative h-64 rounded-2xl overflow-hidden group hidden lg:block">
              <div className="absolute inset-0 bg-[#059669]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800" alt="Office Culture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            </div>
          </div>

          {/* Right Column: Open Positions */}
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-extrabold text-foreground mb-8">
                Open Positions
              </h2>
              
              <div className="space-y-6">
                {jobs.map((job, index) => (
                  <motion.div
                    key={job.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15 }}
                    whileHover={{ scale: 1.01 }}
                    className="group relative bg-card border border-border p-6 md:p-8 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-[#059669]/10 transition-all duration-300"
                  >
                    {/* Hover Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#34d399]/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:items-start justify-between gap-6">
                      <div className="space-y-4 flex-1">
                        <div>
                          <span className="text-[#059669] text-sm font-bold uppercase tracking-wider">
                            {job.department}
                          </span>
                          <h3 className="text-2xl font-bold text-foreground mt-1 group-hover:text-[#059669] transition-colors">
                            {job.title}
                          </h3>
                        </div>
                        
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Briefcase className="w-4 h-4" />
                            {job.type}
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            Full-time
                          </div>
                        </div>
                        
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>
                      </div>

                      <div className="shrink-0 pt-2">
                        <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground font-bold rounded-lg hover:bg-[#059669] hover:text-white transition-all duration-300 group/btn shadow-md hover:shadow-lg hover:-translate-y-0.5">
                          Apply Now
                          <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Global CSS for shimmer animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}} />
    </div>
  );
}
