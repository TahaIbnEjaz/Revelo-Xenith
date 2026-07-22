import { motion } from 'framer-motion';
import { useScrollReveal } from '../hooks/useScrollReveal.js';

// Shared wrapper that fades + slides a section's content up into place
// the first time it scrolls into view. Wrap any section body with this
// instead of re-writing the same Framer Motion boilerplate everywhere.
function SectionReveal({ children, className = '', delay = 0 }) {
  const { ref, isInView } = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default SectionReveal;
