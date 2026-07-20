"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Search,
  Share2,
  Megaphone,
  Target,
  Palette,
  Brain,
  FileText,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites built to convert visitors into customers. Modern tech stack, blazing-fast performance, and stunning UI/UX design that represents your brand.",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Search,
    title: "SEO Services",
    description:
      "Data-driven SEO strategies to boost your organic rankings on Google. Technical SEO, on-page optimization, link building, and local SEO for Canadian businesses.",
    color: "text-orange-600",
    bg: "bg-orange-50",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Engage your audience and build brand awareness across all major social platforms. Content strategy, community management, and paid social campaigns that deliver results.",
    color: "text-pink-600",
    bg: "bg-pink-50",
  },
  {
    icon: Megaphone,
    title: "Google Ads",
    description:
      "Maximize your ROI with expertly managed Google Ads campaigns. Search, display, shopping, and YouTube ads optimized for conversions and lead generation.",
    color: "text-green-600",
    bg: "bg-green-50",
  },
  {
    icon: Target,
    title: "Meta Ads",
    description:
      "Reach your ideal customers on Facebook and Instagram. Advanced targeting, creative ad design, retargeting funnels, and continuous optimization for maximum impact.",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: Palette,
    title: "Branding & Graphic Design",
    description:
      "Build a memorable brand identity that sets you apart. Logo design, brand guidelines, marketing collateral, and visual assets that communicate your unique value.",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Brain,
    title: "AI Marketing Solutions",
    description:
      "Leverage the power of artificial intelligence to automate and optimize your marketing. AI chatbots, predictive analytics, content generation, and smart automation.",
    color: "text-cyan-600",
    bg: "bg-cyan-50",
  },
  {
    icon: FileText,
    title: "Content Creation",
    description:
      "Compelling content that educates, engages, and converts. Blog posts, website copy, video scripts, email campaigns, and social media content crafted by experts.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-gray-50"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Everything You Need to{" "}
            <span className="text-orange-600">Dominate Online</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            From website design to AI-powered marketing automation, we provide
            end-to-end digital solutions that drive real business growth.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 ${service.bg} rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}