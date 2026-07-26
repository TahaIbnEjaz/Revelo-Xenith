import { Link } from 'react-router-dom';
import { ArrowUpRight, Check } from 'lucide-react';

// Reusable glass card for a single service or subcategory. Used on the
// Home services preview, inside the Services page category accordion
// (with `expanded` to show the full benefits list + CTA), and for
// categories with no subcategories (`hideIcon` skips the icon badge
// since those are rendered as a plain nested card under an accordion
// header that already has its own icon).
function ServiceCard({ service, expanded = false, hideIcon = false }) {
  const Icon = service.icon;

  return (
    <div className="group flex h-full flex-col rounded-2xl glass-panel p-7 transition-all hover:-translate-y-1.5 hover:shadow-rx-glow">
      {Icon && !hideIcon && (
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-rx-blue/30 to-rx-cyan/20 transition-transform group-hover:scale-110">
          <Icon size={22} className="text-rx-cyan" />
        </div>
      )}

      <h3 className={`text-lg font-semibold text-white ${Icon && !hideIcon ? 'mt-5' : ''}`}>
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-white">{service.description}</p>

      {expanded && (
        <ul className="mt-5 space-y-2.5">
          {service.benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-2 text-sm text-white/80">
              <Check size={15} className="mt-0.5 shrink-0 text-rx-cyan" />
              {benefit}
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-6">
        <Link
          to="/contact"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-rx-cyan transition-colors hover:text-white"
        >
          Get Started
          <ArrowUpRight size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </div>
  );
}

export default ServiceCard;
