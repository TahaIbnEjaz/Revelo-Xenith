import { Target, Eye } from 'lucide-react';
import SectionReveal from './SectionReveal.jsx';
import AnimatedCounter from './AnimatedCounter.jsx';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

const STATS = [
  { end: 184, suffix: '%', label: 'Avg. growth delivered' },
  { end: 120, suffix: '+', label: 'Projects completed' },
  { end: 98, suffix: '%', label: 'Client retention rate' },
  { end: 40, suffix: '+', label: 'Team specialists' },
];

// Home page "About" block: mission, vision, and a stat bar that
// counts up once scrolled into view.
function AboutSection() {
  const { ref, isInView } = useScrollReveal(0.4);

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          <SectionReveal className="glass-panel rounded-3xl p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rx-blue/20">
              <Target size={22} className="text-rx-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white">Our Mission</h3>
            <p className="mt-3 leading-relaxed text-white/80">
              To empower businesses through strategic branding, 
              innovative design, and digital solutions that inspire, 
              connect, and drive sustainable growth.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="glass-panel rounded-3xl p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-rx-cyan/20">
              <Eye size={22} className="text-rx-cyan" />
            </div>
            <h3 className="text-xl font-semibold text-white">Our Vision</h3>
            <p className="mt-3 leading-relaxed text-white/80">
             To become a globally recognized creative agency, 
             building brands that innovate, inspire, and leave a lasting impact.
            </p>
          </SectionReveal>
        </div>

        <div
          ref={ref}
          className="mt-16 grid grid-cols-2 gap-8 rounded-3xl glass-panel p-10 sm:grid-cols-4"
        >
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <AnimatedCounter end={stat.end} suffix={stat.suffix} start={isInView} />
              <p className="mt-2 text-sm text-white/50">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
