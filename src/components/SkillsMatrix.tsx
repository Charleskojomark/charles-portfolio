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

  // If search query is present, search across all categories
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
    <section id="skills" className="relative py-24 border-b border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-teal tracking-widest uppercase mb-2">
              // 04 — TECHNICAL CAPABILITIES & INFRASTRUCTURE MATRIX
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Engineering Skill Matrix
            </h2>
          </div>
          <p className="font-mono text-xs text-cyber-muted max-w-md">
            Production-tested competencies across backend distributed services, AI orchestration, and cloud reliability engineering.
          </p>
        </div>

        {/* Search Bar & Stats */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyber-muted" />
            <input
              type="text"
              placeholder="Search stack (e.g. FastAPI, Kafka, Docker, Pytest)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-lg font-mono text-xs bg-cyber-card border border-cyber-border focus:border-cyber-teal focus:outline-none text-cyber-text placeholder:text-cyber-muted transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-cyber-muted hover:text-cyber-teal"
              >
                clear
              </button>
            )}
          </div>

          <div className="text-xs font-mono text-cyber-muted flex items-center gap-2">
            <span>TOTAL PROFICIENCIES:</span>
            <span className="px-2 py-0.5 rounded bg-cyber-surface border border-cyber-border text-cyber-teal font-semibold">
              {SKILL_CATEGORIES.reduce((acc, c) => acc + c.skills.length, 0)} TECHNOLOGIES
            </span>
          </div>
        </div>

        {isSearching ? (
          /* Search Results View */
          <div className="p-6 rounded-xl bg-cyber-card border border-cyber-border">
            <div className="font-mono text-xs text-cyber-teal mb-4">
              // Search query matches for &quot;{searchQuery}&quot; ({filteredSkills.length} found):
            </div>
            {filteredSkills.length === 0 ? (
              <p className="text-xs font-mono text-cyber-muted py-6 text-center">
                No matching technologies found. Try searching &quot;Python&quot;, &quot;Redis&quot;, &quot;Kafka&quot;, or &quot;Docker&quot;.
              </p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {filteredSkills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-3.5 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-teal transition-all flex items-center justify-between"
                  >
                    <div>
                      <h4 className="text-xs font-mono font-semibold text-cyber-text">
                        {skill.name}
                      </h4>
                      <span className="text-[10px] font-mono text-cyber-muted">
                        {skill.categoryName}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-teal/10 text-cyber-teal border border-cyber-teal/30">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Categorized Tabs & Chips View */
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Category Selector */}
            <div className="lg:col-span-4 space-y-2">
              {SKILL_CATEGORIES.map((cat) => {
                const isSelected = activeCategory === cat.name;
                return (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(cat.name)}
                    className={`w-full text-left p-3.5 rounded-lg font-mono text-xs transition-all flex items-center justify-between ${
                      isSelected
                        ? 'bg-cyber-surface border-l-4 border-cyber-teal text-cyber-teal shadow-glow-teal/20 border-t border-r border-b border-cyber-border'
                        : 'bg-cyber-card/60 hover:bg-cyber-surface/60 border border-cyber-border text-cyber-muted hover:text-cyber-text'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {getCategoryIcon(cat.iconName)}
                      <span className="font-semibold">{cat.name}</span>
                    </div>
                    <span className="text-[10px] opacity-70">
                      {cat.skills.length}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Right Skills Panel */}
            <div className="lg:col-span-8 p-6 sm:p-8 rounded-xl bg-cyber-card/90 dark:bg-cyber-card/90 bg-white/90 border border-cyber-border dark:border-cyber-border border-slate-200 backdrop-blur-md shadow-card-dark">
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-cyber-border/60">
                <div>
                  <h3 className="text-lg font-bold font-heading text-slate-900 dark:text-white flex items-center gap-2.5">
                    {getCategoryIcon(currentCategoryData.iconName)}
                    <span>{currentCategoryData.name}</span>
                  </h3>
                  <p className="text-xs font-mono text-cyber-muted mt-1">
                    {currentCategoryData.description}
                  </p>
                </div>
              </div>

              {/* Skill Badges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentCategoryData.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className={`p-3.5 rounded-lg border transition-all duration-200 flex items-center justify-between group ${
                      skill.highlight
                        ? 'bg-cyber-surface/80 border-cyber-border hover:border-cyber-teal/60'
                        : 'bg-cyber-surface/40 border-cyber-border hover:border-cyber-borderLight'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyber-teal group-hover:scale-125 transition-transform" />
                      <span className="text-xs font-mono font-medium text-cyber-text dark:text-cyber-text text-slate-800">
                        {skill.name}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                        skill.highlight
                          ? 'bg-cyber-teal/15 text-cyber-teal border border-cyber-teal/30'
                          : 'bg-cyber-card text-cyber-muted border border-cyber-border'
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
