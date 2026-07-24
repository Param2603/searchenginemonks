"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI in Digital Marketing",
    excerpt: "Discover how artificial intelligence is reshaping the landscape of SEO, content creation, and customer engagement.",
    category: "AI Marketing",
    author: "Alex Morgan",
    date: "Oct 24, 2023",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 2,
    title: "10 SEO Strategies to Dominate Local Search",
    excerpt: "Learn actionable tips to optimize your Google Business Profile and capture more local customers in your area.",
    category: "SEO",
    author: "Sarah Jenkins",
    date: "Oct 18, 2023",
    image: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 3,
    title: "Maximizing ROI with Meta Ads",
    excerpt: "Stop wasting ad spend. Here's how to structure your campaigns, target the right audience, and track conversions effectively.",
    category: "Advertising",
    author: "David Chen",
    date: "Oct 12, 2023",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 4,
    title: "Why Your Website Needs a Rebrand",
    excerpt: "Is your website turning customers away? Look for these 5 signs that indicate it's time for a major redesign.",
    category: "Web Design",
    author: "Emily Taylor",
    date: "Oct 05, 2023",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 5,
    title: "Content Creation: Quality vs. Quantity",
    excerpt: "The age-old debate settled. Find out the perfect balance of content volume and depth to rank higher on Google.",
    category: "Content",
    author: "Alex Morgan",
    date: "Sep 28, 2023",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: 6,
    title: "Leveraging TikTok for B2B Marketing",
    excerpt: "Think TikTok is just for dancing? Think again. How B2B companies are finding massive success on the platform.",
    category: "Social Media",
    author: "Sarah Jenkins",
    date: "Sep 21, 2023",
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?auto=format&fit=crop&q=80&w=800",
  }
];

export default function Blog() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  
  const yParallax = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacityParallax = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div className="min-h-screen relative overflow-hidden" ref={containerRef}>
      {/* Hero Section */}
      <div className="relative w-full pt-32 pb-20 lg:pt-40 lg:pb-28">
        {/* Parallax Hero Background */}
        <div className="absolute inset-0 overflow-hidden z-0 bg-[#064e3b]">
          <motion.div 
            style={{ y: yParallax, opacity: opacityParallax }}
            className="w-full h-full absolute inset-0 opacity-20"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#34d399] via-transparent to-transparent blur-3xl scale-150" />
          </motion.div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#34d399]/20 text-[#34d399] border border-[#34d399]/30 font-medium text-sm mb-6 shadow-[0_0_15px_rgba(52,211,153,0.3)]">
              Our Blog
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Insights & Strategies for <span className="text-[#34d399]">Growth</span>
            </h1>
            <p className="text-lg md:text-xl text-emerald-100/80 leading-relaxed">
              Explore the latest trends, expert advice, and actionable tips in digital marketing, SEO, web design, and AI.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="relative bg-background pt-10 pb-24 z-10">
        {/* Glow effect for background transition */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-24 bg-[#064e3b] blur-[80px] -translate-y-1/2 -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-[#059669]/10 transition-all duration-300 flex flex-col"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute inset-0 bg-[#064e3b]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  <motion.img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur-sm text-foreground text-xs font-bold rounded-full uppercase tracking-wider shadow-sm">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3 group-hover:text-[#059669] transition-colors duration-300">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {post.excerpt}
                  </p>
                  
                  <div className="mt-auto pt-4 border-t border-border">
                    <a href="#" className="inline-flex items-center gap-2 text-[#059669] font-bold text-sm hover:text-[#047857] transition-colors group/btn">
                      Read Article
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>

                {/* Ambient glow "After Effect" on hover */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#34d399]/0 via-transparent to-[#34d399]/0 group-hover:from-[#34d399]/5 group-hover:to-transparent pointer-events-none transition-colors duration-500" />
              </motion.article>
            ))}
          </div>
          
          <div className="mt-16 text-center">
             <button className="px-8 py-4 bg-[#059669] text-white font-extrabold rounded-xl hover:bg-[#047857] transition-all duration-300 shadow-xl shadow-[#059669]/20 hover:shadow-[#059669]/40 hover:-translate-y-0.5 text-base">
                Load More Posts
             </button>
          </div>
        </div>
      </div>
    </div>
  );
}
