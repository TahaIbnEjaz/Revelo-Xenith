import { useCountUp } from '../hooks/useCountUp.js';

// Displays a number that counts up from 0 once `start` becomes true
// (driven by the parent's scroll-into-view state), plus an optional suffix.
function AnimatedCounter({ end, suffix = '', start }) {
  const value = useCountUp(end, 1600, start);
  return (
    <span className="text-4xl font-bold text-white sm:text-5xl">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
