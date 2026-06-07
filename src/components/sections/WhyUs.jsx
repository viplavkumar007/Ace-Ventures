import React from 'react';
import { motion } from 'framer-motion';
import { whyUs } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F6F8FE] relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Why ACE VENTURES"
            title="Why Choose"
            highlight="Us?"
            subtitle="We're not just a taxi service — we're your trusted travel partner in Goa."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUs.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, rotateZ: 0.5 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="group relative p-6 rounded-2xl bg-white border border-navy/8 hover:border-cyan/25 shadow-sm hover:shadow-xl hover:shadow-navy/8 transition-all duration-300 h-full"
              >
                <div className="w-14 h-14 rounded-xl bg-[#EEF1FB] border border-cyan/10 flex items-center justify-center text-2xl mb-5 transition-shadow group-hover:shadow-glow-cyan">
                  {item.icon}
                </div>
                <h3 className="font-display text-navy font-bold text-xl mb-3 tracking-wide">{item.title}</h3>
                <p className="text-navy/58 font-body text-sm leading-relaxed">{item.desc}</p>

                {/* Hover glow line */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 rounded-full bg-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
