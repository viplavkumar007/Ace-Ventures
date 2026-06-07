import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand, navLinks } from '../data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map(l => l.href.replace('#', ''));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 100) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a taxi with ACE VENTURES.')}`;
  const logoTextClass = scrolled ? 'text-navy' : 'text-white';
  const logoSubTextClass = scrolled ? 'text-navy/55' : 'text-cyan';
  const navTextClass = scrolled ? 'text-navy/70 hover:text-navy' : 'text-white/80 hover:text-white';
  const mobileToggleClass = scrolled ? 'text-navy' : 'text-white';

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg shadow-navy/10 border-b border-navy/8' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" onClick={e => { e.preventDefault(); handleNav('#home'); }} className="flex items-center gap-2 flex-shrink-0">
          <img src={brand.logo} alt={brand.name} className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full ring-2 ring-cyan/40" />
          <div className="hidden sm:block">
            <div className={`font-display text-xl font-bold leading-tight tracking-wide transition-colors duration-300 ${logoTextClass}`}>ACE VENTURES</div>
            <div className={`text-xs font-body transition-colors duration-300 ${logoSubTextClass}`}>Premium Taxi • Goa</div>
          </div>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-1">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <button
                onClick={() => handleNav(href)}
                className={`px-3 py-2 rounded-lg text-sm font-body font-medium transition-all duration-200 relative group ${
                  activeSection === href.replace('#', '')
                    ? 'text-cyan'
                    : navTextClass
                }`}
              >
                {label}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 rounded-full bg-cyan transition-all duration-300 ${
                  activeSection === href.replace('#', '') ? 'w-4/5' : 'w-0 group-hover:w-4/5'
                }`} />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 hover:bg-green-400 text-white text-sm font-body font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-green-500/30"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
          <button
            onClick={() => handleNav('#contact')}
            className="px-5 py-2 rounded-full gradient-accent text-navy text-sm font-display font-bold tracking-wide transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-orange/30"
          >
            Book Taxi
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`lg:hidden p-2 transition-colors duration-300 ${mobileToggleClass}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`lg:hidden border-t ${
              scrolled ? 'bg-white border-navy/10 shadow-lg' : 'glass-dark border-cyan/10'
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => handleNav(href)}
                  className={`text-left px-4 py-3 rounded-lg font-body font-medium transition-all ${
                    activeSection === href.replace('#', '')
                      ? 'text-cyan bg-cyan/10'
                      : scrolled
                        ? 'text-navy/70 hover:text-navy hover:bg-navy/5'
                        : 'text-white/80 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {label}
                </button>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
                <a
                  href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a taxi with ACE VENTURES.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center py-3 rounded-full bg-green-500 text-white font-body font-medium text-sm"
                >
                  WhatsApp
                </a>
                <button
                  onClick={() => handleNav('#contact')}
                  className="flex-1 py-3 rounded-full gradient-accent text-navy font-display font-bold text-sm tracking-wide"
                >
                  Book Taxi
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
