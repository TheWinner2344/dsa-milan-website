/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenRegister: () => void;
  onNavigateToEvents: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRegister, onNavigateToEvents }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
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

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Events', href: '#events' },
    { label: 'About MILAN', href: '#about' },
    { label: 'Venue & Campus', href: '#campus' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#06070B]/90 backdrop-blur-md border-b border-white/10 shadow-2xl shadow-black/50 py-3.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar Contract: 3 zones separated by gap-8 */}
          <div className="flex items-center justify-between gap-8">
            {/* Zone 1: Brand wordmark */}
            <a
              href="#home"
              className="group flex items-center gap-2.5 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm"
              aria-label="MILAN Cultural Festival SRMIST Home"
            >
              <span className="font-sculptural text-2xl sm:text-3xl font-extrabold tracking-wider text-white group-hover:text-rose-400 transition-colors">
                MILAN
              </span>
              <span className="hidden sm:inline-block text-[11px] font-semibold uppercase tracking-widest text-slate-400 font-sans border-l border-white/20 pl-2.5">
                SRMIST
              </span>
            </a>

            {/* Zone 2: Navigation Links (Clean unboxed text with hover underline) */}
            <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="whitespace-nowrap shrink-0 hover:text-white transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-rose-500 after:to-violet-500 hover:after:w-full after:transition-all after:duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 rounded-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Zone 3: 1 Primary Action */}
            <div className="flex items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={onOpenRegister}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 rounded-lg hover:from-rose-500 hover:via-purple-500 hover:to-indigo-500 shadow-lg shadow-rose-900/20 hover:shadow-rose-600/30 transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070B]"
              >
                <span>Register Demo</span>
                <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>

              {/* Mobile Menu Toggle Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 transition-colors"
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
          className="fixed inset-0 z-30 md:hidden bg-black/80 backdrop-blur-xl pt-24 px-6 pb-8 flex flex-col justify-between animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">
                Festival Navigation
              </span>
              <span className="text-xs text-rose-400 font-mono">SRMIST 2027</span>
            </div>
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xl font-medium text-slate-200 hover:text-rose-400 transition-colors py-2"
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
              className="w-full py-3.5 text-center text-sm font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 rounded-xl shadow-lg shadow-rose-900/30 active:scale-[0.99] transition-transform"
            >
              Register Demo
            </button>
            <p className="text-center text-xs text-slate-500">
              Organized by DSA Tech Team · SRMIST
            </p>
          </div>
        </div>
      )}
    </>
  );
};
