import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Twitter, Mail, MapPin, Phone } from 'lucide-react';
import logo from '../assets/logo.png';

const FOOTER_LINKS = {
  Company: [
    { label: 'Home', to: '/' },
    { label: 'Services', to: '/services' },
    { label: 'Portfolio', to: '/portfolio' },
    { label: 'Contact', to: '/contact' },
  ],
  Services: [
    { label: 'Web Design & UI/UX', to: '/services' },
    { label: 'Animation', to: '/services' },
    { label: 'Digital Art & Illustration', to: '/services' },
    { label: 'Graphic Design', to: '/services' },
  ],
};

// Site-wide footer. Logo appears here too per brand guidelines (never text-only).
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
              A digital marketing agency helping ambitious brands grow through
              design, strategy, and performance.
            </p>
            <div className="mt-6 flex gap-4">
              {[Instagram, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-10 w-10 items-center justify-center rounded-full glass-panel text-white/70 transition-colors hover:text-rx-cyan"
                  aria-label="Social link"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="mb-4 text-sm font-semibold text-white">{heading}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="text-sm text-white/50 transition-colors hover:text-rx-cyan"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div>
            <h4 className="mb-4 text-sm font-semibold text-white">Contact</h4>
            <ul className="space-y-3 text-sm text-white/50">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0 text-rx-cyan" />
                <span>148 Market Street, Suite 400</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="shrink-0 text-rx-cyan" />
                <span>+1 (555) 010-2938</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0 text-rx-cyan" />
                <span>hello@revelo-xenith.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Revelo Xenith. All rights reserved.</p>
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
