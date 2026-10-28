/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Code, ArrowUp } from 'lucide-react';

interface FooterProps {
  onOpenRegister: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenRegister }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#050609] border-t border-white/10 text-slate-400 text-xs sm:text-sm overflow-hidden">
      {/* Subtle antique gold border glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] ornament-line-gold opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Brand & Institution Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <span className="font-editorial text-2xl font-normal tracking-wide text-white">
                MILAN
              </span>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] border-l border-white/20 pl-3">
                SRMIST 2027
              </span>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-md">
              National-level cultural festival hosted by SRM Institute of Science and Technology,
              Kattankulathur, Chennai. Scheduled for <strong className="text-slate-200">February 18 – 21, 2027</strong>.
            </p>

            <div className="flex items-start gap-2.5 text-xs text-slate-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#E24A34] shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                SRM Nagar, Kattankulathur, Chengalpattu District, Tamil Nadu 603203, India
              </span>
            </div>
          </div>

          {/* Quick Section Links (Consistent with Page Order) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-widest text-[#D4AF37]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home & Live Countdown
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About MILAN & Ethos
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors">
                  Competitive Arenas
                </a>
              </li>
              <li>
                <a href="#campus" className="hover:text-white transition-colors">
                  Campus & Venue Stages
                </a>
              </li>
            </ul>
          </div>

          {/* DSA Tech Team & Engineering Notes */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center gap-2 text-white text-xs font-mono tracking-widest uppercase">
              <Code className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>DSA Tech Team Assignment</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Crafted for the Directorate of Student Affairs (DSA) technical evaluation at SRMIST Kattankulathur. Engineered with React 19, TypeScript, Tailwind CSS, Motion, and zero-pill typographic discipline.
            </p>

            <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-400 leading-normal font-mono">
              <span className="text-[#D4AF37] block mb-0.5 font-bold">FRONTEND DEMO TRACK:</span>
              Interactive client-side evaluation build with real input validation and zero external data tracking.
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© 2027 MILAN · SRM Institute of Science and Technology</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <span>Directorate of Student Affairs (DSA)</span>
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-slate-400 hover:text-white hover:bg-white/5 transition-colors focus-ring-gold cursor-pointer"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
};
