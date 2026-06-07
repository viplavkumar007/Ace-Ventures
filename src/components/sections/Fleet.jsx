import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { fleet, brand } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function FleetCard({ vehicle, featured, index, anchorId }) {
  const [imgError, setImgError] = useState(false);
  const leadCompanyName = 'Goa Taxi Now';
  const formatLeadText = (text) => text.replaceAll('ACE VENTURES', leadCompanyName);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(formatLeadText(vehicle.whatsappMsg))}`, '_blank');
  };

  const handleEmail = () => {
    window.open(`mailto:${brand.email}?subject=${encodeURIComponent(formatLeadText(vehicle.emailSubject))}&body=${encodeURIComponent(formatLeadText(vehicle.emailBody))}`, '_blank');
  };

  if (featured) {
    return (
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className="relative rounded-2xl overflow-hidden shadow-xl border border-navy/8 bg-navy group col-span-1 lg:col-span-1"
      >
        {/* Badge */}
        {vehicle.badge && (
          <div className={`absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-xs font-display font-bold tracking-wider uppercase ${
            vehicle.badgeColor === 'orange'
              ? 'bg-cyan text-white shadow-lg shadow-cyan/20'
              : 'bg-white text-navy shadow-lg shadow-navy/10'
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
          <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-transparent to-transparent" />
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
              <span className="flex items-center gap-1 text-white/70 text-xs font-body">
                <span>❄️</span> AC
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-5">
            {vehicle.tags.map((tag, i) => (
              <span key={i} className="px-2.5 py-1 rounded-full border border-white/12 bg-white/5 text-white/75 text-xs font-body">
                {tag}
              </span>
            ))}
          </div>

          {/* Pricing */}
          <div className="bg-white/5 rounded-xl p-4 mb-5 border border-white/10">
            {vehicle.priceDay === 'On Request' ? (
              <div className="text-center">
                <span className="font-display text-white text-2xl font-black">Price On Request</span>
                <p className="text-white/50 text-xs mt-1 font-body">Contact us for best rates</p>
              </div>
            ) : (
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-white/50 text-sm font-body">Per Day</span>
                  <span className="font-display text-white font-bold text-lg">{vehicle.priceDay}</span>
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
              className="flex-1 py-3 rounded-xl bg-cyan hover:bg-[#254BDD] text-white font-body font-bold text-sm tracking-normal transition-all duration-200 hover:shadow-lg hover:shadow-cyan/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Book Now
            </button>
            <button
              onClick={handleEmail}
              className="px-4 py-3 rounded-xl border border-white/20 text-white/70 hover:text-white hover:border-white/40 font-body text-sm transition-all duration-200"
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
      id={anchorId}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 350 }}
      className="group relative bg-white rounded-2xl border border-navy/8 hover:border-cyan/25 shadow-sm hover:shadow-xl hover:shadow-navy/8 overflow-hidden transition-all duration-300 flex flex-col"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden sm:h-40">
        <img
          src={imgError ? '/fleet/ertiga.jpg' : vehicle.image}
          alt={vehicle.name}
          onError={() => setImgError(true)}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/35 to-transparent sm:from-navy/50" />
      </div>

      <div className="p-4 flex flex-col flex-1 bg-navy text-white sm:bg-white sm:text-navy sm:p-5">
        <h3 className="font-display text-white font-bold text-base mb-1 tracking-normal sm:text-navy sm:text-xl sm:mb-2 sm:tracking-wide">{vehicle.name}</h3>
        <p className="mb-3 line-clamp-1 text-[11px] text-white/60 sm:hidden">
          {vehicle.fuel} comfort for Goa transfers and sightseeing.
        </p>

        <div className="mb-3 grid grid-cols-3 gap-2 sm:flex sm:flex-wrap">
          <span className="flex flex-col items-center justify-center rounded-lg border border-white/10 py-2 text-[10px] text-white/70 sm:block sm:border-0 sm:py-0 sm:text-xs sm:text-navy/50">👤 <span>{vehicle.seats} Seats</span></span>
          <span className="flex flex-col items-center justify-center rounded-lg border border-white/10 py-2 text-[10px] text-white/70 sm:block sm:border-0 sm:py-0 sm:text-xs sm:text-navy/50">⛽ <span>{vehicle.fuel}</span></span>
          <span className="flex flex-col items-center justify-center rounded-lg border border-white/10 py-2 text-[10px] text-white/70 sm:hidden">AC <span>{vehicle.ac ? 'Yes' : 'No'}</span></span>
        </div>

        <div className="bg-white/5 rounded-xl p-3 mb-4 border border-white/10 sm:bg-navy/4 sm:border-navy/8">
          {vehicle.priceDay === 'On Request' ? (
            <span className="font-display text-cyan font-bold text-lg">On Request</span>
          ) : (
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <span className="text-white/50 text-xs font-body sm:text-navy/50">Per Day</span>
                <span className="font-display text-white font-bold text-base sm:text-navy">{vehicle.priceDay}</span>
              </div>
              {vehicle.priceKm && (
                <div className="flex justify-between">
                  <span className="text-white/40 text-xs font-body sm:text-navy/40">Extra KM</span>
                  <span className="text-white/65 text-xs font-body sm:text-navy/60">{vehicle.priceKm}</span>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="flex gap-2 mt-auto">
          <button
            onClick={handleWhatsApp}
            className="flex-1 py-2.5 rounded-xl bg-cyan hover:bg-[#254BDD] text-white font-body font-semibold text-xs transition-all duration-200 active:scale-95"
          >
            WhatsApp
          </button>
          <button
            onClick={handleEmail}
            className="flex-1 py-2.5 rounded-xl border border-white/12 bg-white/8 text-white hover:bg-white/14 font-body font-semibold text-xs transition-all duration-200 active:scale-95 sm:border-0 sm:bg-navy sm:hover:bg-navy/80"
          >
            Email
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.div>
  );
}

export default function Fleet() {
  const featuredVehicles = fleet.filter(v => v.featured);
  const regularVehicles = fleet.filter(v => !v.featured);

  return (
    <section id="fleet" className="py-14 md:py-28 bg-white relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center sm:hidden">
          <h2 className="font-display text-2xl font-black text-navy">The Most Searched Cars</h2>
          <div className="mt-4 flex justify-center gap-4 text-[11px] font-semibold text-navy/50">
            <span className="border-b border-cyan pb-1 text-navy">In Stock</span>
            <span>Sedan</span>
            <span>SUV</span>
            <span>Electric</span>
          </div>
        </div>

        <ScrollReveal className="hidden sm:block">
          <SectionHeader
            eyebrow="Our Fleet"
            title="Choose Your"
            highlight="Vehicle"
            subtitle="Premium vehicles for every journey — from budget sedans to luxury Innova Crysta & Hycross."
          />
        </ScrollReveal>

        {/* Featured Row */}
        <div className="mb-6 hidden sm:block">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 bg-navy/10" />
              <span className="text-cyan font-display font-bold text-sm tracking-widest uppercase px-4">★ Featured Vehicles</span>
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
        <ScrollReveal className="hidden sm:block">
          <div className="flex items-center gap-3 mb-6 mt-10">
            <div className="h-px flex-1 bg-navy/10" />
            <span className="text-navy/50 font-display font-bold text-sm tracking-widest uppercase px-4">All Fleet</span>
            <div className="h-px flex-1 bg-navy/10" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:hidden">
          {fleet.map((v, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <FleetCard
                vehicle={v}
                featured={false}
                index={i}
                anchorId={
                  v.name === 'New Wagon R' ? 'fleet-type-hatchback' :
                  v.name === 'Maruti Suzuki Dzire' ? 'fleet-type-sedan' :
                  v.name === 'Mahindra Scorpio N' ? 'fleet-type-suv' :
                  v.name === 'Toyota Innova Crysta' ? 'fleet-type-muv' :
                  v.name === 'Kia Carens Clavis EV' ? 'fleet-type-electric' :
                  undefined
                }
              />
            </ScrollReveal>
          ))}
        </div>

        <div className="hidden gap-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
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
