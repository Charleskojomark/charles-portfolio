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
    <section id="contact" className="relative py-20 sm:py-24 border-b border-slate-200 dark:border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-blue font-semibold tracking-widest uppercase mb-2">
              // 06 — DIRECT COMMUNICATION & SYSTEM HANDSHAKE
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Initialize Connection
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-600 dark:text-cyber-muted max-w-md">
            Open for senior backend engineering roles, AI agent integration architecture, and high-reliability cloud consulting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-white dark:bg-cyber-card/90 border border-slate-200 dark:border-cyber-border shadow-card-light dark:shadow-card-dark backdrop-blur-md">
              <h3 className="text-base font-mono font-semibold text-cyber-blue mb-3">
                Let&apos;s Build Resilient Systems
              </h3>
              <p className="text-sm text-slate-600 dark:text-cyber-muted leading-relaxed mb-6 font-sans">
                Whether you need a lead backend engineer to architect payment-grade microservices,
                deploy an 8-agent LangGraph system with low-latency LLM inference, or harden your GCP/AWS
                infrastructure with automated CI/CD — reach out directly.
              </p>

              {/* Direct Email Pill with Copy Button */}
              <div className="p-3.5 rounded-lg bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border flex items-center justify-between gap-3 mb-6">
                <div className="flex items-center gap-2.5 overflow-hidden">
                  <Mail className="w-4 h-4 text-cyber-blue shrink-0" />
                  <span className="font-mono text-xs text-slate-900 dark:text-cyber-text truncate font-medium">
                    {PROFILE.email}
                  </span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border hover:border-cyber-blue text-slate-600 dark:text-cyber-muted hover:text-cyber-blue transition-all flex items-center gap-1.5 shrink-0 shadow-sm"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied</span>
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
                <span className="text-[11px] font-mono text-slate-500 dark:text-cyber-muted uppercase block font-semibold">
                  VERIFIED CHANNELS:
                </span>
                <div className="grid grid-cols-2 gap-2.5">
                  <a
                    href={PROFILE.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-50 dark:bg-cyber-surface/60 border border-slate-200 dark:border-cyber-border hover:border-cyber-blue transition-all flex items-center gap-2.5 font-mono text-xs text-slate-800 dark:text-cyber-text hover:text-cyber-blue font-medium shadow-sm"
                  >
                    <GithubIcon className="w-4 h-4 text-cyber-blue" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={PROFILE.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-slate-50 dark:bg-cyber-surface/60 border border-slate-200 dark:border-cyber-border hover:border-blue-600 transition-all flex items-center gap-2.5 font-mono text-xs text-slate-800 dark:text-cyber-text hover:text-blue-600 font-medium shadow-sm"
                  >
                    <LinkedinIcon className="w-4 h-4 text-blue-600" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>

              {/* Download Resume / Rate Sheet Notice */}
              <div className="mt-6 pt-5 border-t border-slate-200 dark:border-cyber-border/60">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-slate-500 dark:text-cyber-muted">
                    Full CV & Rate Sheet:
                  </span>
                  <button
                    onClick={triggerRateSheetDownload}
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-cyber-blue hover:underline font-semibold"
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
            <div className="p-6 sm:p-8 rounded-xl bg-white dark:bg-cyber-card/90 border border-slate-200 dark:border-cyber-border shadow-card-light dark:shadow-card-dark backdrop-blur-md">
              <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                <MessageSquare className="w-4 h-4 text-cyber-blue" />
                <span>Send a Dispatch</span>
              </h3>
              <p className="text-xs font-mono text-slate-500 dark:text-cyber-muted mb-6">
                Fill out the payload below to initiate an asynchronous handshake.
              </p>

              {formSent ? (
                <div className="p-6 rounded-xl bg-slate-50 dark:bg-cyber-surface border border-emerald-500/50 text-center space-y-3 font-mono">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 flex items-center justify-center mx-auto">
                    <Check className="w-5 h-5" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">Payload Dispatched</h4>
                  <p className="text-xs text-slate-600 dark:text-cyber-muted max-w-sm mx-auto font-sans leading-relaxed">
                    Thank you, {formData.name}. Your email client has been prepared with your message payload. Charles typically replies in under 12 hours.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="mt-2 text-xs text-cyber-blue underline font-semibold"
                  >
                    Send another dispatch
                  </button>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-slate-600 dark:text-cyber-muted mb-1.5 font-medium">Sender Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Marcus Vance"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border focus:border-cyber-blue focus:outline-none text-slate-900 dark:text-cyber-text"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-600 dark:text-cyber-muted mb-1.5 font-medium">Reply Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border focus:border-cyber-blue focus:outline-none text-slate-900 dark:text-cyber-text"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-cyber-muted mb-1.5 font-medium">Subject *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Senior Backend Role / Clinical AI Project"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border focus:border-cyber-blue focus:outline-none text-slate-900 dark:text-cyber-text"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 dark:text-cyber-muted mb-1.5 font-medium">Message / Requirements *</label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Detail your engineering challenges, desired stack, or scope..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border focus:border-cyber-blue focus:outline-none text-slate-900 dark:text-cyber-text"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-lg font-mono text-xs font-semibold bg-cyber-blue text-white hover:bg-blue-600 transition-all flex items-center justify-center gap-2 shadow-glow-blue"
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
