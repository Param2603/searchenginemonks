"use client";

import { ArrowRight, Play, Sparkles, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      aria-label="Hero section"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-orange-900" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-300 rounded-full blur-3xl" />
      </div>
      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-orange-400" />
              <span className="text-sm font-medium text-orange-300">
                AI-Powered Digital Marketing
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6">
              Grow Your Business with{" "}
              <span className="bg-gradient-to-r from-orange-400 to-yellow-300 bg-clip-text text-transparent">
                Smart Digital Marketing
              </span>{" "}
              &amp; AI Solutions
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8 max-w-xl">
              We help businesses increase leads, sales, and online visibility through
              websites, SEO, branding, and performance marketing. Trusted by 200+
              businesses across Canada.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 text-base"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all text-base"
              >
                <Play className="w-5 h-5" />
                View Services
              </a>
            </div>

            {/* Trust Metrics */}
            <div className="flex flex-wrap gap-8">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">200+</p>
                  <p className="text-sm text-gray-400">Projects Delivered</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-orange-400" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">150+</p>
                  <p className="text-sm text-gray-400">Happy Clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Visual - Dashboard Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl p-6 shadow-2xl">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-white font-semibold">Campaign Performance</h3>
                  <span className="px-3 py-1 bg-green-500/20 text-green-300 text-xs font-medium rounded-full">
                    Live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-sm text-gray-400">Website Traffic</p>
                    <p className="text-2xl font-bold text-white mt-1">+247%</p>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-orange-400 to-yellow-300 h-2 rounded-full" style={{ width: "85%" }} />
                    </div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <p className="text-sm text-gray-400">Lead Generation</p>
                    <p className="text-2xl font-bold text-white mt-1">+189%</p>
                    <div className="w-full bg-white/10 rounded-full h-2 mt-2">
                      <div className="bg-gradient-to-r from-green-400 to-emerald-300 h-2 rounded-full" style={{ width: "72%" }} />
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-xl p-4">
                  <p className="text-sm text-gray-400 mb-3">Revenue Growth</p>
                  <div className="flex items-end gap-2 h-20">
                    {[35, 45, 40, 55, 50, 65, 60, 75, 70, 85, 80, 95].map((h, i) => (
                      <div key={i} className="flex-1 bg-gradient-to-t from-orange-500 to-orange-300 rounded-t-sm transition-all hover:from-orange-400 hover:to-yellow-300" style={{ height: `${h}%` }} />
                    ))}
                  </div>
                </div>
              </div>
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">ROI</p>
                  <p className="text-sm font-bold text-gray-900">+340%</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-xl p-3 flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500">AI Score</p>
                  <p className="text-sm font-bold text-gray-900">98/100</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}