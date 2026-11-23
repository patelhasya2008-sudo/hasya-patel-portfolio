import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Code,
  Terminal,
  Database,
  Smartphone,
  Sparkles,
  Check,
  ChevronRight,
  Cpu,
  Layers,
  Flame,
  Info
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<{
    name: string;
    category: string;
    detail: string;
    tag?: string;
  } | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#E21D2F]" />;
      case 'Terminal':
        return <Terminal className="w-5 h-5 text-amber-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-sky-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-[#E21D2F]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-purple-400" />;
      default:
        return <Cpu className="w-5 h-5 text-[#E21D2F]" />;
    }
  };

  return (
    <section id="skills" className="py-20 lg:py-28 relative bg-transparent">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] border border-[#262626] mb-4">
            <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
              SKILLS »
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
            Technologies I Work With
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] mt-2 max-w-2xl">
            A curated set of technologies, languages, and modern tools applied directly across web apps, mobile systems, and embedded projects.
          </p>
        </div>

        {/* 5 Category Cards Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, borderColor: 'rgba(226, 29, 47, 0.6)' }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:shadow-[0_12px_35px_rgba(226,29,47,0.2)] transition-all duration-300 flex flex-col justify-between group backdrop-blur-md"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-2.5 mb-5 pb-3 border-b border-white/5">
                  <div className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-110 group-hover:bg-[#E21D2F]/15 transition-all">
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <h3 className="font-display font-semibold text-sm sm:text-base text-white">
                    {cat.title}
                  </h3>
                </div>

                {/* Skills list */}
                <div className="space-y-2">
                  {cat.skills.map((skill) => (
                    <motion.button
                      key={skill.name}
                      whileHover={{ scale: 1.02, x: 2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedSkill({ ...skill, category: cat.title })}
                      className="w-full text-left p-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.07] border border-transparent hover:border-white/10 transition-all flex items-center justify-between group/item"
                    >
                      <div className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E21D2F]/70 group-hover/item:bg-[#E21D2F] group-hover/item:shadow-[0_0_6px_#E21D2F]" />
                        <span className="text-xs sm:text-sm font-medium text-gray-200 group-hover/item:text-white">
                          {skill.name}
                        </span>
                      </div>
                      {skill.tag && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-[#888888] group-hover/item:text-[#E21D2F] group-hover/item:bg-[#E21D2F]/10">
                          {skill.tag}
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Bottom detail trigger */}
              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-[#777777]">
                <span>Verified Stack</span>
                <span className="text-[#E21D2F] font-medium">{cat.skills.length} item{cat.skills.length > 1 ? 's' : ''}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Interactive Skill Detail Popover / Callout */}
        <AnimatePresence>
          {selectedSkill && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="mt-6 p-4 sm:p-5 rounded-xl bg-[#141414] border border-[#E21D2F]/40 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-3.5">
                <div className="p-2 rounded-lg bg-[#E21D2F]/15 text-[#E21D2F] shrink-0 mt-0.5">
                  <Info className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm sm:text-base font-display">
                      {selectedSkill.name}
                    </span>
                    <span className="text-xs font-mono text-[#E21D2F] px-2 py-0.5 rounded bg-[#E21D2F]/10 border border-[#E21D2F]/20">
                      {selectedSkill.category}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A0A0A0] mt-1 leading-relaxed">
                    {selectedSkill.detail}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedSkill(null)}
                className="px-3.5 py-1.5 rounded-lg bg-[#222222] hover:bg-[#2c2c2c] text-xs font-semibold text-gray-300 hover:text-white shrink-0 self-end sm:self-center transition-colors"
              >
                Dismiss
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
