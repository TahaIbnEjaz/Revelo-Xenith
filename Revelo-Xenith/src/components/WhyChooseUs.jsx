import { Zap, ShieldCheck, LineChart, HeartHandshake } from 'lucide-react';
import SectionReveal from './SectionReveal.jsx';

const FEATURES = [
  {
    icon: Zap,
    title: 'Fast Execution',
    description: 'Projects move quickly without sacrificing craft or quality control.',
  },
  {
    icon: ShieldCheck,
    title: 'Transparent Reporting',
    description: 'Real dashboards, real numbers, you always know what is working.',
  },
  {
    icon: LineChart,
    title: 'Results-Driven Strategy',
    description: 'Every decision is tied back to growth metrics that matter to you.',
  },
  {
    icon: HeartHandshake,
    title: 'True Creative Partnership',
    description: 'We work as an extension of your team, not a detached vendor.',
  },
];

// "Why Choose Us" premium feature card grid on the Home page.
function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Brands Choose <span className="text-gradient">Revelo Xenith</span>
          </h2>
          <p className="mt-4 text-white/80">
            We pair creative craft with the discipline of performance marketing.
          </p>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, i) => (
            <SectionReveal key={feature.title} delay={i * 0.08}>
              <div className="group h-full rounded-2xl glass-panel p-6 transition-all hover:-translate-y-1 hover:shadow-rx-glow">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rx-blue/30 to-rx-cyan/20 transition-transform group-hover:scale-110">
                  <feature.icon size={20} className="text-rx-cyan" />
                </div>
                <h3 className="font-semibold text-white">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/80">
                  {feature.description}
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
