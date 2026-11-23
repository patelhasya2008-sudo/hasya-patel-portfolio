import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Award,
  ExternalLink,
  CheckCircle2,
  X,
  Sparkles,
  ShieldCheck,
  BookOpen,
  ArrowUpRight
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import { Certificate } from '../types';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const renderCertVisual = (type: 'google' | 'microsoft') => {
    if (type === 'google') {
      return (
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
          {/* Google Cloud style cloud emblem */}
          <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
            <path
              d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"
              fill="url(#googleCloudGrad)"
            />
            <defs>
              <linearGradient id="googleCloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4285F4" />
                <stop offset="35%" stopColor="#EA4335" />
                <stop offset="70%" stopColor="#FBBC05" />
                <stop offset="100%" stopColor="#34A853" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      );
    }

    return (
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shrink-0 shadow-inner group-hover:scale-105 transition-transform">
        {/* Microsoft 4-square emblem */}
        <div className="grid grid-cols-2 gap-1.5 w-10 h-10">
          <div className="bg-[#f25022] rounded-xs" />
          <div className="bg-[#7fba00] rounded-xs" />
          <div className="bg-[#00a4ef] rounded-xs" />
          <div className="bg-[#ffb900] rounded-xs" />
        </div>
      </div>
    );
  };

  return (
    <section id="certificates" className="py-20 lg:py-28 relative bg-transparent">
      {/* Subtle top divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] border border-[#262626] mb-4">
            <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
              CERTIFICATIONS & LEARNING »
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight">
            Always Learning. Always Building.
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] mt-2 max-w-xl">
            Verified technical certifications in generative AI, prompt engineering, and modern cloud technologies.
          </p>
        </div>

        {/* 2 Big Certificate Cards matching reference image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="p-6 sm:p-8 rounded-2xl bg-[#0f0f0f] border border-[#222222] hover:border-[#E21D2F]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <div className="flex items-start gap-5 mb-6">
                  {renderCertVisual(cert.iconType)}
                  <div>
                    <div className="text-xs font-mono font-semibold text-[#E21D2F] uppercase tracking-wider mb-1">
                      {cert.issuer}
                    </div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white leading-snug group-hover:text-white transition-colors">
                      {cert.title}
                    </h3>
                    <div className="text-xs text-[#888888] mt-1 font-mono">
                      {cert.organization}
                    </div>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#A0A0A0] leading-relaxed mb-6">
                  {cert.description}
                </p>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skillsCovered.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-1 rounded-md bg-[#161616] border border-[#252525] text-[11px] font-medium text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action */}
              <div className="pt-4 border-t border-[#1c1c1c] flex items-center justify-between">
                <span className="text-xs font-mono text-emerald-400 flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Verified Credential</span>
                </span>

                <button
                  id={`cert-btn-${cert.id}`}
                  onClick={() => setSelectedCert(cert)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#181818] hover:bg-[#E21D2F] text-white text-xs sm:text-sm font-semibold border border-[#2b2b2b] hover:border-[#E21D2F] transition-all duration-200"
                >
                  <span>View Certificate</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#101010] border border-[#282828] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#1c1c1c] text-[#A0A0A0] hover:text-white transition-colors"
                aria-label="Close Certificate Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-4 mb-6">
                {renderCertVisual(selectedCert.iconType)}
                <div>
                  <span className="text-xs font-mono text-[#E21D2F] font-bold uppercase tracking-wider">
                    Official Certificate
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-white mt-0.5">
                    {selectedCert.title}
                  </h3>
                  <div className="text-xs font-mono text-[#A0A0A0]">
                    Awarded to <span className="text-white font-semibold">Hasya Patel</span> by {selectedCert.issuer}
                  </div>
                </div>
              </div>

              {/* Certificate Details Frame */}
              <div className="p-5 rounded-xl bg-[#161616] border border-[#282828] space-y-4 mb-6">
                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888] mb-1">
                    Course Syllabus & Competencies
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-200 leading-relaxed">
                    {selectedCert.description}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-mono uppercase tracking-wider text-[#888888] mb-2">
                    Verified Competency Areas
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedCert.skillsCovered.map((skill, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-gray-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[#222222] flex items-center justify-between text-xs font-mono text-[#A0A0A0]">
                  <span>Status: Verified Active</span>
                  <span className="text-[#E21D2F]">Hasya Patel</span>
                </div>
              </div>

              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setSelectedCert(null)}
                  className="px-5 py-2.5 rounded-lg bg-[#E21D2F] text-white text-xs sm:text-sm font-semibold hover:bg-[#c81626] transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
