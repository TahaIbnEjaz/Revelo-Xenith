import { Target, Sparkles, Zap, TrendingUp } from 'lucide-react';
import SectionReveal from './SectionReveal.jsx';

const PILLARS = [
  {
    icon: Target,
    title: 'Strategy',
    description: 'Every project begins with purpose.',
  },
  {
    icon: Sparkles,
    title: 'Creativity',
    description: 'Ideas designed to leave lasting impressions.',
  },
  {
    icon: Zap,
    title: 'Innovation',
    description: 'Built using modern tools and emerging technologies.',
  },
  {
    icon: TrendingUp,
    title: 'Results',
    description: 'Because beautiful work should also perform.',
  },
];

// "Why Revelo Xenith" section: the four-pillar promise, per the brief.
function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why <span className="text-gradient">Revelo Xenith</span>
          </h2>
          <p className="mt-4 text-white/60">
            Creativity isn't enough. Strategy isn't enough. Technology isn't
            enough. The strongest brands combine all three. That's exactly
            what we do.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, i) => (
            <SectionReveal key={pillar.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl glass-panel p-6 transition-all hover:-translate-y-1 hover:shadow-rx-glow">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rx-blue/30 to-rx-cyan/20 transition-transform group-hover:scale-110">
                  <pillar.icon size={20} className="text-rx-cyan" />
                </div>
                <h3 className="font-semibold text-white">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {pillar.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
