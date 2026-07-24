"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getPortfolioBySlug } from "@/constants/portfolioData";

export default function RelatedPortfolio({ service }) {
  const related = service.related
    .map((slug) => getPortfolioBySlug(slug))
    .filter(Boolean);

  if (!related.length) return null;

  return (
    <section className="py-16 bg-[#f4f7f5]" aria-labelledby="related-portfolio-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <h2 id="related-portfolio-heading" className="text-xl font-extrabold text-[#2d3748]">
            Explore related projects
          </h2>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-sage-100 rounded-xl text-sm font-bold text-sage-600 hover:bg-sage-100 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid sm:grid-cols-3 gap-5">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/portfolio/${item.slug}`}
              className={`group flex items-center justify-between gap-3 bg-white rounded-2xl p-5 border ${item.theme.border} ${item.theme.borderHover} shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.theme.iconBg}`}>
                  <item.icon className={`w-5 h-5 ${item.theme.iconText}`} />
                </div>
                <div>
                  <span className="text-sm font-bold text-[#2d3748] group-hover:text-sage-600 transition-colors">
                    {item.title}
                  </span>
                  <p className="text-xs text-gray-500 mt-0.5">{item.category}</p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-sage-600 transition-all duration-300 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
