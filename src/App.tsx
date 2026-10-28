/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FestivalEvent } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { EventExplorer } from './components/EventExplorer';
import { EventDetailsModal } from './components/EventDetailsModal';
import { RegistrationModal } from './components/RegistrationModal';
import { Footer } from './components/Footer';

export default function App() {
  const [selectedEventForDetails, setSelectedEventForDetails] = useState<FestivalEvent | null>(null);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState<boolean>(false);
  const [preselectedEventForRegister, setPreselectedEventForRegister] = useState<FestivalEvent | null>(null);

  const handleOpenRegister = (event?: FestivalEvent) => {
    setPreselectedEventForRegister(event || null);
    setIsRegisterModalOpen(true);
  };

  const handleCloseRegister = () => {
    setIsRegisterModalOpen(false);
    setPreselectedEventForRegister(null);
  };

  const handleSelectEvent = (event: FestivalEvent) => {
    setSelectedEventForDetails(event);
  };

  const handleCloseEventDetails = () => {
    setSelectedEventForDetails(null);
  };

  const handleRegisterFromDetails = (event: FestivalEvent) => {
    setSelectedEventForDetails(null);
    handleOpenRegister(event);
  };

  const handleExploreEvents = () => {
    const eventsElement = document.getElementById('events');
    if (eventsElement) {
      eventsElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#06070B] text-slate-100 flex flex-col font-sans selection:bg-rose-500/30 selection:text-white">
      {/* Floating 3-Zone Navigation */}
      <Navbar
        onOpenRegister={() => handleOpenRegister()}
        onNavigateToEvents={handleExploreEvents}
      />

      {/* Main Content Landmarks */}
      <main className="flex-1">
        {/* Signature Sculptural MILAN Hero */}
        <Hero
          onExploreEvents={handleExploreEvents}
          onOpenRegister={() => handleOpenRegister()}
        />

        {/* About Festival Section */}
        <AboutSection />

        {/* Functional Events Explorer */}
        <EventExplorer
          onSelectEvent={handleSelectEvent}
          onRegisterEvent={(event) => handleOpenRegister(event)}
        />
      </main>

      {/* Refined Institutional Footer */}
      <Footer onOpenRegister={() => handleOpenRegister()} />

      {/* Accessible Modals */}
      <EventDetailsModal
        event={selectedEventForDetails}
        onClose={handleCloseEventDetails}
        onRegister={handleRegisterFromDetails}
      />

      <RegistrationModal
        isOpen={isRegisterModalOpen}
        preselectedEvent={preselectedEventForRegister}
        onClose={handleCloseRegister}
      />
    </div>
  );
}
