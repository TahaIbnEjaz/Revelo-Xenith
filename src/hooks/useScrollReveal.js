import { useRef } from 'react';
import { useInView } from 'framer-motion';

// Returns a ref + boolean for whether the element has scrolled into view.
// `once: true` means it won't re-trigger on scroll back up, avoiding
// distracting re-animation as the user scrolls up and down the page.
export function useScrollReveal(amount = 0.2) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount });
  return { ref, isInView };
}
