import React from 'react';
import { motion } from 'framer-motion';
import { testimonials } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function StarRating({ count }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow fill-current" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #082544 1px, transparent 0)`,
        backgroundSize: '28px 28px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What Guests Say"
            title="Real Reviews, Real"
            highlight="Journeys"
            subtitle="Hundreds of happy travellers trust ACE VENTURES for their Goa travel needs."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group bg-white rounded-2xl border border-navy/8 hover:border-cyan/30 p-6 shadow-md hover:shadow-xl hover:shadow-navy/8 transition-all duration-300 relative flex flex-col"
              >
                {/* Quote mark */}
                <div className="absolute top-4 right-5 text-6xl leading-none text-cyan/10 font-display font-black select-none">"</div>

                {/* Tag */}
                <div className="inline-flex mb-4">
                  <span className="px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-body font-semibold">
                    {t.tag}
                  </span>
                </div>

                <StarRating count={t.rating} />
                <p className="text-navy/65 font-body text-sm leading-relaxed mt-3 mb-5 flex-1">"{t.text}"</p>

                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-navy/6">
                  <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center">
                    <span className="font-display text-white font-bold text-sm">{t.avatar}</span>
                  </div>
                  <div>
                    <div className="font-display text-navy font-bold text-sm tracking-wide">{t.name}</div>
                    <div className="text-navy/40 text-xs font-body">{t.location}</div>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-cyan to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
