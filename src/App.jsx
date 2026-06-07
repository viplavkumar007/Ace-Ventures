import React from 'react';
import MarqueeBanner from './components/MarqueeBanner';
import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import WhyUs from './components/sections/WhyUs';
import Fleet from './components/sections/Fleet';
import AirportFares from './components/sections/AirportFares';
import Services from './components/sections/Services';
import BookingProcess from './components/sections/BookingProcess';
import Testimonials from './components/sections/Testimonials';
import FAQ from './components/sections/FAQ';
import CTAStrip from './components/sections/CTAStrip';
import Contact from './components/sections/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="relative">
      {/* Sticky top stack: marquee + navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <MarqueeBanner />
        <Navbar />
      </div>

      {/* Page content — push down by marquee (~32px) + navbar (~80px) */}
      <main>
        <div style={{ paddingTop: '36px' }}>
          <Hero />
        </div>
        <WhyUs />
        <Fleet />
        <AirportFares />
        <Services />
        <BookingProcess />
        <Testimonials />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
