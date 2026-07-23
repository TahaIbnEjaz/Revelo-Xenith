import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import Hero from '../components/Hero.jsx';
import ScrollStory from '../components/ScrollStory.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import ProcessSection from '../components/ProcessSection.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import IndustriesSection from '../components/IndustriesSection.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import FAQSection from '../components/FAQSection.jsx';
import CTASection from '../components/CTASection.jsx';
import SectionReveal from '../components/SectionReveal.jsx';

import services from '../data/services.js';
import portfolio from '../data/portfolio.js';
import testimonials from '../data/testimonials.js';

// Home page: the full agency story in one flowing page, per the brief —
// Hero, scroll-driven story beat, About, Capabilities, Why Revelo Xenith,
// Process, Featured Work, Industries, Testimonials, FAQ, Final CTA.
function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

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
      <ScrollStory />
      <AboutSection />

      {/* Capabilities (Our Services) */}
      <section id="capabilities" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Our <span className="text-gradient">Services</span>
            </h2>
          </SectionReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.05}>
                <ServiceCard service={service} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <WhyChooseUs />
      <ProcessSection />

      {/* Featured Work */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Every Project Starts With A Challenge.
              <br />
              <span className="text-gradient">Every Result Tells A Story.</span>
            </h2>
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
              to="/work"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-rx-cyan hover:text-white"
            >
              View Our Work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <IndustriesSection />

      {/* Testimonials — auto slider */}
      <section className="py-24">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Trusted By Businesses <span className="text-gradient">That Chose To Rise.</span>
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

      <FAQSection />
      <CTASection />
    </>
  );
}

export default Home;
