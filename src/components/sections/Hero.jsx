import React from 'react';
import { motion } from 'framer-motion';
import { brand, heroFeatures } from '../../data/siteContent';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a taxi with ACE VENTURES in Goa.')}`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=1920&q=85')`,
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#082544]/90 via-[#082544]/70 to-[#082544]/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#082544]/80 via-transparent to-transparent" />

      {/* Animated background orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-cyan/10 blur-3xl animate-pulse" />
      <div className="absolute bottom-1/3 left-1/4 w-64 h-64 rounded-full bg-orange/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div {...fadeUp(0.1)} className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
            <span className="text-cyan text-sm font-body font-medium">ACE VENTURES — Goa's Premium Taxi</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...fadeUp(0.25)}
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4"
          >
            Premium Taxi
            <br />
            <span className="text-gradient-cyan">Services</span>{' '}
            <span className="text-gradient-accent">Across Goa</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p {...fadeUp(0.4)} className="text-white/80 text-lg md:text-xl font-body mb-3 max-w-2xl">
            {brand.subTagline}
          </motion.p>

          {/* Highlight */}
          <motion.div {...fadeUp(0.5)} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-orange/40 bg-orange/10 mb-8">
            <span className="text-lg">⭐</span>
            <span className="text-orange font-display font-bold text-lg tracking-wide">{brand.highlight}</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4 mb-12">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 px-7 py-4 rounded-full bg-green-500 hover:bg-green-400 text-white font-display font-bold text-lg tracking-wide transition-all duration-200 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-500/30 active:translate-y-0"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book on WhatsApp
            </a>
            <button
              onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
              className="flex items-center gap-2 px-7 py-4 rounded-full glass border border-white/30 text-white font-display font-bold text-lg tracking-wide transition-all duration-200 hover:-translate-y-1 hover:bg-white/20 active:translate-y-0"
            >
              View Fleet
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
            </button>
          </motion.div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            {heroFeatures.map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/15 text-white text-sm font-body"
              >
                <span>{f.icon}</span>
                <span>{f.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
      >
        <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1.5 h-1.5 rounded-full bg-cyan"
          />
        </div>
      </motion.div>
    </section>
  );
}
