import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Printer,
  Download,
  Copy,
  Check,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Code,
  Layers,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, CERTIFICATIONS, SKILL_CATEGORIES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const textResume = `
HASYA PATEL
Web Developer / Application Developer
Email: ${PERSONAL_INFO.contact.email}
Location: ${PERSONAL_INFO.contact.location}

EDUCATION
Diploma in Computer Engineering (Expected 2026)
V.P.M.P Polytechnic, Gandhinagar
CGPA: 9.86

TECHNICAL SKILLS
- Web Development: HTML, CSS, JavaScript
- Programming: Python
- Database: MySQL
- Application Development: Android / Mobile Architecture
- Emerging Tech: Generative AI, Prompt Engineering, Cloud Technologies, UI/UX

CERTIFICATIONS
1. Introduction to Generative AI — Google Cloud
2. Introduction to Prompt Engineering with GitHub Copilot — Microsoft

FEATURED PROJECTS
1. Foodie Fleet (Android Application)
   Android food ordering and delivery application managing customer checkout and restaurant queues.
2. HealthCloud Pro (Cloud-Based Healthcare System)
   Centralized clinic portal for electronic health records (EHR), physician scheduling, and patient history.
3. Weather Reporting System (IoT Project)
   Environmental monitoring system using DHT sensors and 16x2 LCD display.

LANGUAGES
English, Gujarati, Hindi
    `.trim();

    navigator.clipboard.writeText(textResume);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.25 }}
          className="relative w-full max-w-4xl bg-[#101010] border border-[#2a2a2a] rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col"
        >
          {/* Top action toolbar (hidden during print) */}
          <div className="no-print px-6 py-4 bg-[#161616] border-b border-[#242424] flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E21D2F]" />
              <span className="text-xs font-mono text-white font-bold">
                HASYA PATEL — VERIFIED RESUME
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleCopyText}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#202020] hover:bg-[#2a2a2a] text-xs font-mono text-gray-300 hover:text-white transition-colors"
                title="Copy plain text"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>

              <button
                onClick={handlePrint}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#E21D2F] hover:bg-[#c81626] text-xs font-semibold text-white transition-colors"
                title="Print or Save as PDF"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print / PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg bg-[#202020] text-[#A0A0A0] hover:text-white hover:bg-[#2c2c2c] transition-colors ml-1"
                aria-label="Close Resume"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Sheet */}
          <div className="overflow-y-auto p-6 sm:p-10 bg-[#0d0d0d] text-gray-200 print:bg-white print:text-black space-y-8 font-sans">
            
            {/* Header */}
            <div className="border-b border-[#222222] pb-6 print:border-gray-300 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="font-display font-black text-3xl sm:text-4xl text-white print:text-black tracking-tight">
                  HASYA PATEL
                </h1>
                <div className="text-sm font-semibold text-[#E21D2F] print:text-red-700 tracking-wider mt-1 uppercase">
                  {PERSONAL_INFO.role}
                </div>
              </div>

              <div className="text-xs font-mono text-[#A0A0A0] print:text-gray-600 space-y-1 sm:text-right">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-[#E21D2F]" />
                  <span>{PERSONAL_INFO.contact.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#E21D2F]" />
                  <span>{PERSONAL_INFO.contact.location}</span>
                </div>
              </div>
            </div>

            {/* Profile Summary */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#E21D2F] font-bold mb-2 print:text-red-700">
                Professional Summary
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 print:text-gray-800 leading-relaxed">
                {PERSONAL_INFO.aboutDetailed}
              </p>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#E21D2F] font-bold mb-3 print:text-red-700">
                Education
              </h2>
              <div className="p-4 rounded-xl bg-[#141414] print:bg-gray-50 border border-[#242424] print:border-gray-200">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <div className="text-sm font-bold text-white print:text-black">
                    {PERSONAL_INFO.education.degree}
                  </div>
                  <div className="text-xs font-mono text-[#E21D2F] font-semibold">
                    CGPA: {PERSONAL_INFO.education.cgpa}
                  </div>
                </div>
                <div className="text-xs text-gray-400 print:text-gray-600 mt-0.5">
                  {PERSONAL_INFO.education.institution} • Completion: {PERSONAL_INFO.education.completion}
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#E21D2F] font-bold mb-3 print:text-red-700">
                Technical Skills
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-[#141414] print:bg-gray-50 border border-[#242424] print:border-gray-200">
                  <span className="font-bold text-white print:text-black">Web Development: </span>
                  <span className="text-gray-300 print:text-gray-700">HTML, CSS, JavaScript</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] print:bg-gray-50 border border-[#242424] print:border-gray-200">
                  <span className="font-bold text-white print:text-black">Programming: </span>
                  <span className="text-gray-300 print:text-gray-700">Python</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] print:bg-gray-50 border border-[#242424] print:border-gray-200">
                  <span className="font-bold text-white print:text-black">Database: </span>
                  <span className="text-gray-300 print:text-gray-700">MySQL</span>
                </div>
                <div className="p-3 rounded-lg bg-[#141414] print:bg-gray-50 border border-[#242424] print:border-gray-200">
                  <span className="font-bold text-white print:text-black">Emerging Tech: </span>
                  <span className="text-gray-300 print:text-gray-700">Generative AI, Prompt Engineering, Cloud</span>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#E21D2F] font-bold mb-3 print:text-red-700">
                Professional Certifications
              </h2>
              <div className="space-y-2 text-xs">
                {CERTIFICATIONS.map((cert) => (
                  <div key={cert.id} className="p-3 rounded-lg bg-[#141414] print:bg-gray-50 border border-[#242424] print:border-gray-200 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-white print:text-black">{cert.title}</span>
                      <span className="text-gray-400 print:text-gray-600"> — {cert.issuer}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">Verified</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects */}
            <div>
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#E21D2F] font-bold mb-3 print:text-red-700">
                Key Projects
              </h2>
              <div className="space-y-3 text-xs">
                {PROJECTS.map((proj) => (
                  <div key={proj.id} className="p-3.5 rounded-lg bg-[#141414] print:bg-gray-50 border border-[#242424] print:border-gray-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-white print:text-black text-sm">{proj.title}</span>
                      <span className="font-mono text-[#E21D2F] text-[11px]">{proj.category}</span>
                    </div>
                    <p className="text-gray-300 print:text-gray-700 leading-relaxed">
                      {proj.description}
                    </p>
                    <div className="text-[11px] text-gray-400 print:text-gray-500 pt-1">
                      <span className="font-semibold">Core Modules: </span>
                      {proj.features.join(' • ')}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="pt-2">
              <h2 className="text-xs font-mono uppercase tracking-widest text-[#E21D2F] font-bold mb-2 print:text-red-700">
                Languages
              </h2>
              <div className="text-xs text-gray-300 print:text-gray-700">
                {PERSONAL_INFO.languages.join(' • ')}
              </div>
            </div>

          </div>

          {/* Modal Footer */}
          <div className="no-print px-6 py-4 bg-[#161616] border-t border-[#242424] flex items-center justify-between shrink-0">
            <span className="text-xs font-mono text-[#777777]">
              Hasya Patel • Student & Developer
            </span>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#222222] hover:bg-[#2a2a2a] text-white text-xs font-semibold transition-colors"
            >
              Close
            </button>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
