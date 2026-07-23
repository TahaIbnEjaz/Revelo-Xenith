import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// On every route change: if the URL has a hash (e.g. "/#about"), scroll to
// that element once it's mounted; otherwise reset scroll to the top. This
// covers both same-page anchor nav and cross-page nav that lands on an
// anchor (e.g. navigating from /work to "/#process").
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      // Wait a tick for the target page/section to render before measuring.
      const raf = requestAnimationFrame(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo(0, 0);
        }
      });
      return () => cancelAnimationFrame(raf);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default ScrollToTop;
