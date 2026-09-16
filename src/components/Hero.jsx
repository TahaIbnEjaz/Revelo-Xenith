// src/components/Hero.jsx
import React, { useMemo } from 'react';

const StarBackground = () => {
  // Generate random star configurations
  const stars = useMemo(() => {
    return Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      // Spread starting locations randomly across top-left quadrants
      top: `${Math.random() * 120 - 20}%`, 
      left: `${Math.random() * 120 - 20}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 12 + 8}s`,
      delay: `${Math.random() * 10}s`,
      opacity: Math.random() * 0.7 + 0.3,
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="absolute rounded-full bg-white animate-star-flow"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDuration: star.duration,
            animationDelay: star.delay,
            boxShadow: `0 0 6px 1px rgba(255, 255, 255, 0.8)`,
          }}
        />
      ))}
    </div>
  );
};

export const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-slate-950 flex items-center justify-center overflow-hidden">
      {/* 1. Animated Stars Background Layer (z-0) */}
      <StarBackground />

      {/* Optional Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent via-slate-950/60 to-slate-950 z-1 pointer-events-none" />

      {/* 2. Content Layer Elevated Above Background (z-10) */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          Elevate Your Digital Experience
        </h1>
        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Crafting next-generation solutions with cutting-edge design and seamless motion.
        </p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-500 font-semibold transition-all shadow-lg shadow-blue-500/30">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;