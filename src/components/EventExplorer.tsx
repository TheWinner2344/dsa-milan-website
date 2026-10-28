/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { FestivalEvent, FilterCategory, EventCategory } from '../types';
import { FESTIVAL_EVENTS, FESTIVAL_CATEGORIES } from '../data/events';
import { EventCard } from './EventCard';
import { Search, X, RotateCcw, Filter, Music, Theater, Shirt, Cpu, Sparkles, Layers } from 'lucide-react';

interface EventExplorerProps {
  onSelectEvent: (event: FestivalEvent) => void;
  onRegisterEvent: (event: FestivalEvent) => void;
}

export const EventExplorer: React.FC<EventExplorerProps> = ({
  onSelectEvent,
  onRegisterEvent,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Combined search and category filtering (never mutates source data)
  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FESTIVAL_EVENTS.filter((event) => {
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const searchableText = `${event.title} ${event.tagline} ${event.shortDescription} ${event.category} ${event.venue} ${event.fullDescription}`.toLowerCase();
      return searchableText.includes(query);
    });
  }, [searchQuery, selectedCategory]);

  const hasActiveFilters = selectedCategory !== 'All' || searchQuery.trim().length > 0;

  const handleResetFilters = () => {
    setSelectedCategory('All');
    setSearchQuery('');
  };

  // Category Icon & Accent Mapping matching the reference design
  const categoryConfig: Record<
    FilterCategory,
    { label: string; icon: React.ComponentType<{ className?: string }>; color: string }
  > = {
    All: { label: 'All Arenas', icon: Layers, color: 'text-amber-400 border-amber-400/30' },
    Dance: { label: 'Dance', icon: Sparkles, color: 'text-[#FF4D8D] border-[#FF4D8D]/40' },
    Music: { label: 'Music', icon: Music, color: 'text-[#FFAA00] border-[#FFAA00]/40' },
    Drama: { label: 'Drama', icon: Theater, color: 'text-[#A855F7] border-[#A855F7]/40' },
    Fashion: { label: 'Fashion', icon: Shirt, color: 'text-[#00F0FF] border-[#00F0FF]/40' },
    Technical: { label: 'Technical', icon: Cpu, color: 'text-[#3B82F6] border-[#3B82F6]/40' },
  };

  return (
    <section
      id="events"
      className="relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="MILAN Festival Events Directory"
    >
      {/* 1. Category Quick-Bar & Floating Search Surface (Inspired by Reference Design) */}
      <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-6 mb-16 pb-8 border-b border-white/10">
        {/* Category Circular Selectors */}
        <div
          className="flex items-center gap-3 sm:gap-4 overflow-x-auto pb-2 lg:pb-0 scrollbar-none"
          role="tablist"
          aria-label="Filter events by cultural discipline"
        >
          {FESTIVAL_CATEGORIES.map((cat) => {
            const config = categoryConfig[cat];
            const Icon = config.icon;
            const isActive = selectedCategory === cat;

            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setSelectedCategory(cat)}
                className="group flex flex-col items-center gap-2 focus-ring-gold rounded-xl cursor-pointer"
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isActive
                      ? `bg-white/10 border-2 ${config.color} shadow-lg shadow-black/50 scale-105`
                      : 'bg-[#0E1017] border border-white/10 hover:border-white/30 hover:scale-102'
                  }`}
                >
                  <Icon className={`w-5 h-5 transition-colors ${config.color}`} />
                </div>
                <span
                  className={`text-[11px] font-sans font-medium transition-colors ${
                    isActive ? 'text-white font-semibold' : 'text-slate-400 group-hover:text-slate-200'
                  }`}
                >
                  {config.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Floating Search Bar with restrained warm glow */}
        <div className="relative flex items-center gap-3 w-full lg:max-w-md">
          <div className="relative flex-1 search-floating-glow rounded-full transition-all">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4 text-slate-400" aria-hidden="true" />
            </div>

            <input
              type="text"
              id="event-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search events, venues, styles..."
              className="w-full pl-11 pr-10 py-3 rounded-full bg-[#0E1017]/90 border border-white/15 text-white placeholder-slate-400 text-xs sm:text-sm focus:outline-none focus:border-[#D4AF37]/60 transition-all font-sans"
              aria-label="Search events"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-4 flex items-center text-slate-400 hover:text-white transition-colors"
                aria-label="Clear search query"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Quick Filter Reset Icon Button */}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="p-3 rounded-full bg-[#0E1017] border border-white/15 text-slate-300 hover:text-white hover:border-[#D4AF37]/50 transition-all focus-ring-gold shrink-0 cursor-pointer"
              title="Reset all search and category filters"
              aria-label="Reset all search and category filters"
            >
              <RotateCcw className="w-4 h-4 text-[#E24A34]" aria-hidden="true" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Featured Events Header matching Reference Style */}
      <div className="flex items-baseline justify-between mb-8">
        <div>
          <span className="text-xs uppercase font-mono tracking-[0.2em] text-[#D4AF37] block mb-1">
            MILAN COMPETITIVE ARENAS
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white tracking-tight">
            Featured Events
          </h2>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <span>
            SHOWING <strong className="text-white font-bold">{filteredEvents.length}</strong> / {FESTIVAL_EVENTS.length}
          </span>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="text-[#E24A34] hover:underline underline-offset-4 hidden sm:inline"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* 3. Event Cards Grid */}
      {filteredEvents.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredEvents.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onSelect={onSelectEvent}
              onRegister={onRegisterEvent}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="py-20 px-6 rounded-2xl bg-[#0E1017] border border-white/10 text-center flex flex-col items-center justify-center max-w-lg mx-auto">
          <div className="p-4 rounded-full bg-white/5 border border-white/10 text-[#D4AF37] mb-4">
            <Filter className="w-8 h-8" aria-hidden="true" />
          </div>
          <h3 className="font-editorial text-2xl text-white mb-2 font-normal">
            No Events Match Criteria
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mb-6 leading-relaxed max-w-sm">
            We couldn't find any festival events matching "{searchQuery}" in {selectedCategory}. Try resetting filters to view all arenas.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#E2F163] hover:bg-[#D5E650] shadow-md transition-all cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>View All Arenas</span>
          </button>
        </div>
      )}
    </section>
  );
};
