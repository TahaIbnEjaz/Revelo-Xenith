import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import logo from '../assets/logo.png';

// Scroll-pinned story beat between Hero and About: the logo fades out as
// the person scrolls, then two sentences fade in and out in sequence —
// per the brief's "logo slowly disappears / a sentence fades in" direction.
// Implemented with a tall (300vh) container + position: sticky, so the
// content stays pinned on screen while scroll progress drives the fades.
function ScrollStory() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  const logoOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const logoScale = useTransform(scrollYProgress, [0, 0.18], [1, 0.85]);

  const line1Opacity = useTransform(scrollYProgress, [0.25, 0.4, 0.55], [0, 1, 0]);
  const line2Opacity = useTransform(scrollYProgress, [0.62, 0.78], [0, 1]);

  return (
    <section ref={ref} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-6">
        <motion.img
          src={logo}
          alt="Revelo Xenith"
          style={{ opacity: logoOpacity, scale: logoScale }}
          className="absolute h-20 w-auto sm:h-24"
        />
        <motion.p
          style={{ opacity: line1Opacity }}
          className="absolute max-w-xl text-center text-2xl font-semibold text-white sm:text-3xl"
        >
          Every successful brand started with an idea.
        </motion.p>
        <motion.p
          style={{ opacity: line2Opacity }}
          className="absolute max-w-xl text-center text-2xl font-semibold text-white sm:text-3xl"
        >
          We make sure the world remembers it.
        </motion.p>
      </div>
    </section>
  );
}

export default ScrollStory;
