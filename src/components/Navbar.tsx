import React, { useState, useEffect } from 'react';
import { Terminal, Sun, Moon, Download, Menu, X, ChevronRight } from 'lucide-react';
import { triggerRateSheetDownload } from '../utils/pdfDownload';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Read initial theme
    const savedTheme = localStorage.getItem('portfolio-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(initialDark);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('portfolio-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('portfolio-theme', 'light');
    }
  };

  const navLinks = [
    { name: 'About & Systems', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services & Pricing', href: '#services' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cyber-bg/85 dark:bg-cyber-bg/85 bg-white/90 backdrop-blur-md border-b border-cyber-border dark:border-cyber-border border-slate-200 py-3 shadow-lg shadow-black/10'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand / Monospace Mark */}
        <a
          href="#"
          className="group flex items-center gap-3 font-mono text-sm tracking-tight text-cyber-text dark:text-cyber-text text-slate-900"
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-md bg-cyber-card dark:bg-cyber-card bg-slate-100 border border-cyber-border dark:border-cyber-border border-slate-300 group-hover:border-cyber-teal transition-colors">
            <span className="text-cyber-teal font-bold text-xs">&lt;CKM/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-wide text-xs sm:text-sm group-hover:text-cyber-teal transition-colors flex items-center gap-1.5">
              charles.dev
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse" title="System Operational" />
            </span>
            <span className="text-[10px] text-cyber-muted dark:text-cyber-muted text-slate-500 hidden sm:inline-block">
              backend // ai // devops
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs font-mono">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-cyber-muted dark:text-cyber-muted text-slate-600 hover:text-cyber-teal dark:hover:text-cyber-teal hover:text-cyan-600 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyber-teal hover:after:w-full after:transition-all"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls & Actions */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* CLI Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded bg-cyber-surface dark:bg-cyber-surface bg-slate-100 border border-cyber-border dark:border-cyber-border border-slate-300 text-cyber-teal hover:border-cyber-teal hover:shadow-glow-teal transition-all"
            title="Open Interactive Terminal (Ctrl + ~)"
            id="nav-terminal-btn"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden md:inline">$ cli</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded border border-cyber-border dark:border-cyber-border border-slate-300 text-cyber-muted hover:text-cyber-text dark:hover:text-white bg-cyber-card dark:bg-cyber-card bg-slate-100 transition-colors"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
          </button>

          {/* Rate Sheet / Quote CTA */}
          <button
            onClick={triggerRateSheetDownload}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded border border-cyber-indigo/50 bg-cyber-indigo/10 text-indigo-400 hover:bg-cyber-indigo/20 hover:text-indigo-300 transition-colors"
            title="Download Service Rate Sheet PDF"
            id="nav-ratesheet-btn"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Rate Sheet</span>
          </button>

          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded bg-cyber-teal text-slate-950 hover:bg-cyan-300 hover:shadow-glow-teal font-mono transition-all"
            id="nav-quote-btn"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded text-cyber-muted hover:text-cyber-text border border-cyber-border"
            aria-label="Open mobile menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-cyber-bg/95 dark:bg-cyber-bg/95 bg-white/95 backdrop-blur-xl border-b border-cyber-border px-4 pt-3 pb-6 space-y-3 font-mono text-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2 text-cyber-muted hover:text-cyber-teal border-b border-cyber-border/40"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                triggerRateSheetDownload();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs border border-cyber-border rounded bg-cyber-card text-cyber-text"
            >
              <Download className="w-3.5 h-3.5 text-cyber-teal" />
              Download Rate Sheet PDF
            </button>
            <button
              onClick={() => {
                onOpenTerminal();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2 text-xs border border-cyber-teal/40 rounded bg-cyber-surface text-cyber-teal"
            >
              <Terminal className="w-3.5 h-3.5" />
              Launch CLI Terminal ($ whoami)
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
