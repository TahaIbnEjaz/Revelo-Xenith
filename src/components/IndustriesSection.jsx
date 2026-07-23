import SectionReveal from './SectionReveal.jsx';
import industries from '../data/industries.js';

// "Industries" section — pill/tag grid of the sectors Revelo Xenith serves.
function IndustriesSection() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Built For <span className="text-gradient">Every Vision.</span>
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1} className="mt-12 flex flex-wrap justify-center gap-3">
          {industries.map((industry) => (
            <span
              key={industry}
              className="rounded-full glass-panel px-5 py-2.5 text-sm font-medium text-white/70 transition-all hover:-translate-y-0.5 hover:text-rx-cyan hover:shadow-rx-glow"
            >
              {industry}
            </span>
          ))}
        </SectionReveal>
      </div>
    </section>
  );
}

export default IndustriesSection;
