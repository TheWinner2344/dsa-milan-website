/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Sparkles, ArrowDown, Calendar, MapPin, Trophy } from 'lucide-react';

interface HeroProps {
  onExploreEvents: () => void;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEvents, onOpenRegister }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 sm:pb-16 select-none bg-[#06070B]"
      aria-label="MILAN Festival Introduction"
    >
      {/* 1. Ambient atmospheric glow meshes */}
      <div
        className="pointer-events-none absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full ambient-glow-coral blur-3xl opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-1/3 -right-40 w-[700px] h-[700px] rounded-full ambient-glow blur-3xl opacity-70"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/3 w-[500px] h-[500px] rounded-full bg-cyan-500/10 blur-3xl opacity-50"
        aria-hidden="true"
      />

      {/* 2. Abstract Geometric Vector Elements & Kinetic Orbits Layer */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Subtle architectural grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40" />

        {/* Luminous dynamic celestial rings */}
        <svg
          className="absolute -top-12 left-1/2 -translate-x-1/2 w-[980px] h-[980px] opacity-25"
          viewBox="0 0 1000 1000"
          fill="none"
        >
          <circle
            cx="500"
            cy="500"
            r="440"
            stroke="url(#ring-grad-1)"
            strokeWidth="1.5"
            strokeDasharray="8 12"
          />
          <circle
            cx="500"
            cy="500"
            r="380"
            stroke="url(#ring-grad-2)"
            strokeWidth="1"
            strokeDasharray="2 10"
          />
          <circle
            cx="500"
            cy="500"
            r="490"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="0.8"
          />
          <defs>
            <linearGradient id="ring-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF5E62" />
              <stop offset="50%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#06B6D4" />
            </linearGradient>
            <linearGradient id="ring-grad-2" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#F43F5E" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 3. SIGNATURE MILAN TYPOGRAPHIC SCULPTURE LAYER (Occupies hero viewport behind foreground interface) */}
      <div
        className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Subtle reflection halo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-sculptural text-[22vw] sm:text-[23vw] lg:text-[24vw] font-black tracking-[-0.04em] text-milan-gradient opacity-20 blur-2xl transform scale-105">
              MILAN
            </span>
          </div>

          {/* Primary sculpted letters extending edge-to-edge */}
          <span className="font-sculptural text-[21vw] sm:text-[22vw] lg:text-[23.5vw] font-black tracking-[-0.04em] text-milan-gradient drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)] opacity-95 transition-transform duration-700">
            MILAN
          </span>

          {/* Precision hairline outline overlay for sculptural edge definition */}
          <span className="absolute font-sculptural text-[21vw] sm:text-[22vw] lg:text-[23.5vw] font-black tracking-[-0.04em] text-milan-outline opacity-40">
            MILAN
          </span>
        </div>
      </div>

      {/* 4. FOREGROUND INTERACTION LAYER (Floating cleanly above the sculptural typography) */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-center">
        {/* Top Kicker: Institution & Category Context */}
        <div className="flex flex-col items-start gap-4 mb-6">
          <div className="inline-flex items-center gap-3 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-sm">
            <span className="w-2 h-2 rounded-full bg-rose-500" aria-hidden="true" />
            <span className="text-xs uppercase tracking-widest text-slate-300 font-medium">
              SRM Institute of Science & Technology · Kattankulathur
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.08] max-w-3xl [text-wrap:balance]">
            Where Culture Transcends.
            <span className="block font-display-serif italic font-normal text-3xl sm:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-purple-300 to-cyan-300 mt-1">
              The Confluence of Rhythm & Art.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mt-2 [text-wrap:pretty]">
            MILAN is the premier national-level cultural festival hosted by SRMIST Kattankulathur.
            A multi-disciplinary celebration bringing together thousands of artists, performers,
            thespians, and creative technologists across India.
          </p>
        </div>

        {/* Action Controls & Fast Metadata Bar */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 mt-4">
          <button
            type="button"
            onClick={onExploreEvents}
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 hover:from-rose-500 hover:via-purple-500 hover:to-indigo-500 shadow-xl shadow-rose-950/40 hover:shadow-rose-600/30 transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#06070B]"
          >
            <Compass className="w-4 h-4 text-rose-200" aria-hidden="true" />
            <span>Explore 10 Events</span>
          </button>

          <button
            type="button"
            onClick={onOpenRegister}
            className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-semibold text-slate-200 bg-white/10 hover:bg-white/15 border border-white/15 hover:border-white/25 backdrop-blur-md transition-all duration-200 active:scale-[0.98] whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
          >
            <span>Register Demonstration</span>
          </button>
        </div>

        {/* Clean Unboxed Metadata Strip (Zero-Pill Discipline) */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-white/10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
            <span className="text-slate-200 font-medium">March 13 – 15, 2027</span>
          </div>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-violet-400 shrink-0" aria-hidden="true" />
            <span>Kattankulathur Campus, Chennai</span>
          </div>
          <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
            <span>5 Core Arenas · Pan-India Delegations</span>
          </div>
        </div>
      </div>

      {/* 5. Bottom Scroll Indication */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-between items-end pt-8">
        <div className="text-xs text-slate-500 font-mono tracking-wider">
          DSA TECH TEAM · TECHNICAL ASSIGNMENT
        </div>

        <a
          href="#events"
          className="group inline-flex items-center gap-2 text-xs uppercase tracking-widest text-slate-400 hover:text-white transition-colors"
          aria-label="Scroll down to festival events"
        >
          <span>Discover Arenas</span>
          <ArrowDown className="w-3.5 h-3.5 text-rose-400 group-hover:translate-y-0.5 transition-transform" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};
