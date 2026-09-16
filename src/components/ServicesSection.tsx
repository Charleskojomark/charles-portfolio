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

      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#2563EB', '#38BDF8', '#10B981'],
        });
      } catch (err) {
        // Fallback
      }

      triggerRateSheetDownload();
    }, 800);
  };

  return (
    <section id="services" className="relative py-20 sm:py-24 border-b border-[#1A2540]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-blue-400 font-semibold tracking-widest uppercase mb-2">
              // 05 — SERVICE PACKAGES & TRANSPARENT PRICING
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Work With Me
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <button
              onClick={triggerRateSheetDownload}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-mono text-xs border border-[#1A2540] bg-[#0C1220] hover:bg-[#111827] text-slate-300 hover:border-blue-500 transition-all shadow-sm font-medium"
              id="services-download-ratesheet"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              <span>Rate Sheet PDF</span>
            </button>
            <button
              onClick={onOpenQuoteModal}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-mono text-xs bg-blue-600 hover:bg-blue-500 text-white font-semibold shadow-[0_0_14px_rgba(37,99,235,0.4)] transition-all"
              id="services-instant-quote-btn"
            >
              <span>Instant Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-3 gap-2 mb-8 sm:mb-10 no-scrollbar border-b border-[#1A2540]/60">
          {SERVICE_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategoryTab(cat.id)}
              className={`whitespace-nowrap px-3.5 sm:px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                activeCategoryTab === cat.id
                  ? 'bg-blue-600 text-white font-bold shadow-[0_0_14px_rgba(37,99,235,0.4)]'
                  : 'bg-[#0C1220] hover:bg-[#111827] border border-[#1A2540] text-slate-500 hover:text-white font-medium'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Category Summary Header */}
        <div className="mb-8 p-4 sm:p-5 rounded-xl bg-[#060A12] border border-[#1A2540] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-[11px] font-mono text-blue-400 block font-semibold">{activeCategory.kicker}</span>
            <h3 className="text-lg font-bold font-heading text-white mt-0.5">
              {activeCategory.title}
            </h3>
            <p className="text-xs text-slate-500 max-w-2xl mt-1 font-sans">
              {activeCategory.summary}
            </p>
          </div>
          <button
            onClick={() => {
              setFormData((prev) => ({ ...prev, category: activeCategory.title }));
              onOpenQuoteModal();
            }}
            className="shrink-0 px-3.5 py-2 rounded-lg font-mono text-xs border border-blue-800/60 bg-blue-950/40 text-blue-400 hover:bg-blue-900/60 transition-all font-medium"
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
                  ? 'bg-[#0C1220] border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.2)] scale-[1.02]'
                  : 'bg-[#0C1220]/80 border-[#1A2540] hover:border-[#253560] shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-blue-600 text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-sm">
                  Recommended Tier
                </div>
              )}

              <div>
                {/* Tier Name */}
                <div className="font-mono text-xs text-blue-400 uppercase tracking-wider mb-2 font-semibold">
                  // {tier.name}
                </div>

                {/* Price Display */}
                <div className="text-2xl sm:text-3xl font-extrabold font-heading text-white mb-2">
                  {tier.priceRange}
                </div>

                {/* Timeframe */}
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 mb-4 pb-4 border-b border-[#1A2540]/60">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Estimated Delivery: {tier.timeframe}</span>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-400 leading-relaxed mb-6 font-sans">
                  {tier.description}
                </p>

                {/* Deliverables List */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                    Deliverables:
                  </span>
                  {tier.deliverables.map((deliv, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
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
                className={`w-full py-2.5 rounded-lg font-mono text-xs font-semibold transition-all flex items-center justify-center gap-2 ${
                  tier.popular
                    ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_0_14px_rgba(37,99,235,0.4)]'
                    : 'bg-[#060A12] border border-[#1A2540] hover:border-blue-500 text-slate-300 hover:text-blue-400'
                }`}
              >
                <span>Select & Get Quote</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Scope Notes & Terms Block */}
        <div className="p-6 rounded-xl bg-[#060A12] border border-[#1A2540]/80 shadow-sm">
          <div className="flex items-center gap-2 font-mono text-xs text-blue-400 mb-3 font-semibold">
            <ShieldCheck className="w-4 h-4" />
            <span className="uppercase tracking-wider">Engagement Terms & Scope Notes:</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-500">
            {SERVICE_NOTES.map((note, nIdx) => (
              <div key={nIdx} className="flex items-start gap-2">
                <span className="text-blue-500 font-bold">•</span>
                <span>{note}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interactive Get A Quote Modal */}
      {isQuoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0C1220] border border-[#1A2540] p-6 sm:p-8 shadow-[0_20px_60px_rgba(0,0,0,0.7)] space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                  // Transparent Scope & Proposal Request
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">
                  Get a Project Quote
                </h3>
                <p className="text-xs font-mono text-slate-500 mt-1">
                  Submitting will automatically trigger the official <strong className="text-slate-300">Service & Rate Sheet PDF</strong> download.
                </p>
              </div>
              <button
                onClick={onCloseQuoteModal}
                className="p-2 rounded-lg bg-[#060A12] border border-[#1A2540] text-slate-500 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>

            {isSubmitted ? (
              <div className="p-6 rounded-xl bg-[#060A12] border border-emerald-500/50 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-950/40 border border-emerald-500 mx-auto flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold font-heading text-white">
                  Quote Request Received!
                </h4>
                <p className="text-xs text-slate-400 max-w-md mx-auto leading-relaxed font-sans">
                  Thank you, <strong className="text-white">{formData.name}</strong>. Your rate sheet PDF has been downloaded automatically.
                  Charles will review your scope for <strong className="text-white">{formData.category}</strong> and reply to <strong className="text-white">{formData.email}</strong> within 24 hours.
                </p>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={triggerRateSheetDownload}
                    className="w-full sm:w-auto px-4 py-2 rounded-lg font-mono text-xs border border-blue-600 text-blue-400 bg-blue-950/40 hover:bg-blue-900/60 transition-all flex items-center justify-center gap-2 font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" />
                    Download PDF Again
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      onCloseQuoteModal();
                    }}
                    className="w-full sm:w-auto px-4 py-2 rounded-lg font-mono text-xs bg-[#060A12] border border-[#1A2540] text-slate-400 hover:border-[#253560] font-medium"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4 font-mono text-xs">
                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Henderson"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060A12] border border-[#1A2540] focus:border-blue-500 focus:outline-none text-white placeholder:text-slate-600"
                  />
                </div>

                <div>
                  <label className="block text-slate-400 mb-1 font-medium">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060A12] border border-[#1A2540] focus:border-blue-500 focus:outline-none text-white placeholder:text-slate-600"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Project Category</label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060A12] border border-[#1A2540] focus:border-blue-500 focus:outline-none text-white"
                    >
                      {SERVICE_CATEGORIES.map((c) => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 mb-1 font-medium">Target Budget Range</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#060A12] border border-[#1A2540] focus:border-blue-500 focus:outline-none text-white"
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
                  <label className="block text-slate-400 mb-1 font-medium">Project Overview & Objectives</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe what you are building, current architecture, and timeline requirements..."
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#060A12] border border-[#1A2540] focus:border-blue-500 focus:outline-none text-white placeholder:text-slate-600"
                  />
                </div>

                <div className="p-3 rounded-lg bg-[#060A12] border border-[#1A2540]/80 flex items-center gap-2.5 text-[11px] text-slate-500">
                  <FileText className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>
                    Submitting this form initiates an instant download of the complete <strong className="text-slate-300">2026 Rate Sheet PDF</strong> with detailed deliverable checklists.
                  </span>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 rounded-lg font-mono text-xs font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-all flex items-center justify-center gap-2 shadow-[0_0_14px_rgba(37,99,235,0.4)] disabled:opacity-50"
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
