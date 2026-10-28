/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from 'react';
import { FestivalEvent, FilterCategory } from '../types';
import { FESTIVAL_EVENTS, FESTIVAL_CATEGORIES } from '../data/events';
import { EventCard } from './EventCard';
import { Search, X, RotateCcw, Filter, Sparkles } from 'lucide-react';

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

  // Combined search and category filtering (never mutates the source dataset)
  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FESTIVAL_EVENTS.filter((event) => {
      // Category match
      const matchesCategory =
        selectedCategory === 'All' || event.category === selectedCategory;

      if (!matchesCategory) return false;

      // Keyword match across title, tagline, description, category, and venue
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

  return (
    <section
      id="events"
      className="relative py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="MILAN Festival Events Directory"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div>
          <span className="text-xs uppercase tracking-widest text-rose-400 font-semibold block mb-2">
            Competitive & Showcase Arenas
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Explore Festival Events
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-2xl">
            Ten curated competitions across 5 creative disciplines. Discover event schedules,
            regulations, team parameters, and stage venues across the campus.
          </p>
        </div>

        {/* Result Count and Live Indicator */}
        <div className="flex items-center gap-3 self-start md:self-end">
          <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300 font-mono flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400" aria-hidden="true" />
            <span>
              Showing <strong className="text-white font-bold">{filteredEvents.length}</strong> of{' '}
              {FESTIVAL_EVENTS.length} events
            </span>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={handleResetFilters}
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-medium text-rose-400 hover:text-white bg-rose-500/10 hover:bg-rose-500/20 border border-rose-500/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-500"
              aria-label="Reset all search and category filters"
            >
              <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Reset</span>
            </button>
          )}
        </div>
      </div>

      {/* Search Bar & Interactive Category Filter Controls */}
      <div className="space-y-4 mb-10">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Keyword Search Input */}
          <div className="relative flex-1 max-w-xl">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" aria-hidden="true" />
            </div>
            <input
              type="text"
              id="event-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by event title, arena, dance style, or venue..."
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-[#0F111D] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500/50 focus:border-rose-500/60 transition-all"
              aria-label="Search events"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors"
                aria-label="Clear search input"
              >
                <X className="w-4 h-4" aria-hidden="true" />
              </button>
            )}
          </div>

          {/* Category Tabs (Interactive Filter Controls adhering to constitution) */}
          <div
            className="flex items-center gap-1 p-1 bg-[#0F111D] border border-white/10 rounded-xl overflow-x-auto max-w-full"
            role="tablist"
            aria-label="Filter events by category"
          >
            {FESTIVAL_CATEGORIES.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'bg-gradient-to-r from-rose-600 to-purple-600 text-white shadow-md shadow-rose-950/40'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Filter Criteria Summary */}
        {hasActiveFilters && (
          <div className="flex flex-wrap items-center gap-2 pt-2 text-xs text-slate-400">
            <span>Active filters:</span>
            {selectedCategory !== 'All' && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200">
                Category: <strong>{selectedCategory}</strong>
                <button
                  type="button"
                  onClick={() => setSelectedCategory('All')}
                  className="hover:text-rose-400 ml-1"
                  aria-label="Remove category filter"
                >
                  ×
                </button>
              </span>
            )}
            {searchQuery.trim() && (
              <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-slate-200">
                Query: <strong>"{searchQuery}"</strong>
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="hover:text-rose-400 ml-1"
                  aria-label="Clear query"
                >
                  ×
                </button>
              </span>
            )}
          </div>
        )}
      </div>

      {/* Events Grid */}
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
        /* Friendly Empty State */
        <div className="py-20 px-6 rounded-2xl bg-[#0C0E18] border border-white/10 text-center flex flex-col items-center justify-center max-w-xl mx-auto">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-rose-400 mb-4">
            <Filter className="w-8 h-8" aria-hidden="true" />
          </div>
          <h3 className="text-xl font-bold text-white mb-2">No Matching Events Found</h3>
          <p className="text-sm text-slate-400 mb-6 leading-relaxed max-w-sm">
            We couldn't find any festival events matching "{searchQuery}". Try adjusting your keywords or clearing the category filter.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-gradient-to-r from-rose-600 to-purple-600 hover:from-rose-500 hover:to-purple-500 rounded-lg shadow-md transition-all"
          >
            <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}
    </section>
  );
};
