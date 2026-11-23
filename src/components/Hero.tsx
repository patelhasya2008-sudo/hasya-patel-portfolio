import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  Download,
  Code2,
  Rocket,
  Layers,
  Play,
  CheckCircle2,
  Terminal,
  Cpu,
  Monitor,
  Check,
  Award,
  Calendar,
  FolderGit2,
  ShieldCheck,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [activeCodeTab, setActiveCodeTab] = useState<'web' | 'app' | 'database'>('web');
  const [isCompiling, setIsCompiling] = useState(false);
  const [compileOutput, setCompileOutput] = useState<string | null>(null);

  const codeSnippets = {
    web: {
      filename: 'PortfolioEngine.tsx',
      tag: 'TypeScript / React',
      lines: [
        'export const DigitalExperience = () => {',
        '  const [craftedWith, setCraftedWith] = useState("Clean Code");',
        '  return (',
        '    <Application performance="100" scalable={true}>',
        '      <Impact userFocused={true} aesthetic="modern" />',
        '    </Application>',
        '  );',
        '};',
      ],
      output: '⚡ [Vite Build] Optimized bundle created. Performance: 100/100 | Ready for deployment.',
    },
    app: {
      filename: 'FoodieFleet.kt',
      tag: 'Kotlin / Android',
      lines: [
        'class FoodieFleetApp : Application() {',
        '  val orderQueue = StateFlow<List<Order>>()',
        '  fun dispatchOrder(cart: Cart): Result<Receipt> {',
        '    return restaurantEngine.processCheckout(',
        '      items = cart.validatedItems,',
        '      token = AuthManager.token',
        '    )',
        '  }',
        '}',
      ],
      output: '🚀 [Android Core] Gradle build completed: 0 warnings. Emulator link established.',
    },
    database: {
      filename: 'SchemaCloud.sql',
      tag: 'SQL / PostgreSQL',
      lines: [
        'CREATE TABLE digital_systems (',
        '  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),',
        '  developer VARCHAR(50) NOT NULL DEFAULT \'Hasya Patel\',',
        '  status VARCHAR(20) DEFAULT \'PRODUCTION_READY\',',
        '  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()',
        ');',
      ],
      output: '🗄️ [Database] Migration executed successfully. ACID transaction committed.',
    },
  };

  const handleRunCode = () => {
    setIsCompiling(true);
    setCompileOutput(null);
    setTimeout(() => {
      setIsCompiling(false);
      setCompileOutput(codeSnippets[activeCodeTab].output);
    }, 550);
  };

  const scrollToProjects = () => {
    const el = document.querySelector('#projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: '9.86', label: 'CGPA', subtext: 'Academic Excellence' },
    { value: '2026', label: 'EXPECTED COMPLETION', subtext: 'Diploma Engineering' },
    { value: '03', label: 'FEATURED PROJECTS', subtext: 'Full Stack & Mobile' },
    { value: '02', label: 'CERTIFICATES', subtext: 'Verified Credentials' },
  ];

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden flex items-center justify-center bg-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* ================= LEFT COLUMN: Text & CTAs ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-start"
          >
            {/* 1. Small Label with Red Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#101010] border border-[#222222] mb-6 shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#E21D2F] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#F5F5F5] uppercase font-mono">
                WEB DEVELOPER • APPLICATION DEVELOPER
              </span>
            </motion.div>

            {/* 2. Main Heading */}
            <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-[54px] tracking-tight text-[#F5F5F5] leading-[1.1] mb-6">
              BUILDING DIGITAL{' '}
              <span className="text-[#E21D2F] relative inline-block">
                EXPERIENCES
                <span className="absolute left-0 -bottom-1 w-full h-[3px] bg-gradient-to-r from-[#E21D2F] via-[#ff4d5e] to-transparent rounded-full" />
              </span>{' '}
              THAT MAKE AN IMPACT.
            </h1>

            {/* 3. Introduction & 4. Description */}
            <div className="space-y-3 mb-8">
              <p className="text-xl sm:text-2xl font-bold text-[#F5F5F5] font-display">
                Hi, I'm <span className="text-[#E21D2F]">Hasya Patel</span>.
              </p>
              <p className="text-base sm:text-lg text-[#A0A0A0] leading-relaxed max-w-xl">
                I'm a Diploma Computer Engineering student passionate about building modern websites, applications, and practical digital solutions using clean design and technology.
              </p>
            </div>

            {/* 5. Action Buttons (Primary & Secondary) */}
            <div className="flex flex-wrap items-center gap-4 mb-8 w-full sm:w-auto">
              {/* Primary: VIEW MY WORK → */}
              <button
                id="hero-view-work-btn"
                onClick={scrollToProjects}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl bg-[#E21D2F] hover:bg-[#c81626] text-white font-bold text-sm tracking-wide shadow-lg shadow-[#E21D2F]/25 hover:shadow-[#E21D2F]/40 transition-all duration-200"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </button>

              {/* Secondary: DOWNLOAD RESUME */}
              <button
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="group w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#101010] hover:bg-[#181818] text-[#F5F5F5] border border-[#262626] hover:border-[#E21D2F]/70 font-semibold text-sm transition-all duration-200"
              >
                <Download className="w-4 h-4 text-[#A0A0A0] group-hover:text-[#E21D2F] transition-colors" />
                <span>DOWNLOAD RESUME</span>
              </button>
            </div>

            {/* Availability Pill */}
            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#101010] border border-[#222222] text-xs font-medium text-[#A0A0A0] shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="tracking-wide text-[#CCCCCC] font-mono text-[11px] sm:text-xs font-semibold">
                OPEN TO INTERNSHIPS • FREELANCE • COLLABORATION
              </span>
            </div>
          </motion.div>

          {/* ================= RIGHT COLUMN: Premium Developer Visual & Statistics ================= */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col gap-6 relative"
          >
            {/* Visual Container */}
            <div className="relative mx-auto max-w-lg lg:max-w-none w-full">
              {/* Soft Radial Red Glow - Focused directly behind the developer workspace visual */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] sm:w-[480px] h-[380px] sm:h-[480px] bg-[#E21D2F]/[0.07] rounded-full blur-[130px] pointer-events-none -z-10" />
              
              {/* Floating Feature Card 1: Top Left */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-2 sm:-left-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#101010] border border-[#262626] shadow-xl shadow-black/80"
              >
                <div className="p-1.5 rounded-lg bg-[#E21D2F]/15 text-[#E21D2F] border border-[#E21D2F]/30">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F5F5F5] leading-none">Clean Code</div>
                  <div className="text-[10px] text-[#A0A0A0] font-mono mt-0.5">Scalable Solutions</div>
                </div>
              </motion.div>

              {/* Floating Feature Card 2: Top Right */}
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-5 -right-2 sm:-right-4 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#101010] border border-[#262626] shadow-xl shadow-black/80"
              >
                <div className="p-1.5 rounded-lg bg-[#E21D2F]/15 text-[#E21D2F] border border-[#E21D2F]/30">
                  <Rocket className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F5F5F5] leading-none">Turning Ideas</div>
                  <div className="text-[10px] text-[#A0A0A0] font-mono mt-0.5">Into Digital Products</div>
                </div>
              </motion.div>

              {/* Floating Feature Card 3: Bottom Right / Lateral */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 4.8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-4 -right-2 sm:right-6 z-20 hidden sm:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl bg-[#101010] border border-[#262626] shadow-xl shadow-black/80"
              >
                <div className="p-1.5 rounded-lg bg-[#E21D2F]/15 text-[#E21D2F] border border-[#E21D2F]/30">
                  <Layers className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#F5F5F5] leading-none">User Focused</div>
                  <div className="text-[10px] text-[#A0A0A0] font-mono mt-0.5">Design & Performance</div>
                </div>
              </motion.div>

              {/* Laptop Chassis & Screen */}
              <div className="relative rounded-2xl bg-gradient-to-b from-[#222222] via-[#141414] to-[#0d0d0d] p-3 sm:p-4 border border-[#2a2a2a] shadow-2xl shadow-black/90">
                
                {/* Screen Housing */}
                <div className="rounded-xl bg-[#080808] border border-[#1f1f1f] overflow-hidden shadow-inner">
                  
                  {/* Top Screen Bar / Web Dev Environment Header */}
                  <div className="bg-[#121212] px-4 py-2.5 border-b border-[#222222] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                      <span className="ml-2 text-xs font-mono text-[#888888] flex items-center gap-1.5">
                        <FolderGit2 className="w-3 h-3 text-[#A0A0A0]" />
                        <span>hasya-dev/portfolio-core</span>
                      </span>
                    </div>

                    <button
                      id="hero-simulate-run-btn"
                      onClick={handleRunCode}
                      disabled={isCompiling}
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#E21D2F]/20 hover:bg-[#E21D2F]/30 text-[#E21D2F] border border-[#E21D2F]/50 text-xs font-mono font-medium transition-all shadow-sm"
                      title="Simulate environment compilation"
                    >
                      <Play className={`w-3 h-3 ${isCompiling ? 'animate-spin' : ''}`} />
                      <span>{isCompiling ? 'Building...' : 'Simulate Run'}</span>
                    </button>
                  </div>

                  {/* IDE Workspace Tabs */}
                  <div className="flex items-center bg-[#0d0d0d] border-b border-[#1c1c1c] px-2 overflow-x-auto">
                    {(['web', 'app', 'database'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => {
                          setActiveCodeTab(tab);
                          setCompileOutput(null);
                        }}
                        className={`relative px-3.5 py-2 text-xs font-mono flex items-center gap-1.5 transition-colors whitespace-nowrap ${
                          activeCodeTab === tab
                            ? 'text-[#F5F5F5] bg-[#161616] font-semibold border-b-2 border-[#E21D2F]'
                            : 'text-[#777777] hover:text-[#A0A0A0]'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#E21D2F]" />
                        <span>{codeSnippets[tab].filename}</span>
                        <span className="text-[9px] text-[#666666] ml-1 px-1 rounded bg-[#101010]">
                          {codeSnippets[tab].tag}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Code Editor Body */}
                  <div className="p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed bg-[#070707] min-h-[210px] text-gray-300 overflow-x-auto">
                    {codeSnippets[activeCodeTab].lines.map((line, idx) => (
                      <div key={`${activeCodeTab}-${idx}`} className="flex gap-4 group hover:bg-[#111111]/60 px-1 rounded">
                        <span className="text-[#444444] select-none text-right w-5">{idx + 1}</span>
                        <span className="text-gray-200">
                          {line.includes('export') || line.includes('class') || line.includes('CREATE') ? (
                            <span className="text-[#E21D2F] font-semibold">{line}</span>
                          ) : line.includes('return') || line.includes('PRIMARY') || line.includes('fun') ? (
                            <span className="text-amber-400">{line}</span>
                          ) : line.includes('"') || line.includes("'") ? (
                            <span className="text-emerald-400">{line}</span>
                          ) : line.includes('<') || line.includes('>') ? (
                            <span className="text-sky-300">{line}</span>
                          ) : (
                            line
                          )}
                        </span>
                      </div>
                    ))}

                    {/* Live compilation output */}
                    <AnimatePresence>
                      {compileOutput && (
                        <motion.div
                          initial={{ opacity: 0, height: 0, y: 6 }}
                          animate={{ opacity: 1, height: 'auto', y: 0 }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="mt-4 pt-3 border-t border-emerald-500/30 text-xs text-emerald-400 flex items-start gap-2 bg-[#0e1610] p-3 rounded-lg border border-emerald-500/20"
                        >
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="font-mono">{compileOutput}</span>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Dev Environment Status Bar */}
                  <div className="bg-[#0f0f0f] px-3.5 py-2 border-t border-[#1a1a1a] flex items-center justify-between text-[11px] font-mono text-[#777777]">
                    <div className="flex items-center gap-3">
                      <span className="flex items-center gap-1 text-[#A0A0A0]">
                        <Cpu className="w-3 h-3 text-[#E21D2F]" />
                        <span>Dev Engine</span>
                      </span>
                      <span className="hidden sm:inline text-emerald-400">• Strict TS</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-[#A0A0A0]">Port: 3000 (Ready)</span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    </div>
                  </div>
                </div>

                {/* Laptop Base Notch / Deck edge */}
                <div className="mt-2 flex justify-center">
                  <div className="w-20 h-1 rounded-full bg-[#333333]" />
                </div>
              </div>
            </div>

            {/* ================= 4. HERO STATISTICS PANEL ================= */}
            {/* Real verified information only: 9.86 CGPA, 2026 Expected, 03 Projects, 02 Certificates */}
            <div
              id="hero-statistics-panel"
              className="rounded-2xl bg-[#101010] border border-[#222222] p-4 sm:p-5 shadow-xl shadow-black/80"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#222222]">
                {stats.map((stat, idx) => (
                  <div
                    key={stat.label}
                    className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                      idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4' : ''
                    }`}
                  >
                    <div className="text-2xl sm:text-3xl font-display font-black text-[#E21D2F] tracking-tight leading-none mb-1">
                      {stat.value}
                    </div>
                    <div className="text-[10px] sm:text-[11px] font-bold text-[#F5F5F5] uppercase tracking-wider font-mono">
                      {stat.label}
                    </div>
                    <div className="text-[9px] text-[#A0A0A0] mt-0.5 hidden sm:block">
                      {stat.subtext}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
