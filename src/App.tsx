import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBand } from './components/StatsBand';
import { AboutAndArchitecture } from './components/AboutAndArchitecture';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectsGrid } from './components/ProjectsGrid';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ServicesSection } from './components/ServicesSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { TerminalModal } from './components/TerminalModal';

export const App: React.FC = () => {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-bg text-cyber-text transition-colors duration-300 font-sans selection:bg-cyber-teal/20 selection:text-cyber-teal relative">
      {/* Top Navbar */}
      <Navbar
        onOpenTerminal={() => setIsTerminalOpen(true)}
        onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero
          onOpenTerminal={() => setIsTerminalOpen(true)}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />
        <StatsBand />
        <AboutAndArchitecture />
        <ExperienceTimeline />
        <ProjectsGrid />
        <SkillsMatrix />
        <ServicesSection
          isQuoteModalOpen={isQuoteModalOpen}
          onCloseQuoteModal={() => setIsQuoteModalOpen(false)}
          onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
        />
        <ContactSection />
      </main>

      {/* Footer & Telemetry */}
      <Footer onOpenTerminal={() => setIsTerminalOpen(true)} />

      {/* Interactive CLI Terminal Drawer/Modal */}
      <TerminalModal
        isOpen={isTerminalOpen}
        onClose={() => setIsTerminalOpen(false)}
        onOpenQuoteModal={() => {
          setIsTerminalOpen(false);
          setIsQuoteModalOpen(true);
        }}
      />
    </div>
  );
};

export default App;
