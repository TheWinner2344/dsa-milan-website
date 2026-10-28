/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type EventCategory = 'Dance' | 'Music' | 'Drama' | 'Fashion' | 'Technical';

export type FilterCategory = 'All' | EventCategory;

export interface FestivalEvent {
  id: string;
  title: string;
  category: EventCategory;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  date: string;
  time: string;
  venue: string;
  imageUrl: string;
  teamSize: string;
  duration: string;
  rules: string[];
  accentGradient: string;
  accentBorder: string;
}

export interface RegistrationFormData {
  fullName: string;
  email: string;
  eventId: string;
  institution: string;
  teamName?: string;
  agreeTerms: boolean;
}

export interface FormErrors {
  fullName?: string;
  email?: string;
  eventId?: string;
  institution?: string;
  agreeTerms?: string;
}
