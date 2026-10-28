/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { FestivalEvent, RegistrationFormData, FormErrors } from '../types';
import { FESTIVAL_EVENTS } from '../data/events';
import { X, CheckCircle, AlertCircle, ArrowRight, ShieldCheck, RefreshCw, Copy, Check } from 'lucide-react';

interface RegistrationModalProps {
  isOpen: boolean;
  preselectedEvent: FestivalEvent | null;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isOpen,
  preselectedEvent,
  onClose,
}) => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    fullName: '',
    email: '',
    eventId: preselectedEvent?.id || FESTIVAL_EVENTS[0].id,
    institution: '',
    teamName: '',
    agreeTerms: false,
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [submittedSummary, setSubmittedSummary] = useState<RegistrationFormData | null>(null);
  const [demoPassId, setDemoPassId] = useState<string>('');
  const [copiedPass, setCopiedPass] = useState(false);

  const initialFocusRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (preselectedEvent) {
      setFormData((prev) => ({ ...prev, eventId: preselectedEvent.id }));
    }
  }, [preselectedEvent]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => initialFocusRef.current?.focus(), 50);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (formData.fullName.trim().length < 3) {
      newErrors.fullName = 'Please enter at least 3 characters.';
    } else if (formData.fullName.trim().length > 100) {
      newErrors.fullName = 'Full name must be 100 characters or fewer.';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (formData.email.trim().length > 254) {
      newErrors.email = 'Email address must be 254 characters or fewer.';
    } else if (!emailRegex.test(formData.email.trim())) {
      newErrors.email = 'Please provide a valid email format (e.g. name@domain.com).';
    }

    if (!FESTIVAL_EVENTS.some((event) => event.id === formData.eventId)) {
      newErrors.eventId = 'Please choose a valid event.';
    }

    if (!formData.institution.trim()) {
      newErrors.institution = 'College or University name is required.';
    } else if (formData.institution.trim().length < 2) {
      newErrors.institution = 'Institution name is too short.';
    } else if (formData.institution.trim().length > 150) {
      newErrors.institution = 'Institution name must be 150 characters or fewer.';
    }

    if (formData.teamName && formData.teamName.trim().length > 100) {
      newErrors.teamName = 'Team name must be 100 characters or fewer.';
    }

    if (!formData.agreeTerms) {
      newErrors.agreeTerms = 'You must acknowledge the festival demonstration terms.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomHex = Math.random().toString(16).substring(2, 8).toUpperCase();
    const passCode = `MILAN-DEMO-${randomHex}`;

    setDemoPassId(passCode);
    setSubmittedSummary({ ...formData });
    setIsSubmitted(true);
  };

  const handleDismiss = () => {
    setIsSubmitted(false);
    setErrors({});
    onClose();
  };

  const handleResetForm = () => {
    setIsSubmitted(false);
    setErrors({});
    setFormData({
      fullName: '',
      email: '',
      eventId: preselectedEvent?.id || FESTIVAL_EVENTS[0].id,
      institution: '',
      teamName: '',
      agreeTerms: false,
    });
  };

  const currentEvent = FESTIVAL_EVENTS.find((e) => e.id === formData.eventId);

  const handleCopyPass = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(demoPassId);
      setCopiedPass(true);
      setTimeout(() => setCopiedPass(false), 2000);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="registration-modal-title"
      onClick={handleDismiss}
    >
      <div
        className="relative w-full max-w-xl my-8 rounded-2xl bg-[#0E1017] border border-white/15 shadow-2xl shadow-black overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10 bg-white/5">
          <div className="flex items-center gap-2.5">
            <span className="font-editorial text-2xl font-normal tracking-wide text-white">
              MILAN
            </span>
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] border-l border-white/20 pl-2.5">
              REGISTER INTEREST
            </span>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors focus-ring-gold cursor-pointer"
            aria-label="Close registration dialog"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        {/* Form Body */}
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 space-y-5">
            <div>
              <h2
                id="registration-modal-title"
                className="font-editorial text-2xl font-normal text-white tracking-tight"
              >
                Register Interest
              </h2>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Frontend demonstration flow for the DSA Tech Team assignment. Validation runs in this browser; form details are not submitted to a registration server.
              </p>
            </div>

            {/* Full Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="reg-fullName"
                className="block text-xs font-mono uppercase tracking-wider text-slate-300"
              >
                Full Name <span className="text-[#E24A34]">*</span>
              </label>
              <input
                ref={initialFocusRef}
                type="text"
                id="reg-fullName"
                maxLength={100}
                value={formData.fullName}
                onChange={(e) => {
                  setFormData({ ...formData, fullName: e.target.value });
                  if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                }}
                placeholder="e.g. Ananya Sharma"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#141722] border text-white text-sm placeholder-slate-500 focus:outline-none transition-all ${
                  errors.fullName
                    ? 'border-[#E24A34] ring-1 ring-[#E24A34]/50'
                    : 'border-white/10 focus:border-[#D4AF37]/60'
                }`}
                aria-invalid={!!errors.fullName}
                aria-describedby={errors.fullName ? 'reg-fullName-error' : undefined}
              />
              {errors.fullName && (
                <p id="reg-fullName-error" className="flex items-center gap-1.5 text-xs text-[#E24A34] mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.fullName}</span>
                </p>
              )}
            </div>

            {/* Email Address */}
            <div className="space-y-1.5">
              <label
                htmlFor="reg-email"
                className="block text-xs font-mono uppercase tracking-wider text-slate-300"
              >
                Email Address <span className="text-[#E24A34]">*</span>
              </label>
              <input
                type="email"
                id="reg-email"
                maxLength={254}
                value={formData.email}
                onChange={(e) => {
                  setFormData({ ...formData, email: e.target.value });
                  if (errors.email) setErrors({ ...errors, email: undefined });
                }}
                placeholder="e.g. ananya@srmist.edu.in"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#141722] border text-white text-sm placeholder-slate-500 focus:outline-none transition-all ${
                  errors.email
                    ? 'border-[#E24A34] ring-1 ring-[#E24A34]/50'
                    : 'border-white/10 focus:border-[#D4AF37]/60'
                }`}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? 'reg-email-error' : undefined}
              />
              {errors.email && (
                <p id="reg-email-error" className="flex items-center gap-1.5 text-xs text-[#E24A34] mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.email}</span>
                </p>
              )}
            </div>

            {/* Selected Arena Dropdown */}
            <div className="space-y-1.5">
              <label
                htmlFor="reg-eventId"
                className="block text-xs font-mono uppercase tracking-wider text-slate-300"
              >
                Selected Competition / Arena <span className="text-[#E24A34]">*</span>
              </label>
              <select
                id="reg-eventId"
                value={formData.eventId}
                onChange={(e) => {
                  setFormData({ ...formData, eventId: e.target.value });
                  if (errors.eventId) setErrors({ ...errors, eventId: undefined });
                }}
                className="w-full px-4 py-2.5 rounded-xl bg-[#141722] border border-white/10 text-white text-sm focus:outline-none focus:border-[#D4AF37]/60 transition-all cursor-pointer"
              >
                {FESTIVAL_EVENTS.map((ev) => (
                  <option key={ev.id} value={ev.id} className="bg-[#141722] text-white">
                    {ev.category}: {ev.title} ({ev.venue})
                  </option>
                ))}
              </select>
              {currentEvent && (
                <p className="text-[11px] text-slate-400">
                  Scheduled: {currentEvent.date} · {currentEvent.venue}
                </p>
              )}
            </div>

            {/* Institution / College */}
            <div className="space-y-1.5">
              <label
                htmlFor="reg-institution"
                className="block text-xs font-mono uppercase tracking-wider text-slate-300"
              >
                University / Institution <span className="text-[#E24A34]">*</span>
              </label>
              <input
                type="text"
                id="reg-institution"
                maxLength={150}
                value={formData.institution}
                onChange={(e) => {
                  setFormData({ ...formData, institution: e.target.value });
                  if (errors.institution) setErrors({ ...errors, institution: undefined });
                }}
                placeholder="e.g. SRM Institute of Science and Technology"
                className={`w-full px-4 py-2.5 rounded-xl bg-[#141722] border text-white text-sm placeholder-slate-500 focus:outline-none transition-all ${
                  errors.institution
                    ? 'border-[#E24A34] ring-1 ring-[#E24A34]/50'
                    : 'border-white/10 focus:border-[#D4AF37]/60'
                }`}
                aria-invalid={!!errors.institution}
                aria-describedby={errors.institution ? 'reg-institution-error' : undefined}
              />
              {errors.institution && (
                <p id="reg-institution-error" className="flex items-center gap-1.5 text-xs text-[#E24A34] mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.institution}</span>
                </p>
              )}
            </div>

            {/* Optional Team Name */}
            <div className="space-y-1.5">
              <label
                htmlFor="reg-teamName"
                className="block text-xs font-mono uppercase tracking-wider text-slate-400"
              >
                Troupe / Band Name <span className="text-slate-400 font-normal">(Optional for groups)</span>
              </label>
              <input
                type="text"
                id="reg-teamName"
                maxLength={100}
                value={formData.teamName}
                onChange={(e) => setFormData({ ...formData, teamName: e.target.value })}
                placeholder="e.g. The Acoustic Ensemble"
                className="w-full px-4 py-2.5 rounded-xl bg-[#141722] border border-white/10 text-white text-sm placeholder-slate-500 focus:outline-none focus:border-[#D4AF37]/60 transition-all"
                aria-invalid={!!errors.teamName}
                aria-describedby={errors.teamName ? "reg-teamName-error" : undefined}
              />
              {errors.teamName && (
                <p id="reg-teamName-error" className="flex items-center gap-1.5 text-xs text-[#E24A34] mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.teamName}</span>
                </p>
              )}
            </div>

            {/* Agreement Terms */}
            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.agreeTerms}
                  onChange={(e) => {
                    setFormData({ ...formData, agreeTerms: e.target.checked });
                    if (errors.agreeTerms) setErrors({ ...errors, agreeTerms: undefined });
                  }}
                  className="mt-1 rounded bg-[#141722] border-white/20 text-[#E24A34] focus:ring-[#D4AF37] focus:ring-offset-0"
                />
                <span className="text-xs text-slate-400 leading-relaxed">
                  I acknowledge this is an interactive demonstration form for the DSA Tech Team review. Form details stay in this browser and are not submitted to a registration server or stored in a database.
                </span>
              </label>
              {errors.agreeTerms && (
                <p className="flex items-center gap-1.5 text-xs text-[#E24A34] mt-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
                  <span>{errors.agreeTerms}</span>
                </p>
              )}
            </div>

            {/* Form Actions */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-end gap-3">
              <button
                type="button"
                onClick={handleDismiss}
                className="px-5 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-colors cursor-pointer"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#E2F163] hover:bg-[#D5E650] shadow-md shadow-black/40 transition-all cursor-pointer"
              >
                <span>Register Interest</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </button>
            </div>
          </form>
        ) : (
          /* Confirmation Receipt */
          <div className="p-6 sm:p-8 space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="text-center space-y-2">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
                <CheckCircle className="w-6 h-6" aria-hidden="true" />
              </div>
              <h2 className="font-editorial text-2xl font-normal text-white tracking-tight">
                Interest Registered!
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                Client-side validation passed. This simulates the festival interest flow for the DSA Tech Team review; no registration is sent to or confirmed by a server.
              </p>
            </div>

            {/* Registration Pass Receipt */}
            <div className="p-5 rounded-xl bg-[#141722] border border-white/10 space-y-3 font-sans">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-mono">
                  DEMO PASS TOKEN
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-1 rounded border border-white/20">
                    {demoPassId}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPass}
                    className="p-1 rounded text-slate-400 hover:text-white transition-colors"
                    title="Copy token"
                    aria-label="Copy token"
                  >
                    {copiedPass ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-2.5 text-xs">
                <div>
                  <span className="text-slate-400 block">Name:</span>
                  <strong className="text-white font-medium">{submittedSummary?.fullName}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Email:</span>
                  <strong className="text-white font-medium">{submittedSummary?.email}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Selected Arena:</span>
                  <strong className="text-amber-200 font-medium">{currentEvent?.title}</strong>
                </div>
                <div>
                  <span className="text-slate-400 block">Institution:</span>
                  <strong className="text-white font-medium">{submittedSummary?.institution}</strong>
                </div>
              </div>
            </div>

            {/* Honest Disclosure */}
            <div className="flex items-start gap-2.5 p-3.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs leading-relaxed">
              <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
              <span>
                <strong>Demonstration Disclosure:</strong> This pass token is generated locally for demonstration only. It is not a real ticket or confirmed registration; no form details are submitted to a registration server or stored in a remote database.
              </span>
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/10">
              <button
                type="button"
                onClick={handleResetForm}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
              >
                <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                <span>New Submission</span>
              </button>

              <button
                type="button"
                onClick={handleDismiss}
                className="px-6 py-2 rounded-full text-xs font-semibold uppercase tracking-wider text-black bg-[#E2F163] hover:bg-[#D5E650] shadow-md transition-all cursor-pointer"
              >
                Return to Events
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
