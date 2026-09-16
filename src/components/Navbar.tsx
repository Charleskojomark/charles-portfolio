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
          ? 'bg-white/95 dark:bg-cyber-bg/90 backdrop-blur-md border-b border-slate-200 dark:border-cyber-border py-3 shadow-md dark:shadow-black/20'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 font-mono text-sm tracking-tight text-slate-900 dark:text-cyber-text"
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 dark:bg-cyber-card border border-blue-200 dark:border-cyber-border group-hover:border-cyber-blue transition-colors shadow-sm">
            <span className="text-cyber-blue font-bold text-xs">&lt;CKM/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-wide text-xs sm:text-sm text-slate-900 dark:text-white group-hover:text-cyber-blue transition-colors flex items-center gap-1.5">
              charles.dev
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="System Operational" />
            </span>
            <span className="text-[10px] text-slate-500 dark:text-cyber-muted hidden sm:inline-block">
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
              className="text-slate-600 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-cyber-blue-bright transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-cyber-blue hover:after:w-full after:transition-all font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Controls & Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* CLI Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-lg bg-blue-50/80 dark:bg-cyber-surface border border-blue-200 dark:border-cyber-border text-cyber-blue hover:border-cyber-blue hover:shadow-glow-blue transition-all"
            title="Open Interactive Terminal (Ctrl + ~)"
            id="nav-terminal-btn"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden md:inline">$ cli</span>
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg border border-slate-200 dark:border-cyber-border text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white bg-white dark:bg-cyber-card transition-colors shadow-sm"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme"
            id="theme-toggle"
          >
            {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-cyber-blue" />}
          </button>

          {/* Rate Sheet CTA */}
          <button
            onClick={triggerRateSheetDownload}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-blue-200 dark:border-blue-900/60 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-blue-900/60 transition-colors"
            title="Download Service Rate Sheet PDF"
            id="nav-ratesheet-btn"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Rate Sheet</span>
          </button>

          {/* Quote Button */}
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-cyber-blue hover:bg-blue-600 text-white shadow-glow-blue font-mono transition-all font-semibold"
            id="nav-quote-btn"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 dark:text-cyber-muted hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-cyber-border bg-white dark:bg-cyber-card"
            aria-label="Open mobile menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white/98 dark:bg-cyber-bg/98 backdrop-blur-xl border-b border-slate-200 dark:border-cyber-border px-4 pt-3 pb-6 space-y-3 font-mono text-sm shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 text-slate-700 dark:text-cyber-muted hover:text-cyber-blue dark:hover:text-cyber-blue border-b border-slate-100 dark:border-cyber-border/40 font-medium"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-3 flex flex-col gap-2.5">
            <button
              onClick={() => {
                triggerRateSheetDownload();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs border border-slate-200 dark:border-cyber-border rounded-lg bg-slate-50 dark:bg-cyber-card text-slate-800 dark:text-cyber-text font-medium"
            >
              <Download className="w-3.5 h-3.5 text-cyber-blue" />
              Download Rate Sheet PDF
            </button>
            <button
              onClick={() => {
                onOpenTerminal();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs border border-blue-200 dark:border-blue-900/60 rounded-lg bg-blue-50 dark:bg-cyber-surface text-cyber-blue font-medium"
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
