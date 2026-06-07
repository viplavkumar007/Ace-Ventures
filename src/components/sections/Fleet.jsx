import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fleet, brand } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function FleetCard({ vehicle, featured, index }) {
  const [imgError, setImgError] = useState(false);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(vehicle.whatsappMsg)}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${brand.email}?subject=${encodeURIComponent(vehicle.emailSubject)}&body=${encodeURIComponent(vehicle.emailBody)}`, '_blank');
  };

  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative rounded-2xl overflow-hidden shadow-2xl border border-orange/30 bg-gradient-to-br from-navy to-[#0d3a6e] group col-span-1 lg:col-span-1"
      >
        {/* Badge */}
        {vehicle.badge && (
          <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-display font-bold tracking-wider uppercase ${
            vehicle.badgeColor === 'orange'
              ? 'gradient-accent text-navy shadow-lg shadow-orange/30'
              : 'bg-cyan text-navy shadow-lg shadow-cyan/30'
          }`}>
            ★ {vehicle.badge}
          </div>
        )}

        {/* Image */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={imgError ? '/fleet/ertiga.jpg' : vehicle.image}
            alt={vehicle.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
        </div>

        <div className="p-6">
          <h3 className="font-display text-white text-2xl font-black tracking-wide mb-1">{vehicle.name}</h3>

          {/* Specs */}
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="flex items-center gap-1 text-white/60 text-xs font-body">
              <span>👤</span> {vehicle.seats} Seater
            </span>
            <span className="flex items-center gap-1 text-white/60 text-xs font-body">
              <span>⛽</span> {vehicle.fuel}
            </span>
            {vehicle.ac && (
              <span className="flex items-center gap-1 text-cyan text-xs font-body">
                <span>❄️</span> AC
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {vehicle.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 rounded-full border border-cyan/25 text-cyan text-xs font-body">
                {tag}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-white/5 rounded-xl p-4 mb-5 border border-white/10">
            {vehicle.priceDay === 'On Request' ? (
              <div className="text-center">
                <span className="font-display text-yellow text-2xl font-black">Price On Request</span>
                <p className="text-white/50 text-xs mt-1 font-body">Contact us for best rates</p>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-white/50 text-sm font-body">Per Day</span>
                  <span className="font-display text-yellow font-bold text-lg">{vehicle.priceDay}</span>
                </div>
                {vehicle.priceKm && (
                  <div className="flex justify-between">
                    <span className="text-white/50 text-xs font-body">Extra KM</span>
                    <span className="text-white/80 text-xs font-body">{vehicle.priceKm}</span>
                  </div>
                )}
                {vehicle.priceHr && (
                  <div className="flex justify-between">
                    <span className="text-white/50 text-xs font-body">Extra Hour</span>
                    <span className="text-white/80 text-xs font-body">{vehicle.priceHr}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleWhatsApp}
              className="flex-1 py-3 rounded-xl bg-green-500 hover:bg-green-400 text-white font-display font-bold text-sm tracking-wide transition-all duration-200 hover:shadow-lg hover:shadow-green-500/30 active:scale-95 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Now
            </button>
            <button
              onClick={handleEmail}
              className="px-4 py-3 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-cyan/40 font-body text-sm transition-all duration-200"
              aria-label="Email inquiry"
            >
              ✉️
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Regular card
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 350 }}
      className="group relative bg-white rounded-2xl border border-navy/8 hover:border-cyan/30 shadow-md hover:shadow-lg hover:shadow-navy/10 overflow-hidden transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-40 overflow-hidden">
        <img
          src={imgError ? '/fleet/ertiga.jpg' : vehicle.image}
          alt={vehicle.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/50 to-transparent" />
      </div>

      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-display text-navy font-bold text-xl mb-2 tracking-wide">{vehicle.name}</h3>

        <div className="flex flex-wrap gap-2 mb-3">
          <span className="text-navy/50 text-xs font-body">👤 {vehicle.seats} Seater</span>
          <span className="text-navy/50 text-xs font-body">⛽ {vehicle.fuel}</span>
        </div>

        <div className="bg-navy/4 rounded-xl p-3 mb-4 border border-navy/8">
          {vehicle.priceDay === 'On Request' ? (
            <span className="font-display text-orange font-bold text-lg">On Request</span>
          ) : (
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-navy/50 text-xs font-body">Per Day</span>
                <span className="font-display text-navy font-bold text-base">{vehicle.priceDay}</span>
              </div>
              {vehicle.priceKm && (
                <div className="flex justify-between">
                  <span className="text-navy/40 text-xs font-body">Extra KM</span>
                  <span className="text-navy/60 text-xs font-body">{vehicle.priceKm}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleWhatsApp}
            className="flex-1 py-2.5 rounded-xl bg-green-500 hover:bg-green-400 text-white font-body font-semibold text-xs transition-all duration-200 active:scale-95"
          >
            WhatsApp
          </button>
          <button
            onClick={handleEmail}
            className="flex-1 py-2.5 rounded-xl bg-navy hover:bg-navy/80 text-white font-body font-semibold text-xs transition-all duration-200 active:scale-95"
          >
            Email
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Fleet() {
  const featuredVehicles = fleet.filter(v => v.featured);
  const regularVehicles = fleet.filter(v => !v.featured);

  return (
    <section id="fleet" className="py-20 md:py-28 bg-[#f7f9fc] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan/5 blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Our Fleet"
            title="Choose Your"
            highlight="Vehicle"
            subtitle="Premium vehicles for every journey — from budget sedans to luxury Innova Crysta & Hycross."
          />
        </ScrollReveal>

        {/* Featured Row */}
        <div className="mb-6">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-navy/10" />
              <span className="text-orange font-display font-bold text-sm tracking-widest uppercase px-4">★ Featured Vehicles</span>
              <div className="h-px flex-1 bg-navy/10" />
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredVehicles.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <FleetCard vehicle={v} featured index={i} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Regular Fleet */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-6 mt-10">
            <div className="h-px flex-1 bg-navy/10" />
            <span className="text-navy/50 font-display font-bold text-sm tracking-widest uppercase px-4">All Fleet</span>
            <div className="h-px flex-1 bg-navy/10" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {regularVehicles.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <FleetCard vehicle={v} featured={false} index={i} />
            </ScrollReveal>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal delay={0.2}>
          <p className="text-center text-navy/40 text-sm font-body mt-8">
            * All prices are per day (8 hrs / 80 km inclusive). Toll, parking &amp; state taxes extra.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
