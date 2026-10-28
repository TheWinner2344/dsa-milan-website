/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Compass, MapPin, Calendar, Sparkles } from 'lucide-react';
import { Countdown } from './Countdown';
import { motion } from 'motion/react';

interface HeroProps {
  onExploreEvents: () => void;
  onOpenRegister: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreEvents, onOpenRegister }) => {
  return (
    <section
      id="home"
      className="relative min-h-[95vh] w-full flex flex-col justify-between overflow-hidden pt-28 sm:pt-32 pb-12 sm:pb-16 bg-[#07080B]"
      aria-label="MILAN Festival Introduction & Countdown"
    >
      {/* 1. Atmospheric Ambient Lighting & Fine Architectural Grid */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
        {/* Soft sunset warmth behind left typography */}
        <div className="absolute top-1/4 -left-32 w-[550px] h-[550px] rounded-full bg-gradient-to-br from-[#E24A34]/15 via-[#ED2D7C]/10 to-transparent blur-3xl opacity-70" />
        
        {/* Luminous violet & cyan warmth behind right letterforms */}
        <div className="absolute top-1/3 -right-32 w-[600px] h-[600px] rounded-full bg-gradient-to-bl from-[#00D5FF]/10 via-[#7928CA]/15 to-transparent blur-3xl opacity-60" />

        {/* Delicate cultural textile / archival pattern grid */}
        <div className="absolute inset-0 bg-cultural-grid opacity-30 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_40%,#000_60%,transparent_100%)]" />

        {/* Fine ornamental architectural guidelines */}
        <div className="absolute top-24 left-0 right-0 h-[1px] ornament-line-gold opacity-30" />
        <div className="absolute bottom-16 left-0 right-0 h-[1px] ornament-line-gold opacity-20" />
      </div>

      {/* 2. THE SIGNATURE MILAN MONUMENTAL WORDMARK LAYER */}
      <div
        className="pointer-events-none absolute inset-x-0 top-16 sm:top-20 z-10 flex items-center justify-center overflow-hidden"
        aria-hidden="true"
      >
        <div className="relative w-full flex flex-col items-center justify-center">
          {/* Subtle reflection & ambient depth glow */}
          <span className="font-editorial text-[20vw] sm:text-[21vw] font-normal tracking-[-0.03em] text-milan-monumental opacity-15 blur-3xl select-none leading-none">
            MILAN
          </span>

          {/* Primary monumental classical letters spanning edge to edge */}
          <span className="absolute top-0 font-editorial text-[20vw] sm:text-[21vw] font-normal tracking-[-0.03em] text-milan-monumental select-none leading-none drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)] opacity-95">
            MILAN
          </span>

          {/* Precision hairline edge highlight */}
          <span className="absolute top-0 font-editorial text-[20vw] sm:text-[21vw] font-normal tracking-[-0.03em] text-milan-stroke opacity-30 select-none leading-none">
            MILAN
          </span>
        </div>
      </div>

      {/* 3. 3D Ribbon / Kinetic Sculptural Accent (interweaving behind/foreground like the reference image) */}
      <div
        className="pointer-events-none absolute right-4 sm:right-16 lg:right-32 bottom-20 sm:bottom-28 z-15 w-[320px] sm:w-[480px] lg:w-[620px] h-[340px] sm:h-[480px] opacity-75 sm:opacity-90 mix-blend-screen overflow-hidden"
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 600 600"
          fill="none"
          className="w-full h-full transform scale-110 translate-y-12"
        >
          <path
            d="M 150 480 C 220 300, 340 180, 480 220 C 580 250, 480 420, 360 480 C 240 540, 160 520, 150 480 Z"
            fill="url(#silk-gradient-1)"
            opacity="0.85"
          />
          <path
            d="M 220 520 C 310 380, 420 280, 520 340 C 600 390, 450 560, 310 560 Z"
            fill="url(#silk-gradient-2)"
            opacity="0.9"
          />
          <path
            d="M 120 460 C 260 360, 380 220, 420 140 C 440 90, 380 120, 320 220 C 260 320, 150 440, 120 460 Z"
            fill="url(#silk-gradient-3)"
            opacity="0.75"
          />
          <defs>
            <linearGradient id="silk-gradient-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E24A34" />
              <stop offset="35%" stopColor="#ED2D7C" />
              <stop offset="70%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#00D5FF" />
            </linearGradient>
            <linearGradient id="silk-gradient-2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FF8A00" />
              <stop offset="50%" stopColor="#E52E71" />
              <stop offset="100%" stopColor="#3870E0" />
            </linearGradient>
            <linearGradient id="silk-gradient-3" x1="100%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="40%" stopColor="#7928CA" />
              <stop offset="100%" stopColor="#E24A34" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* 4. FOREGROUND EDITORIAL CONTENT LAYER */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto pt-16 sm:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          {/* Left Column: Title, Campaign Narrative & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start gap-5"
          >
            {/* Campaign Headline matching reference aesthetic */}
            <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.06] [text-wrap:balance]">
              A Festival <br />
              <span className="font-editorial italic font-normal text-ivory-gradient">
                Beyond Boundaries
              </span>
            </h1>

            {/* Supporting Prose */}
            <p className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed [text-wrap:pretty]">
              Milan — the national-level cultural fest by DSA, where talent meets tradition,
              creativity finds its stage, and every moment becomes a memory.
            </p>

            {/* Action Buttons: High-Impact Editorial Styling */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                type="button"
                onClick={onExploreEvents}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#E2F163] hover:bg-[#D5E650] shadow-lg shadow-black/40 transition-all duration-200 active:scale-[0.98] focus-ring-gold whitespace-nowrap cursor-pointer"
              >
                <span>Explore Events</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={onOpenRegister}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-xs font-medium uppercase tracking-wider text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#D4AF37]/50 backdrop-blur-md transition-all duration-200 active:scale-[0.98] focus-ring-gold whitespace-nowrap cursor-pointer"
              >
                <span>Register Interest</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Giant Live Countdown & Discipline Pillar Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col justify-end lg:items-end space-y-6 pt-6 lg:pt-0"
          >
            {/* Vertical Discipline Tags & Culture Connects Banner */}
            <div className="hidden lg:flex items-start justify-end gap-6 text-right pb-2">
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 space-y-1">
                <div>MUSIC</div>
                <div>DANCE</div>
                <div>DRAMA</div>
                <div>FASHION</div>
                <div>TECHNICAL</div>
              </div>
              <div className="border-l border-white/15 pl-4 text-left">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] block leading-tight">
                  CULTURE<br />CONNECTS<br />US
                </span>
              </div>
            </div>

            {/* Giant Live Countdown Section */}
            <div className="w-full p-6 sm:p-7 rounded-2xl bg-[#0E1017]/80 backdrop-blur-xl border border-white/10 shadow-2xl">
              <Countdown />
            </div>
          </motion.div>
        </div>

        {/* Clean Unboxed Metadata Strip */}
        <div className="mt-12 sm:mt-16 pt-5 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-2">
              <Calendar className="w-3.5 h-3.5 text-[#E24A34]" aria-hidden="true" />
              <span className="text-slate-200 font-medium font-sans">
                February 18 – 21, 2027
              </span>
            </div>
            <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37]" aria-hidden="true" />
              <span>SRMIST Kattankulathur, Chennai</span>
            </div>
            <span className="text-white/20 hidden sm:inline" aria-hidden="true">·</span>
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" aria-hidden="true" />
              <span>10 Flagship Arenas</span>
            </div>
          </div>

          <div className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
            DIRECTORATE OF STUDENT AFFAIRS
          </div>
        </div>
      </div>
    </section>
  );
};
