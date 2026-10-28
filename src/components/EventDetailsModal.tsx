/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { FestivalEvent } from '../types';
import { X, Calendar, MapPin, Users, Clock, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface EventDetailsModalProps {
  event: FestivalEvent | null;
  onClose: () => void;
  onRegister: (event: FestivalEvent) => void;
}

export const EventDetailsModal: React.FC<EventDetailsModalProps> = ({
  event,
  onClose,
  onRegister,
}) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Keyboard accessibility: Escape to dismiss, focus management
  useEffect(() => {
    if (!event) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    // Focus close button on open
    setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    // Prevent background scrolling while modal is open
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [event, onClose]);

  if (!event) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-event-title"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl my-8 rounded-2xl bg-[#0E101B] border border-white/15 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Media Banner */}
        <div className="relative aspect-[21/9] sm:aspect-[2.5/1] w-full overflow-hidden bg-slate-900">
          <img
            src={event.imageUrl}
            alt={`${event.title} presentation`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E101B] via-[#0E101B]/40 to-black/60 pointer-events-none" />

          {/* Category Chip */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 rounded-md text-xs font-semibold tracking-wider uppercase text-white bg-black/70 backdrop-blur-md border border-white/20">
              {event.category} Arena
            </span>
          </div>

          {/* Accessible Close Button */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-slate-300 hover:text-white hover:bg-black/80 border border-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
            aria-label="Close event details modal"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          {/* Title & Tagline */}
          <div>
            <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
              <span>MILAN 2027</span>
              <span aria-hidden="true">·</span>
              <span>SRMIST Kattankulathur</span>
            </div>
            <h2
              id="modal-event-title"
              className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug"
            >
              {event.title}
            </h2>
            <p className="text-sm sm:text-base text-rose-300 font-medium mt-1">
              {event.tagline}
            </p>
          </div>

          {/* Schedule & Venue Specifications Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 p-4 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <Calendar className="w-4 h-4 text-rose-400 shrink-0" aria-hidden="true" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Date</span>
                <span className="font-semibold text-white">{event.date}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-purple-400 shrink-0" aria-hidden="true" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Time</span>
                <span className="font-semibold text-white">{event.time}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" aria-hidden="true" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Venue</span>
                <span className="font-semibold text-white truncate max-w-[140px] block">{event.venue}</span>
              </div>
            </div>

            <div className="flex items-center gap-2.5">
              <Users className="w-4 h-4 text-amber-400 shrink-0" aria-hidden="true" />
              <div>
                <span className="text-[10px] text-slate-400 uppercase tracking-wider block">Team Size</span>
                <span className="font-semibold text-white">{event.teamSize}</span>
              </div>
            </div>
          </div>

          {/* Detailed Editorial Description */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
              Event Overview
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed [text-wrap:pretty]">
              {event.fullDescription}
            </p>
          </div>

          {/* Competition Rules Checklist */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" aria-hidden="true" />
              <span>Regulations & Guidelines</span>
            </div>
            <ul className="space-y-2.5">
              {event.rules.map((rule, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="leading-relaxed">{rule}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Modal Footer Actions */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-mono">
              EVENT REF: #{event.id.toUpperCase()}
            </span>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-colors"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => {
                  onClose();
                  onRegister(event);
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 via-purple-600 to-indigo-600 hover:from-rose-500 hover:via-purple-500 hover:to-indigo-500 rounded-lg shadow-lg shadow-rose-950/40 transition-all duration-200"
              >
                <span>Register for This Event</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
