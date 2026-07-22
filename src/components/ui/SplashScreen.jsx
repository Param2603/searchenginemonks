"use client";

import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Show splash screen for 2.5 seconds
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setIsLoading(false);
      }, 500); // 500ms for fade out animation
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0A192F]/85 backdrop-blur-lg transition-opacity duration-500 ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center justify-center">
        {/* Glow effect behind logo */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400 to-teal-300 blur-[80px] opacity-30 rounded-full w-56 h-56 animate-pulse"></div>

        {/* Logo Image */}
        <div className="relative animate-bounce">
          <img
            src="/logo-white-text.png"
            alt="Search Engine Monks Logo"
            className="w-56 h-auto md:w-72 drop-shadow-[0_0_20px_rgba(52,211,153,0.4)]"
          />
        </div>

        {/* Loading animation dots */}
        <div className="mt-8 text-center relative z-10">
          <div className="flex items-center justify-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-[bounce_1s_infinite_0ms]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-emerald-300 animate-[bounce_1s_infinite_200ms]"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-teal-300 animate-[bounce_1s_infinite_400ms]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
