import React, { useState } from 'react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { Search, Code2, Server, Database, Radio, Cloud, Activity, ShieldCheck, CheckCircle2, Cpu } from 'lucide-react';

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(SKILL_CATEGORIES[0].name);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code2 className="w-4 h-4" />;
      case 'Server': return <Server className="w-4 h-4" />;
      case 'Cpu': return <Cpu className="w-4 h-4" />;
      case 'Database': return <Database className="w-4 h-4" />;
      case 'Radio': return <Radio className="w-4 h-4" />;
      case 'Cloud': return <Cloud className="w-4 h-4" />;
      case 'Activity': return <Activity className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      default: return <CheckCircle2 className="w-4 h-4" />;
    }
  };

  const isSearching = searchQuery.trim().length > 0;
  const filteredSkills = isSearching
    ? SKILL_CATEGORIES.flatMap((cat) =>
        cat.skills
          .filter((s) => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
          .map((s) => ({ ...s, categoryName: cat.name }))
      )
    : [];

  const currentCategoryData = SKILL_CATEGORIES.find((c) => c.name === activeCategory) || SKILL_CATEGORIES[0];

  return (
    <section id="skills" className="relative py-20 sm:py-24 border-b border-slate-200 dark:border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-blue font-semibold tracking-widest uppercase mb-2">
              // 04 — TECHNICAL CAPABILITIES & INFRASTRUCTURE MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Engineering Skill Matrix
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-600 dark:text-cyber-muted max-w-md">
            Production-tested competencies across backend distributed services, AI orchestration, and cloud reliability engineering.
          </p>
        </div>

        {/* Search Bar & Stats */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 dark:text-cyber-muted" />
            <input
              type="text"
              placeholder="Search stack (e.g. FastAPI, Kafka, Docker, Pytest)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg font-mono text-xs bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border focus:border-cyber-blue dark:focus:border-cyber-blue focus:outline-none text-slate-900 dark:text-cyber-text placeholder:text-slate-400 dark:placeholder:text-cyber-muted transition-colors shadow-sm"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-cyber-blue"
              >
                clear
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-slate-600 dark:text-cyber-muted flex items-center gap-2">
            <span>TOTAL PROFICIENCIES:</span>
            <span className="px-2.5 py-0.5 rounded-md bg-blue-50 dark:bg-cyber-surface border border-blue-200 dark:border-cyber-border text-cyber-blue font-bold">
              {SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)} TECHNOLOGIES
            </span>
          </div>
        </div>

        {isSearching ? (
          /* Search Results View */
          <div className="p-6 rounded-xl bg-white dark:bg-cyber-card border border-slate-200 dark:border-cyber-border shadow-card-light dark:shadow-card-dark">
            <div className="font-mono text-xs text-cyber-blue mb-4 font-semibold">
              // Search query matches for &quot;{searchQuery}&quot; ({filteredSkills.length} found):
            </div>
            {filteredSkills.length === 0 ? (
              <p className="text-xs font-mono text-slate-500 dark:text-cyber-muted py-6 text-center">
                No matching technologies found. Try searching &quot;Python&quot;, &quot;Redis&quot;, &quot;FastAPI&quot;, or &quot;Docker&quot;.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredSkills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-lg bg-slate-50 dark:bg-cyber-surface border border-slate-200 dark:border-cyber-border hover:border-cyber-blue transition-all flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-mono font-semibold text-slate-900 dark:text-cyber-text">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-cyber-muted">
                        {skill.categoryName}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60 font-semibold">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Categorized Tabs View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
            {/* Category Selector */}
            <div className="lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
              {SKILL_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full text-left p-3.5 rounded-lg font-mono text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-blue-50/80 dark:bg-cyber-surface border-l-4 border-cyber-blue text-cyber-blue font-bold shadow-sm border-t border-r border-b border-blue-200 dark:border-cyber-border'
                        : 'bg-white dark:bg-cyber-card/60 hover:bg-slate-50 dark:hover:bg-cyber-surface/60 border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-cyber-text'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      {getCategoryIcon(cat.iconName)}
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-[10px] opacity-70">
                      {cat.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Skills Panel */}
            <div className="lg:col-span-8 p-5 sm:p-8 rounded-xl bg-white dark:bg-cyber-card/90 border border-slate-200 dark:border-cyber-border shadow-card-light dark:shadow-card-dark">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-200 dark:border-cyber-border/60">
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2.5">
                    {getCategoryIcon(currentCategoryData.iconName)}
                    <span>{currentCategoryData.name}</span>
                  </h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-cyber-muted mt-1">
                    {currentCategoryData.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentCategoryData.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-lg border transition-all duration-200 flex items-center justify-between group ${
                      skill.highlight
                        ? 'bg-blue-50/40 dark:bg-cyber-surface/80 border-blue-200 dark:border-cyber-border hover:border-cyber-blue'
                        : 'bg-slate-50/60 dark:bg-cyber-surface/40 border-slate-200 dark:border-cyber-border hover:border-slate-300 dark:hover:border-cyber-borderLight'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-mono font-medium text-slate-900 dark:text-cyber-text">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded font-semibold ${
                        skill.highlight
                          ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60'
                          : 'bg-white dark:bg-cyber-card text-slate-500 dark:text-cyber-muted border border-slate-200 dark:border-cyber-border'
                      }`}
                    >
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
