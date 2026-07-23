import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import SectionReveal from './SectionReveal.jsx';
import GlowBackground from './GlowBackground.jsx';

// Final conversion push before the footer: "Let's Build Something
// Amazing Together" per the brief's Home page spec.
function CTASection() {
  return (
    <section className="relative overflow-hidden py-24">
      <GlowBackground variant="compact" />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
        <SectionReveal>
          <div className="gradient-border">
            <div className="glass-panel bg-gradient-moving animate-gradient-move rounded-3xl px-8 py-16 sm:px-16">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">
                Ready To Build Something <span className="text-gradient">Extraordinary?</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-white/60">
                Your business deserves more than attention. It deserves
                recognition. It deserves growth. It deserves a brand people
                remember.
              </p>
              <p className="mt-2 text-lg font-semibold text-white">
                Let's Build Your Next Success Story.
              </p>
              <Link
                to="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rx-blue to-rx-cyan px-8 py-4 text-sm font-semibold text-rx-navy-deep shadow-rx-glow transition-transform hover:scale-105"
              >
                Start Your Project
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export default CTASection;
