import React from 'react';
import { motion } from 'framer-motion';
import { whyUs } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-gradient-to-br from-navy via-[#0d3a6e] to-navy relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-orange/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Why ACE VENTURES"
            title="Why Choose"
            highlight="Us?"
            subtitle="We're not just a taxi service — we're your trusted travel partner in Goa."
            light
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotateZ: 0.5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative p-6 rounded-2xl glass border border-cyan/15 hover:border-cyan/40 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-xl gradient-accent flex items-center justify-center text-2xl mb-5 shadow-lg group-hover:shadow-orange/30 transition-shadow">
                  {item.icon}
                </div>
                <h3 className="font-display text-white font-bold text-xl mb-3 tracking-wide">{item.title}</h3>
                <p className="text-white/60 font-body text-sm leading-relaxed">{item.desc}</p>

                {/* Hover glow line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-gradient-to-r from-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
