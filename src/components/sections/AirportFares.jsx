import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { airportFares, brand } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function FareTable({ data, index }) {
  const handleBookWhatsApp = (location, vehicleType, price) => {
    const msg = `Hi, I need an airport transfer.\n\nRoute: ${data.route}\nFrom: ${location}\nVehicle: ${vehicleType}\nFare: ${price}\n\nPlease confirm availability.`;
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <ScrollReveal delay={index * 0.1}>
      <div className="rounded-2xl overflow-hidden shadow-xl border border-navy/8 bg-white">
        {/* Table header label */}
        <div className="px-6 py-4 flex items-center gap-3 bg-navy">
          <span className="text-2xl">{data.icon}</span>
          <div>
            <h3 className="font-display text-white text-xl font-bold tracking-wide">{data.route}</h3>
            <p className="text-cyan text-xs font-body mt-0.5">Click any fare to enquire on WhatsApp</p>
          </div>
        </div>

        {/* Scrollable table wrapper */}
        <div className="overflow-x-auto" style={{ WebkitOverflowScrolling: 'touch' }}>
          <table className="w-full min-w-[520px]" role="table">
            {/* Sticky header */}
            <thead>
              <tr style={{ background: '#070D22' }}>
                <th
                  className="text-left px-5 py-4 text-white font-display font-bold text-sm tracking-wider uppercase sticky left-0 z-10"
                  style={{ background: '#070D22', minWidth: '180px' }}
                >
                  Location
                </th>
                <th className="px-5 py-4 text-center text-white font-display font-bold text-sm tracking-wider uppercase whitespace-nowrap">
                  Hatchback / Sedan
                </th>
                <th className="px-5 py-4 text-center text-white font-display font-bold text-sm tracking-wider uppercase whitespace-nowrap">
                  Ertiga
                </th>
                <th className="px-5 py-4 text-center text-white font-display font-bold text-sm tracking-wider uppercase whitespace-nowrap" style={{ borderLeft: '2px solid #315BEA' }}>
                  Innova Crysta
                </th>
              </tr>
            </thead>
            <tbody>
              {data.rows.map((row, ri) => (
                <motion.tr
                  key={ri}
                  className="table-row-hover group border-b border-navy/6 transition-colors duration-150"
                  style={{ background: ri % 2 === 0 ? '#ffffff' : '#f8fafd' }}
                  whileHover={{ backgroundColor: 'rgba(49, 91, 234, 0.06)' }}
                >
                  <td
                    className="px-5 py-4 text-navy font-body font-medium text-sm sticky left-0 z-10"
                    style={{ background: 'inherit', minWidth: '180px' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan flex-shrink-0" />
                      {row.location}
                    </div>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => handleBookWhatsApp(row.location, 'Hatchback / Sedan', row.hatchback)}
                      className="font-display font-bold text-navy text-lg hover:text-cyan transition-colors duration-150 group-hover:scale-105 inline-block transition-transform"
                    >
                      {row.hatchback}
                    </button>
                  </td>
                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => handleBookWhatsApp(row.location, 'Ertiga', row.ertiga)}
                      className="font-display font-bold text-navy text-lg hover:text-cyan transition-colors duration-150"
                    >
                      {row.ertiga}
                    </button>
                  </td>
                  <td className="px-5 py-4 text-center" style={{ borderLeft: '2px solid rgba(49,91,234,0.18)' }}>
                    <button
                      onClick={() => handleBookWhatsApp(row.location, 'Innova Crysta', row.crysta)}
                      className="font-display font-bold text-cyan text-lg hover:text-[#254BDD] transition-colors duration-150"
                    >
                      {row.crysta}
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer note */}
        <div className="px-5 py-3 bg-navy/3 border-t border-navy/8 flex items-center gap-2">
          <span className="text-cyan text-xs">*</span>
          <span className="text-navy/50 text-xs font-body">Fares are one-way. Toll & parking charges extra. Click fare to book instantly.</span>
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function AirportFares() {
  return (
    <section id="airport-fares" className="py-20 md:py-28 bg-[#F6F8FE] relative overflow-hidden">

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="Airport Transfers"
            title="Airport Fare"
            highlight="Tables"
            subtitle="Fixed transparent fares from all major Goa locations to Dabolim & Mopa airports. No hidden charges."
          />
        </ScrollReveal>

        {/* Vehicle category legend */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {[
              { label: 'Hatchback / Sedan', color: 'bg-navy', example: 'Wagon R, Dzire' },
              { label: 'Ertiga (6-Seater)', color: 'bg-cyan', example: 'Maruti Ertiga' },
              { label: 'Innova Crysta (7-Seater)', color: 'bg-[#F06A9A]', example: 'Toyota Crysta' },
            ].map((cat, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-navy/10 shadow-sm">
                <span className={`w-3 h-3 rounded-full ${cat.color}`} />
                <span className="font-body text-navy font-semibold text-sm">{cat.label}</span>
                <span className="text-navy/40 text-xs font-body">({cat.example})</span>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Tables grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {airportFares.map((data, i) => (
            <FareTable key={i} data={data} index={i} />
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-navy/60 font-body mb-4">Don't see your location? Contact us for a custom quote.</p>
            <a
              href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I need an airport transfer fare quote for a location not listed on your website.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan hover:bg-[#254BDD] text-white font-body font-bold tracking-normal transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-cyan/20"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              Get Custom Quote
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
