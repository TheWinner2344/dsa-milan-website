/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FestivalEvent } from '../types';
import { Calendar, MapPin, Users, Clock, ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface EventCardProps {
  event: FestivalEvent;
  onSelect: (event: FestivalEvent) => void;
  onRegister: (event: FestivalEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect, onRegister }) => {
  const [imageError, setImageError] = useState(false);

  // Category accent dot colors matching Indian cultural palette
  const categoryColorMap: Record<string, string> = {
    Dance: 'bg-[#FF4D8D]',
    Music: 'bg-[#FFAA00]',
    Drama: 'bg-[#A855F7]',
    Fashion: 'bg-[#00F0FF]',
    Technical: 'bg-[#3B82F6]',
  };

  const dotColor = categoryColorMap[event.category] || 'bg-[#D4AF37]';

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col rounded-2xl bg-[#0E1017] border border-white/10 hover:border-[#D4AF37]/40 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-black/70"
      aria-labelledby={`event-title-${event.id}`}
    >
      {/* Visual Asset Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#141722]">
        {!imageError ? (
          <img
            src={event.imageUrl}
            alt={`${event.title} - ${event.category} performance at MILAN SRMIST`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#141722] to-[#1C1829] text-center">
            <span className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-mono mb-2">
              {event.category} Arena
            </span>
            <p className="font-editorial text-lg text-white">{event.title}</p>
          </div>
        )}

        {/* Contrast scrim gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E1017] via-transparent to-black/30 pointer-events-none" />

        {/* Category Indicator Dot & Label on card photo */}
        <div className="absolute bottom-3 left-3 flex items-center gap-2 px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md border border-white/10">
          <span className={`w-2 h-2 rounded-full ${dotColor}`} aria-hidden="true" />
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-200">
            {event.category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata (Date & Venue) */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
            <span className="text-slate-300 font-medium font-sans">{event.date}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate text-slate-400">{event.time}</span>
          </div>

          <h3
            id={`event-title-${event.id}`}
            className="font-editorial text-xl sm:text-2xl font-normal text-white group-hover:text-[#F3E5AB] transition-colors leading-snug mb-2"
          >
            {event.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-400 line-clamp-2 leading-relaxed mb-4">
            {event.shortDescription}
          </p>

          <div className="text-xs text-slate-400 pt-3 border-t border-white/5 flex items-center gap-2 mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" aria-hidden="true" />
            <span className="truncate">{event.venue}</span>
          </div>
        </div>

        {/* Action Controls: Details & Register */}
        <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
          <button
            type="button"
            onClick={() => onSelect(event)}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white transition-colors group-hover:text-amber-200 focus-ring-gold rounded-sm py-1"
            aria-label={`View full details for ${event.title}`}
          >
            <span>View Guidelines</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>

          <button
            type="button"
            onClick={() => onRegister(event)}
            className="w-8 h-8 rounded-full border border-white/20 group-hover:border-[#D4AF37] text-white group-hover:text-[#D4AF37] flex items-center justify-center transition-all duration-200 hover:bg-white/10 focus-ring-gold cursor-pointer"
            aria-label={`Register interest for ${event.title}`}
            title="Register interest"
          >
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      </div>
    </motion.article>
  );
};
