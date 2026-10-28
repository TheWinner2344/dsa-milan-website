/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  hasStarted: boolean;
}

// Festival commencement: 18 February 2027 at 09:00:00 IST (UTC+05:30)
const FESTIVAL_TARGET_TIMESTAMP = new Date('2027-02-18T09:00:00+05:30').getTime();

export const Countdown: React.FC = () => {
  const calculateTime = (): TimeRemaining => {
    const now = Date.now();
    const difference = FESTIVAL_TARGET_TIMESTAMP - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, hasStarted: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds, hasStarted: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTime);

  useEffect(() => {
    // Initial sync
    setTimeLeft(calculateTime());

    const interval = setInterval(() => {
      setTimeLeft(calculateTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatUnit = (val: number) => String(val).padStart(2, '0');

  if (timeLeft.hasStarted) {
    return (
      <div className="flex flex-col items-start gap-1 py-3" aria-live="polite">
        <span className="text-[11px] font-mono tracking-widest uppercase text-amber-400/90 font-medium">
          CONFLUENCE UNDERWAY
        </span>
        <span className="font-editorial text-3xl sm:text-4xl text-white font-normal italic">
          MILAN 2027 Is Live at SRMIST
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative flex flex-col justify-end pt-4 sm:pt-6 select-none"
      aria-label="Festival commencement countdown"
      aria-live="off"
    >
      {/* Editorial Header Kicker */}
      <div className="flex items-center gap-2 mb-2 text-xs font-mono tracking-widest uppercase text-[#D4AF37]/90">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#E24A34]" aria-hidden="true" />
        <span>Countdown to Confluence · 18 Feb 2027</span>
      </div>

      {/* Monumental Classical Numerical Grid */}
      <div className="flex items-baseline gap-2 sm:gap-4 lg:gap-5 min-w-0">
        {/* Dominant Primary Days Anchor */}
        <div className="flex flex-col items-start">
          <div className="flex items-baseline">
            <span className="font-editorial text-6xl sm:text-7xl md:text-8xl lg:text-8xl font-light text-ivory-gradient leading-none tracking-tight tabular-nums">
              {timeLeft.days}
            </span>
            <span className="font-editorial italic text-amber-300/80 text-xl sm:text-2xl ml-1 font-normal">
              d
            </span>
          </div>
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-slate-400 mt-1">
            Days Remaining
          </span>
        </div>

        {/* Refined Classical Separator */}
        <span className="font-editorial text-3xl sm:text-4xl text-amber-400/40 font-light select-none pb-4" aria-hidden="true">
          /
        </span>

        {/* Supporting Hours, Minutes, Seconds */}
        <div className="flex items-baseline gap-2 sm:gap-4 pb-2 min-w-0">
          {/* Hours */}
          <div className="flex flex-col items-start">
            <span className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-slate-200 tabular-nums leading-none">
              {formatUnit(timeLeft.hours)}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-1">
              Hours
            </span>
          </div>

          <span className="text-slate-600 font-mono text-sm sm:text-lg select-none" aria-hidden="true">:</span>

          {/* Minutes */}
          <div className="flex flex-col items-start">
            <span className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-slate-200 tabular-nums leading-none">
              {formatUnit(timeLeft.minutes)}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-1">
              Mins
            </span>
          </div>

          <span className="text-slate-600 font-mono text-sm sm:text-lg select-none" aria-hidden="true">:</span>

          {/* Seconds */}
          <div className="flex flex-col items-start">
            <span className="font-editorial text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-normal text-amber-300/90 tabular-nums leading-none">
              {formatUnit(timeLeft.seconds)}
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-slate-400 mt-1">
              Secs
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
