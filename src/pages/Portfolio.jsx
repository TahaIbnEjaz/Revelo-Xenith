import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import PortfolioCard from '../components/PortfolioCard.jsx';
import SectionReveal from '../components/SectionReveal.jsx';
import portfolioData from '../data/portfolio.js';

// Two-level filtering, driven by the same category/subcategory taxonomy
// as the Services page:
//   1. Main category tabs (All, Web Design & UI/UX, Animation, ...)
//   2. Subcategory pills — only shown once a category with subcategories
//      is selected (e.g. Animation -> Product Animation, Environmental...)
const CATEGORY_TABS = [
  'All',
  ...new Set(portfolioData.map((project) => project.category)),
];

function subcategoriesFor(category) {
  return [
    ...new Set(
      portfolioData
        .filter((project) => project.category === category && project.subcategory)
        .map((project) => project.subcategory),
    ),
  ];
}

function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeSubcategory, setActiveSubcategory] = useState('All');

  const subTabs = useMemo(() => {
    const subs = subcategoriesFor(activeCategory);
    return subs.length > 0 ? ['All', ...subs] : [];
  }, [activeCategory]);

  const selectCategory = (category) => {
    setActiveCategory(category);
    setActiveSubcategory('All'); // reset subfilter whenever the main category changes
  };

  const filtered = useMemo(() => {
    return portfolioData.filter((p) => {
      const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
      const matchesSubcategory =
        activeSubcategory === 'All' || p.subcategory === activeSubcategory;
      return matchesCategory && matchesSubcategory;
    });
  }, [activeCategory, activeSubcategory]);

  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Our <span className="text-gradient">Portfolio</span>
          </h1>
          <p className="mt-4 text-white/60">
            A selection of projects across web, animation, illustration, and design.
          </p>
        </SectionReveal>

        {/* Main category tabs */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CATEGORY_TABS.map((category) => (
            <button
              key={category}
              onClick={() => selectCategory(category)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-rx-blue to-rx-cyan text-rx-navy-deep shadow-rx-glow'
                  : 'glass-panel text-white/60 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Subcategory pills — only appear when the active category has them */}
        <AnimatePresence mode="wait">
          {subTabs.length > 0 && (
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="mt-5 flex flex-wrap justify-center gap-2 overflow-hidden"
            >
              {subTabs.map((sub) => (
                <button
                  key={sub}
                  onClick={() => setActiveSubcategory(sub)}
                  className={`rounded-full border px-3.5 py-1.5 text-xs font-medium transition-all ${
                    activeSubcategory === sub
                      ? 'border-rx-cyan/50 bg-rx-cyan/15 text-rx-cyan'
                      : 'border-white/10 text-white/45 hover:border-white/25 hover:text-white/80'
                  }`}
                >
                  {sub}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Grid */}
        <motion.div
          layout
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-white/40">
            No projects in this category yet.
          </p>
        )}
      </div>
    </div>
  );
}

export default Portfolio;
