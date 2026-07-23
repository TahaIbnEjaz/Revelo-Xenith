import SectionReveal from './SectionReveal.jsx';

// About section — "Creativity Meets Strategy." Anchored via id="about" so
// the Navbar's About link can scroll straight to it from any page.
function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
        <SectionReveal>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Creativity Meets <span className="text-gradient">Strategy.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/60">
            Revelo Xenith is a creative agency that transforms ambitious ideas
            into unforgettable brands. We blend strategy, design, technology,
            and storytelling to build experiences that inspire, connect, and
            grow.
          </p>
          <p className="mt-6 text-xl font-semibold text-white">
            We don't simply create visuals.{' '}
            <span className="text-gradient">We create impact.</span>
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}

export default AboutSection;
