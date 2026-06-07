import React from 'react';
import { motion } from 'framer-motion';
import { services, brand } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

export default function Services() {
  const handleWhatsApp = (msg) => {
    window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const handleEmail = (subject, body) => {
    window.open(`mailto:${brand.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
  };

  return (
    <section id="services" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `repeating-linear-gradient(45deg, #082544 0px, #082544 1px, transparent 0px, transparent 50%)`,
        backgroundSize: '20px 20px'
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <SectionHeader
            eyebrow="What We Offer"
            title="Our"
            highlight="Services"
            subtitle="From airport transfers to custom tours — we cover every mile of your Goa journey."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 350 }}
                className="group relative bg-white rounded-2xl border border-navy/8 hover:border-cyan/40 p-6 shadow-md hover:shadow-xl hover:shadow-navy/10 transition-all duration-300 h-full flex flex-col"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-navy/5 group-hover:bg-cyan/10 flex items-center justify-center text-2xl mb-4 transition-colors duration-300">
                  {service.icon}
                </div>

                <h3 className="font-display text-navy font-bold text-xl mb-2 tracking-wide">{service.title}</h3>
                <p className="text-navy/55 font-body text-sm leading-relaxed flex-1 mb-5">{service.desc}</p>

                {/* Action Buttons */}
                <div className="flex gap-2">
                  <button
                    onClick={() => handleWhatsApp(service.whatsappMsg)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-green-50 hover:bg-green-500 text-green-600 hover:text-white text-xs font-body font-semibold transition-all duration-200 border border-green-100 hover:border-green-500"
                    aria-label={`Book ${service.title} on WhatsApp`}
                  >
                    <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current flex-shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                    WhatsApp
                  </button>
                  <button
                    onClick={() => handleEmail(service.emailSubject, service.emailBody)}
                    className="flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl bg-navy/5 hover:bg-navy text-navy hover:text-white text-xs font-body font-semibold transition-all duration-200 border border-navy/10 hover:border-navy"
                    aria-label={`Email about ${service.title}`}
                  >
                    <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    Email
                  </button>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl bg-gradient-to-r from-cyan to-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
