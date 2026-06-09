import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { bookingWhatsAppMessage, brand, navLinks } from '../data/siteContent';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);
  const topOffset = 96;

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      const sectionIds = navLinks.map(link => link.href.replace('#', ''));
      const viewportAnchor = topOffset + 12;

      if (window.innerHeight + scrollY >= document.documentElement.scrollHeight - 8) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (!section) continue;

        const rect = section.getBoundingClientRect();
        if (rect.top <= viewportAnchor && rect.bottom > viewportAnchor) {
          setActiveSection(id);
          return;
        }
      }

      if (scrollY < topOffset) {
        setActiveSection('home');
      }
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleNav = (href, event) => {
    event?.preventDefault();
    setMenuOpen(false);
    const id = href.replace('#', '');
    setActiveSection(id);

    window.setTimeout(() => {
      const target = document.getElementById(id);
      if (!target) return;

      const fixedHeader = document.querySelector('[data-fixed-header]');
      const offset = fixedHeader?.getBoundingClientRect().height ?? topOffset;
      const nextTop = id === 'home' ? 0 : target.getBoundingClientRect().top + window.scrollY - offset;

      window.history.pushState(null, '', href);
      window.scrollTo({ top: Math.max(0, nextTop), behavior: 'smooth' });
    }, 0);
  };

  const toggleMobileMenu = () => {
    setMenuOpen(open => !open);
  };

  const handleMobileTogglePointer = (event) => {
    event.preventDefault();
    toggleMobileMenu();
  };

  const handleMobileToggleKeyDown = (event) => {
    if (event.key !== 'Enter' && event.key !== ' ') return;
    event.preventDefault();
    toggleMobileMenu();
  };

  const whatsappUrl = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(bookingWhatsAppMessage())}`;
  const logoTextClass = 'text-navy';
  const logoSubTextClass = scrolled ? 'text-navy/55' : 'text-navy/60';
  const navTextClass = 'text-navy/70 hover:text-navy';
  const mobileToggleClass = 'text-navy';

  return (
    <header
      className={`w-full transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg shadow-navy/10 border-b border-navy/8' : 'bg-transparent'
      } relative z-50`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#home" onClick={event => handleNav('#home', event)} className="flex items-center gap-2 flex-shrink-0">
          <img src={brand.logo} alt={brand.name} className="h-12 w-12 md:h-14 md:w-14 object-contain rounded-full ring-2 ring-white/70 shadow-sm" />
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
                type="button"
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
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-sm font-body font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#25D366]/30"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            WhatsApp
          </a>
          <button
            type="button"
            onClick={() => handleNav('#contact')}
            className="px-5 py-2 rounded-full bg-navy text-white text-sm font-body font-bold tracking-normal transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#111936] hover:shadow-lg hover:shadow-navy/15"
          >
            Book Taxi
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          type="button"
          className={`relative z-50 lg:hidden flex h-11 w-11 touch-manipulation items-center justify-center rounded-full bg-white/90 shadow-sm ring-1 ring-navy/8 transition-colors duration-300 active:scale-95 ${mobileToggleClass}`}
          onPointerUp={handleMobileTogglePointer}
          onKeyDown={handleMobileToggleKeyDown}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
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
            id="mobile-navigation"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className={`fixed left-0 right-0 top-[96px] z-[60] max-h-[calc(100vh-96px)] overflow-y-auto border-t lg:hidden ${
              scrolled ? 'bg-white border-navy/10 shadow-lg' : 'bg-white/95 border-navy/10 shadow-lg'
            }`}
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ label, href }) => (
                <a
                  key={href}
                  href={href}
                  onClick={event => handleNav(href, event)}
                  className={`text-left px-4 py-3 rounded-lg font-body font-medium transition-all ${
                    activeSection === href.replace('#', '')
                      ? 'text-cyan bg-cyan/10'
                      : scrolled
                        ? 'text-navy/70 hover:text-navy hover:bg-navy/5'
                        : 'text-navy/70 hover:text-navy hover:bg-navy/5'
                  }`}
                >
                  {label}
                </a>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-white/10">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center py-3 rounded-full bg-[#25D366] text-white font-body font-semibold text-sm"
                >
                  WhatsApp
                </a>
                <a
                  href="#contact"
                  onClick={event => handleNav('#contact', event)}
                  className="flex-1 py-3 rounded-full bg-navy text-white font-body font-bold text-sm"
                >
                  Book Taxi
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
