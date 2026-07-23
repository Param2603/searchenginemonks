"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Search, Share2, Megaphone, Target, Palette, Brain, FileText } from "lucide-react";

const services = [
  { icon: Globe, title: "Website Design & Development", description: "Custom, responsive websites built to convert visitors into customers. Modern tech stack, blazing-fast performance, and stunning UI/UX design that represents your brand.", color: "text-emerald-600", bg: "bg-emerald-100", hoverText: "group-hover:text-emerald-600", exploreText: "text-emerald-600 group-hover:text-emerald-700", borderHover: "hover:border-emerald-200", href: "/services/website-design-development" },
  { icon: Search, title: "SEO Services", description: "Data-driven SEO strategies to boost your organic rankings on Google. Technical SEO, on-page optimization, link building, and local SEO for Canadian businesses.", color: "text-orange-600", bg: "bg-orange-50", hoverText: "group-hover:text-orange-600", exploreText: "text-orange-600 group-hover:text-orange-700", borderHover: "hover:border-orange-200", href: "/services/seo-services" },
  { icon: Share2, title: "Social Media Marketing", description: "Engage your audience and build brand awareness across all major social platforms. Content strategy, community management, and paid social campaigns that deliver results.", color: "text-pink-600", bg: "bg-pink-50", hoverText: "group-hover:text-pink-600", exploreText: "text-pink-600 group-hover:text-pink-700", borderHover: "hover:border-pink-200", href: "/services/social-media-marketing" },
  { icon: Megaphone, title: "Google Ads", description: "Maximize your ROI with expertly managed Google Ads campaigns. Search, display, shopping, and YouTube ads optimized for conversions and lead generation.", color: "text-blue-600", bg: "bg-blue-50", hoverText: "group-hover:text-blue-600", exploreText: "text-blue-600 group-hover:text-blue-700", borderHover: "hover:border-blue-200", href: "/services/google-ads" },
  { icon: Target, title: "Meta Ads", description: "Reach your ideal customers on Facebook and Instagram. Advanced targeting, creative ad design, retargeting funnels, and continuous optimization for maximum impact.", color: "text-violet-600", bg: "bg-violet-50", hoverText: "group-hover:text-violet-600", exploreText: "text-violet-600 group-hover:text-violet-700", borderHover: "hover:border-violet-200", href: "/services/meta-ads" },
  { icon: Palette, title: "Branding & Graphic Design", description: "Build a memorable brand identity that sets you apart. Logo design, brand guidelines, marketing collateral, and visual assets that communicate your unique value.", color: "text-amber-600", bg: "bg-amber-50", hoverText: "group-hover:text-amber-600", exploreText: "text-amber-600 group-hover:text-amber-700", borderHover: "hover:border-amber-200", href: "/services/branding-graphic-design" },
  { icon: Brain, title: "AI Marketing Solutions", description: "Leverage the power of artificial intelligence to automate and optimize your marketing. AI chatbots, predictive analytics, content generation, and smart automation.", color: "text-cyan-600", bg: "bg-cyan-50", hoverText: "group-hover:text-cyan-600", exploreText: "text-cyan-600 group-hover:text-cyan-700", borderHover: "hover:border-cyan-200", href: "/services/ai-marketing-solutions" },
  { icon: FileText, title: "Content Creation", description: "Compelling content that educates, engages, and converts. Blog posts, website copy, video scripts, email campaigns, and social media content crafted by experts.", color: "text-red-500", bg: "bg-red-50", hoverText: "group-hover:text-red-500", exploreText: "text-red-500 group-hover:text-red-600", borderHover: "hover:border-red-200", href: "/services/content-creation" },
];

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.07, duration: 0.5, ease: "easeOut" } }),
};

export default function Services() {
  return (
    <section id="services" className="py-24 sm:py-32 bg-[#f4f7f5] relative overflow-hidden" aria-labelledby="services-heading">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent opacity-50" />
      <div className="absolute -left-40 top-40 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-30" />
      <div className="absolute -right-40 bottom-20 w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#059669] text-sm font-bold rounded-full mb-6 tracking-widest uppercase shadow-sm border border-emerald-100">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Our Services
          </span>
          <h2 id="services-heading" className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1e293b] tracking-tight mb-6 leading-tight">
            Everything You Need to <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#10b981]">Dominate Online</span>
          </h2>
          <p className="text-lg sm:text-xl text-[#475569] leading-relaxed">
            From custom website design to AI-powered automation, we provide end-to-end digital solutions that drive real, measurable business growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="h-full"
            >
              <Link
                href={service.href}
                className={`group relative flex flex-col h-full bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-900/5 border border-transparent ${service.borderHover} transition-all duration-500 overflow-hidden z-10`}
              >
                {/* Decorative blob expanding on hover */}
                <div className={`absolute -right-6 -top-6 w-32 h-32 rounded-full ${service.bg} opacity-40 group-hover:scale-[3.5] transition-transform duration-700 ease-out -z-10`} />
                <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-[1px] -z-10" />

                <motion.div
                  className={`relative w-16 h-16 sm:w-14 sm:h-14 lg:w-16 lg:h-16 ${service.bg} rounded-2xl flex items-center justify-center mb-6 shadow-sm overflow-hidden`}
                  whileHover={{ rotate: [0, -10, 10, -5, 0] }}
                  transition={{ duration: 0.6 }}
                >
                  <service.icon className={`relative w-8 h-8 sm:w-7 sm:h-7 lg:w-8 lg:h-8 ${service.color}`} />
                </motion.div>
                
                <h3 className={`text-xl sm:text-lg lg:text-xl font-bold text-[#1e293b] mb-3 ${service.hoverText} transition-colors duration-300`}>
                  {service.title}
                </h3>
                
                <p className="text-[15px] text-[#475569] leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>
                
                <div className={`mt-auto flex items-center gap-2 text-sm font-bold ${service.exploreText} transition-colors duration-300`}>
                  <span>Explore Service</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
