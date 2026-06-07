import React from 'react';

export default function SectionHeader({ eyebrow, title, highlight, subtitle, light = false }) {
  return (
    <div className="text-center mb-12 md:mb-16">
      {eyebrow && (
        <span className={`inline-block text-sm font-body font-semibold tracking-widest uppercase px-4 py-1 rounded-full mb-4 ${light ? 'text-cyan bg-white/10' : 'text-cyan bg-cyan/10'}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-display font-black text-4xl md:text-5xl lg:text-6xl leading-tight mb-4 ${light ? 'text-white' : 'text-navy'}`}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className={light ? 'text-cyan' : 'text-cyan'}>{highlight}</span>
          </>
        )}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl mx-auto font-body ${light ? 'text-white/70' : 'text-navy/60'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
