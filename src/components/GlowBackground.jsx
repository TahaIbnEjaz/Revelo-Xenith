import { motion } from 'framer-motion';

// Ambient floating gradient blobs used behind Hero and other key sections
// to create the "soft blue lighting" premium-SaaS atmosphere from the brief.
// Purely decorative — aria-hidden and pointer-events-none so it never
// interferes with content or screen readers.
function GlowBackground({ variant = 'default' }) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <motion.div
        animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -top-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-rx-blue/30 blur-[120px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], x: [0, -20, 0] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/3 -right-40 h-[26rem] w-[26rem] rounded-full bg-rx-cyan/20 blur-[130px]"
      />
      {variant === 'default' && (
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] rounded-full bg-rx-blue/20 blur-[110px]"
        />
      )}
    </div>
  );
}

export default GlowBackground;
