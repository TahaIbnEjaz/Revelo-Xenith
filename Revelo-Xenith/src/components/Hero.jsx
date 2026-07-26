import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, Sparkles } from 'lucide-react';
import GlowBackground from './GlowBackground.jsx';
import banner from '../assets/banner.jpeg';

// Home page hero: large split layout. Left = headline/CTA copy,
// right = a floating stack of "glass widget" cards suggesting an
// analytics dashboard / growth story, per the brief's illustration spec.
function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24 lg:pt-48 lg:pb-32">
      <GlowBackground />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left: headline */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-panel px-4 py-1.5 text-xs font-medium text-rx-cyan">
            <Sparkles size={14} />
            Trusted by growth-focused brands
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            Grow Your Business With{' '}
            <span className="text-gradient">Digital Excellence</span>
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/80">
            Revelo Xenith blends strategy, design, and performance marketing
            to turn ambitious brands into market leaders.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rx-blue to-rx-cyan px-7 py-3.5 text-sm font-semibold text-rx-navy-deep shadow-rx-glow transition-transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full glass-panel px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:border-rx-cyan/40"
            >
              View Portfolio
            </Link>
          </div>
        </motion.div>

        {/* Right: floating glass widgets */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
          className="relative h-[420px]"
        >
          {/* Banner illustration sits behind the floating glass widgets,
              faded into the dark background so it reads as atmosphere
              rather than a competing image. */}
          <div
            aria-hidden="true"
            className="absolute inset-0 -z-10 overflow-hidden rounded-3xl opacity-40"
            style={{
              backgroundImage: `url(${banner})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              maskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 65%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 65%, transparent 100%)',
            }}
          />

          {/* Main growth chart card */}
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="gradient-border absolute left-1/2 top-8 w-72 -translate-x-1/2 shadow-rx-glow"
          >
            <div className="glass-panel rounded-2xl p-5">
              <div className="flex items-center justify-between">
                <span className="text-xs text-white/50">Revenue Growth</span>
                <TrendingUp size={16} className="text-rx-cyan" />
              </div>
              <p className="mt-2 text-2xl font-bold text-white">+184%</p>
              <svg viewBox="0 0 200 60" className="mt-3 w-full">
                <polyline
                  points="0,50 30,40 60,45 90,25 120,30 150,10 200,5"
                  fill="none"
                  stroke="#4FDFFF"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </motion.div>

          {/* Website preview card */}
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            className="gradient-border absolute left-0 top-56 w-56"
          >
            <div className="glass-panel rounded-2xl p-4">
              <div className="mb-2 flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-red-400/70" />
                <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                <span className="h-2 w-2 rounded-full bg-green-400/70" />
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 rounded bg-white/20" />
                <div className="h-2 w-full rounded bg-white/10" />
                <div className="h-14 w-full rounded-lg bg-gradient-to-br from-rx-blue/40 to-rx-cyan/20" />
              </div>
            </div>
          </motion.div>

          {/* Audience widget */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="gradient-border absolute right-0 bottom-4 w-52"
          >
            <div className="glass-panel rounded-2xl p-4">
              <div className="flex items-center gap-2">
                <Users size={16} className="text-rx-cyan" />
                <span className="text-xs text-white/50">Active Users</span>
              </div>
              <p className="mt-2 text-xl font-bold text-white">42,918</p>
              <p className="mt-1 text-xs font-medium text-green-400">↑ 12.4% this month</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
