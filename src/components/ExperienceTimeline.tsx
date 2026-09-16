import React, { useState } from 'react';
import { EXPERIENCES } from '../data/portfolioData';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('job-drone');

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? '' : id);
  };

  return (
    <section id="experience" className="relative py-24 border-b border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-teal tracking-widest uppercase mb-2">
              // 02 — WORK EXPERIENCE & SYSTEM DEPLOYMENTS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Engineering Track Record
            </h2>
          </div>
          <p className="font-mono text-xs text-cyber-muted max-w-md">
            $ git log --oneline --graph --decorate // Chronological timeline of high-scale backend ownership & infrastructure leadership
          </p>
        </div>

        {/* Timeline Pipeline */}
        <div className="relative border-l-2 border-cyber-border/80 dark:border-cyber-border/80 border-slate-300 ml-4 md:ml-8 space-y-12">
          {EXPERIENCES.map((item) => {
            const isExpanded = expandedId === item.id;
            return (
              <div key={item.id} className="relative pl-6 sm:pl-10 group">
                {/* Timeline Commit Node Marker */}
                <div
                  className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                    isExpanded
                      ? 'bg-cyber-teal border-cyber-teal shadow-glow-teal scale-110'
                      : 'bg-cyber-card border-cyber-border group-hover:border-cyber-teal'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyber-bg" />
                </div>

                {/* Experience Card */}
                <div
                  className={`rounded-xl border transition-all duration-300 backdrop-blur-md overflow-hidden ${
                    isExpanded
                      ? 'bg-cyber-card/90 dark:bg-cyber-card/90 bg-white/90 border-cyber-teal/50 shadow-card-dark'
                      : 'bg-cyber-card/50 dark:bg-cyber-card/50 bg-white/60 border-cyber-border hover:border-cyber-borderLight'
                  }`}
                >
                  {/* Card Header (Clickable toggle) */}
                  <div
                    onClick={() => toggleExpand(item.id)}
                    className="p-6 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 select-none"
                  >
                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyber-teal transition-colors">
                          {item.role}
                        </h3>
                        {item.badge && (
                          <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-cyber-teal/15 text-cyber-teal border border-cyber-teal/30">
                            {item.badge}
                          </span>
                        )}
                      </div>
                      <div className="text-sm font-medium font-mono text-cyber-indigo dark:text-cyber-indigo text-indigo-600">
                        {item.company}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-mono text-cyber-muted">
                      <div className="flex flex-col sm:items-end gap-1">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3.5 h-3.5 text-cyber-teal" />
                          {item.period}
                        </span>
                        <span className="flex items-center gap-1.5 text-slate-500">
                          <MapPin className="w-3.5 h-3.5" />
                          {item.location}
                        </span>
                      </div>
                      <button
                        className="p-1.5 rounded-md bg-cyber-surface border border-cyber-border hover:border-cyber-teal text-cyber-muted hover:text-cyber-teal transition-colors"
                        aria-label={isExpanded ? 'Collapse role' : 'Expand role'}
                      >
                        {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Summary Snippet */}
                  <div className="px-6 pb-4">
                    <p className="text-sm text-cyber-muted dark:text-cyber-muted text-slate-600 font-sans leading-relaxed">
                      {item.summary}
                    </p>
                  </div>

                  {/* Expandable Deep Dive Bullets */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-cyber-border/60 space-y-4">
                      <div className="space-y-2.5 pt-2">
                        <span className="text-xs font-mono text-cyber-teal uppercase tracking-wider block">
                          // Key Technical Deliverables & Metrics:
                        </span>
                        {item.bullets.map((bullet, bIdx) => (
                          <div key={bIdx} className="flex items-start gap-3">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyber-teal shrink-0" />
                            <p className="text-sm text-cyber-text dark:text-cyber-text text-slate-700 leading-relaxed font-sans">
                              {bullet}
                            </p>
                          </div>
                        ))}
                      </div>

                      {/* Stack Tags */}
                      <div className="pt-3 border-t border-cyber-border/40">
                        <span className="text-[11px] font-mono text-cyber-muted block mb-2">
                          STACK & INFRASTRUCTURE:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {item.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded text-xs font-mono bg-cyber-surface border border-cyber-border text-cyber-text hover:border-cyber-teal transition-colors"
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
