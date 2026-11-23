import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  ArrowLeft,
  CheckCircle2,
  Cpu,
  Layers,
  Code2,
  AlertTriangle,
  Lightbulb,
  Sparkles,
  ExternalLink,
  Smartphone,
  LayoutDashboard,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';

interface ProjectCaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectCaseStudyModal: React.FC<ProjectCaseStudyModalProps> = ({
  project,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'process' | 'challenges'>('overview');

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-[#0e0e0e] border border-[#262626] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col"
        >
          {/* Modal Header bar */}
          <div className="px-6 py-4 bg-[#141414] border-b border-[#222222] flex items-center justify-between shrink-0">
            <button
              onClick={onClose}
              className="inline-flex items-center gap-2 text-xs font-mono text-[#A0A0A0] hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4 text-[#E21D2F]" />
              <span>Back to Projects</span>
            </button>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-[#1f1f1f] text-[#E21D2F] border border-[#2f2f2f]">
                {project.number} • {project.category}
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#202020] text-[#A0A0A0] hover:text-white hover:bg-[#2c2c2c] transition-colors"
                aria-label="Close Case Study"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Body Scroll Area */}
          <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
            
            {/* Title & Category Banner */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#E21D2F]" />
                <span className="text-xs font-mono tracking-widest text-[#E21D2F] uppercase">
                  Project Case Study
                </span>
              </div>
              <h2 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight">
                {project.title}
              </h2>
              <p className="text-base text-[#A0A0A0] leading-relaxed max-w-3xl">
                {project.description}
              </p>
            </div>

            {/* High-fidelity Visual Mockup Showcase */}
            <div className="rounded-xl overflow-hidden">
              <ProjectMockup type={project.mockupType} title={project.title} />
            </div>

            {/* Navigation Tabs for Deep Dive */}
            <div className="flex items-center gap-2 border-b border-[#222222] pb-2 overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview & Objectives' },
                { id: 'architecture', label: 'Tech Stack & Features' },
                { id: 'process', label: 'Development Process' },
                { id: 'challenges', label: 'Engineering Challenges & Learnings' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#E21D2F] text-white font-semibold shadow-md'
                      : 'text-[#888888] hover:text-white hover:bg-[#181818]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab 1: Overview & Objectives */}
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div className="p-5 rounded-xl bg-[#141414] border border-[#222222] space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#E21D2F]">
                    Project Overview
                  </h4>
                  <p className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
                    {project.caseStudy.overview}
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[#141414] border border-[#222222] space-y-2">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400">
                    Primary Objective
                  </h4>
                  <p className="text-sm sm:text-base text-[#D0D0D0] leading-relaxed">
                    {project.caseStudy.objective}
                  </p>
                </div>

                {/* Key Metrics / Outcomes */}
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-3">
                    Key Outcomes & Benchmarks
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {project.caseStudy.metricsOrOutcomes.map((metric, idx) => (
                      <div key={idx} className="p-3.5 rounded-lg bg-[#121212] border border-[#262626] flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#E21D2F] shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-300 font-medium leading-tight">{metric}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 2: Tech Stack & Features */}
            {activeTab === 'architecture' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-3">
                    Verified Technology Stack
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.caseStudy.techStackDetails.map((tech, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#141414] border border-[#222222] space-y-1">
                        <div className="flex items-center gap-2">
                          <Code2 className="w-4 h-4 text-[#E21D2F]" />
                          <span className="text-sm font-bold text-white">{tech.name}</span>
                        </div>
                        <p className="text-xs text-[#A0A0A0] pl-6 leading-relaxed">
                          {tech.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-3">
                    Core Functionalities
                  </h4>
                  <div className="space-y-3">
                    {project.caseStudy.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#141414] border border-[#222222]">
                        <div className="text-sm font-bold text-white mb-1">
                          {feat.title}
                        </div>
                        <div className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                          {feat.detail}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}

            {/* Tab 3: Development Process */}
            {activeTab === 'process' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-4"
              >
                <div className="relative pl-6 border-l-2 border-[#242424] space-y-6">
                  {project.caseStudy.developmentProcess.map((step, idx) => (
                    <div key={idx} className="relative group">
                      <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-[#101010] border-2 border-[#E21D2F] flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E21D2F]" />
                      </div>
                      <div className="p-4 rounded-xl bg-[#141414] border border-[#222222]">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-bold text-white font-display">
                            Step {idx + 1}: {step.step}
                          </span>
                          <span className="text-[10px] font-mono text-[#E21D2F]">Completed</span>
                        </div>
                        <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Tab 4: Challenges & Learnings */}
            {activeTab === 'challenges' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div>
                  <h4 className="text-sm font-bold text-white font-display mb-3 flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-amber-400" />
                    <span>Engineering Challenges & Solutions</span>
                  </h4>
                  <div className="space-y-3">
                    {project.caseStudy.challenges.map((chal, idx) => (
                      <div key={idx} className="p-4 rounded-xl bg-[#141414] border border-[#262626] space-y-2">
                        <div className="text-xs font-semibold text-amber-300">
                          Problem: {chal.issue}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300 bg-[#0e1610] p-3 rounded-lg border border-emerald-500/20 leading-relaxed">
                          <span className="text-emerald-400 font-semibold">Solution: </span>
                          {chal.solution}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 rounded-xl bg-[#141414] border border-[#222222]">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-[#E21D2F] mb-3">
                      <Lightbulb className="w-4 h-4" />
                      <span>Key Learnings</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                      {project.caseStudy.learnings.map((learn, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#E21D2F] font-bold">•</span>
                          <span>{learn}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-5 rounded-xl bg-[#141414] border border-[#222222]">
                    <div className="flex items-center gap-2 text-xs font-mono uppercase text-sky-400 mb-3">
                      <TrendingUp className="w-4 h-4" />
                      <span>Future Roadmap</span>
                    </div>
                    <ul className="space-y-2 text-xs sm:text-sm text-gray-300">
                      {project.caseStudy.futureImprovements.map((imp, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-sky-400 font-bold">•</span>
                          <span>{imp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* Modal Footer */}
          <div className="px-6 py-4 bg-[#141414] border-t border-[#222222] flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-[#777777]">
              Hasya Patel • Project #{project.number}
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#E21D2F] hover:bg-[#c81626] text-white font-semibold text-xs sm:text-sm transition-colors"
            >
              Close Case Study
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
