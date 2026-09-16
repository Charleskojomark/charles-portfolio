import React, { useState } from 'react';
import { SERVICE_CATEGORIES, SERVICE_NOTES } from '../data/portfolioData';
import { triggerRateSheetDownload } from '../utils/pdfDownload';
import confetti from 'canvas-confetti';
import { Check, Clock, Download, ArrowRight, ShieldCheck, FileText, Send } from 'lucide-react';

interface ServicesSectionProps {
  isQuoteModalOpen: boolean;
  onCloseQuoteModal: () => void;
  onOpenQuoteModal: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  isQuoteModalOpen,
  onCloseQuoteModal,
  onOpenQuoteModal,
}) => {
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>(SERVICE_CATEGORIES[0].id);

  // Quote Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: SERVICE_CATEGORIES[0].title,
    budget: '₦500,000 – ₦1,000,000',
    description: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const activeCategory = SERVICE_CATEGORIES.find((c) => c.id === activeCategoryTab) || SERVICE_CATEGORIES[0];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // Trigger Confetti
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#22D3EE', '#6366F1', '#34D399'],
        });
      } catch (err) {
        // Confetti fallback
      }

      // Automatically trigger the Rate Sheet PDF Download
      triggerRateSheetDownload();
    }, 800);
  };

  return (
    <section id="services" className="relative py-24 border-b border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-teal tracking-widest uppercase mb-2">
              // 05 — SERVICE PACKAGES & TRANSPARENT PRICING
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Work With Me
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={triggerRateSheetDownload}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs border border-cyber-border bg-cyber-card hover:bg-cyber-surface text-cyber-teal hover:border-cyber-teal transition-all"
              id="services-download-ratesheet"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Rate Sheet PDF</span>
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md font-mono text-xs bg-cyber-teal text-slate-950 font-semibold hover:bg-cyan-300 transition-all shadow-glow-teal"
              id="services-instant-quote-btn"
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 gap-2 mb-10 no-scrollbar border-b border-cyber-border/60">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryTab(cat.id)}
              className={`whitespace-nowrap px-4 py-2.5 rounded-lg font-mono text-xs transition-all ${
                activeCategoryTab === cat.id
                  ? 'bg-cyber-teal text-slate-950 font-semibold shadow-glow-teal'
                  : 'bg-cyber-card hover:bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-cyber-text'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Summary Header */}
        <div className="mb-8 p-4 rounded-xl bg-cyber-surface/40 border border-cyber-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono text-cyber-teal block">{activeCategory.kicker}</span>
            <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white mt-0.5">
              {activeCategory.title}
            </h3>
            <p className="text-xs text-cyber-muted max-w-2xl mt-1 font-sans">
              {activeCategory.summary}
            </p>
          </div>
          <button
            onClick={() => {
              setFormData((prev) => ({ ...prev, category: activeCategory.title }));
              onOpenQuoteModal();
            }}
            className="shrink-0 px-3.5 py-2 rounded font-mono text-xs border border-cyber-indigo/50 bg-cyber-indigo/10 text-indigo-400 hover:bg-cyber-indigo/20 transition-all"
          >
            Scope a {activeCategory.title} Project →
          </button>
        </div>

        {/* 3-Tier Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {activeCategory.tiers.map((tier) => (
            <div
              key={tier.id}
              className={`relative rounded-xl p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md border transition-all duration-300 ${
                tier.popular
                  ? 'bg-cyber-card/90 dark:bg-cyber-card/90 bg-white/90 border-cyber-teal shadow-glow-teal/20 scale-[1.02]'
                  : 'bg-cyber-card/60 dark:bg-cyber-card/60 bg-white/70 border-cyber-border hover:border-cyber-borderLight shadow-card-dark'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-cyber-teal text-slate-950 font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Recommended Tier
                </div>
              )}

              <div>
                {/* Tier Name */}
                <div className="font-mono text-xs text-cyber-teal uppercase tracking-wider mb-2">
                  // {tier.name}
                </div>

                {/* Price Display */}
                <div className="text-2xl sm:text-3xl font-bold font-heading text-slate-900 dark:text-white mb-2">
                  {tier.priceRange}
                </div>

                {/* Timeframe */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-cyber-muted mb-4 pb-4 border-b border-cyber-border/60">
                  <Clock className="w-3.5 h-3.5 text-cyber-teal" />
                  <span>Estimated Delivery: {tier.timeframe}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-cyber-muted dark:text-cyber-muted text-slate-600 leading-relaxed mb-6 font-sans">
                  {tier.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] font-mono text-cyber-teal uppercase tracking-wider block">
                    Deliverables:
                  </span>
                  {tier.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-cyber-text dark:text-cyber-text text-slate-700">
                      <Check className="w-3.5 h-3.5 text-cyber-green shrink-0 mt-0.5" />
                      <span>{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    category: activeCategory.title,
                    description: `Interested in the ${tier.name} package (${tier.priceRange}).`,
                  }));
                  onOpenQuoteModal();
                }}
                className={`w-full py-2.5 rounded-md font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-cyber-teal text-slate-950 hover:bg-cyan-300 shadow-glow-teal'
                    : 'bg-cyber-surface border border-cyber-border hover:border-cyber-teal text-cyber-text hover:text-cyber-teal'
                }`}
              >
                <span>Select & Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Scope Notes & Terms Block */}
        <div className="p-6 rounded-xl bg-cyber-card/40 border border-cyber-border/80">
          <div className="flex items-center gap-2 font-mono text-xs text-cyber-indigo mb-3">
            <ShieldCheck className="w-4 h-4" />
            <span className="font-semibold uppercase tracking-wider">Engagement Terms & Scope Notes:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-cyber-muted">
            {SERVICE_NOTES.map((note, nIdx) => (
              <div key={nIdx} className="flex items-start gap-2">
                <span className="text-cyber-indigo font-bold">•</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Get A Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-cyber-card border border-cyber-border p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyber-teal uppercase tracking-wider block">
                  // Transparent Scope & Proposal Request
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">
                  Get a Project Quote
                </h3>
                <p className="text-xs font-mono text-cyber-muted mt-1">
                  Submitting will automatically trigger the official <strong>Service & Rate Sheet PDF</strong> download.
                </p>
              </div>
              <button
                onClick={onCloseQuoteModal}
                className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-white"
              >
                ✕
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-cyber-surface border border-cyber-green/50 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-cyber-green/20 border border-cyber-green mx-auto flex items-center justify-center text-cyber-green">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-heading text-white">
                  Quote Request Received!
                </h4>
                <p className="text-xs text-cyber-muted max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{formData.name}</strong>. Your rate sheet PDF has been downloaded automatically.
                  Charles will review your scope for <strong>{formData.category}</strong> and reply to <strong>{formData.email}</strong> within 24 hours.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={triggerRateSheetDownload}
                    className="w-full sm:w-auto px-4 py-2 rounded-md font-mono text-xs border border-cyber-teal text-cyber-teal bg-cyber-teal/10 hover:bg-cyber-teal/20 transition-all flex items-center justify-center gap-2"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF Again
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onCloseQuoteModal();
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-md font-mono text-xs bg-cyber-surface border border-cyber-border text-cyber-text hover:border-cyber-borderLight"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-cyber-muted mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                  />
                </div>

                <div>
                  <label className="block text-cyber-muted mb-1">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-cyber-muted mb-1">Project Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                    >
                      {SERVICE_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-cyber-muted mb-1">Target Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                    >
                      <option>₦250,000 – ₦500,000</option>
                      <option>₦500,000 – ₦1,000,000</option>
                      <option>₦1,000,000 – ₦2,500,000</option>
                      <option>₦2,500,000 – ₦5,000,000+</option>
                      <option>Hourly / Monthly Retainer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-cyber-muted mb-1">Project Overview & Objectives</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are building, current architecture, and timeline requirements..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-cyber-surface border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text"
                  />
                </div>

                <div className="p-3 rounded-lg bg-cyber-surface/60 border border-cyber-border/80 flex items-center gap-2.5 text-[11px] text-cyber-muted">
                  <FileText className="w-4 h-4 text-cyber-teal shrink-0" />
                  <span>
                    Submitting this form initiates an instant download of the complete <strong>2026 Rate Sheet PDF</strong> with detailed deliverable checklists.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-mono text-xs font-semibold bg-cyber-teal text-slate-950 hover:bg-cyan-300 transition-all flex items-center justify-center gap-2 shadow-glow-teal disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Processing Scope & Generating PDF...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5" />
                      <span>Submit Scope & Auto-Download Rate Sheet</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
