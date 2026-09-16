import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('job-drone');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="relative py-20 sm:py-24 border-b border-slate-200 dark:border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-blue font-semibold tracking-widest uppercase mb-2">
              // 02 — WORK EXPERIENCE & SYSTEM DEPLOYMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Engineering Track Record
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-600 dark:text-cyber-muted max-w-md">
            $ git log --oneline --graph --decorate // Chronological timeline of high-scale backend ownership & infrastructure leadership
          </p>
        </div>

        {/* Timeline Pipeline with Mobile-Friendly Left Spacing */}
        <div className="relative border-l-2 border-slate-200 dark:border-cyber-border/80 ml-2 sm:ml-6 space-y-8 sm:space-y-12">
          {EXPERIENCES.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative pl-5 sm:pl-9 group">
                {/* Timeline Commit Node Marker */}
                <div
                  className={`absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? 'bg-cyber-blue border-cyber-blue shadow-glow-blue scale-110'
                      : 'bg-white dark:bg-cyber-card border-slate-300 dark:border-cyber-border group-hover:border-cyber-blue'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-cyber-bg" />
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                    isExpanded
                      ? 'bg-white dark:bg-cyber-card border-cyber-blue/60 dark:border-cyber-blue/50 shadow-card-light dark:shadow-card-dark'
                      : 'bg-white/80 dark:bg-cyber-card/60 border-slate-200 dark:border-cyber-border hover:border-slate-300 dark:hover:border-cyber-borderLight shadow-sm'
                  }`}
                >
                  {/* Card Header (Clickable toggle) */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-5 sm:p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyber-blue dark:group-hover:text-cyber-blue-bright transition-colors">
                          {item.role}
                        </h3>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-semibold font-mono text-blue-700 dark:text-blue-400">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 text-xs font-mono text-slate-500 dark:text-cyber-muted">
                      <div className="flex flex-col sm:items-end gap-0.5">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-cyber-blue" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 opacity-80">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                      <button
                        className="p-1.5 rounded-lg bg-slate-100 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border hover:border-cyber-blue text-slate-600 dark:text-cyber-muted hover:text-cyber-blue transition-colors"
                        aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Summary Snippet */}
                  <div className="px-5 sm:px-6 pb-4">
                    <p className="text-sm text-slate-600 dark:text-cyber-muted font-sans leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Expandable Deep Dive Bullets */}
                  {isExpanded && (
                    <div className="px-5 sm:px-6 pb-6 pt-2 border-t border-slate-200 dark:border-cyber-border/60 space-y-4">
                      <div className="space-y-2 pt-2">
                        <span className="text-xs font-mono text-blue-700 dark:text-cyber-blue-bright uppercase tracking-wider block font-semibold">
                          // Key Technical Deliverables & Metrics:
                        </span>
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-2.5">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-blue shrink-0" />
                            <p className="text-sm text-slate-700 dark:text-cyber-text leading-relaxed font-sans">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Stack Tags */}
                      <div className="pt-3 border-t border-slate-200 dark:border-cyber-border/40">
                        <span className="text-[11px] font-mono text-slate-500 dark:text-cyber-muted block mb-2 font-medium">
                          STACK & INFRASTRUCTURE:
                        </span>
                        <div className="flex flex-wrap gap-1.5 sm:gap-2">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded text-xs font-mono bg-slate-100 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border text-slate-800 dark:text-cyber-text hover:border-cyber-blue transition-colors font-medium"
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
