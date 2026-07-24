"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail, ExternalLink } from "lucide-react";

const teamMembers = [
  {
    id: 1,
    name: "David Chen",
    role: "Founder & CEO",
    bio: "With over 15 years in digital marketing, David leads the vision and strategy at Search Engine Monks.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Head of SEO",
    bio: "Sarah is a technical SEO wizard who has helped hundreds of local businesses dominate search results.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    name: "Alex Morgan",
    role: "AI Integration Lead",
    bio: "Alex bridges the gap between marketing and technology, building AI-driven solutions for our clients.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    name: "Emily Taylor",
    role: "Creative Director",
    bio: "Emily leads our design team, ensuring every brand we touch looks premium, modern, and trustworthy.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    name: "Marcus Johnson",
    role: "Paid Media Specialist",
    bio: "Data-driven and analytical, Marcus maximizes ROI across Google and Meta ad platforms.",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    name: "Priya Patel",
    role: "Content Strategist",
    bio: "Priya crafts compelling narratives that engage audiences and drive organic traffic.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function OurTeam() {
  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-16 lg:pt-40 lg:pb-24">
        {/* Decorative top background elements */}
        <div className="absolute inset-0 bg-[#0A192F] z-0 clip-path-polygon-[0_0,100%_0,100%_80%,0_100%]" style={{ clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)" }} />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#059669]/20 rounded-full blur-[100px] z-0" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-[#34d399]/20 rounded-full blur-[120px] z-0" />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Meet the <span className="text-[#34d399]">Monks</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/80 leading-relaxed mb-10">
              We are a team of digital strategists, creatives, and technologists united by one goal: helping your business dominate online.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-32 mt-16 lg:mt-24">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={itemVariants}
              className="group relative"
            >
              {/* After effect / Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#34d399] to-[#059669] rounded-2xl opacity-0 group-hover:opacity-40 blur-xl transition-all duration-700" />
              
              <div className="relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm transition-all duration-700 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:shadow-[#059669]/30 h-full flex flex-col z-10">
                
                {/* Image Container */}
                <div className="relative h-72 md:h-80 overflow-hidden bg-muted">
                  <motion.img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
                  />
                  
                  {/* Social links overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-8 gap-4">
                    <a href="#" className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-[#059669] hover:text-white transition-all duration-300 transform translate-y-10 group-hover:translate-y-0 shadow-lg hover:scale-110">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-[#059669] hover:text-white transition-all duration-300 transform translate-y-10 group-hover:translate-y-0 delay-75 shadow-lg hover:scale-110">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href="#" className="w-10 h-10 rounded-full bg-white/90 text-black flex items-center justify-center hover:bg-[#059669] hover:text-white transition-all duration-300 transform translate-y-10 group-hover:translate-y-0 delay-150 shadow-lg hover:scale-110">
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col items-center text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 group-hover:text-[#059669] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-[#059669] font-medium text-sm uppercase tracking-widest mb-4">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>

                {/* Bottom colored border on hover */}
                <div className="absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r from-[#34d399] to-[#059669] transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-out" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Join CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-32 relative bg-[#064e3b] rounded-3xl p-10 md:p-16 text-center overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent blur-2xl" />
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6 relative z-10">
            Want to join our team?
          </h2>
          <p className="text-emerald-100/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 relative z-10">
            We are always looking for talented individuals to join our mission of transforming digital landscapes.
          </p>
          <a
            href="/careers"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-[#064e3b] font-extrabold rounded-xl hover:bg-[#e2e8f0] transition-all duration-300 shadow-xl hover:-translate-y-0.5 text-base relative z-10"
          >
            View Open Positions
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </div>
  );
}
