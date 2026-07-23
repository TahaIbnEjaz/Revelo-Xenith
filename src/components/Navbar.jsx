import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

// Home and the in-page anchor items (About, Capabilities, Process) all
// resolve against "/" with a hash; Work and Contact are dedicated routes.
const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Capabilities', to: '/#capabilities' },
  { label: 'Work', to: '/work' },
  { label: 'Process', to: '/#process' },
  { label: 'Contact', to: '/contact' },
];

// Fixed, glassmorphic navbar. Fades in on mount and gains a stronger
// glass background once the page has scrolled, so it stays legible
// over any hero content behind it.
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // NavLink can't natively match a hash-only difference against the same
  // path, so anchor items are highlighted manually against the current
  // pathname + hash instead of relying on NavLink's isActive.
  const currentKey = `${location.pathname}${location.hash}`;
  const isLinkActive = (to) => {
    if (to === '/') return currentKey === '/';
    return currentKey === to || (to.includes('#') ? false : location.pathname === to);
  };

  const linkClass = (to) =>
    `text-sm font-medium transition-colors ${
      isLinkActive(to) ? 'text-rx-cyan' : 'text-white/70 hover:text-white'
    }`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'glass-panel shadow-rx-card' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo + wordmark — logo image is never replaced with text alone */}
        <Link to="/" className="flex items-center gap-2.5" aria-label="Revelo Xenith home">
          <img src={logo} alt="Revelo Xenith" className="h-9 w-auto" />
          <span className="text-lg font-semibold tracking-tight text-white">
            Revelo <span className="text-rx-cyan">Xenith</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <Link key={link.to} to={link.to} className={linkClass(link.to)}>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:block">
          <Link
            to="/contact"
            className="rounded-full bg-gradient-to-r from-rx-blue to-rx-cyan px-5 py-2.5 text-sm font-semibold text-rx-navy-deep shadow-rx-glow transition-transform hover:scale-105"
          >
            Start Your Project
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white md:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="glass-panel overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 px-6 py-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={linkClass(link.to)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="rounded-full bg-gradient-to-r from-rx-blue to-rx-cyan px-5 py-2.5 text-center text-sm font-semibold text-rx-navy-deep"
              >
                Start Your Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Navbar;
