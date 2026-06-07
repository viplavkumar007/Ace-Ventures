import React from 'react';
import { brand, navLinks, services } from '../data/siteContent';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy relative overflow-hidden">
      {/* Top border gradient */}
      <div className="h-0.5 bg-gradient-to-r from-cyan via-orange to-yellow" />

      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={brand.logo} alt={brand.name} className="w-14 h-14 rounded-full object-contain ring-2 ring-cyan/30" />
              <div>
                <div className="font-display text-white text-xl font-black tracking-wide">ACE VENTURES</div>
                <div className="text-cyan text-xs font-body">Premium Taxi • Goa</div>
              </div>
            </div>
            <p className="text-white/45 font-body text-sm leading-relaxed mb-5">
              Goa's most trusted premium taxi service. Airport transfers, sightseeing, outstation — we've got every mile covered.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[
                { icon: '📘', label: 'Facebook', href: '#' },
                { icon: '📸', label: 'Instagram', href: '#' },
                { icon: '▶️', label: 'YouTube', href: '#' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  className="w-9 h-9 rounded-lg glass border border-white/10 hover:border-cyan/40 flex items-center justify-center text-sm transition-all duration-200 hover:-translate-y-0.5"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-white font-bold text-base mb-4 tracking-wider uppercase">Quick Links</h4>
            <ul className="space-y-2.5">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={e => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-white/45 hover:text-cyan font-body text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan/40 group-hover:bg-cyan transition-colors" />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white font-bold text-base mb-4 tracking-wider uppercase">Services</h4>
            <ul className="space-y-2.5">
              {services.map(s => (
                <li key={s.title}>
                  <a
                    href="#services"
                    onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }); }}
                    className="text-white/45 hover:text-cyan font-body text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-cyan/40 group-hover:bg-cyan transition-colors" />
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-white font-bold text-base mb-4 tracking-wider uppercase">Contact</h4>
            <div className="space-y-4">
              <a href={`tel:${brand.phone}`} className="flex items-start gap-3 group">
                <span className="text-cyan mt-0.5">📞</span>
                <div>
                  <div className="text-white/40 text-xs font-body mb-0.5">Phone / WhatsApp</div>
                  <div className="text-white/75 group-hover:text-cyan font-body text-sm transition-colors">{brand.phoneDisplay}</div>
                </div>
              </a>
              <a href={`mailto:${brand.email}`} className="flex items-start gap-3 group">
                <span className="text-orange mt-0.5">📧</span>
                <div>
                  <div className="text-white/40 text-xs font-body mb-0.5">Email</div>
                  <div className="text-white/75 group-hover:text-orange font-body text-sm transition-colors break-all">{brand.email}</div>
                </div>
              </a>
              <div className="flex items-start gap-3">
                <span className="text-yellow mt-0.5">📍</span>
                <div>
                  <div className="text-white/40 text-xs font-body mb-0.5">Address</div>
                  <div className="text-white/75 font-body text-sm">{brand.address}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 font-body text-xs">
            © {year} ACE VENTURES. All Rights Reserved.
          </p>
          <p className="text-white/25 font-body text-xs">
            Premium Taxi Services Across Goa • +91 84465 33900
          </p>
        </div>
      </div>
    </footer>
  );
}
