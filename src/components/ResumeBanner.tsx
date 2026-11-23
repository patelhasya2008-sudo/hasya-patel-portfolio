import React from 'react';
import { motion } from 'motion/react';
import { Eye, Download, FileText, Sparkles } from 'lucide-react';

interface ResumeBannerProps {
  onOpenResume: () => void;
  onDownloadResume: () => void;
}

export const ResumeBanner: React.FC<ResumeBannerProps> = ({
  onOpenResume,
  onDownloadResume,
}) => {
  return (
    <section className="py-14 sm:py-20 relative bg-transparent">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-2xl bg-gradient-to-r from-[#121212] via-[#161214] to-[#140c0e] border border-[#2a1a1d] p-8 sm:p-12 overflow-hidden shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Subtle background glow */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 bg-gradient-to-l from-[#E21D2F]/10 to-transparent pointer-events-none" />

          {/* Left Text */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight mb-3">
              LET'S BUILD SOMETHING GREAT.
            </h2>
            <p className="text-sm sm:text-base text-[#B0B0B0] leading-relaxed">
              Interested in my work? Explore my resume, projects, skills, education, and learning journey.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div className="relative z-10 flex flex-wrap items-center gap-4 w-full lg:w-auto shrink-0">
            <button
              id="resume-banner-view-btn"
              onClick={onOpenResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#E21D2F] hover:bg-[#c81626] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#E21D2F]/30 hover:shadow-[#E21D2F]/50 transition-all duration-200"
            >
              <Eye className="w-4 h-4" />
              <span>View Resume</span>
            </button>

            <button
              id="resume-banner-download-btn"
              onClick={onDownloadResume}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#1a1a1a] hover:bg-[#222222] text-[#F5F5F5] border border-[#333333] hover:border-[#E21D2F]/50 font-semibold text-sm transition-all duration-200"
            >
              <Download className="w-4 h-4 text-[#A0A0A0]" />
              <span>Download Resume</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
