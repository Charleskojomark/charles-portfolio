import React, { useState } from 'react';
import { PROFILE } from '../data/portfolioData';
import { triggerRateSheetDownload } from '../utils/pdfDownload';
import { GithubIcon, LinkedinIcon } from './Icons';
import { Mail, Send, Check, Copy, Download, MessageSquare } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PROFILE.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
      formData.subject || 'Project Inquiry'
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
  };

  return (
    <section id="contact" className="relative py-24 border-b border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-teal tracking-widest uppercase mb-2">
              // 06 — DIRECT COMMUNICATION & SYSTEM HANDSHAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Initialize Connection
            </h2>
          </div>
          <p className="font-mono text-xs text-cyber-muted max-w-md">
            Open for senior backend engineering roles, AI agent integration architecture, and high-reliability cloud consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-cyber-card/80 dark:bg-cyber-card/80 bg-white/80 border border-cyber-border dark:border-cyber-border border-slate-200 backdrop-blur-md shadow-card-dark">
              <h3 className="text-base font-mono font-semibold text-cyber-teal mb-3">
                Let&apos;s Build Resilient Systems
              </h3>
              <p className="text-sm text-cyber-muted dark:text-cyber-muted text-slate-600 leading-relaxed mb-6 font-sans">
                Whether you need a lead backend engineer to architect payment-grade microservices,
                deploy an 8-agent LangGraph system with low-latency LLM inference, or harden your GCP/AWS
                infrastructure with automated CI/CD — reach out directly.
              </p>

              {/* Direct Email Pill with Copy Button */}
              <div className="p-3.5 rounded-lg bg-cyber-surface border border-cyber-border flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyber-teal shrink-0" />
                  <span className="font-mono text-xs text-cyber-text truncate">
                    {PROFILE.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-cyber-card border border-cyber-border hover:border-cyber-teal text-cyber-muted hover:text-cyber-teal transition-all flex items-center gap-1.5 shrink-0"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-cyber-green" />
                      <span className="text-cyber-green">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* Social Channels */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono text-cyber-muted uppercase block">
                  VERIFIED CHANNELS:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-cyber-surface/60 border border-cyber-border hover:border-cyber-teal transition-all flex items-center gap-2.5 font-mono text-xs text-cyber-text hover:text-cyber-teal"
                  >
                    <GithubIcon className="w-4 h-4 text-cyber-teal" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-cyber-surface/60 border border-cyber-border hover:border-cyber-indigo transition-all flex items-center gap-2.5 font-mono text-xs text-cyber-text hover:text-cyber-indigo"
                  >
                    <LinkedinIcon className="w-4 h-4 text-cyber-indigo" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Download Resume / Rate Sheet Notice */}
              <div className="mt-6 pt-5 border-t border-cyber-border/60">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-cyber-muted">
                    Full CV & Rate Sheet:
                  </span>
                  <button
                    onClick={triggerRateSheetDownload}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-cyber-teal hover:underline"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-xl bg-cyber-card/90 dark:bg-cyber-card/90 bg-white/90 border border-cyber-border dark:border-cyber-border border-slate-200 backdrop-blur-md shadow-card-dark">
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyber-teal" />
                <span>Send a Dispatch</span>
              </h3>
              <p className="text-xs font-mono text-cyber-muted mb-6">
                Fill out the payload below to initiate an asynchronous handshake.
              </p>

              {formSent ? (
                <div className="p-6 rounded-xl bg-cyber-surface border border-cyber-green/50 text-center space-y-3 font-mono">
                  <div className="w-10 h-10 rounded-full bg-cyber-green/20 text-cyber-green flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">Payload Dispatched</h4>
                  <p className="text-xs text-cyber-muted max-w-sm mx-auto">
                    Thank you, {formData.name}. Your email client has been prepared with your message payload. Charles typically replies in under 12 hours.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-2 text-xs text-cyber-teal underline"
                  >
                    Send another dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-cyber-muted mb-1.5">Sender Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                      />
                    </div>

                    <div>
                      <label className="block text-cyber-muted mb-1.5">Reply Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-cyber-muted mb-1.5">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senior Backend Role / Multi-Agent Clinical AI Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                    />
                  </div>

                  <div>
                    <label className="block text-cyber-muted mb-1.5">Message / Requirements *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Detail your engineering challenges, desired stack, or scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-mono text-xs font-semibold bg-cyber-teal text-slate-950 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-glow-teal"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send Message via Mail Client</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
