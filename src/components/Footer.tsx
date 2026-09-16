import React, { useState, useEffect } from 'react';
import { PROFILE } from '../data/portfolioData';
import { triggerRateSheetDownload } from '../utils/pdfDownload';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Terminal, ArrowUp, Mail } from 'lucide-react';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const [latency, setLatency] = useState(14);
  const [currentTime, setCurrentTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const timer = setInterval(() => {
      setLatency(Math.floor(12 + Math.random() * 6));
      setCurrentTime(new Date().toUTCString());
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-cyber-bg border-t border-cyber-border/80 pt-16 pb-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* System Status Easter Egg Widget */}
        <div className="p-4 rounded-xl bg-cyber-card/70 border border-cyber-border/80 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-green opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-green" />
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-cyber-text">SYSTEM STATUS:</span>
              <span className="text-cyber-green">ALL SYSTEMS OPERATIONAL</span>
              <span className="text-cyber-muted hidden sm:inline">•</span>
              <span className="text-cyber-muted hidden sm:inline">PROD CLUSTER [gcp-cloud-run]</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-cyber-muted">
            <span>PING: <strong className="text-cyber-teal">{latency}ms</strong></span>
            <span>UPTIME: <strong className="text-cyber-green">99.98%</strong></span>
            <span className="hidden lg:inline">{currentTime}</span>
            <button
              onClick={onOpenTerminal}
              className="px-2 py-0.5 rounded bg-cyber-surface border border-cyber-border hover:border-cyber-teal text-cyber-teal flex items-center gap-1 transition-colors"
            >
              <Terminal className="w-3 h-3" />
              <span>telemetry</span>
            </button>
          </div>
        </div>

        {/* Brand & Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-cyber-text">
              <span className="text-cyber-teal font-mono">&lt;CKM/&gt;</span>
              <span>Charles Kojo Mark</span>
            </div>
            <p className="text-xs text-cyber-muted max-w-md font-sans leading-relaxed">
              Senior Backend Engineer specializing in AI Integration and DevOps.
              Building high-throughput Python systems, RAG multi-agent pipelines, and automated cloud infrastructure.
            </p>
            <div className="text-[11px] text-cyber-muted pt-1">
              Location: <span className="text-cyber-text">{PROFILE.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="text-cyber-teal font-semibold mb-2 uppercase tracking-wider">
              Navigation
            </div>
            <div className="flex flex-col space-y-1.5 text-cyber-muted">
              <a href="#about" className="hover:text-cyber-teal transition-colors">01 // Architecture & Bio</a>
              <a href="#experience" className="hover:text-cyber-teal transition-colors">02 // Work Experience</a>
              <a href="#projects" className="hover:text-cyber-teal transition-colors">03 // Selected Projects</a>
              <a href="#skills" className="hover:text-cyber-teal transition-colors">04 // Skills Matrix</a>
              <a href="#services" className="hover:text-cyber-teal transition-colors">05 // Work With Me</a>
              <a href="#contact" className="hover:text-cyber-teal transition-colors">06 // Contact</a>
            </div>
          </div>

          {/* Connect & Actions */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="text-cyber-teal font-semibold mb-2 uppercase tracking-wider">
              Connect
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-cyber-card border border-cyber-border hover:border-cyber-teal text-cyber-muted hover:text-cyber-teal transition-colors"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded bg-cyber-card border border-cyber-border hover:border-cyber-indigo text-cyber-muted hover:text-cyber-indigo transition-colors"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2 rounded bg-cyber-card border border-cyber-border hover:border-cyber-teal text-cyber-muted hover:text-cyber-teal transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={triggerRateSheetDownload}
                className="text-[11px] text-cyber-teal hover:underline block"
              >
                Download Rate Sheet PDF →
              </button>
            </div>
          </div>
        </div>

        {/* Monospace Signature & Back to Top */}
        <div className="pt-8 border-t border-cyber-border/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-cyber-muted">
          <div className="text-center sm:text-left">
            <span className="text-cyber-teal">// built with FastAPI energy, deployed with care</span>
            <span className="block sm:inline sm:ml-3 opacity-60">
              © {new Date().getFullYear()} Charles Kojo Mark. All rights reserved.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded bg-cyber-surface border border-cyber-border hover:border-cyber-teal text-cyber-muted hover:text-cyber-teal transition-all"
            title="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
