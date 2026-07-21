"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah Mitchell", role: "Founder, FreshBite Foods", content: "Search Engine Monks completely transformed our online presence. Our e-commerce sales increased by 180% within just 6 months of launching the new website. Their SEO and Google Ads strategies are incredibly effective. The team is responsive, creative, and truly understands our business goals.", rating: 5, initials: "SM", color: "bg-[#059669]" },
  { name: "David Chen", role: "CEO, UrbanNest Realty", content: "Working with SEM was a game-changer for our real estate business. The AI-powered property platform they built generates 3x more qualified leads than our previous setup. Their attention to detail and commitment to quality is unmatched in the industry.", rating: 5, initials: "DC", color: "bg-blue-500" },
  { name: "Amanda Rodriguez", role: "Marketing Director, HealthFirst Clinics", content: "We went from virtually invisible online to ranking in the top 3 on Google for 15+ high-value keywords. The team's expertise in local SEO and content marketing helped us attract patients from across the Greater Toronto Area. Highly recommend their services.", rating: 5, initials: "AR", color: "bg-emerald-500" },
  { name: "James Patel", role: "Owner, StyleHub Boutique", content: "Our social media presence exploded after partnering with Search Engine Monks. They created stunning ad campaigns on Meta that delivered a 120% ROAS. The creative team really understands what resonates with our fashion-forward audience.", rating: 5, initials: "JP", color: "bg-pink-500" },
  { name: "Lisa Thompson", role: "Co-Founder, TechFlow Solutions", content: "The landing page SEM designed for our SaaS product increased trial signups by 220%. Their data-driven approach to conversion rate optimization, combined with beautiful design, made all the difference. They are our go-to digital partner.", rating: 5, initials: "LT", color: "bg-violet-500" },
  { name: "Michael Nguyen", role: "CEO, GreenLeaf Retail", content: "From branding to Google Ads to SEO, Search Engine Monks handled our entire digital strategy. The result? A 400% increase in revenue in just one year. Their AI-powered marketing solutions gave us an edge over much larger competitors.", rating: 5, initials: "MN", color: "bg-amber-500" },
];

export default function Testimonials() {
  const [page, setPage] = useState(0);
  const perPage = 3;
  const totalPages = Math.ceil(testimonials.length / perPage);
  const current = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-white" aria-labelledby="testimonials-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-[#d1fae5] text-[#047857] text-sm font-bold rounded-full mb-4 uppercase tracking-wide">
            Client Testimonials
          </span>
          <h2 id="testimonials-heading" className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
            Loved by{" "}
            <span className="text-[#059669]">Businesses Across Canada</span>
          </h2>
          <p className="text-lg text-gray-500 leading-relaxed">
            Don't just take our word for it — hear from the businesses we've helped grow.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 min-h-[340px]">
          <AnimatePresence mode="popLayout">
            {current.map((t) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(5,150,105,0.14)" }}
                className="bg-[#f4f7f5] rounded-2xl p-6 border border-[#a7f3d0]/60 flex flex-col transition-all duration-300 cursor-default"
              >
                <Quote className="w-8 h-8 text-[#6ee7b7] mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-6">
                  &ldquo;{t.content}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-11 h-11 ${t.color} rounded-full flex items-center justify-center text-white font-bold text-sm`}>
                    {t.initials}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="p-2.5 rounded-xl border border-[#a7f3d0] hover:border-[#059669] hover:bg-[#d1fae5] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 text-[#059669]" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${i === page ? "bg-[#059669] scale-125" : "bg-[#a7f3d0] hover:bg-[#6ee7b7]"}`}
                aria-label={`Go to page ${i + 1}`}
                aria-current={i === page ? "true" : undefined}
              />
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page === totalPages - 1}
              className="p-2.5 rounded-xl border border-[#a7f3d0] hover:border-[#059669] hover:bg-[#d1fae5] disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 text-[#059669]" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
