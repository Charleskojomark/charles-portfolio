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

      {/* Decorative Radial Grid / Glow Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] h-[350px] bg-gradient-to-tr from-blue-500/10 via-blue-600/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 dark:bg-cyber-card/90 border border-slate-200 dark:border-cyber-border shadow-sm backdrop-blur-md mb-6 animate-pulse-subtle">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <span className="text-xs font-mono font-medium text-slate-800 dark:text-cyber-text">
            {PROFILE.currentRole}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-slate-500 dark:text-cyber-muted">
            • 99.9% Production SLA
          </span>
        </div>

        {/* Technical Section Kicker */}
        <div className="font-mono text-xs text-cyber-blue font-semibold tracking-widest uppercase mb-3 flex items-center gap-2">
          <span>// 00 — BACKEND ARCHITECTURE & AI SYSTEMS</span>
        </div>

        {/* Main Name Heading with Montserrat font */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight font-heading text-slate-900 dark:text-white mb-4">
          Charles Kojo <span className="text-gradient-sharp-blue">Mark</span>
        </h1>

        {/* Title & Disciplines */}
        <p className="text-base sm:text-lg lg:text-xl font-mono text-cyber-blue font-semibold mb-5 max-w-3xl">
          Senior Backend Engineer | AI Integration & DevOps
        </p>

        {/* Stack Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-slate-600 dark:text-cyber-muted mb-6">
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-cyber-surface/60 border border-slate-200 dark:border-cyber-border font-medium">Python</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-cyber-surface/60 border border-slate-200 dark:border-cyber-border font-medium">Distributed Systems</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-cyber-surface/60 border border-slate-200 dark:border-cyber-border font-medium">Cloud Infrastructure</span>
          <span className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-cyber-surface/60 border border-slate-200 dark:border-cyber-border font-medium">Multi-Agent AI</span>
        </div>

        {/* Rewritten Hero Subtext */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-600 dark:text-cyber-muted max-w-3xl leading-relaxed mb-8 font-sans">
          {PROFILE.heroSubtext}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-3.5 mb-10 w-full sm:w-auto">
          <a
            href="#projects"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-cyber-blue text-white font-mono text-sm font-semibold hover:bg-blue-600 hover:shadow-glow-blue transition-all"
            id="hero-view-projects-btn"
          >
            <span>Explore Systems & Repos</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-white dark:bg-cyber-card hover:bg-slate-50 dark:hover:bg-cyber-surface text-slate-900 dark:text-cyber-text font-mono text-sm border border-slate-200 dark:border-cyber-border hover:border-cyber-blue transition-all shadow-card-light dark:shadow-card-dark font-medium"
            id="hero-get-quote-btn"
          >
            <Zap className="w-4 h-4 text-cyber-blue" />
            <span>Work With Me / Quote</span>
          </button>

          <button
            onClick={triggerRateSheetDownload}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-transparent hover:bg-slate-100 dark:hover:bg-cyber-surface/40 text-slate-600 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-cyber-blue font-mono text-sm border border-transparent hover:border-slate-200 dark:hover:border-cyber-border transition-all"
            title="Download Rate Sheet PDF"
            id="hero-ratesheet-btn"
          >
            <Download className="w-4 h-4" />
            <span>Rate Sheet PDF</span>
          </button>
        </div>

        {/* Social Links & Terminal Trigger */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-slate-500 dark:text-cyber-muted">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-slate-200 dark:border-cyber-border bg-white/80 dark:bg-cyber-card/60 hover:text-cyber-blue hover:border-cyber-blue transition-colors shadow-sm"
            aria-label="GitHub Profile"
            title="GitHub: Charleskojomark"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-slate-200 dark:border-cyber-border bg-white/80 dark:bg-cyber-card/60 hover:text-cyber-blue hover:border-cyber-blue transition-colors shadow-sm"
            aria-label="LinkedIn Profile"
            title="LinkedIn: markcharleskojo"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="p-2.5 rounded-full border border-slate-200 dark:border-cyber-border bg-white/80 dark:bg-cyber-card/60 hover:text-cyber-blue hover:border-cyber-blue transition-colors shadow-sm"
            aria-label="Email Charles Kojo Mark"
            title={`Email: ${PROFILE.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>

          <div className="hidden sm:block h-4 w-[1px] bg-slate-200 dark:bg-cyber-border" />

          {/* Terminal Shortcut */}
          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-cyber-card/80 border border-slate-200 dark:border-cyber-border hover:border-cyber-blue font-mono text-xs text-slate-600 dark:text-cyber-muted hover:text-cyber-blue transition-colors shadow-sm"
            title="Run interactive CLI console"
          >
            <Terminal className="w-3.5 h-3.5 text-cyber-blue" />
            <span className="hidden sm:inline">Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border text-[10px] text-cyber-blue font-semibold">Ctrl + ~</kbd>
            <span className="hidden sm:inline">for CLI</span>
          </button>
        </div>

        {/* Telemetry Ticker */}
        <div className="mt-10 sm:mt-12 py-2.5 px-4 rounded-xl bg-white/70 dark:bg-cyber-card/40 border border-slate-200 dark:border-cyber-border/60 backdrop-blur-sm flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[11px] text-slate-600 dark:text-cyber-muted shadow-sm">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-emerald-500" />
            <span>STATUS: <strong className="text-slate-900 dark:text-cyber-text">OPERATIONAL</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyber-blue" />
            <span>P95 LATENCY: <strong className="text-slate-900 dark:text-cyber-text">&lt;14ms</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-blue-600 dark:text-cyber-blue-bright" />
            <span>REGION: <strong className="text-slate-900 dark:text-cyber-text">GLOBAL / REMOTE</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
