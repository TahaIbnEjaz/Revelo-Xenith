import SectionReveal from './SectionReveal.jsx';
import process from '../data/process.js';

// "Our Process" section — numbered timeline of the six project stages.
// Anchored via id="process" for the Navbar's Process link.
function ProcessSection() {
  return (
    <section id="process" className="py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Great Brands Don't Happen <span className="text-gradient">By Accident.</span>
          </h2>
        </SectionReveal>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {process.map((step, i) => (
            <SectionReveal key={step.id} delay={i * 0.07}>
              <div className="group h-full rounded-2xl glass-panel p-6 transition-all hover:-translate-y-1 hover:shadow-rx-glow">
                <span className="text-4xl font-bold text-white/15 transition-colors group-hover:text-rx-cyan/40">
                  {step.id}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
                <p className="mt-1 text-sm text-white/55">{step.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;
