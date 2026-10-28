/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Music, Theater, Shirt, Cpu, Sparkles, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      num: '01',
      title: 'Sonic Architecture',
      arena: 'Music',
      description:
        'From high-gain live rock riffs in the Open Air Amphitheatre to sublime acoustic counterpoint and Indian classical ragas in the acoustic courtyard.',
    },
    {
      num: '02',
      title: 'Kinetic Formations',
      arena: 'Dance',
      description:
        'Urban hip-hop crews, synchronized western choreography, and classical abhinaya staged inside the grand Dr. T.P. Ganesan Auditorium.',
    },
    {
      num: '03',
      title: 'Proscenium & Street',
      arena: 'Drama',
      description:
        'Intense one-act theatrical productions in acoustic auditoriums contrasted with vibrant circular Nukkad Natak street theatre addressing societal issues.',
    },
    {
      num: '04',
      title: 'Haute Avant-Garde',
      arena: 'Fashion',
      description:
        'Theatrical runway collections pairing high-concept architectural silhouettes with sustainable upcycled textiles and bold editorial styling.',
    },
    {
      num: '05',
      title: 'Generative Computation',
      arena: 'Technical',
      description:
        'Where engineering meets aesthetic expression—featuring live GLSL shader hackathons, audio-reactive projection mapping, and autonomous drone choreography.',
    },
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#090A0F] border-y border-white/10 overflow-hidden"
      aria-label="About MILAN Cultural Festival"
    >
      {/* Background Indian cultural motif lines */}
      <div className="pointer-events-none absolute inset-0 bg-cultural-grid opacity-20" aria-hidden="true" />
      <div className="pointer-events-none absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[#E24A34]/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-[#D4AF37]/5 blur-3xl" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-3">
              THE ESSENCE OF MILAN
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight leading-[1.12] [text-wrap:balance]">
              A Confluence of Heritage & Modern Expression.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p className="[text-wrap:pretty]">
              Hosted annually across the sprawling Kattankulathur campus of{' '}
              <strong className="text-white font-semibold">
                SRM Institute of Science and Technology
              </strong>
              , MILAN serves as a national nexus where collegiate delegations unite to challenge creative boundaries across music, movement, stagecraft, couture, and creative computing.
            </p>
            <p className="text-slate-400 leading-relaxed [text-wrap:pretty]">
              Curated by the Directorate of Student Affairs (DSA) and engineered by the DSA Tech Team, MILAN provides students with professional-grade production environments—from South Asia’s landmark 4,000-seat Dr. T.P. Ganesan Auditorium to dynamic open-air amphitheaters.
            </p>

            {/* Zero-Pill Unboxed Key Markers with Classical Separators */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 border-t border-white/10">
              <span className="text-slate-200 font-medium">Pan-India University Participation</span>
              <span className="text-[#D4AF37]/60" aria-hidden="true">·</span>
              <span className="text-slate-200 font-medium">Distinguished National Jury</span>
              <span className="text-[#D4AF37]/60" aria-hidden="true">·</span>
              <span className="text-slate-200 font-medium">10 Competitive Arenas</span>
            </div>
          </div>
        </div>

        {/* Five Creative Pillars in Human Editorial Numbering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="p-7 rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/5">
                  <span className="font-editorial text-xl font-light text-[#D4AF37]">
                    {pillar.num}
                  </span>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                    {pillar.arena}
                  </span>
                </div>

                <h3 className="font-editorial text-xl font-normal text-white group-hover:text-[#F3E5AB] transition-colors mb-2">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed [text-wrap:pretty]">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>MILAN 2027</span>
                <span className="text-[#E24A34]">FEB 18–21</span>
              </div>
            </div>
          ))}

          {/* Curatorial Ethos Box */}
          <div className="p-7 rounded-2xl bg-gradient-to-br from-[#1A1624] via-[#0E1017] to-[#14121A] border border-[#D4AF37]/30 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs font-mono tracking-widest uppercase mb-3">
                <Compass className="w-3.5 h-3.5" aria-hidden="true" />
                <span>DIRECTORATE ETHOS</span>
              </div>
              <h3 className="font-editorial text-xl font-normal text-white mb-2">
                Curated by DSA Tech Team
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Engineered with modern frontend standards, zero-pill discipline, WCAG accessibility, and authentic cultural typography to serve both festival participants and the wider public.
              </p>
            </div>

            <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span>SRMIST KTR</span>
              <span className="text-[#D4AF37]">OFFICIAL FESTIVAL</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
