import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import TeamCard from '../components/TeamCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import CTASection from '../components/CTASection.jsx';
import SectionReveal from '../components/SectionReveal.jsx';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import services from '../data/services.js';
import portfolio from '../data/portfolio.js';
import team from '../data/team.js';
import testimonials from '../data/testimonials.js';

// Home page: composes every section from the brief in order —
// Hero, Trusted Companies, About, Services preview, Why Choose Us,
// Featured Portfolio, Team, Testimonials (auto slider), CTA.
function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-advance the testimonial slider every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <Hero />
      <AboutSection />

      {/* Services preview */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What We <span className="text-gradient">Do Best</span>
            </h2>
            <p className="mt-4 text-white/60">
              A full-stack partner for brand, web, and growth.
            </p>
          </SectionReveal>

          {/* Each card links through to the full accordion on /services,
              where every subcategory underneath it is broken out. */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((category, i) => (
              <SectionReveal key={category.id} delay={i * 0.06}>
                <ServiceCard service={category} />
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-rx-cyan hover:text-white"
            >
              View All Services
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <WhyChooseUs />

      {/* Featured portfolio (masonry-style grid) */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="mt-4 text-white/60">A sample of recent projects we're proud of.</p>
          </SectionReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.slice(0, 6).map((project, i) => (
              <SectionReveal key={project.id} delay={i * 0.06}>
                <PortfolioCard project={project} />
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/portfolio"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-rx-cyan hover:text-white"
            >
              View Full Portfolio
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Meet the <span className="text-gradient">Team</span>
            </h2>
            <p className="mt-4 text-white/60">The people behind the work.</p>
          </SectionReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <SectionReveal key={member.id} delay={i * 0.06}>
                <TeamCard member={member} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — auto slider */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              What Clients <span className="text-gradient">Say</span>
            </h2>
          </SectionReveal>

          <div className="relative mt-14">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[activeTestimonial].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >
                <TestimonialCard testimonial={testimonials[activeTestimonial]} />
              </motion.div>
            </AnimatePresence>

            <button
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 rounded-full glass-panel p-2.5 text-white/60 transition-colors hover:text-rx-cyan sm:block"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="absolute right-0 top-1/2 hidden translate-x-4 -translate-y-1/2 rounded-full glass-panel p-2.5 text-white/60 transition-colors hover:text-rx-cyan sm:block"
            >
              <ChevronRight size={20} />
            </button>

            <div className="mt-8 flex justify-center gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === activeTestimonial ? 'w-6 bg-rx-cyan' : 'w-2 bg-white/20'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default Home;
