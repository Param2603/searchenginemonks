import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getServiceBySlug } from "@/lib/service-data";

export default function RelatedServices({ service }) {
  const related = service.related
    .map((slug) => getServiceBySlug(slug))
    .filter(Boolean);

  if (!related.length) return null;

  return (
    <section className="py-16 bg-[#f4f7f5]" aria-labelledby="related-services-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="related-services-heading" className="text-xl font-extrabold text-[#2d3748] mb-6">
          Explore related services
        </h2>
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
              <ArrowRight className="w-4 h-4 text-gray-400 group-hover:translate-x-1 group-hover:text-gray-600 transition-all duration-200 shrink-0" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
