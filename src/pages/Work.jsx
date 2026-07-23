import { useState, useMemo } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import PortfolioCard from '../components/PortfolioCard.jsx';
import SectionReveal from '../components/SectionReveal.jsx';
import portfolioData from '../data/portfolio.js';

const CATEGORIES = ['All', 'Website', 'UI/UX', 'Graphic Design', 'Animation', 'Social Media'];

// "Work" page — the full, filterable project grid. Featured Work on Home
// links here via "View Our Work →".
function Work() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = useMemo(() => {
    if (activeCategory === 'All') return portfolioData;
    return portfolioData.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="pt-40 pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Every Project Starts With A Challenge.
            <br />
            <span className="text-gradient">Every Result Tells A Story.</span>
          </h1>
        </SectionReveal>

        {/* Category filters */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
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

        {/* Grid */}
        <motion.div layout className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="mt-16 text-center text-white/40">No projects in this category yet.</p>
        )}

        <div className="mt-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-rx-cyan hover:text-white"
          >
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Work;
