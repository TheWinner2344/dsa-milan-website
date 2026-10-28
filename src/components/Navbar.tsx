/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Search } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onNavigateToEvents: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onNavigateToEvents }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Section order consistent with page structure: 1. Home, 2. About, 3. Events, 4. Campus
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Campus', href: '#campus' },
  ];

  const handleSearchClick = () => {
    onNavigateToEvents();
    setTimeout(() => {
      const searchInput = document.getElementById('event-search-input');
      searchInput?.focus();
    }, 400);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080B]/92 backdrop-blur-md border-b border-white/10 shadow-2xl py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Classical Serif Wordmark */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-ring-gold rounded-sm"
              aria-label="MILAN Cultural Festival SRMIST Home"
            >
              <span className="font-editorial text-2xl sm:text-3xl font-normal tracking-wide text-white group-hover:text-[#F3E5AB] transition-colors">
                MILAN
              </span>
              <span className="hidden sm:inline-block text-[10px] font-mono font-medium uppercase tracking-[0.2em] text-[#D4AF37] border-l border-white/20 pl-2.5">
                SRMIST 2027
              </span>
            </a>

            {/* Zone 2: Navigation Links in correct Page Order */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-[#D4AF37] hover:after:w-full after:transition-all after:duration-200 focus-ring-gold rounded-sm font-sans"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: Search Action & Primary CTA */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={handleSearchClick}
                className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-full transition-colors focus-ring-gold cursor-pointer"
                aria-label="Quick search festival events"
                title="Search events"
              >
                <Search className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenRegister}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#E2F163] hover:bg-[#D5E650] shadow-md shadow-black/50 transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus-ring-gold cursor-pointer"
              >
                <span>Register Interest</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus-ring-gold transition-colors cursor-pointer"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" aria-hidden="true" />
                ) : (
                  <Menu className="w-6 h-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 md:hidden bg-black/90 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
                SRMIST MILAN 2027
              </span>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1 rounded-lg text-slate-400 hover:text-white"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-editorial text-2xl font-normal text-slate-200 hover:text-[#D4AF37] transition-colors py-2 border-b border-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegister();
              }}
              className="w-full py-3.5 text-center text-xs font-semibold uppercase tracking-wider text-black bg-[#E2F163] hover:bg-[#D5E650] rounded-full shadow-lg transition-transform cursor-pointer"
            >
              Register Interest
            </button>
            <p className="text-center text-xs text-slate-400 font-mono">
              DIRECTORATE OF STUDENT AFFAIRS · SRMIST
            </p>
          </div>
        </div>
      )}
    </>
  );
};
