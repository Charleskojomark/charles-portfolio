import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('job-drone');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="relative py-20 sm:py-24 border-b border-[#1A2540]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-blue-400 font-semibold tracking-widest uppercase mb-2">
              // 02 — WORK EXPERIENCE & SYSTEM DEPLOYMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Engineering Track Record
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-500 max-w-md">
            $ git log --oneline --graph --decorate // Chronological timeline of high-scale backend ownership & infrastructure leadership
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-[#1A2540]/80 ml-2 sm:ml-6 space-y-8 sm:space-y-12">
          {EXPERIENCES.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative pl-5 sm:pl-9 group">
                {/* Timeline Commit Node */}
                <div
                  className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? 'bg-blue-600 border-blue-500 shadow-[0_0_12px_rgba(37,99,235,0.5)] scale-110'
                      : 'bg-[#0C1220] border-[#1A2540] group-hover:border-blue-500'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#060A12]" />
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                    isExpanded
                      ? 'bg-[#0C1220] border-blue-500/50 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
                      : 'bg-[#0C1220]/60 border-[#1A2540] hover:border-[#253560] shadow-sm'
                  }`}
                >
                  {/* Card Header */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors">
                          {item.role}
                        </h3>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-950/40 text-blue-400 border border-blue-800/60">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold font-mono text-blue-400">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-slate-500">
                      <div className="flex flex-col sm:items-end gap-0.5">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-blue-400" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 opacity-80">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                      <button
                        className="p-1.5 rounded-lg bg-[#060A12] border border-[#1A2540] hover:border-blue-500 text-slate-500 hover:text-blue-400 transition-colors"
                        aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Summary Snippet */}
                  <div className="px-5 sm:px-6 pb-4">
                    <p className="text-sm text-slate-400 font-sans leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Expandable Bullets */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-[#1A2540]/60 space-y-4">
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono text-blue-400 uppercase tracking-wider block font-semibold">
                          // Key Technical Deliverables & Metrics:
                        </span>
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                            <p className="text-sm text-slate-300 leading-relaxed font-sans">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Stack Tags */}
                      <div className="pt-3 border-t border-[#1A2540]/40">
                        <span className="text-[11px] font-mono text-slate-500 block mb-2 font-medium">
                          STACK & INFRASTRUCTURE:
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded text-xs font-mono bg-[#060A12] border border-[#1A2540] text-slate-300 hover:border-blue-500 transition-colors font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
