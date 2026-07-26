import Hero from '../components/Hero.jsx';
import AboutSection from '../components/AboutSection.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import WhyChooseUs from '../components/WhyChooseUs.jsx';
import PortfolioCard from '../components/PortfolioCard.jsx';
import TeamCard from '../components/TeamCard.jsx';
import ClientLogos from '../components/ClientLogos.jsx';
import CTASection from '../components/CTASection.jsx';
import SectionReveal from '../components/SectionReveal.jsx';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import services from '../data/services.js';
import portfolio from '../data/portfolio.js';
import team from '../data/team.js';

// Home page: composes every section from the brief in order —
// Hero, Trusted Companies, About, Services preview, Why Choose Us,
// Featured Portfolio, Team, Testimonials (auto slider), CTA.
function Home() {
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
              View Our CAPABILITIES
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
              View Our WORK
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
  <SectionReveal key={member.id} className="h-full" delay={i * 0.06}>
    <TeamCard member={member} />
  </SectionReveal>
))}
          </div>
        </div>
      </section>

      {/* Trusted by — infinite auto-scrolling client logo strip
          (replaces the old written testimonials section) */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Brands We've <span className="text-gradient">Worked With</span>
            </h2>
            <p className="mt-4 text-white/60">Trusted by teams across industries.</p>
          </SectionReveal>

          <div className="mt-14">
            <ClientLogos />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

export default Home;
