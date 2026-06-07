import React from 'react';
import { motion } from 'framer-motion';
import { brand } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';

export default function CTAStrip() {
  return (
    <section className="relative overflow-hidden bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <ScrollReveal>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280 }}
              className="h-full rounded-2xl border border-navy/8 bg-[#EAF3FF] p-8 shadow-sm md:p-10"
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan">Available 24/7 across Goa</p>
              <h2 className="mb-4 max-w-md font-display text-3xl font-black leading-tight text-navy md:text-4xl">
                Need a premium taxi for your next trip?
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-7 text-navy/60">
                Book your ride in minutes with ACE VENTURES. Premium vehicles, professional drivers, transparent pricing.
              </p>
              <a
                href={`tel:${brand.phone}`}
                className="inline-flex items-center gap-2 rounded-full bg-cyan px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#254BDD] hover:shadow-lg hover:shadow-cyan/20"
              >
                Call Now
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </motion.div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ type: 'spring', stiffness: 280 }}
              className="h-full rounded-2xl border border-navy/8 bg-[#FCE7F0] p-8 shadow-sm md:p-10"
            >
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-navy/55">Fast WhatsApp booking</p>
              <h2 className="mb-4 max-w-md font-display text-3xl font-black leading-tight text-navy md:text-4xl">
                Share your pickup details and we will confirm.
              </h2>
              <p className="mb-8 max-w-lg text-sm leading-7 text-navy/60">
                Send your location, travel date, passengers, and preferred vehicle. We will respond with availability and fare details.
              </p>
              <a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a taxi with Goa Taxi Now in Goa.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111936] hover:shadow-lg hover:shadow-navy/15"
              >
                WhatsApp Booking
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17 17 7M8 7h9v9" />
                </svg>
              </a>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
