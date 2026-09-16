import React from 'react';
import { Mail, Download, ChevronRight, Activity, Terminal, Shield, Zap } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { NetworkBackground } from './NetworkBackground';
import { triggerRateSheetDownload } from '../utils/pdfDownload';
import { GithubIcon, LinkedinIcon } from './Icons';

interface HeroProps {
  onOpenTerminal: () => void;
  onOpenQuoteModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal, onOpenQuoteModal }) => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-24 sm:pt-28 pb-14 sm:pb-16 overflow-hidden">
      {/* 3D WebGL Background */}
      <NetworkBackground />

      {/* Decorative Grid & Glow */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-tr from-blue-600/10 via-blue-500/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0C1220]/90 border border-[#1A2540] shadow-sm backdrop-blur-md mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-white">
            {PROFILE.currentRole}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-500">
            • 99.9% Production SLA
          </span>
        </div>

        {/* Technical Section Kicker */}
        <div className="font-mono text-xs text-blue-400 font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
          <span>// 00 — BACKEND ARCHITECTURE & AI SYSTEMS</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading text-white mb-4">
          Charles Kojo <span className="text-gradient-sharp-blue">Mark</span>
        </h1>

        {/* Title */}
        <p className="text-base sm:text-lg lg:text-xl font-mono text-blue-400 font-semibold mb-5 max-w-3xl">
          Senior Backend Engineer | AI Integration & DevOps
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <span className="px-2.5 py-1 rounded-md bg-[#0C1220] border border-[#1A2540] font-medium">Python</span>
          <span className="px-2.5 py-1 rounded-md bg-[#0C1220] border border-[#1A2540] font-medium">Distributed Systems</span>
          <span className="px-2.5 py-1 rounded-md bg-[#0C1220] border border-[#1A2540] font-medium">Cloud Infrastructure</span>
          <span className="px-2.5 py-1 rounded-md bg-[#0C1220] border border-[#1A2540] font-medium">Multi-Agent AI</span>
        </div>

        {/* Hero Subtext */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-400 max-w-3xl leading-relaxed mb-8 font-sans">
          {PROFILE.heroSubtext}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-10 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-mono text-sm font-semibold hover:bg-blue-500 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)] transition-all"
            id="hero-view-projects-btn"
          >
            <span>Explore Systems & Repos</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0C1220] hover:bg-[#111827] text-white font-mono text-sm border border-[#1A2540] hover:border-blue-500 transition-all font-medium"
            id="hero-get-quote-btn"
          >
            <Zap className="w-4 h-4 text-blue-400" />
            <span>Work With Me / Quote</span>
          </button>

          <button
            onClick={triggerRateSheetDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-transparent hover:bg-[#0C1220]/60 text-slate-400 hover:text-blue-400 font-mono text-sm border border-transparent hover:border-[#1A2540] transition-all"
            title="Download Rate Sheet PDF"
            id="hero-ratesheet-btn"
          >
            <Download className="w-4 h-4" />
            <span>Rate Sheet PDF</span>
          </button>
        </div>

        {/* Social Links & Terminal Trigger */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-500">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[#1A2540] bg-[#0C1220]/60 hover:text-blue-400 hover:border-blue-500 transition-colors shadow-sm"
            aria-label="GitHub Profile"
            title="GitHub: Charleskojomark"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-[#1A2540] bg-[#0C1220]/60 hover:text-blue-400 hover:border-blue-500 transition-colors shadow-sm"
            aria-label="LinkedIn Profile"
            title="LinkedIn: markcharleskojo"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="p-2.5 rounded-full border border-[#1A2540] bg-[#0C1220]/60 hover:text-blue-400 hover:border-blue-500 transition-colors shadow-sm"
            aria-label="Email Charles Kojo Mark"
            title={`Email: ${PROFILE.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>

          <div className="hidden sm:block h-4 w-[1px] bg-[#1A2540]" />

          {/* Terminal Shortcut */}
          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0C1220]/80 border border-[#1A2540] hover:border-blue-500 font-mono text-xs text-slate-400 hover:text-blue-400 transition-colors shadow-sm"
            title="Run interactive CLI console"
          >
            <Terminal className="w-3.5 h-3.5 text-blue-400" />
            <span className="hidden sm:inline">Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-[#060A12] border border-[#1A2540] text-[10px] text-blue-400 font-semibold">Ctrl + ~</kbd>
            <span className="hidden sm:inline">for CLI</span>
          </button>
        </div>

        {/* Telemetry Ticker */}
        <div className="mt-10 sm:mt-12 py-2.5 px-4 rounded-xl bg-[#0C1220]/60 border border-[#1A2540]/60 backdrop-blur-sm flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[11px] text-slate-500 shadow-sm">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span>STATUS: <strong className="text-white">OPERATIONAL</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-blue-400" />
            <span>P95 LATENCY: <strong className="text-white">&lt;14ms</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-blue-400" />
            <span>REGION: <strong className="text-white">GLOBAL / REMOTE</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
