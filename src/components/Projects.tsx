import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
  Smartphone,
  LayoutDashboard,
  Cpu
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ProjectCaseStudyModal } from './ProjectCaseStudyModal';

export const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 lg:py-28 relative bg-transparent">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 lg:mb-16 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] border border-[#262626] mb-4">
              <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
                FEATURED PROJECTS »
              </span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
              Things I've Built
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0A0] mt-2 max-w-xl">
              A collection of projects that showcase my skills in web development, application development, and problem solving.
            </p>
          </div>

          <div className="text-xs font-mono text-[#777777] hidden sm:flex items-center gap-2">
            <span>Verified 2024–2026</span>
            <span className="text-[#E21D2F] font-bold">● 3 Showcase Builds</span>
          </div>
        </div>

        {/* 3 Large Project Cards Grid matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, borderColor: 'rgba(226, 29, 47, 0.7)' }}
              className="rounded-2xl bg-white/[0.02] border border-white/10 hover:shadow-[0_15px_40px_rgba(226,29,47,0.25)] overflow-hidden flex flex-col justify-between group transition-all duration-300 relative backdrop-blur-md"
            >
              <div>
                {/* Visual Area with Number Badge */}
                <div className="relative p-3 pb-0">
                  {/* Number Badge in top left corner with red border */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="absolute top-5 left-5 z-20 px-2.5 py-1 rounded bg-[#E21D2F] text-white font-mono font-bold text-xs shadow-lg shadow-[#E21D2F]/40"
                  >
                    {project.number}
                  </motion.div>

                  <ProjectMockup type={project.mockupType} title={project.title} />
                </div>

                {/* Content Section */}
                <div className="p-6">
                  {/* Category in red text */}
                  <div className="text-xs font-mono font-semibold text-[#E21D2F] mb-1">
                    {project.category} {project.subCategory && `• ${project.subCategory}`}
                  </div>

                  {/* Title */}
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white mb-2.5 group-hover:text-white transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Feature Tags with checkmarks in 2-column grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {project.features.map((feature, fIdx) => (
                      <motion.div
                        key={fIdx}
                        whileHover={{ scale: 1.02 }}
                        className="px-2.5 py-1.5 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-2"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E21D2F] shrink-0" />
                        <span className="text-[11px] font-medium text-gray-300 truncate">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTA bar */}
              <div className="px-6 pb-6 pt-0">
                <motion.button
                  id={`project-cta-${project.id}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedProject(project)}
                  className="w-full inline-flex items-center justify-between px-4 py-3.5 rounded-xl bg-white/[0.04] hover:bg-[#E21D2F]/20 text-[#E21D2F] hover:text-white border border-white/10 hover:border-[#E21D2F]/80 font-bold text-xs sm:text-sm transition-all duration-200 group/btn shadow-sm"
                >
                  <span>
                    {project.id === 'weather-reporting-system' ? 'View Project →' : 'View Case Study →'}
                  </span>
                  <ArrowRight className="w-4 h-4 text-[#E21D2F] group-hover/btn:text-white group-hover/btn:translate-x-1.5 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectCaseStudyModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
