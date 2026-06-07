import React from 'react';
import { motion } from 'framer-motion';
import { bookingSteps } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function BookingProcess() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-navy via-[#0d3a6e] to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, #27D8E5 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="How It Works"
            title="Book Your Ride"
            highlight="in 4 Steps"
            subtitle="Simple, fast, and hassle-free booking — your taxi ready in minutes."
            light
          />
        </ScrollReveal>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
            {bookingSteps.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="group relative text-center"
                >
                  {/* Step circle */}
                  <div className="relative inline-flex flex-col items-center mb-6">
                    <div className="w-24 h-24 rounded-full glass border border-cyan/25 group-hover:border-cyan/60 flex items-center justify-center text-4xl mb-0 transition-all duration-300 group-hover:shadow-glow-cyan relative z-10">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-accent flex items-center justify-center z-20 shadow-lg">
                      <span className="font-display text-navy font-black text-sm">{step.step}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-white text-xl font-bold mb-3 tracking-wide">{step.title}</h3>
                  <p className="text-white/55 font-body text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
