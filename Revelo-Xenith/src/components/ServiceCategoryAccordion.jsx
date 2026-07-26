import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import ServiceCard from './ServiceCard.jsx';

// Accordion row for a single main service category (e.g. "Animation").
// Collapsed: icon, title, one-line description, item count.
// Expanded: nested subcategory ServiceCards in a grid — giving clear
// visual separation between the main heading and its subheadings.
// Categories with no subcategories (e.g. Graphic Design) render their
// own benefits directly instead of a nested grid.
function ServiceCategoryAccordion({ category, isOpen, onToggle }) {
  const Icon = category.icon;
  const hasSubcategories = category.subcategories?.length > 0;

  return (
    <div className="overflow-hidden rounded-2xl glass-panel">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-5 p-6 text-left transition-colors hover:bg-white/[0.03] sm:p-7"
      >
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-rx-blue/30 to-rx-cyan/20">
          <Icon size={26} className="text-rx-cyan" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <h2 className="text-xl font-semibold text-white sm:text-2xl">{category.title}</h2>
            {hasSubcategories && (
              <span className="rounded-full border border-rx-cyan/25 bg-rx-cyan/10 px-2.5 py-0.5 text-xs font-medium text-rx-cyan">
                {category.subcategories.length} services
              </span>
            )}
          </div>
          <p className="mt-1.5 line-clamp-2 text-sm text-white/80 sm:text-base">
            {category.description}
          </p>
        </div>

        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="shrink-0 text-white/50"
        >
          <ChevronDown size={22} />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="border-t border-white/10 p-6 pt-7 sm:p-7 sm:pt-8">
              {hasSubcategories ? (
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {category.subcategories.map((sub) => (
                    <ServiceCard key={sub.id} service={sub} expanded />
                  ))}
                </div>
              ) : (
                <ServiceCard
                  service={{
                    title: `${category.title} Services`,
                    description: category.description,
                    benefits: category.benefits,
                  }}
                  expanded
                  hideIcon
                />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ServiceCategoryAccordion;
