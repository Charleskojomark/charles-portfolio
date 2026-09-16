import React, { useState, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { ExternalLink, Layers, Sparkles, Filter, CheckCircle, ArrowUpRight, Network } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
  onOpenCaseStudy: (project: ProjectItem) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onOpenCaseStudy }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 14;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -14;
    setCoords({ x, y });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCoords({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) ${
          isHovered ? 'translateZ(12px)' : 'translateZ(0px)'
        }`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative rounded-xl border p-6 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-shadow duration-300 group ${
        project.featured
          ? 'bg-cyber-card/90 dark:bg-cyber-card/90 bg-white/95 border-cyber-teal/50 shadow-glow-teal/20'
          : 'bg-cyber-card/70 dark:bg-cyber-card/70 bg-white/80 border-cyber-border hover:border-cyber-borderLight shadow-card-dark'
      }`}
    >
      {/* Dynamic Cursor Ambient Radial Sheen */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(400px circle at ${coords.x * 20 + 200}px ${-coords.y * 20 + 200}px, rgba(34, 211, 238, 0.08), transparent 80%)`,
        }}
      />

      <div>
        {/* Top Badges & Category Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-medium ${
                project.category === 'AI'
                  ? 'bg-cyber-teal/15 text-cyber-teal border border-cyber-teal/30'
                  : project.category === 'DevOps'
                  ? 'bg-cyber-indigo/15 text-cyber-indigo border border-cyber-indigo/30'
                  : 'bg-cyber-green/15 text-cyber-green border border-cyber-green/30'
              }`}
            >
              // {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-400/15 text-amber-400 border border-amber-400/30">
                <Sparkles className="w-3 h-3" /> Flagship
              </span>
            )}

            {project.isCaseStudy && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-purple-500/15 text-purple-400 border border-purple-500/30">
                <Network className="w-3 h-3" /> System Design Case Study
              </span>
            )}
          </div>

          {/* External Action Button */}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-cyber-surface border border-cyber-border hover:border-cyber-teal text-cyber-muted hover:text-cyber-teal transition-colors"
              title={`View ${project.title} on GitHub`}
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          ) : (
            <button
              onClick={() => onOpenCaseStudy(project)}
              className="p-2 rounded-lg bg-cyber-surface border border-cyber-indigo/50 text-indigo-400 hover:bg-cyber-indigo/20 transition-colors"
              title="Inspect System Architecture Blueprint"
            >
              <ExternalLink className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Project Title & Headline */}
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-slate-900 dark:text-white group-hover:text-cyber-teal transition-colors mb-1.5 flex items-center gap-2">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-cyber-teal" />
        </h3>

        <p className="text-xs font-mono text-cyber-indigo dark:text-indigo-400 mb-3">
          {project.headline}
        </p>

        {/* Description */}
        <p className="text-sm text-cyber-muted dark:text-cyber-muted text-slate-600 leading-relaxed mb-4 font-sans">
          {project.description}
        </p>

        {/* Architecture Highlights */}
        <div className="space-y-1.5 mb-5 p-3 rounded-lg bg-cyber-surface/60 border border-cyber-border/80">
          <span className="text-[10px] font-mono text-cyber-teal uppercase tracking-wider block">
            System Highlights:
          </span>
          {project.architectureHighlights.map((highlight, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2 text-xs text-cyber-text dark:text-cyber-text text-slate-700">
              <span className="text-cyber-teal mt-0.5">•</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Metrics & Stack */}
      <div className="space-y-4 pt-3 border-t border-cyber-border/60">
        {/* Metric Line */}
        <div className="text-xs font-mono text-cyber-green flex items-center gap-2">
          <CheckCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{project.metrics}</span>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-cyber-card border border-cyber-border text-cyber-text group-hover:border-cyber-teal/40 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Card Action */}
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono rounded bg-cyber-surface border border-cyber-border hover:border-cyber-teal text-cyber-text hover:text-cyber-teal transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/Charleskojomark/{project.id}</span>
          </a>
        ) : (
          <button
            onClick={() => onOpenCaseStudy(project)}
            className="w-full flex items-center justify-center gap-2 py-2 text-xs font-mono rounded bg-cyber-indigo/10 border border-cyber-indigo/40 text-indigo-400 hover:bg-cyber-indigo/20 transition-all"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Read Architecture Case Study</span>
          </button>
        )}
      </div>
    </div>
  );
};

export const ProjectsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Backend' | 'AI' | 'DevOps'>('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<ProjectItem | null>(null);

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-24 border-b border-cyber-border/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-cyber-teal tracking-widest uppercase mb-2">
              // 03 — SELECTED PROJECTS & DISTRIBUTED SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-slate-900 dark:text-white">
              Shipped Code & Architectures
            </h2>
          </div>
          <p className="font-mono text-xs text-cyber-muted max-w-md">
            Production repositories, multi-agent AI pipelines, and cloud-native system designs built for resilience.
          </p>
        </div>

        {/* Filter / Tab Control */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-cyber-border/60">
          <span className="font-mono text-xs text-cyber-muted mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-cyber-teal" />
            FILTER:
          </span>
          {(['All', 'Backend', 'AI', 'DevOps'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 py-2 rounded-md font-mono text-xs font-medium transition-all ${
                activeFilter === category
                  ? 'bg-cyber-teal text-slate-950 shadow-glow-teal'
                  : 'bg-cyber-card hover:bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-cyber-text'
              }`}
            >
              {category}
              <span className="ml-2 opacity-60 text-[10px]">
                ({category === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === category).length})
              </span>
            </button>
          ))}
        </div>

        {/* 3D Tilt Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onOpenCaseStudy={(proj) => setSelectedCaseStudy(proj)}
            />
          ))}
        </div>
      </div>

      {/* Architecture Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl bg-cyber-card border border-cyber-border p-6 sm:p-8 shadow-2xl space-y-6">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-mono text-cyber-teal uppercase tracking-wider block">
                  // Architecture Blueprint Case Study
                </span>
                <h3 className="text-2xl font-bold font-heading text-white mt-1">
                  {selectedCaseStudy.title}
                </h3>
                <p className="text-xs font-mono text-cyber-indigo mt-1">
                  {selectedCaseStudy.headline}
                </p>
              </div>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="p-2 rounded-lg bg-cyber-surface border border-cyber-border text-cyber-muted hover:text-white"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-cyber-muted leading-relaxed">
              {selectedCaseStudy.description}
            </p>

            <div className="p-4 rounded-xl bg-cyber-surface border border-cyber-border space-y-3">
              <h4 className="text-xs font-mono font-semibold text-cyber-teal uppercase">
                System Design Specifications & Fault Tolerance:
              </h4>
              <ul className="space-y-2">
                {selectedCaseStudy.architectureHighlights.map((h, i) => (
                  <li key={i} className="text-xs text-cyber-text flex items-start gap-2">
                    <span className="text-cyber-green mt-0.5">✓</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-cyber-bg border border-cyber-border/80">
              <span className="text-[11px] font-mono text-cyber-muted block mb-2">
                ENGINEERED STACK:
              </span>
              <div className="flex flex-wrap gap-2">
                {selectedCaseStudy.stack.map((s) => (
                  <span
                    key={s}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-cyber-card border border-cyber-border text-cyber-teal"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-2">
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="px-5 py-2.5 rounded-md font-mono text-xs bg-cyber-teal text-slate-950 font-semibold hover:bg-cyan-300"
              >
                Close Blueprint
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
