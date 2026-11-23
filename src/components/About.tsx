import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  GraduationCap,
  Award,
  Calendar,
  Compass,
  ArrowRight,
  X,
  Languages,
  CheckCircle2,
  BookOpen,
  MapPin,
  Sparkles
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section id="about" className="py-20 lg:py-28 relative bg-transparent">
      {/* Background divider line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading, Bio and Action */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/[0.04] border border-white/10 mb-4 backdrop-blur-md">
              <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
                ABOUT ME »
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight mb-6">
              Turning Ideas Into <br className="hidden sm:inline" />
              <span className="text-[#E21D2F]">Digital Experiences.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed mb-8">
              I'm <span className="text-white font-medium">Hasya Patel</span>, a Diploma Computer Engineering student with a strong interest in web development, application development, databases, and emerging AI technologies. I enjoy transforming ideas into practical, user-friendly digital products.
            </p>

            <motion.button
              id="about-know-more-btn"
              whileHover={{ scale: 1.04, x: 3 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setModalOpen(true)}
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/10 hover:border-[#E21D2F]/70 font-semibold text-sm transition-all duration-200 backdrop-blur-md shadow-lg"
            >
              <span>Know More About Me</span>
              <ArrowRight className="w-4 h-4 text-[#E21D2F] group-hover:translate-x-1.5 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right Column: 4 Clean Verified Info Cards with interactive spring hover */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Card 1: Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.05 }}
              whileHover={{ y: -4, borderColor: 'rgba(226, 29, 47, 0.5)' }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:shadow-[0_10px_30px_rgba(226,29,47,0.15)] transition-all duration-300 group flex items-start gap-4 backdrop-blur-md cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-[#181818] border border-[#282828] text-[#E21D2F] group-hover:scale-110 group-hover:bg-[#E21D2F]/15 transition-all shrink-0">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888888] font-mono mb-1">
                  Education
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">
                  {PERSONAL_INFO.education.degree}
                </div>
                <div className="text-xs text-[#A0A0A0] mt-1">
                  {PERSONAL_INFO.education.institution}
                </div>
              </div>
            </motion.div>

            {/* Card 2: CGPA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              whileHover={{ y: -4, borderColor: 'rgba(226, 29, 47, 0.5)' }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:shadow-[0_10px_30px_rgba(226,29,47,0.15)] transition-all duration-300 group flex items-start gap-4 backdrop-blur-md cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-[#181818] border border-[#282828] text-[#E21D2F] group-hover:scale-110 group-hover:bg-[#E21D2F]/15 transition-all shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888888] font-mono mb-1">
                  CGPA
                </div>
                <div className="text-2xl sm:text-3xl font-display font-black text-[#E21D2F] leading-none drop-shadow-[0_0_12px_rgba(226,29,47,0.3)]">
                  {PERSONAL_INFO.education.cgpa}
                </div>
                <div className="text-xs text-[#A0A0A0] mt-1">
                  Academic Excellence
                </div>
              </div>
            </motion.div>

            {/* Card 3: Completion */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 }}
              whileHover={{ y: -4, borderColor: 'rgba(226, 29, 47, 0.5)' }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:shadow-[0_10px_30px_rgba(226,29,47,0.15)] transition-all duration-300 group flex items-start gap-4 backdrop-blur-md cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-[#181818] border border-[#282828] text-[#E21D2F] group-hover:scale-110 group-hover:bg-[#E21D2F]/15 transition-all shrink-0">
                <Calendar className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888888] font-mono mb-1">
                  Completion
                </div>
                <div className="text-xl sm:text-2xl font-display font-bold text-white leading-none">
                  2026
                </div>
                <div className="text-xs text-[#A0A0A0] mt-1">
                  {PERSONAL_INFO.education.completion}
                </div>
              </div>
            </motion.div>

            {/* Card 4: Focus Area */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              whileHover={{ y: -4, borderColor: 'rgba(226, 29, 47, 0.5)' }}
              className="p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:shadow-[0_10px_30px_rgba(226,29,47,0.15)] transition-all duration-300 group flex items-start gap-4 backdrop-blur-md cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-[#181818] border border-[#282828] text-[#E21D2F] group-hover:scale-110 group-hover:bg-[#E21D2F]/15 transition-all shrink-0">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-[#888888] font-mono mb-1">
                  Focus Area
                </div>
                <div className="text-sm sm:text-base font-bold text-white leading-snug">
                  {PERSONAL_INFO.education.focus}
                </div>
                <div className="text-xs text-[#A0A0A0] mt-1">
                  Modern Software Stacks
                </div>
              </div>
            </motion.div>

          </div>

        </div>

      </div>

      {/* Expanded Bio Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-2xl bg-[#101010] border border-[#282828] rounded-2xl p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-[#1c1c1c] text-[#A0A0A0] hover:text-white hover:bg-[#252525] transition-colors"
                aria-label="Close Bio Modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#E21D2F]" />
                <span className="text-xs font-mono uppercase tracking-wider text-[#E21D2F]">Detailed Profile</span>
              </div>

              <h3 className="text-2xl font-display font-bold text-white mb-4">
                Hasya Patel — Student & Builder
              </h3>

              <div className="space-y-4 text-sm sm:text-base text-[#B0B0B0] leading-relaxed mb-6">
                <p>
                  {PERSONAL_INFO.aboutDetailed}
                </p>
                <p>
                  Throughout my academic training at V.P.M.P Polytechnic, I have focused on building practical, tangible software solutions rather than relying purely on theoretical concepts. My project portfolio spans Android mobile applications, cloud-hosted health workflows, and microcontroller IoT sensors.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#222222]">
                <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
                  <div className="flex items-center gap-2 text-xs font-mono text-white mb-2">
                    <Languages className="w-4 h-4 text-[#E21D2F]" />
                    <span>Languages Spoken</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {PERSONAL_INFO.languages.map((lang) => (
                      <span key={lang} className="px-2.5 py-1 rounded bg-[#202020] text-xs text-gray-300 font-medium">
                        {lang}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#161616] border border-[#262626]">
                  <div className="flex items-center gap-2 text-xs font-mono text-white mb-2">
                    <MapPin className="w-4 h-4 text-[#E21D2F]" />
                    <span>Location & Availability</span>
                  </div>
                  <div className="text-xs text-gray-300">
                    <div>Gandhinagar, Gujarat, India</div>
                    <div className="text-[#E21D2F] font-medium mt-1">Open to Internships & Projects</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setModalOpen(false)}
                  className="px-5 py-2.5 rounded-lg bg-[#E21D2F] text-white text-sm font-semibold hover:bg-[#c81626] transition-colors"
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
