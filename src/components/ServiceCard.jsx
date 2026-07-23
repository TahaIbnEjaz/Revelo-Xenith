import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

// Capabilities card: icon, title, short punchy lines (one per <p>), and an
// "Explore X →" link. Used in the in-page Capabilities section on Home.
function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <div className="group flex h-full flex-col rounded-2xl glass-panel p-7 transition-all hover:-translate-y-1.5 hover:shadow-rx-glow">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rx-blue/30 to-rx-cyan/20 transition-transform group-hover:scale-110">
        <Icon size={22} className="text-rx-cyan" />
      </div>

      <h3 className="mt-5 text-lg font-semibold text-white">{service.title}</h3>

      <div className="mt-2 space-y-0.5">
        {service.lines.map((line, i) => (
          <p key={i} className="text-sm leading-relaxed text-white/55">
            {line}
          </p>
        ))}
      </div>

      <div className="mt-auto pt-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-rx-cyan transition-colors hover:text-white"
        >
          {service.exploreLabel}
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
