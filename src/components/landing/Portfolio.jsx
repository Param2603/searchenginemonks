"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "FreshBite E-Commerce Redesign",
    category: "Website Design & SEO",
    description:
      "Complete e-commerce overhaul resulting in 180% increase in online sales and 45% improvement in organic traffic within 6 months.",
    tags: ["Shopify", "SEO", "UI/UX"],
    gradient: "from-orange-400 to-amber-500",
    stat: "+180% Sales",
  },
  {
    title: "UrbanNest Real Estate Platform",
    category: "Web Development & Branding",
    description:
      "Modern property listing platform with AI-powered search, generating 3x more qualified leads for a Toronto-based real estate firm.",
    tags: ["Next.js", "AI", "Branding"],
    gradient: "from-blue-500 to-cyan-500",
    stat: "3x Leads",
  },
  {
    title: "HealthFirst Clinic Marketing",
    category: "Google Ads & SEO",
    description:
      "Comprehensive digital marketing strategy for a healthcare startup, achieving top-3 Google rankings for 15+ high-value keywords.",
    tags: ["Google Ads", "Local SEO", "Content"],
    gradient: "from-green-500 to-emerald-500",
    stat: "Top-3 Ranking",
  },
  {
    title: "StyleHub Fashion Brand",
    category: "Social Media & Meta Ads",
    description:
      "Full-funnel social media campaign across Instagram and Facebook, driving 250% increase in brand awareness and 120% ROAS.",
    tags: ["Meta Ads", "Content", "Strategy"],
    gradient: "from-pink-500 to-rose-500",
    stat: "120% ROAS",
  },
  {
    title: "TechFlow SaaS Landing Page",
    category: "Website Design & Content",
    description:
      "High-converting landing page for a B2B SaaS startup, improving trial signups by 220% with A/B tested copy and design.",
    tags: ["React", "Copywriting", "CRO"],
    gradient: "from-violet-500 to-purple-500",
    stat: "+220% Signups",
  },
  {
    title: "GreenLeaf Cannabis Retail",
    category: "Full Digital Marketing",
    description:
      "End-to-end digital presence for a Canadian cannabis retailer — from branding to Google Ads, driving 400% revenue growth in one year.",
    tags: ["Branding", "Ads", "SEO"],
    gradient: "from-emerald-500 to-teal-500",
    stat: "+400% Revenue",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 sm:py-28 bg-gray-50"
      aria-labelledby="portfolio-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-700 text-sm font-semibold rounded-full mb-4">
            Our Portfolio
          </span>
          <h2
            id="portfolio-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4"
          >
            Real Results for{" "}
            <span className="text-orange-600">Real Businesses</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Explore our latest projects and see how we've helped businesses
            across Canada achieve remarkable digital growth.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 hover:border-orange-200 transition-all duration-300"
            >
              {/* Card Visual Header */}
              <div
                className={`relative h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between`}
              >
                <span className="self-start px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                  {project.category}
                </span>
                <div className="self-end bg-white rounded-xl shadow-lg px-4 py-2">
                  <p className="text-lg font-extrabold text-gray-900">
                    {project.stat}
                  </p>
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
              </div>

              {/* Card Body */}
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}