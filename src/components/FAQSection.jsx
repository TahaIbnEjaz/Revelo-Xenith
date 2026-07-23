import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import SectionReveal from './SectionReveal.jsx';
import faq from '../data/faq.js';

// FAQ accordion section. Only one item is open at a time.
function FAQSection() {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="py-24">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
        </SectionReveal>

        <div className="mt-12 space-y-4">
          {faq.map((item, i) => {
            const isOpen = openId === item.id;
            return (
              <SectionReveal key={item.id} delay={i * 0.06}>
                <div className="overflow-hidden rounded-2xl glass-panel">
                  <button
                    onClick={() => toggle(item.id)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-medium text-white">{item.question}</span>
                    <ChevronDown
                      size={18}
                      className={`shrink-0 text-rx-cyan transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-6 pb-5 text-sm leading-relaxed text-white/55">
                          {item.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQSection;
