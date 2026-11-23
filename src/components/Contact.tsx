import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Send,
  Mail,
  Linkedin,
  Github,
  CheckCircle2,
  Copy,
  Check,
  Briefcase,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      
      // Trigger festive celebration
      try {
        confetti({
          particleCount: 60,
          spread: 70,
          origin: { y: 0.7 },
          colors: ['#E21D2F', '#ffffff', '#ff99a8'],
        });
      } catch (err) {
        // Fallback silently
      }
    }, 800);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-transparent">
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#222222]/80 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#161616] border border-[#262626] mb-4">
            <span className="text-xs font-bold tracking-widest text-[#E21D2F] uppercase">
              CONTACT ME »
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight">
            Have an Idea? <br />
            <span className="text-[#E21D2F]">Let's Build It.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#A0A0A0] mt-3 max-w-xl">
            Have a project in mind, want to collaborate, or just want to say hello? Feel free to reach out.
          </p>

          {/* Status pill */}
          <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#141414] border border-[#262626] text-xs font-medium text-gray-300">
            <Briefcase className="w-3.5 h-3.5 text-[#E21D2F]" />
            <span>Open to Internships • Freelance • Collaboration</span>
          </div>
        </div>

        {/* 2-Column Form and Connect Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0e0e0e] border border-[#222222] p-6 sm:p-8 rounded-2xl shadow-xl">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-10 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <h3 className="font-display font-bold text-2xl text-white">
                  Message Sent Successfully!
                </h3>
                <p className="text-sm text-[#A0A0A0] max-w-md mx-auto">
                  Thank you, <span className="text-white font-medium">{formData.name}</span>. Your message has been prepared for Hasya Patel. I will get back to you promptly!
                </p>
                <div className="pt-4 flex justify-center gap-3">
                  <a
                    href={`mailto:${PERSONAL_INFO.contact.email}?subject=${encodeURIComponent(
                      formData.subject || 'Portfolio Inquiry'
                    )}&body=${encodeURIComponent(
                      `Hi Hasya,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
                    )}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#E21D2F] text-white text-xs sm:text-sm font-semibold hover:bg-[#c81626] transition-colors"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Open Direct in Email App</span>
                  </a>

                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2.5 rounded-lg bg-[#181818] border border-[#2a2a2a] text-xs sm:text-sm text-gray-300 hover:text-white"
                  >
                    Send Another
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-mono text-[#888888]">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] focus:border-[#E21D2F] focus:outline-none text-sm text-white placeholder-[#555555] transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-mono text-[#888888]">
                      Your Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="e.g. rahul@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] focus:border-[#E21D2F] focus:outline-none text-sm text-white placeholder-[#555555] transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-subject" className="text-xs font-mono text-[#888888]">
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="e.g. Internship Opportunity / Project Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] focus:border-[#E21D2F] focus:outline-none text-sm text-white placeholder-[#555555] transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-mono text-[#888888]">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    placeholder="Tell me about your project, team, or opportunity..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-[#262626] focus:border-[#E21D2F] focus:outline-none text-sm text-white placeholder-[#555555] transition-colors resize-none"
                  />
                </div>

                <button
                  id="contact-submit-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#E21D2F] hover:bg-[#c81626] text-white font-bold text-sm shadow-lg shadow-[#E21D2F]/25 hover:shadow-[#E21D2F]/40 transition-all duration-200 disabled:opacity-50"
                >
                  <Send className={`w-4 h-4 ${isSubmitting ? 'animate-spin' : ''}`} />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message →'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Connect with Me Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-[#888888] font-bold mb-2">
              Connect With Me
            </div>

            {/* Email Card */}
            <div className="p-4 rounded-xl bg-[#101010] border border-[#222222] hover:border-[#E21D2F]/50 transition-all duration-200 flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-[#E21D2F]/15 text-[#E21D2F] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white">Email Address</div>
                  <div className="text-xs text-[#A0A0A0] font-mono truncate">
                    {PERSONAL_INFO.contact.email}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1.5 shrink-0 ml-2">
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-[#181818] hover:bg-[#252525] text-gray-300 hover:text-white transition-colors"
                  title="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`mailto:${PERSONAL_INFO.contact.email}`}
                  className="p-2 rounded-lg bg-[#181818] hover:bg-[#E21D2F] text-gray-300 hover:text-white transition-colors"
                  title="Send email"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div className="p-4 rounded-xl bg-[#101010] border border-[#222222] hover:border-[#0077B5]/50 transition-all duration-200 flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-[#0077B5]/15 text-[#0077B5] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white">LinkedIn</div>
                  <div className="text-xs text-[#A0A0A0] font-mono truncate">
                    linkedin.com/in/hasya-patel
                  </div>
                </div>
              </div>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#181818] hover:bg-[#0077B5] text-gray-300 hover:text-white transition-colors shrink-0 ml-2"
                title="Open LinkedIn"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-4 rounded-xl bg-[#101010] border border-[#222222] hover:border-gray-400/50 transition-all duration-200 flex items-center justify-between group">
              <div className="flex items-center gap-3.5 min-w-0">
                <div className="p-2.5 rounded-lg bg-white/10 text-white shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-semibold text-white">GitHub</div>
                  <div className="text-xs text-[#A0A0A0] font-mono truncate">
                    github.com/hasyapatel
                  </div>
                </div>
              </div>

              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#181818] hover:bg-[#333333] text-gray-300 hover:text-white transition-colors shrink-0 ml-2"
                title="Open GitHub"
              >
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Location Note */}
            <div className="p-4 rounded-xl bg-[#0c0c0c] border border-[#1e1e1e] text-xs text-[#777777] font-mono">
              📍 Based in Gandhinagar, Gujarat • Available for remote and on-site opportunities across India.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
