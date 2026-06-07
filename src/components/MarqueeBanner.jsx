import React from 'react';
import { marqueeText } from '../data/siteContent';

export default function MarqueeBanner() {
  return (
    <div
      className="w-full overflow-hidden py-2 bg-cyan"
      role="marquee"
      aria-label="Announcement"
    >
      <div className="marquee-track">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="text-white font-body text-sm font-semibold tracking-wide whitespace-nowrap px-8"
          >
            {marqueeText}
          </span>
        ))}
      </div>
    </div>
  );
}
