import React from 'react';
import { motion } from 'motion/react';
import {
  Code,
  HeartHandshake,
  Flame,
  Lightbulb
} from 'lucide-react';
import { VALUE_PROPS } from '../data/portfolioData';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-5 h-5 text-[#E21D2F]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#E21D2F]" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-[#E21D2F]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#E21D2F]" />;
      default:
        return <Code className="w-5 h-5 text-[#E21D2F]" />;
    }
  };

  return (
    <section className="py-20 lg:py-28 relative bg-transparent">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] border border-[#262626] mb-4">
            <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
              WHY WORK WITH ME? »
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            I Don't Just Code, I Solve Problems.
          </h2>
        </div>

        {/* 4 Cards Grid matching reference layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUE_PROPS.map((prop, idx) => (
            <motion.div
              key={prop.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-2xl bg-[#0f0f0f] border border-[#222222] hover:border-[#E21D2F]/50 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="p-3 rounded-xl bg-[#161616] border border-[#282828] w-fit mb-5 group-hover:scale-110 transition-transform">
                  {getIcon(prop.iconName)}
                </div>

                <h3 className="font-display font-bold text-lg text-white mb-2.5">
                  {prop.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                  {prop.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-[#1c1c1c] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                <span>Hasya Patel</span>
                <span className="text-[#E21D2F] font-bold">0{idx + 1}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
