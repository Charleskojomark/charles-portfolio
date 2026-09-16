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
      setLatency(Math.floor(12 + Math.random() * 5));
      setCurrentTime(new Date().toUTCString());
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#060A12] border-t border-[#1A2540]/80 pt-16 pb-12 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* System Status Widget */}
        <div className="p-4 rounded-xl bg-[#0C1220] border border-[#1A2540]/80 backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="font-bold text-white">SYSTEM STATUS:</span>
              <span className="text-emerald-400 font-semibold">ALL SYSTEMS OPERATIONAL</span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="text-slate-500 hidden sm:inline">PROD CLUSTER [gcp-cloud-run]</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500">
            <span>PING: <strong className="text-blue-400 font-semibold">{latency}ms</strong></span>
            <span>UPTIME: <strong className="text-emerald-400 font-semibold">99.98%</strong></span>
            <span className="hidden lg:inline">{currentTime}</span>
            <button
              onClick={onOpenTerminal}
              className="px-2 py-0.5 rounded bg-[#060A12] border border-[#1A2540] hover:border-blue-500 text-blue-400 flex items-center gap-1 transition-colors font-medium"
            >
              <Terminal className="w-3 h-3" />
              <span>telemetry</span>
            </button>
          </div>
        </div>

        {/* Brand & Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-6 space-y-3">
            <div className="flex items-center gap-2 font-bold text-sm text-white font-heading">
              <span className="text-blue-400 font-mono font-bold">&lt;CKM/&gt;</span>
              <span>Charles Kojo Mark</span>
            </div>
            <p className="text-xs text-slate-500 max-w-md font-sans leading-relaxed">
              Senior Backend Engineer specializing in AI Integration and DevOps.
              Building high-throughput Python systems, RAG multi-agent pipelines, and automated cloud infrastructure.
            </p>
            <div className="text-[11px] text-slate-600 pt-1">
              Location: <span className="text-slate-300 font-medium">{PROFILE.location}</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2 text-xs">
            <div className="text-blue-400 font-semibold mb-2 uppercase tracking-wider">
              Navigation
            </div>
            <div className="flex flex-col space-y-1.5 text-slate-500">
              <a href="#about" className="hover:text-blue-400 transition-colors">01 // Architecture & Bio</a>
              <a href="#experience" className="hover:text-blue-400 transition-colors">02 // Work Experience</a>
              <a href="#projects" className="hover:text-blue-400 transition-colors">03 // Selected Projects</a>
              <a href="#skills" className="hover:text-blue-400 transition-colors">04 // Skills Matrix</a>
              <a href="#services" className="hover:text-blue-400 transition-colors">05 // Work With Me</a>
              <a href="#contact" className="hover:text-blue-400 transition-colors">06 // Contact</a>
            </div>
          </div>

          {/* Connect & Actions */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <div className="text-blue-400 font-semibold mb-2 uppercase tracking-wider">
              Connect
            </div>
            <div className="flex items-center gap-2">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0C1220] border border-[#1A2540] hover:border-blue-500 text-slate-500 hover:text-blue-400 transition-colors shadow-sm"
                title="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg bg-[#0C1220] border border-[#1A2540] hover:border-blue-600 text-slate-500 hover:text-blue-400 transition-colors shadow-sm"
                title="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="p-2 rounded-lg bg-[#0C1220] border border-[#1A2540] hover:border-blue-500 text-slate-500 hover:text-blue-400 transition-colors shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={triggerRateSheetDownload}
                className="text-[11px] text-blue-400 hover:underline block font-medium"
              >
                Download Rate Sheet PDF →
              </button>
            </div>
          </div>
        </div>

        {/* Monospace Signature & Back to Top */}
        <div className="pt-8 border-t border-[#1A2540]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-600">
          <div className="text-center sm:text-left">
            <span className="text-blue-400 font-medium">// built with FastAPI energy, deployed with care</span>
            <span className="block sm:inline sm:ml-3 opacity-70">
              © {new Date().getFullYear()} Charles Kojo Mark. All rights reserved.
            </span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#0C1220] border border-[#1A2540] hover:border-blue-500 text-slate-500 hover:text-blue-400 transition-all shadow-sm"
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
