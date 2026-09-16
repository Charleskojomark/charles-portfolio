import React, { useState, useEffect } from 'react';
import { Terminal, Download, Menu, X, ChevronRight } from 'lucide-react';
import { triggerRateSheetDownload } from '../utils/pdfDownload';

interface NavbarProps {
  onOpenTerminal: () => void;
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal, onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
          ? 'bg-[#060A12]/95 backdrop-blur-md border-b border-[#1A2540] py-3 shadow-[0_4px_24px_rgba(0,0,0,0.5)]'
          : 'bg-transparent py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="group flex items-center gap-2.5 sm:gap-3 font-mono text-sm tracking-tight text-white"
          id="nav-logo"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-[#0C1220] border border-[#1A2540] group-hover:border-blue-500 transition-colors shadow-sm">
            <span className="text-blue-400 font-bold text-xs">&lt;CKM/&gt;</span>
          </div>
          <div className="flex flex-col">
            <span className="font-semibold tracking-wide text-xs sm:text-sm text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5">
              charles.dev
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" title="System Operational" />
            </span>
            <span className="text-[10px] text-slate-500 hidden sm:inline-block">
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
              className="text-slate-400 hover:text-blue-400 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 hover:after:w-full after:transition-all font-medium"
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
            className="flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-mono rounded-lg bg-[#0C1220] border border-[#1A2540] text-blue-400 hover:border-blue-500 hover:shadow-[0_0_12px_rgba(37,99,235,0.3)] transition-all"
            title="Open Interactive Terminal (Ctrl + ~)"
            id="nav-terminal-btn"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span className="hidden md:inline">$ cli</span>
          </button>

          {/* Rate Sheet CTA */}
          <button
            onClick={triggerRateSheetDownload}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-blue-900/60 bg-blue-950/40 text-blue-400 hover:bg-blue-900/60 transition-colors"
            title="Download Service Rate Sheet PDF"
            id="nav-ratesheet-btn"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Rate Sheet</span>
          </button>

          {/* Quote Button */}
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-medium rounded-lg bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_14px_rgba(37,99,235,0.4)] font-mono transition-all font-semibold"
            id="nav-quote-btn"
          >
            <span>Get Quote</span>
            <ChevronRight className="w-3 h-3" />
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-400 hover:text-white border border-[#1A2540] bg-[#0C1220]"
            aria-label="Open mobile menu"
            id="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-[#060A12]/98 backdrop-blur-xl border-b border-[#1A2540] px-4 pt-3 pb-6 space-y-3 font-mono text-sm shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block py-2.5 text-slate-400 hover:text-blue-400 border-b border-[#1A2540]/40 font-medium transition-colors"
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
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs border border-[#1A2540] rounded-lg bg-[#0C1220] text-white font-medium"
            >
              <Download className="w-3.5 h-3.5 text-blue-400" />
              Download Rate Sheet PDF
            </button>
            <button
              onClick={() => {
                onOpenTerminal();
                setIsMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs border border-blue-900/60 rounded-lg bg-blue-950/40 text-blue-400 font-medium"
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
