import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import GlowBackground from './GlowBackground.jsx';
import ParticleX from './ParticleX.jsx';

// Home page hero: bold, centered agency statement ("Where Brands Rise.")
// with a giant animated particle "X" as the background centerpiece.
function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 pb-24">
      <GlowBackground />

      {/* Giant animated particle X, centered behind the headline */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-70">
        <div className="h-[36rem] w-[36rem] max-w-[90vw]">
          <ParticleX />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h1 className="text-5xl font-bold leading-[1.05] text-white sm:text-6xl lg:text-7xl">
            Where Brands <span className="text-gradient">Rise.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60 sm:text-xl">
            We don't chase trends. We create brands that define them.
          </p>

          <p className="mt-6 text-sm font-medium uppercase tracking-[0.2em] text-rx-cyan">
            Branding • Digital Experiences • Marketing • Innovation
          </p>

          <div className="mt-10 flex justify-center">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rx-blue to-rx-cyan px-8 py-4 text-sm font-semibold text-rx-navy-deep shadow-rx-glow transition-transform hover:scale-105"
            >
              Start Your Project
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
