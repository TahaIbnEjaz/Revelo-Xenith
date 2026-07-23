import { motion } from 'framer-motion';

// Renders a giant "X" made of glowing, pulsing particles along two
// diagonals — the animated background centerpiece for the Hero, per the
// brief's "giant animated 3D X made of particles" direction. Built with
// SVG + Framer Motion rather than a 3D engine to keep it lightweight.
function ParticleX() {
  const size = 600;
  const count = 26;
  const particles = [];

  for (let i = 0; i < count; i++) {
    const t = i / (count - 1);
    // Diagonal 1: top-left to bottom-right
    particles.push({
      id: `d1-${i}`,
      x: t * size,
      y: t * size,
      delay: t * 1.6,
    });
    // Diagonal 2: top-right to bottom-left
    particles.push({
      id: `d2-${i}`,
      x: size - t * size,
      y: t * size,
      delay: t * 1.6 + 0.35,
    });
  }

  return (
    <svg viewBox={`0 0 ${size} ${size}`} className="h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="particleGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#4FDFFF" stopOpacity="1" />
          <stop offset="100%" stopColor="#2563EB" stopOpacity="0" />
        </radialGradient>
      </defs>
      {particles.map((p) => (
        <motion.circle
          key={p.id}
          cx={p.x}
          cy={p.y}
          r={4}
          fill="url(#particleGlow)"
          initial={{ opacity: 0.3, scale: 0.8 }}
          animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
          transition={{
            duration: 3 + (p.delay % 2),
            repeat: Infinity,
            delay: p.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </svg>
  );
}

export default ParticleX;
