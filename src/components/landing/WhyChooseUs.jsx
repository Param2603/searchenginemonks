"use client";

import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useRef, useEffect } from "react";
import { BarChart3, Lightbulb, DollarSign, Brain, HeadphonesIcon, ShieldCheck } from "lucide-react";

const reasons = [
  { icon: BarChart3,       title: "Results-Driven Approach",  description: "Every strategy we create is tied to measurable KPIs. We track, analyze, and optimize continuously to ensure your investment delivers maximum return. No vanity metrics — just real business outcomes." },
  { icon: Lightbulb,       title: "Creative Team",             description: "Our team of designers, developers, and marketers bring diverse expertise and fresh perspectives. We combine creativity with data-driven insights to produce campaigns that stand out and convert." },
  { icon: DollarSign,      title: "Affordable Solutions",      description: "Premium digital marketing does not have to break the bank. We offer flexible pricing packages designed for small businesses, startups, and growing brands across Canada." },
  { icon: Brain,           title: "AI-Powered Marketing",      description: "We stay ahead of the curve by integrating cutting-edge AI tools into our workflows. From automated content creation to predictive analytics, we leverage technology to give you a competitive edge." },
  { icon: HeadphonesIcon,  title: "Dedicated Support",         description: "You're never left in the dark. Every client gets a dedicated account manager, weekly progress reports, and 24/7 access to our support team. We're your growth partners." },
  { icon: ShieldCheck,     title: "Proven Track Record",       description: "With 200+ projects delivered and a 98% client retention rate, our results speak for themselves. We've helped businesses across Canada grow their online presence and revenue." },
];

const stats = [
  { value: 98, suffix: "%", label: "Client Retention" },
  { value: 5,  suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support" },
];

// Animated counter component
function Counter({ target, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (inView) {
      const ctrl = animate(motionVal, target, { duration: 2, ease: [0.16, 1, 0.3, 1] });
      return ctrl.stop;
    }
  }, [inView, motionVal, target]);

  return (
    <span ref={ref} className="text-3xl font-extrabold text-[#059669]">
      <motion.span>{spring.get() === 0 ? 0 : spring}</motion.span>
      {suffix}
    </span>
  );
}

// Stat display using a simple non-motion counter via framer animate
function AnimatedStat({ stat }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const displayRef = useRef(null);

  useEffect(() => {
    if (!inView || !displayRef.current) return;
    const start = 0;
    const end = stat.value;
    const duration = 1800;
    const startTime = performance.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + eased * (end - start));
      if (displayRef.current) {
        displayRef.current.textContent = current + stat.suffix;
      }
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, stat.value, stat.suffix]);

  return (
    <div ref={ref} className="text-center cursor-pointer">
      <p ref={displayRef} className="text-3xl font-extrabold text-[#059669]">0{stat.suffix}</p>
      <p className="text-sm text-[#4a5568] mt-1">{stat.label}</p>
    </div>
  );
}

const cardVariants = {
  hidden:  { opacity: 0, x: 30 },
  visible: (i) => ({
    opacity: 1, x: 0,
    transition: { delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#f4f7f5] relative overflow-hidden" aria-labelledby="why-us-heading">
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-teal-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left sticky side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-block px-4 py-1.5 bg-[#d1fae5] text-[#047857] text-sm font-bold rounded-full mb-4 uppercase tracking-wide"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              id="why-us-heading"
              initial={{ opacity: 0, clipPath: "inset(0 100% 0 0)" }}
              whileInView={{ opacity: 1, clipPath: "inset(0 0% 0 0)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2d3748] tracking-tight mb-6"
            >
              Why Businesses Trust{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] to-[#10b981] animate-gradient-text">
                Search Engine Monks
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-[#4a5568] leading-relaxed mb-8"
            >
              We don't just deliver services — we deliver growth. Our holistic approach combines
              cutting-edge technology with proven marketing strategies to help your business thrive
              in the digital landscape.
            </motion.p>

            {/* Animated counter stats */}
            <div className="flex items-center gap-6">
              {stats.map((stat, i) => (
                <div key={stat.label} className="flex items-center gap-6">
                  {i > 0 && <div className="w-px h-12 bg-gray-200" />}
                  <motion.div
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <AnimatedStat stat={stat} />
                  </motion.div>
                </div>
              ))}
            </div>

            {/* CTA button */}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-all duration-300 shadow-lg shadow-[#059669]/25 hover:shadow-xl hover:shadow-[#059669]/35 shine-hover"
            >
              Start Growing Today
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Right – reason cards */}
          <div className="space-y-4">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-40px" }}
                whileHover={{ x: 8, boxShadow: "0 8px 40px rgba(5,150,105,0.15)" }}
                whileTap={{ x: 4 }}
                className="group flex gap-5 p-6 rounded-2xl bg-white border border-[#d1fae5] hover:border-[#6ee7b7] transition-all duration-300 cursor-pointer shadow-sm hover:shadow-md"
              >
                <motion.div
                  className="shrink-0 w-12 h-12 bg-[#d1fae5] rounded-xl flex items-center justify-center group-hover:bg-[#a7f3d0] transition-colors duration-200"
                  whileHover={{ rotate: [0, -8, 8, -4, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <reason.icon className="w-6 h-6 text-[#059669]" />
                </motion.div>
                <div>
                  <h3 className="text-base font-bold text-[#2d3748] mb-1.5 group-hover:text-[#059669] transition-colors duration-200">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-[#4a5568] leading-relaxed">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
