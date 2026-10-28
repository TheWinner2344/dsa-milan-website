/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { FestivalEvent } from '../types';
import { Calendar, MapPin, Users, Clock, ArrowRight, Eye } from 'lucide-react';

interface EventCardProps {
  event: FestivalEvent;
  onSelect: (event: FestivalEvent) => void;
  onRegister: (event: FestivalEvent) => void;
}

export const EventCard: React.FC<EventCardProps> = ({ event, onSelect, onRegister }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <article
      className="group relative flex flex-col rounded-2xl bg-[#0C0E18] border border-white/10 hover:border-white/25 overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/60"
      aria-labelledby={`event-title-${event.id}`}
    >
      {/* Visual Asset Container with Zero-Broken-Image Policy */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        {!imageError ? (
          <img
            src={event.imageUrl}
            alt={`${event.title} - ${event.category} performance at MILAN SRMIST`}
            referrerPolicy="no-referrer"
            onError={() => setImageError(true)}
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
          />
        ) : (
          /* Graceful Fallback Container */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 to-indigo-950/60 text-center">
            <span className="text-xs uppercase tracking-widest text-rose-400 font-mono mb-2">
              {event.category} Arena
            </span>
            <p className="text-sm font-semibold text-white">{event.title}</p>
          </div>
        )}

        {/* Contrast scrim overlay ensuring WCAG legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0C0E18] via-transparent to-black/30 pointer-events-none" />

        {/* Clean unboxed category flag on photo top-left */}
        <div className="absolute top-3.5 left-3.5">
          <span className="px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md border border-white/15">
            {event.category}
          </span>
        </div>
      </div>

      {/* Card Content Body */}
      <div className="flex-1 p-6 flex flex-col justify-between">
        <div>
          {/* Unboxed Metadata Strip (Zero-Pill Discipline) */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-2.5">
            <span className="text-slate-300 font-medium">{event.date}</span>
            <span aria-hidden="true">·</span>
            <span className="truncate">{event.venue}</span>
          </div>

          <h3
            id={`event-title-${event.id}`}
            className="text-xl font-bold text-white group-hover:text-rose-300 transition-colors leading-snug mb-2"
          >
            {event.title}
          </h3>

          <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed mb-4">
            {event.shortDescription}
          </p>

          {/* Quick Specifications */}
          <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 pt-3 border-t border-white/5 mb-5">
            <div className="flex items-center gap-1.5 truncate">
              <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              <span className="truncate">{event.teamSize}</span>
            </div>
            <div className="flex items-center gap-1.5 truncate">
              <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" aria-hidden="true" />
              <span className="truncate">{event.duration}</span>
            </div>
          </div>
        </div>

        {/* Actions bar: Single-line controls */}
        <div className="flex items-center gap-2.5 pt-3 border-t border-white/10">
          <button
            type="button"
            onClick={() => onSelect(event)}
            className="flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2.5 text-xs font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500 whitespace-nowrap"
            aria-label={`View rules and full details for ${event.title}`}
          >
            <Eye className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Details</span>
          </button>

          <button
            type="button"
            onClick={() => onRegister(event)}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 text-xs font-semibold text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 rounded-lg shadow-sm shadow-rose-950/30 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-400 whitespace-nowrap"
            aria-label={`Register for ${event.title}`}
          >
            <span>Register</span>
            <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
};
