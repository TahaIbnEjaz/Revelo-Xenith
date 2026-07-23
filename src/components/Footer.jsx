import { Link } from 'react-router-dom';
import { Instagram, Facebook, Linkedin, Mail, MapPin, Globe2 } from 'lucide-react';
import logo from '../assets/logo.png';

const NAVIGATION_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'Services', to: '/#capabilities' },
  { label: 'Portfolio', to: '/work' },
  { label: 'Contact', to: '/contact' },
  { label: 'Careers', to: '#' },
];

const SERVICE_LINKS = [
  'Branding',
  'Graphic Design',
  'Digital Art',
  'Website Development',
  'UI/UX',
  'Digital Marketing',
  'Photography',
  'Videography',
  '3D Animation',
  'Advertising',
];

// Site-wide footer. Logo + wordmark appear here too per brand guidelines.
function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-rx-navy-deep">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2.5">
              <img src={logo} alt="Revelo Xenith" className="h-9 w-auto" />
              <span className="text-lg font-semibold tracking-tight text-white">
                Revelo <span className="text-rx-cyan">Xenith</span>
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              Where Brands Rise.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full glass-panel text-white/70 transition-colors hover:text-rx-cyan">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full glass-panel text-white/70 transition-colors hover:text-rx-cyan">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full glass-panel text-white/70 transition-colors hover:text-rx-cyan">
                <Linkedin size={18} />
              </a>
              <a href="#" aria-label="X (Twitter)" className="flex h-10 w-10 items-center justify-center rounded-full glass-panel text-xs font-semibold text-white/70 transition-colors hover:text-rx-cyan">
                X
              </a>
              <a href="#" aria-label="Behance" className="flex h-10 w-10 items-center justify-center rounded-full glass-panel text-xs font-semibold text-white/70 transition-colors hover:text-rx-cyan">
                Be
              </a>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Navigation</h4>
            <ul className="space-y-3">
              {NAVIGATION_LINKS.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="text-sm text-white/50 transition-colors hover:text-rx-cyan">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {SERVICE_LINKS.map((service) => (
                <li key={service}>
                  <Link to="/#capabilities" className="text-sm text-white/50 transition-colors hover:text-rx-cyan">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:flex-wrap sm:gap-8 text-sm text-white/50">
          <span className="flex items-center gap-2">
            <Mail size={16} className="text-rx-cyan" />
            hello@reveloxenith.com
          </span>
          <span className="flex items-center gap-2">
            <MapPin size={16} className="text-rx-cyan" />
            Pakistan
          </span>
          <span className="flex items-center gap-2">
            <Globe2 size={16} className="text-rx-cyan" />
            Worldwide Services
          </span>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Revelo Xenith. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/70">Privacy Policy</a>
            <a href="#" className="hover:text-white/70">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
