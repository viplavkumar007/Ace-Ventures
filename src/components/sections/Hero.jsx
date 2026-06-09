import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { brand, heroFeatures, fleet } from '../../data/siteContent';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] },
});

const vehicleTypes = [
  { label: 'Hatchback', icon: '🚘', target: 'fleet-type-hatchback' },
  { label: 'Sedan', icon: '🚗', target: 'fleet-type-sedan' },
  { label: 'SUV', icon: '🚙', target: 'fleet-type-suv' },
  { label: 'MUV', icon: '🚐', target: 'fleet-type-muv' },
  { label: 'Electric', icon: '🔋', target: 'fleet-type-electric' },
];

export default function Hero() {
  const [activeMobileSearch, setActiveMobileSearch] = useState('Taxi Cars');
  const waUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a taxi with Goa Taxi Now in Goa.')}`;
  const mobileSearchOptions = [
    { label: 'Taxi Cars', href: '#fleet' },
    { label: 'Airport Transfer', href: '#airport-fares' },
    { label: 'All Prices', href: '#fleet' },
  ];
  const mobilePremiumCars = fleet.filter(vehicle =>
    ['Toyota Innova Crysta', 'Toyota Innova Hycross'].includes(vehicle.name)
  );

  const handleMobileSearch = (option) => {
    setActiveMobileSearch(option.label);
    document.querySelector(option.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleVehicleType = (target) => {
    document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handlePremiumCarDetails = (vehicle, index) => {
    const targetId = index === 1
      ? 'contact'
      : vehicle.name === 'Toyota Innova Crysta'
        ? 'fleet-type-muv'
        : 'fleet';

    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <section id="home" className="relative overflow-hidden">
      {/* Mobile dealership-style hero */}
      <div className="sm:hidden bg-white">
        <div className="relative overflow-hidden bg-[#EEF1FB] px-5 pb-0 pt-20 text-center">
          <motion.h1
            {...fadeUp(0.1)}
            className="mx-auto max-w-xs font-display text-[1.95rem] font-black uppercase leading-[1.12] tracking-normal text-navy"
          >
            <span className="block whitespace-nowrap">Arrive Relaxed,</span>
            <span className="block whitespace-nowrap">Travel Confidently</span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.2)}
            className="mx-auto mt-7 flex h-12 max-w-[320px] items-center rounded-full bg-white shadow-sm ring-1 ring-navy/6"
          >
            {mobileSearchOptions.map((option, index) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handleMobileSearch(option)}
                className={`h-full flex-1 px-3 text-left text-[10px] font-semibold transition-colors ${
                  index < mobileSearchOptions.length - 1 ? 'border-r border-navy/8' : ''
                } ${
                  activeMobileSearch === option.label
                    ? 'bg-[#EEF1FB] text-cyan'
                    : 'text-navy/55 hover:text-navy'
                } ${index === 0 ? 'rounded-l-full' : ''}`}
              >
                {option.label}
              </button>
            ))}
            <button
              onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
              className="mr-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-white shadow-lg shadow-cyan/20"
              aria-label="Search fleet"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
              </svg>
            </button>
          </motion.div>

          <motion.img
            {...fadeUp(0.3)}
            src="/fleet/mobile-hero-car.png"
            alt=""
            aria-hidden="true"
            className="relative z-10  mt-8 h-44 w-[100vw] max-w-none object-cover"
          />
        </div>

        <div className="bg-white px-5 pb-12 pt-10">
          <h2 className="text-center font-display text-2xl font-black text-navy">Browse by Type</h2>
          <div className="mt-6 grid grid-cols-5 gap-1.5">
            {vehicleTypes.map(type => (
              <button
                key={type.label}
                onClick={() => handleVehicleType(type.target)}
                className="flex min-h-[58px] min-w-0 flex-col items-center justify-center gap-1 rounded-xl border border-navy/8 bg-white px-1 text-navy shadow-sm"
              >
                <span className="text-sm leading-none">{type.icon}</span>
                <span className="text-[9px] font-semibold leading-tight">{type.label}</span>
              </button>
            ))}
          </div>

          <div className="mt-10">
            <h2 className="text-center font-display text-2xl font-black text-navy">Premium Cars</h2>
            <div className="mt-5 grid grid-cols-2 gap-3">
              {mobilePremiumCars.map((vehicle, index) => (
                <button
                  key={vehicle.name}
                  type="button"
                  onClick={() => handlePremiumCarDetails(vehicle, index)}
                  className="overflow-hidden rounded-xl border border-navy/8 bg-navy text-left shadow-md"
                >
                  <div className="relative h-24 overflow-hidden">
                    <img src={vehicle.image} alt={vehicle.name} className="h-full w-full object-cover" loading="lazy" />
                    <span className="absolute left-2 top-2 rounded-full bg-[#25D366] px-2 py-0.5 text-[9px] font-bold text-white">
                      Premium
                    </span>
                  </div>
                  <div className="p-3">
                    <h3 className="line-clamp-1 text-[12px] font-bold text-white">{vehicle.name}</h3>
                    <p className="mt-1 line-clamp-1 text-[9px] text-white/55">{vehicle.seats} Seats • {vehicle.fuel} • AC</p>
                    <div className="mt-3 grid grid-cols-3 gap-1 text-center text-[8px] text-white/60">
                      <span>👤<br />{vehicle.seats}</span>
                      <span>⛽<br />{vehicle.fuel}</span>
                      <span>AC<br />Yes</span>
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="text-[12px] font-black text-white">{vehicle.priceDay}</span>
                      <span className="text-[9px] font-semibold text-white/70">View Details ↗</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div className="mt-8 grid gap-4">
            <div className="rounded-2xl border border-navy/6 bg-[#EAF3FF] p-6">
              <h3 className="max-w-[180px] font-display text-xl font-black leading-tight text-navy">
                Are You Looking For a Car?
              </h3>
              <p className="mt-3 max-w-[220px] text-xs leading-5 text-navy/58">
                Choose from premium taxis and comfortable rentals across Goa.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-lg bg-cyan px-4 py-2 text-xs font-bold text-white"
              >
                Get Started ↗
              </a>
            </div>

            <div className="rounded-2xl border border-navy/6 bg-[#FCE7F0] p-6">
              <h3 className="max-w-[180px] font-display text-xl font-black leading-tight text-navy">
                Do You Need a Taxi?
              </h3>
              <p className="mt-3 max-w-[220px] text-xs leading-5 text-navy/58">
                Share your pickup details and get quick booking confirmation.
              </p>
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex rounded-lg bg-navy px-4 py-2 text-xs font-bold text-white"
              >
                Get Started ↗
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop/tablet dealership-style hero */}
      <div className="relative hidden min-h-screen overflow-hidden bg-[#EEF1FB] sm:block">
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 pb-0 pt-28 text-center lg:px-8">
          <motion.h1
            {...fadeUp(0.1)}
            className="mx-auto font-display text-5xl font-black uppercase leading-[1.08] tracking-normal text-navy md:text-6xl lg:text-7xl"
          >
            <span className="block whitespace-nowrap">Arrive Relaxed,</span>
            <span className="block whitespace-nowrap">Travel Confidently</span>
          </motion.h1>

          <motion.div
            {...fadeUp(0.2)}
            className="mx-auto mt-8 flex h-16 w-full max-w-2xl items-center rounded-full bg-white shadow-lg shadow-navy/5 ring-1 ring-navy/8"
          >
            {mobileSearchOptions.map((option, index) => (
              <button
                key={option.label}
                type="button"
                onClick={() => handleMobileSearch(option)}
                className={`h-full flex-1 px-7 text-left text-sm font-bold transition-colors ${
                  index < mobileSearchOptions.length - 1 ? 'border-r border-navy/8' : ''
                } ${
                  activeMobileSearch === option.label
                    ? 'bg-[#EEF1FB] text-cyan'
                    : 'text-navy/55 hover:text-navy'
                } ${index === 0 ? 'rounded-l-full' : ''}`}
              >
                {option.label}
              </button>
            ))}
            <button
              onClick={() => document.getElementById('fleet')?.scrollIntoView({ behavior: 'smooth' })}
              className="mr-2 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-cyan text-white shadow-lg shadow-cyan/25 transition-transform hover:scale-105"
              aria-label="Search fleet"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.4} d="m21 21-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z" />
              </svg>
            </button>
          </motion.div>

          <motion.img
            {...fadeUp(0.3)}
            src="/fleet/mobile-hero-car.png"
            alt="White Toyota Innova taxi"
            className="relative z-10 mt-12 h-auto w-full max-w-4xl object-contain"
          />

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.55 }}
            className="mt-8 flex flex-wrap justify-center gap-3 pb-12"
          >
            {heroFeatures.map((feature, index) => (
              <div key={index} className="flex items-center gap-2 rounded-full border border-navy/8 bg-white px-4 py-2 text-sm font-semibold text-navy/70 shadow-sm">
                <span>{feature.icon}</span>
                <span>{feature.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
