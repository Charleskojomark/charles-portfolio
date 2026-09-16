import React, { useState, useRef } from 'react';
import { PROFILE } from '../data/portfolioData';

interface StatItemProps {
  label: string;
  value: string;
  subtext: string;
  index: number;
}

const StatCard: React.FC<StatItemProps> = ({ label, value, subtext, index }) => {
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
        transform: `perspective(600px) rotateX(${coords.y}deg) rotateY(${coords.x}deg) ${
          isHovered ? 'translateZ(8px)' : 'translateZ(0px)'
        }`,
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className="relative p-5 sm:p-6 rounded-xl bg-white dark:bg-cyber-card/90 border border-slate-200 dark:border-cyber-border shadow-card-light dark:shadow-card-dark backdrop-blur-md overflow-hidden group transition-all"
    >
      {/* Subtle Glow Sheen */}
      <div
        className="absolute -top-12 -right-12 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all pointer-events-none"
      />

      {/* Metric Monospace Index */}
      <div className="font-mono text-[10px] text-slate-400 dark:text-cyber-muted mb-2 flex items-center justify-between">
        <span>0{index + 1} // METRIC</span>
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-blue" />
      </div>

      {/* Main Metric Value */}
      <div className="text-3xl sm:text-4xl font-extrabold font-heading text-slate-900 dark:text-white mb-2 group-hover:text-cyber-blue dark:group-hover:text-cyber-blue-bright transition-colors tracking-tight">
        {value}
      </div>

      {/* Label */}
      <div className="text-xs font-mono font-semibold text-slate-800 dark:text-cyber-text mb-1">
        {label}
      </div>

      {/* Subtext description */}
      <div className="text-[11px] text-slate-500 dark:text-cyber-muted font-sans">
        {subtext}
      </div>
    </div>
  );
};

export const StatsBand: React.FC = () => {
  return (
    <section className="relative z-10 py-8 border-y border-slate-200 dark:border-cyber-border/60 bg-slate-50/70 dark:bg-cyber-card/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {PROFILE.stats.map((stat, idx) => (
            <StatCard
              key={stat.label}
              index={idx}
              label={stat.label}
              value={stat.value}
              subtext={stat.subtext}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
