/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { MapPin, Users, Volume2, Shield } from 'lucide-react';

export const CampusSection: React.FC = () => {
  const venues = [
    {
      name: 'Dr. T.P. Ganesan Auditorium',
      type: 'Main Grand Stage & Hall',
      capacity: '4,000 Seats',
      acoustic: 'Motorized fly-tower rigging, digital line-array acoustic arrays',
      arenas: 'ChoreoNite, Vogue Couture Runway, Opening & Closing Ceremonies',
      note: 'One of South Asia’s largest university auditoriums, engineered for symphonic and theatrical scale.',
    },
    {
      name: 'SRMIST Open Air Amphitheatre',
      type: 'Acoustic Amphitheatre',
      capacity: '6,500 Spectators',
      acoustic: 'High-power concert line-array sound reinforcement',
      arenas: 'Battle of the Bands: Sonic Resonance, Live Music Showcases',
      note: 'Dynamic open-air tiered arena hosting high-energy rock ensembles and star night concerts.',
    },
    {
      name: 'Mini Auditorium I & II',
      type: 'Proscenium Theatres',
      capacity: '800 Seats',
      acoustic: 'Acoustic dampening shell and theatrical spotlight grid',
      arenas: 'Proscenium One-Act Plays, NatyaTarang Classical Dance',
      note: 'Intimate performance spaces designed for classical nuance, crisp vocal articulation, and dramatic blocking.',
    },
    {
      name: 'Tech Park Atrium & Complex',
      type: 'Digital Installation Space',
      capacity: 'Multi-Floor Open Atrium',
      acoustic: 'Projection-mapped volumetric sound & high-speed workstation arrays',
      arenas: 'Creative Code Jam, RoboKinetic Swarms & Interactive Installations',
      note: 'Modern architectural glass atrium hosting generative art hackathons and drone flight enclosures.',
    },
  ];

  return (
    <section
      id="campus"
      className="relative py-24 sm:py-32 bg-[#07080B] border-t border-white/10 overflow-hidden"
      aria-label="MILAN Festival Venues and Campus"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="text-xs font-mono tracking-[0.25em] uppercase text-[#D4AF37] block mb-2">
              KATTANKULATHUR CAMPUS
            </span>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-white tracking-tight">
              Venues & Production Stages
            </h2>
          </div>
          <p className="text-slate-400 text-xs sm:text-sm max-w-md leading-relaxed font-sans">
            SRM Institute of Science and Technology provides purpose-built performance infrastructure across its 250-acre flagship campus in Kattankulathur, Chennai.
          </p>
        </div>

        {/* Venues Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {venues.map((venue) => (
            <div
              key={venue.name}
              className="p-7 rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-white/5 mb-4">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37]">
                    {venue.type}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                    <Users className="w-3.5 h-3.5 text-slate-400" aria-hidden="true" />
                    <span>{venue.capacity}</span>
                  </div>
                </div>

                <h3 className="font-editorial text-2xl font-normal text-white mb-2">
                  {venue.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4">
                  {venue.note}
                </p>

                <div className="space-y-2 text-xs text-slate-400 pt-3 border-t border-white/5">
                  <div className="flex items-start gap-2">
                    <Volume2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-300">{venue.acoustic}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-3.5 h-3.5 text-[#E24A34] shrink-0 mt-0.5" aria-hidden="true" />
                    <span className="text-slate-400">Hosting: <strong className="text-slate-200">{venue.arenas}</strong></span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Campus Location Strip */}
        <div className="mt-12 p-6 rounded-2xl bg-[#0E1017]/60 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 text-[#D4AF37]">
              <MapPin className="w-4 h-4" aria-hidden="true" />
            </div>
            <span>
              SRM Nagar, Kattankulathur, Chengalpattu District, Tamil Nadu 603203 (Near Chennai GST Road)
            </span>
          </div>

          <div className="text-[11px] font-mono text-slate-400">
            METRO / SUBURBAN RAIL: POTHIERI (SRM) STATION
          </div>
        </div>
      </div>
    </section>
  );
};
