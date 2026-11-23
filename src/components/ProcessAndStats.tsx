import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import {
  Search,
  Compass,
  Layout,
  Code2,
  ShieldCheck,
  Rocket,
  Trophy,
  Calendar,
  Layers,
  Award
} from 'lucide-react';
import { PROCESS_STEPS, STATISTICS } from '../data/portfolioData';

export const ProcessAndStats: React.FC = () => {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, margin: '-50px' });
  const [counts, setCounts] = useState<{ [key: number]: number }>({
    0: 0,
    1: 2000,
    2: 0,
    3: 0,
  });

  useEffect(() => {
    if (isInView) {
      // Animate counts
      const duration = 1500;
      const startTime = performance.now();

      const updateCounter = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3); // cubic ease-out

        setCounts({
          0: +(ease * 9.86).toFixed(2),
          1: Math.floor(2000 + ease * 26),
          2: Math.floor(ease * 3),
          3: Math.floor(ease * 2),
        });

        if (progress < 1) {
          requestAnimationFrame(updateCounter);
        } else {
          setCounts({
            0: 9.86,
            1: 2026,
            2: 3,
            3: 2,
          });
        }
      };

      requestAnimationFrame(updateCounter);
    }
  }, [isInView]);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-4 h-4 text-[#E21D2F]" />;
      case 'Compass':
        return <Compass className="w-4 h-4 text-[#E21D2F]" />;
      case 'Layout':
        return <Layout className="w-4 h-4 text-[#E21D2F]" />;
      case 'Code2':
        return <Code2 className="w-4 h-4 text-[#E21D2F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#E21D2F]" />;
      case 'Rocket':
        return <Rocket className="w-4 h-4 text-[#E21D2F]" />;
      default:
        return <Code2 className="w-4 h-4 text-[#E21D2F]" />;
    }
  };

  return (
    <section id="process" className="py-20 lg:py-28 relative bg-transparent">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: My Development Process (6 steps) */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] border border-[#262626] mb-4">
              <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
                MY DEVELOPMENT PROCESS »
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-8">
              From Idea to Execution
            </h2>

            {/* 6 Steps in 2-column or structured vertical grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {PROCESS_STEPS.map((step) => (
                <div
                  key={step.number}
                  className="p-4 sm:p-5 rounded-xl bg-[#101010] border border-[#202020] hover:border-[#E21D2F]/40 transition-all duration-200 group flex items-start gap-3.5"
                >
                  <div className="p-2 rounded-lg bg-[#181818] border border-[#282828] shrink-0 group-hover:scale-105 transition-transform">
                    {getStepIcon(step.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold text-[#E21D2F]">
                        {step.number}
                      </span>
                      <h3 className="font-display font-bold text-xs sm:text-sm text-white uppercase tracking-wider">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#A0A0A0] leading-relaxed">
                      {step.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: At a Glance (4 big stats cards) */}
          <div ref={statsRef} className="lg:col-span-5 flex flex-col justify-start">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] border border-[#262626] mb-4 self-start">
              <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
                AT A GLANCE »
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight mb-8">
              My Journey So Far
            </h2>

            {/* 4 Statistics Cards 2x2 Grid */}
            <div className="grid grid-cols-2 gap-4">
              {STATISTICS.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  className="p-5 sm:p-6 rounded-xl bg-[#101010] border border-[#222222] hover:border-[#E21D2F]/50 transition-all duration-300 flex flex-col items-center justify-center text-center group"
                >
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-display font-black text-[#E21D2F] tracking-tight mb-1.5 group-hover:scale-105 transition-transform">
                    {idx === 0
                      ? counts[0].toFixed(2)
                      : idx === 1
                      ? counts[1]
                      : idx === 2
                      ? String(counts[2]).padStart(2, '0')
                      : String(counts[3]).padStart(2, '0')}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-white">
                    {stat.label}
                  </div>
                  <div className="text-[10px] text-[#777777] font-mono mt-1 hidden sm:block">
                    {idx === 0 ? 'Academic Distinction' : idx === 1 ? 'V.P.M.P Polytechnic' : 'Verified Projects'}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Subtext info */}
            <div className="mt-4 p-4 rounded-xl bg-[#121212] border border-[#202020] text-xs text-[#888888] flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#E21D2F]" />
              <span>All metrics reflect verified academic records and completed projects.</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
