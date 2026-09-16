import React, { useState, useRef } from 'react';
import { PROJECTS } from '../data/portfolioData';
import type { ProjectItem } from '../data/portfolioData';
import { Sparkles, Filter, CheckCircle, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

interface ProjectCardProps {
  project: ProjectItem;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 12;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -12;
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
          isHovered ? 'translateZ(10px)' : 'translateZ(0px)'
        }`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
      className={`relative rounded-xl border p-5 sm:p-7 flex flex-col justify-between backdrop-blur-md transition-all duration-300 group ${
        project.featured
          ? 'bg-[#0C1220] border-blue-500/50 shadow-[0_0_30px_rgba(37,99,235,0.15)]'
          : 'bg-[#0C1220]/80 border-[#1A2540] hover:border-blue-700 shadow-[0_4px_20px_rgba(0,0,0,0.4)]'
      }`}
    >
      {/* Ambient Cursor Radial Sheen */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(350px circle at ${coords.x * 20 + 180}px ${-coords.y * 20 + 180}px, rgba(37, 99, 235, 0.07), transparent 75%)`,
        }}
      />

      <div>
        {/* Top Badges & Category Header */}
        <div className="flex items-center justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded text-[11px] font-mono font-medium ${
                project.category === 'AI'
                  ? 'bg-blue-950/40 text-blue-400 border border-blue-800/60'
                  : project.category === 'DevOps'
                  ? 'bg-indigo-950/40 text-indigo-400 border border-indigo-800/60'
                  : 'bg-sky-950/40 text-sky-400 border border-sky-800/60'
              }`}
            >
              // {project.category}
            </span>

            {project.featured && (
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[10px] font-mono bg-amber-950/40 text-amber-400 border border-amber-800/60">
                <Sparkles className="w-3 h-3" /> Flagship
              </span>
            )}
          </div>

          {/* GitHub Action Button */}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg bg-[#060A12] border border-[#1A2540] hover:border-blue-500 text-slate-500 hover:text-blue-400 transition-colors shrink-0"
              title={`View ${project.title} on GitHub`}
              aria-label={`View ${project.title} on GitHub`}
            >
              <GithubIcon className="w-4 h-4" />
            </a>
          )}
        </div>

        {/* Project Title */}
        <h3 className="text-xl sm:text-2xl font-bold font-heading text-white group-hover:text-blue-400 transition-colors mb-1.5 flex items-center gap-2">
          <span>{project.title}</span>
          <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-400" />
        </h3>

        <p className="text-xs font-mono text-blue-400 mb-3 font-medium">
          {project.headline}
        </p>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed mb-4 font-sans">
          {project.description}
        </p>

        {/* Architecture Highlights */}
        <div className="space-y-1.5 mb-5 p-3 rounded-lg bg-[#060A12] border border-[#1A2540]/80">
          <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider block font-semibold">
            System Highlights:
          </span>
          {project.architectureHighlights.map((highlight, hIdx) => (
            <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
              <span className="text-blue-500 mt-0.5">•</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Metrics & Stack */}
      <div className="space-y-4 pt-3 border-t border-[#1A2540]/60">
        {/* Metric Line */}
        <div className="text-xs font-mono text-emerald-400 flex items-center gap-2 font-medium">
          <CheckCircle className="w-3.5 h-3.5 shrink-0" />
          <span>{project.metrics}</span>
        </div>

        {/* Stack Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 rounded text-[11px] font-mono bg-[#060A12] border border-[#1A2540] text-slate-400 group-hover:border-blue-800/50 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Bottom Card Action */}
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono rounded bg-[#060A12] border border-[#1A2540] hover:border-blue-500 text-slate-400 hover:text-blue-400 transition-all"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>github.com/Charleskojomark/{project.id}</span>
          </a>
        )}
      </div>
    </div>
  );
};

export const ProjectsGrid: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'All' | 'Backend' | 'AI' | 'DevOps'>('All');

  const filteredProjects = PROJECTS.filter((p) => {
    if (activeFilter === 'All') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="projects" className="relative py-20 sm:py-24 border-b border-[#1A2540]/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12 gap-4">
          <div>
            <div className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-2 font-semibold">
              // 03 — SELECTED PROJECTS & SHIPPED SYSTEMS
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white">
              Production Repositories
            </h2>
          </div>
          <p className="font-mono text-xs text-slate-500 max-w-md">
            Production codebases, multi-agent AI pipelines, and cloud-native systems built for scale and resilience.
          </p>
        </div>

        {/* Filter / Tab Control */}
        <div className="flex flex-wrap items-center gap-2 mb-8 sm:mb-10 pb-4 border-b border-[#1A2540]/60">
          <span className="font-mono text-xs text-slate-500 mr-2 flex items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-blue-400" />
            FILTER:
          </span>
          {(['All', 'Backend', 'AI', 'DevOps'] as const).map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-md font-mono text-xs font-medium transition-all ${
                activeFilter === category
                  ? 'bg-blue-600 text-white shadow-[0_0_14px_rgba(37,99,235,0.4)] font-semibold'
                  : 'bg-[#0C1220] hover:bg-[#111827] border border-[#1A2540] text-slate-500 hover:text-white'
              }`}
            >
              {category}
              <span className="ml-1.5 opacity-70 text-[10px]">
                ({category === 'All' ? PROJECTS.length : PROJECTS.filter((p) => p.category === category).length})
              </span>
            </button>
          ))}
        </div>

        {/* 3D Tilt Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
