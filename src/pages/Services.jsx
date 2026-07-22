import ServiceCard from '../components/ServiceCard.jsx';
import SectionReveal from '../components/SectionReveal.jsx';
import CTASection from '../components/CTASection.jsx';
import services from '../data/services.js';

// Full Services page: every service shown expanded (icon, title,
// description, benefits, CTA) per the brief's Services page spec.
function Services() {
  return (
    <div>
      <div className="pt-40 pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionReveal className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="mt-4 text-white/60">
              Everything you need to design, launch, and grow — under one roof.
            </p>
          </SectionReveal>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <SectionReveal key={service.id} delay={i * 0.06}>
                <ServiceCard service={service} expanded />
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>

      <CTASection />
    </div>
  );
}

export default Services;
