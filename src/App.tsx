/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { WhatsAppWidget } from './components/WhatsAppWidget';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-emerald-500/25 selection:text-emerald-300">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Sections */}
        <main className="flex-grow">
          <Hero />
          <Services />
          <Projects />
          <ExperienceTimeline />
          <SkillsSection />
          <ContactSection />
        </main>

        {/* Floating WhatsApp Action (Bottom-Right) */}
        <WhatsAppWidget />

        {/* Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
