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
    <section className="relative min-h-[92vh] flex items-center justify-center pt-24 pb-16 overflow-hidden">
      {/* 3D WebGL Background */}
      <NetworkBackground />

      {/* Decorative Radial Grid / Glow Gradients */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyber-teal/10 via-cyber-indigo/15 to-transparent blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Live Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-card/90 dark:bg-cyber-card/90 bg-white/90 border border-cyber-border dark:border-cyber-border border-slate-200 shadow-sm backdrop-blur-md mb-6 animate-pulse-subtle">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-green" />
          </span>
          <span className="text-xs font-mono font-medium text-cyber-text dark:text-cyber-text text-slate-800">
            {PROFILE.currentRole}
          </span>
          <span className="hidden sm:inline-block text-xs font-mono text-cyber-muted dark:text-cyber-muted text-slate-400">
            • 99.9% Production SLA
          </span>
        </div>

        {/* Technical Section Kicker */}
        <div className="font-mono text-xs text-cyber-teal tracking-widest uppercase mb-3 flex items-center gap-2">
          <span>// 00 — BACKEND ARCHITECTURE & AI SYSTEMS</span>
        </div>

        {/* Main Name Heading */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight font-heading text-slate-900 dark:text-white mb-4">
          Charles Kojo <span className="text-gradient-teal-indigo">Mark</span>
        </h1>

        {/* Detailed Title & Disciplines */}
        <p className="text-base sm:text-lg lg:text-xl font-mono text-cyber-teal font-medium mb-5 max-w-3xl">
          Senior Backend Engineer | AI Integration & DevOps
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-mono text-cyber-muted dark:text-cyber-muted text-slate-500 mb-6">
          <span className="px-2.5 py-1 rounded bg-cyber-surface/60 border border-cyber-border">Python</span>
          <span className="px-2.5 py-1 rounded bg-cyber-surface/60 border border-cyber-border">Distributed Systems</span>
          <span className="px-2.5 py-1 rounded bg-cyber-surface/60 border border-cyber-border">Cloud Infrastructure</span>
          <span className="px-2.5 py-1 rounded bg-cyber-surface/60 border border-cyber-border">Multi-Agent AI</span>
        </div>

        {/* Rewritten Hero Subtext */}
        <p className="text-base sm:text-lg text-cyber-muted dark:text-cyber-muted text-slate-600 max-w-3xl leading-relaxed mb-8 font-sans">
          {PROFILE.heroSubtext}
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3.5 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyber-teal text-slate-950 font-mono text-sm font-semibold hover:bg-cyan-300 hover:shadow-glow-teal transition-all"
            id="hero-view-projects-btn"
          >
            <span>Explore Systems & Repos</span>
            <ChevronRight className="w-4 h-4" />
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-cyber-card hover:bg-cyber-surface text-cyber-text font-mono text-sm border border-cyber-border hover:border-cyber-indigo transition-all shadow-card-dark"
            id="hero-get-quote-btn"
          >
            <Zap className="w-4 h-4 text-cyber-indigo" />
            <span>Work With Me / Quote</span>
          </button>

          <button
            onClick={triggerRateSheetDownload}
            className="inline-flex items-center gap-2 px-4 py-3 rounded-md bg-transparent hover:bg-cyber-surface/40 text-cyber-muted hover:text-cyber-teal font-mono text-sm border border-transparent hover:border-cyber-border transition-all"
            title="Download Rate Sheet PDF"
            id="hero-ratesheet-btn"
          >
            <Download className="w-4 h-4" />
            <span className="hidden sm:inline">Rate Sheet PDF</span>
          </button>
        </div>

        {/* Social Links & Terminal Trigger */}
        <div className="flex items-center gap-4 text-cyber-muted dark:text-cyber-muted text-slate-500">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-cyber-border bg-cyber-card/60 hover:text-cyber-teal hover:border-cyber-teal transition-colors"
            aria-label="GitHub Profile"
            title="GitHub: Charleskojomark"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-full border border-cyber-border bg-cyber-card/60 hover:text-cyber-teal hover:border-cyber-teal transition-colors"
            aria-label="LinkedIn Profile"
            title="LinkedIn: markcharleskojo"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="p-2.5 rounded-full border border-cyber-border bg-cyber-card/60 hover:text-cyber-teal hover:border-cyber-teal transition-colors"
            aria-label="Email Charles Kojo Mark"
            title={`Email: ${PROFILE.email}`}
          >
            <Mail className="w-4 h-4" />
          </a>

          <div className="h-4 w-[1px] bg-cyber-border" />

          {/* Interactive Shell Prompt Button */}
          <button
            onClick={onOpenTerminal}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-cyber-card/80 border border-cyber-border hover:border-cyber-teal/60 font-mono text-xs text-cyber-muted hover:text-cyber-teal transition-colors"
            title="Run interactive CLI console"
          >
            <Terminal className="w-3.5 h-3.5 text-cyber-teal" />
            <span className="hidden sm:inline">Press</span>
            <kbd className="px-1.5 py-0.5 rounded bg-cyber-surface border border-cyber-border text-[10px] text-cyber-teal">Ctrl + ~</kbd>
            <span className="hidden sm:inline">for CLI</span>
          </button>
        </div>

        {/* Telemetry Ticker */}
        <div className="mt-12 py-2 px-4 rounded-lg bg-cyber-card/40 border border-cyber-border/60 backdrop-blur-sm flex flex-wrap items-center justify-center gap-4 sm:gap-8 font-mono text-[11px] text-cyber-muted">
          <div className="flex items-center gap-1.5">
            <Activity className="w-3.5 h-3.5 text-cyber-green" />
            <span>STATUS: <strong className="text-cyber-text">OPERATIONAL</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Zap className="w-3.5 h-3.5 text-cyber-teal" />
            <span>P95 LATENCY: <strong className="text-cyber-text">&lt;14ms</strong></span>
          </div>
          <div className="flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-cyber-indigo" />
            <span>REGION: <strong className="text-cyber-text">GLOBAL / REMOTE</strong></span>
          </div>
        </div>
      </div>
    </section>
  );
};
