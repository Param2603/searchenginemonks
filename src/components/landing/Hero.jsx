"use client";

import { ArrowRight, Star, Shield, Award, Users, TrendingUp, CheckCircle, Zap } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

const trustBadges = [
  { icon: Shield,       label: "Google Partner" },
  { icon: Award,        label: "Meta Partner" },
  { icon: Star,         label: "5-Star Rated" },
  { icon: CheckCircle,  label: "HubSpot Certified" },
  { icon: Zap,          label: "Shopify Expert" },
  { icon: TrendingUp,   label: "Top SEO Agency" },
];

// Doubled for seamless infinite scroll
const marqueeBadges = [...trustBadges, ...trustBadges];

const particles = [
  { cx: "8%",  cy: "20%", r: 4,  cls: "animate-particle-1" },
  { cx: "88%", cy: "12%", r: 3,  cls: "animate-particle-2" },
  { cx: "75%", cy: "75%", r: 5,  cls: "animate-particle-3" },
  { cx: "18%", cy: "80%", r: 3,  cls: "animate-particle-4" },
  { cx: "55%", cy: "5%",  r: 4,  cls: "animate-particle-5" },
  { cx: "42%", cy: "92%", r: 3,  cls: "animate-particle-6" },
  { cx: "92%", cy: "55%", r: 5,  cls: "animate-particle-1" },
  { cx: "3%",  cy: "55%", r: 3,  cls: "animate-particle-3" },
];

function MagneticButton({ href, children, className }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 20 });
  const sy = useSpring(y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.3);
    y.set((e.clientY - cy) * 0.3);
  };
  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      mouseX.set((clientX / innerWidth - 0.5) * 2);
      mouseY.set((clientY / innerHeight - 0.5) * 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const springCfg = { damping: 25, stiffness: 150 };
  const smoothX = useSpring(mouseX, springCfg);
  const smoothY = useSpring(mouseY, springCfg);

  const layer1X = useTransform(smoothX, [-1, 1], [-15, 15]);
  const layer1Y = useTransform(smoothY, [-1, 1], [-15, 15]);
  const layer2X = useTransform(smoothX, [-1, 1], [-25, 25]);
  const layer2Y = useTransform(smoothY, [-1, 1], [-25, 25]);
  const layer3X = useTransform(smoothX, [-1, 1], [-45, 45]);
  const layer3Y = useTransform(smoothY, [-1, 1], [-45, 45]);

  const wordVariants = {
    hidden: { opacity: 0, y: 60, rotateX: -45 },
    visible: (i) => ({
      opacity: 1, y: 0, rotateX: 0,
      transition: { delay: 0.3 + i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#34d399] via-[#a7f3d0] to-[#d1fae5]" />

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {particles.map((p, i) => (
          <div
            key={i}
            className={`absolute rounded-full bg-white/40 ${p.cls}`}
            style={{ left: p.cx, top: p.cy, width: p.r * 2, height: p.r * 2 }}
          />
        ))}
      </div>

      {/* Morphing blobs */}
      <motion.div
        className="absolute top-16 -left-16 w-72 h-72 bg-white/25 animate-blob"
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 -right-16 w-96 h-96 bg-white/15 animate-blob-delay"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden z-10">
        <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" className="w-full h-20" preserveAspectRatio="none">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="white" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/70 border border-[#6ee7b7]/50 backdrop-blur-sm rounded-full mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#059669] animate-pulse" />
              <span className="text-sm font-semibold text-[#047857] tracking-wide">AI-Powered Digital Marketing</span>
            </motion.div>

            {/* Animated word-split heading */}
            <h1
              className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-extrabold text-[#2d2d2b] leading-[1.1] tracking-tight mb-6"
              style={{ perspective: 800 }}
            >
              {["Grow", "Your", "Business"].map((word, i) => (
                <motion.span
                  key={word}
                  custom={i}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
              <br />
              {"with".split("").map((_, i) => (
                <motion.span
                  key={`with-${i}`}
                  custom={3 + i * 0.2}
                  variants={wordVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {"with "[i]}
                </motion.span>
              ))}
              {" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65, duration: 0.7 }}
                className="text-transparent bg-clip-text bg-gradient-to-r from-[#fb923c] via-[#f97316] to-[#ea580c] animate-gradient-text"
              >
                Smart Digital<br />Marketing
              </motion.span>
              {" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.7 }}
                className="inline-block"
              >
                &amp; AI Solutions
              </motion.span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              className="text-base sm:text-lg text-[#4a4a48] leading-relaxed mb-8 max-w-xl"
            >
              We help businesses increase leads, sales, and online visibility
              through websites, SEO, branding, and performance marketing.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.05, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mb-10"
            >
              <MagneticButton
                href="#contact"
                className="group shine-hover ripple-btn inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#059669] text-white font-bold rounded-xl hover:bg-[#047857] transition-all duration-300 shadow-lg shadow-[#059669]/30 hover:shadow-xl hover:shadow-[#059669]/40 text-base"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </MagneticButton>
              <motion.a
                href="#services"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-[#6ee7b7] text-[#047857] font-bold rounded-xl hover:bg-white hover:border-[#059669] transition-all duration-300 text-base"
              >
                View Our Services
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              {[
                { icon: TrendingUp, value: "200+", label: "Projects Delivered" },
                { icon: Users,      value: "150+", label: "Happy Clients" },
                { icon: Star,       value: "4.9★", label: "Google Rating" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.06, y: -3 }}
                  className="flex items-center gap-3 bg-white/60 backdrop-blur-sm rounded-xl px-4 py-3 border border-white/70 shadow-sm cursor-default"
                >
                  <div className="w-10 h-10 bg-[#d1fae5] rounded-lg flex items-center justify-center">
                    <stat.icon className="w-5 h-5 text-[#059669]" />
                  </div>
                  <div>
                    <p className="text-xl font-extrabold text-[#2d2d2b] leading-none">{stat.value}</p>
                    <p className="text-xs text-[#6b6b68] mt-0.5">{stat.label}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right – Animated Buddha with parallax layers */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="flex justify-center items-center relative min-h-[380px] lg:min-h-[480px] mt-12 lg:mt-0"
          >
            {/* Layer 1 – background elements (slow parallax) */}
            <motion.div style={{ x: layer1X, y: layer1Y }} className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute w-[280px] h-[280px] lg:w-[380px] lg:h-[380px] rounded-full bg-white/50 blur-2xl"
                animate={{ scale: [1, 1.08, 1], opacity: [0.4, 0.7, 0.4] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              />
              {/* Orange rings */}
              <motion.div
                className="absolute w-[340px] h-[340px] lg:w-[480px] lg:h-[480px] -translate-y-[20px] rounded-full border-[3px] border-dashed border-[#fb923c]/90 shadow-[0_0_25px_rgba(251,146,60,0.4)]"
                animate={{ rotate: -360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[380px] h-[380px] lg:w-[540px] lg:h-[540px] -translate-y-[20px] rounded-full border-2 border-dotted border-[#fb923c]/60"
                animate={{ rotate: 360 }}
                transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute w-[420px] h-[420px] lg:w-[600px] lg:h-[600px] -translate-y-[20px] rounded-full border border-dashed border-[#fb923c]/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
              />
            </motion.div>

            {/* Layer 2 – Buddha (medium parallax) */}
            <motion.div style={{ x: layer2X, y: layer2Y }} className="relative z-10 w-full flex justify-center pointer-events-none">
              <motion.img
                src="/buddha.svg"
                alt="Search Engine Monks meditating Buddha mascot"
                loading="eager"
                className="w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px] drop-shadow-2xl select-none"
                animate={{ y: [0, -18, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            {/* Layer 3 – Floating cards (fast parallax) */}
            <motion.div style={{ x: layer3X, y: layer3Y }} className="absolute inset-0 pointer-events-none z-20">
              {/* ROI card */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.07, rotate: -2 }}
                className="absolute top-4 right-0 lg:top-8 lg:-right-2 bg-white rounded-2xl shadow-xl p-3 lg:p-4 flex items-center gap-2.5 lg:gap-3 border border-gray-100 pointer-events-auto cursor-default"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#d1fae5] rounded-xl flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4 lg:w-5 lg:h-5 text-[#059669]" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-[#6b6b68] font-medium">Average ROI</p>
                  <p className="text-sm lg:text-lg font-extrabold text-[#2d2d2b]">+340%</p>
                </div>
              </motion.div>

              {/* Rating card */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                whileHover={{ scale: 1.07, rotate: 2 }}
                className="absolute bottom-10 left-0 lg:bottom-14 lg:-left-2 bg-white rounded-2xl shadow-xl p-3 lg:p-4 flex items-center gap-2.5 lg:gap-3 border border-gray-100 pointer-events-auto cursor-default"
              >
                <div className="w-8 h-8 lg:w-10 lg:h-10 bg-[#fff8e6] rounded-xl flex items-center justify-center shrink-0">
                  <Star className="w-4 h-4 lg:w-5 lg:h-5 text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <p className="text-[10px] lg:text-xs text-[#6b6b68] font-medium">Google Rating</p>
                  <p className="text-sm lg:text-lg font-extrabold text-[#2d2d2b]">4.9 / 5.0</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Infinite Marquee Trust Badges ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="mt-16 pt-10 border-t border-[#6ee7b7]/30"
        >
          <p className="text-xs font-bold uppercase tracking-widest text-[#6b6b68] mb-6 text-center">
            Certified &amp; Trusted By
          </p>
          <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-4">
              {marqueeBadges.map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2.5 px-5 py-3 bg-white/70 backdrop-blur-sm border border-white/80 rounded-xl shadow-sm cursor-default whitespace-nowrap shrink-0"
                >
                  <badge.icon className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-semibold text-[#4a4a48]">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
