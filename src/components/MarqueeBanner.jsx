import React from 'react';
import { marqueeText } from '../data/siteContent';

export default function MarqueeBanner() {
  return (
    <div
      className="w-full overflow-hidden py-2"
      style={{ background: 'linear-gradient(90deg, #FF7A1A 0%, #FFC61A 100%)' }}
      role="marquee"
      aria-label="Announcement"
    >
      <div className="marquee-track">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-[#082544] font-display font-700 text-sm tracking-wide whitespace-nowrap px-8"
            style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, letterSpacing: '0.05em' }}
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
}
