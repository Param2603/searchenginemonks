"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { getServiceBySlug } from "@/lib/service-data";
import { services } from "@/constants/servicesData";

export default function RelatedServices({ service }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const related = service.related
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Handle keyboard events
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [dropdownOpen]);

  if (!related.length) return null;

  return (
    <section className="py-16 bg-sage-50" aria-labelledby="related-services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6">
          <h2 id="related-services-heading" className="text-xl font-extrabold text-[#2d3748]">
            Explore related services
          </h2>
          
          {/* Dropdown Button */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setDropdownOpen(!dropdownOpen);
                }
              }}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              aria-label="View all services dropdown"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-sage-100 rounded-xl text-sm font-bold text-sage-600 hover:bg-sage-100 transition-all duration-300 shadow-sm hover:shadow-md focus:outline-none focus:ring-2 focus:ring-sage-600 focus:ring-offset-2"
            >
              View All Services
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div 
                role="menu"
                className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-sage-100 p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
              >
                <div className="space-y-1.5 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-sage-200 scrollbar-track-transparent">
                  {services.map((svc) => (
                    <Link
                      key={svc.slug}
                      href={`/services/${svc.slug}`}
                      onClick={() => setDropdownOpen(false)}
                      role="menuitem"
                      className="group flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-sage-100/50 transition-all duration-300 focus:outline-none focus:bg-sage-100/50 focus:ring-2 focus:ring-sage-600"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${svc.bg}`}>
                        <svc.icon className={`w-4 h-4 ${svc.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-[#2d3748] group-hover:text-sage-600 transition-colors">
                          {svc.title}
                        </p>
                        <p className="text-xs text-gray-500 line-clamp-2 mt-0.5">
                          {svc.description}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-sage-600 group-hover:translate-x-1 transition-all duration-200 shrink-0 mt-0.5" />
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Services Grid */}
        <div className="grid sm:grid-cols-3 gap-5">
          {related.map((item) => (
            <Link
              key={item.slug}
              href={`/services/${item.slug}`}
              className={`group flex items-center justify-between gap-3 bg-white rounded-2xl p-5 border ${item.theme.border} ${item.theme.borderHover} shadow-sm transition-all duration-300`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${item.theme.iconBg}`}>
                  <item.icon className={`w-5 h-5 ${item.theme.iconText}`} />
                </div>
                <span className="text-sm font-bold text-[#2d3748]">{item.title}</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-gray-600 transition-all duration-300 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
