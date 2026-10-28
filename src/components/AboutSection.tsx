/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Sparkles, Music, Theater, Shirt, Cpu, Award, Users, Compass } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      icon: Music,
      title: 'Sonic Architecture',
      arena: 'Music',
      description:
        'From high-gain live rock riffs in the Open Air Amphitheatre to sublime acoustic counterpoint and Carnatic classical ragas in the acoustic courtyard.',
      color: 'from-fuchsia-500/20 to-purple-500/0 border-fuchsia-500/20 text-fuchsia-400'
    },
    {
      icon: Sparkles,
      title: 'Kinetic Formations',
      arena: 'Dance',
      description:
        'Urban hip-hop crews, synchronized western choreography, and pure classical abhinaya staged inside the grand 4,000-seat Dr. T.P. Ganesan Auditorium.',
      color: 'from-amber-500/20 to-rose-500/0 border-amber-500/20 text-amber-400'
    },
    {
      icon: Theater,
      title: 'Proscenium & Street',
      arena: 'Drama',
      description:
        'Gripping one-act theatrical productions in intimate auditoriums contrasted with vibrant circular Nukkad Natak street theatre addressing societal issues.',
      color: 'from-rose-500/20 to-orange-500/0 border-rose-500/20 text-rose-400'
    },
    {
      icon: Shirt,
      title: 'Haute Avant-Garde',
      arena: 'Fashion',
      description:
        'Theatrical runway collections pairing high-concept architectural silhouettes with sustainable upcycled textiles and bold editorial styling.',
      color: 'from-violet-500/20 to-indigo-500/0 border-violet-500/20 text-violet-400'
    },
    {
      icon: Cpu,
      title: 'Generative Computation',
      arena: 'Technical',
      description:
        'Where engineering meets aesthetic expression—featuring live GLSL shader hackathons, audio-reactive projection mapping, and autonomous drone choreography.',
      color: 'from-cyan-500/20 to-blue-500/0 border-cyan-500/20 text-cyan-400'
    }
  ];

  return (
    <section
      id="about"
      className="relative py-24 sm:py-32 bg-[#08090E] border-y border-white/10 overflow-hidden"
      aria-label="About MILAN Cultural Festival"
    >
      {/* Background ambient lighting */}
      <div
        className="pointer-events-none absolute top-1/2 left-0 w-96 h-96 rounded-full bg-rose-600/10 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 w-96 h-96 rounded-full bg-cyan-600/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold block mb-3">
              The Essence of MILAN
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] [text-wrap:balance]">
              A Confluence of Cultural Heritage & Modern Expression.
            </h2>
          </div>

          <div className="lg:col-span-7 space-y-5 text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="[text-wrap:pretty]">
              Hosted annually at the sprawling Kattankulathur campus of{' '}
              <strong className="text-white font-semibold">
                SRM Institute of Science and Technology
              </strong>
              , MILAN serves as a national nexus where collegiate delegations unite to challenge creative boundaries across music, movement, stagecraft, couture, and creative computing.
            </p>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed [text-wrap:pretty]">
              Curated and brought to life through the institutional vision of the Directorate of Student Affairs (DSA) and engineered by the DSA Tech Team, MILAN provides students with professional-grade production environments—from Asia’s landmark Dr. T.P. Ganesan Auditorium to dynamic open-air amphitheatres.
            </p>

            {/* Zero-Pill Unboxed Key Markers */}
            <div className="pt-4 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-400 border-t border-white/10">
              <span className="text-slate-200 font-medium">Pan-India University Participation</span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span className="text-slate-200 font-medium">National Jury Panels</span>
              <span className="text-white/20" aria-hidden="true">·</span>
              <span className="text-slate-200 font-medium">Multi-Disciplinary Arenas</span>
            </div>
          </div>
        </div>

        {/* Asymmetric Pillars Display (Bento layout with distinct visual hierarchy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isWide = index === 0 || index === 4;
            return (
              <div
                key={pillar.title}
                className={`relative p-7 rounded-2xl bg-[#0C0E17] border border-white/10 hover:border-white/25 transition-all duration-300 group ${
                  isWide ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div className="flex items-center justify-between mb-5">
                  <div className={`p-3 rounded-xl bg-white/5 border ${pillar.color}`}>
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-slate-400 font-mono">
                    {pillar.arena}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors mb-2.5">
                  {pillar.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed [text-wrap:pretty]">
                  {pillar.description}
                </p>
              </div>
            );
          })}

          {/* Institutional Anchor Box */}
          <div
            id="campus"
            className="p-7 rounded-2xl bg-gradient-to-br from-rose-950/30 via-[#0C0E17] to-indigo-950/20 border border-rose-500/20 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest mb-3">
                <Compass className="w-4 h-4" aria-hidden="true" />
                <span>The Kattankulathur Stage</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                Dr. T.P. Ganesan Auditorium
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Featuring state-of-the-art computerized line-array acoustics, motorized stage rigging, and 4,000 seating capacity, making it one of the largest and most sophisticated indoor university auditoriums in South Asia.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>SRMIST CHENNAI</span>
              <span className="text-rose-400">EST. VENUE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
