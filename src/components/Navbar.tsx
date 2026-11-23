import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { HPLogo } from './HPLogo';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, activeSection }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Process', href: '#process' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/[0.08] py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Monogram */}
        <a
          href="#home"
          id="nav-logo"
          onClick={(e) => scrollToSection(e, '#home')}
          className="group flex items-center gap-3 focus:outline-none"
        >
          <HPLogo size={42} className="shrink-0 group-hover:drop-shadow-[0_0_14px_rgba(226,29,47,0.6)]" />
          
          <div className="flex flex-col">
            {/* Desktop: HASYA PATEL | Mobile: HASYA */}
            <div className="flex items-center gap-1.5 leading-none">
              <span className="font-display font-black text-lg sm:text-2xl tracking-tight text-[#F5F5F5] group-hover:text-white transition-colors">
                HASYA <span className="hidden sm:inline text-[#E21D2F]">PATEL</span>
              </span>
            </div>
            {/* Subtitle */}
            <span className="hidden sm:block text-[10px] tracking-wider text-[#A0A0A0] uppercase font-semibold font-mono mt-1">
              WEB DEVELOPER / APPLICATION DEVELOPER
            </span>
          </div>
        </a>

        {/* Desktop Nav Items - Ultra-Transparent Floating Glass Capsule */}
        <nav
          id="desktop-nav"
          className="hidden lg:flex items-center gap-1 bg-white/[0.03] p-1.5 rounded-full border border-white/[0.08] backdrop-blur-md shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:border-white/[0.14] transition-all"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.name.toLowerCase();
            return (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase()}`}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className={`relative px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'text-white font-semibold'
                    : 'text-[#A0A0A0] hover:text-[#F5F5F5] hover:bg-white/[0.05]'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 rounded-full border border-[#E21D2F]/50 bg-[#E21D2F]/15 -z-10 shadow-[0_0_12px_rgba(226,29,47,0.25)]"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                {link.name}
              </a>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <button
            id="nav-resume-cta"
            onClick={onOpenResume}
            className="group relative inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold text-[#F5F5F5] bg-white/[0.04] border border-[#E21D2F]/50 hover:border-[#E21D2F] hover:bg-[#E21D2F]/15 hover:shadow-[0_0_20px_rgba(226,29,47,0.3)] transition-all duration-200 backdrop-blur-sm"
          >
            <FileText className="w-4 h-4 text-[#E21D2F] group-hover:scale-110 transition-transform" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#A0A0A0] group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            id="nav-mobile-resume-btn"
            onClick={onOpenResume}
            className="p-2 rounded-lg bg-white/[0.04] border border-[#E21D2F]/40 text-[#E21D2F] text-xs font-semibold flex items-center gap-1.5 backdrop-blur-sm"
            aria-label="View Resume"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
          </button>

          <button
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-white/[0.04] border border-white/10 text-[#F5F5F5] hover:text-[#E21D2F] focus:outline-none transition-colors backdrop-blur-sm"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-black/80 backdrop-blur-2xl border-b border-white/10 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.name.toLowerCase()
                      ? 'bg-[#E21D2F]/20 text-white border-l-2 border-[#E21D2F]'
                      : 'text-[#A0A0A0] hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-white/10 mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="w-full py-3 rounded-lg bg-[#E21D2F] text-white font-semibold flex items-center justify-center gap-2 text-sm shadow-lg shadow-[#E21D2F]/25"
                >
                  <FileText className="w-4 h-4" />
                  <span>View Verified Resume</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
