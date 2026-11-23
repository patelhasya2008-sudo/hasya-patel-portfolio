import React from 'react';
import { ArrowUp, Mail, Linkedin, Github } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-transparent border-t border-[#1c1c1c]/80 py-12 relative text-[#888888]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-8 border-b border-[#181818]">
          
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <span className="font-display font-black text-xl text-white tracking-tight">
              HASYA <span className="text-[#E21D2F]">PATEL</span>
            </span>
            <span className="text-xs font-mono text-[#A0A0A0] mt-0.5 uppercase tracking-wider">
              {PERSONAL_INFO.role}
            </span>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#A0A0A0] hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <a
                href={`mailto:${PERSONAL_INFO.contact.email}`}
                className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-[#A0A0A0] hover:text-[#E21D2F] hover:border-[#E21D2F]/50 transition-colors"
                aria-label="Email Hasya Patel"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-[#A0A0A0] hover:text-[#0077B5] hover:border-[#0077B5]/50 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#121212] border border-[#222222] text-[#A0A0A0] hover:text-white hover:border-gray-500 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>

            <button
              id="footer-back-to-top"
              onClick={scrollToTop}
              className="p-2.5 rounded-lg bg-[#161616] border border-[#262626] text-white hover:bg-[#E21D2F] hover:border-[#E21D2F] transition-colors flex items-center gap-1.5 text-xs font-semibold"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#666666] gap-3">
          <div>© 2026 Hasya Patel. All rights reserved.</div>
          <div className="text-[11px] text-[#555555]">
            Built with modern React, TypeScript & clean engineering.
          </div>
        </div>

      </div>
    </footer>
  );
};
