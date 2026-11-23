import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certifications } from './components/Certifications';
import { ProcessAndStats } from './components/ProcessAndStats';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { ResumeBanner } from './components/ResumeBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { CustomCursor } from './components/CustomCursor';
import { TechGridBackground } from './components/TechGridBackground';

export default function App() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section on scroll
  useEffect(() => {
    const sections = ['home', 'about', 'skills', 'projects', 'certificates', 'process', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenResume = () => {
    setResumeOpen(true);
  };

  const handleDownloadResume = () => {
    // Open resume modal and trigger print/PDF dialog
    setResumeOpen(true);
    setTimeout(() => {
      window.print();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] relative overflow-x-hidden selection:bg-[#E21D2F] selection:text-white">
      {/* Subtle animated technical grid & particle canvas background */}
      <TechGridBackground />

      {/* Custom subtle desktop cursor */}
      <CustomCursor />

      {/* Sticky navigation */}
      <Navbar
        onOpenResume={handleOpenResume}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <ProcessAndStats />
        <WhyWorkWithMe />
        <ResumeBanner
          onOpenResume={handleOpenResume}
          onDownloadResume={handleDownloadResume}
        />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Interactive Printable Verified Resume Modal */}
      <ResumeModal
        isOpen={resumeOpen}
        onClose={() => setResumeOpen(false)}
      />
    </div>
  );
}
