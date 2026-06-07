import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { brand, services } from '../../data/siteContent';
import ScrollReveal from '../ui/ScrollReveal';
import SectionHeader from '../ui/SectionHeader';

function Toast({ message, type, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -20, scale: 0.9 }}
      className={`fixed top-24 right-4 z-[100] flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl max-w-sm ${
        type === 'success' ? 'bg-cyan text-white' : 'bg-red-500 text-white'
      }`}
      role="alert"
      aria-live="polite"
    >
      <span className="text-xl">{type === 'success' ? '✅' : '❌'}</span>
      <span className="font-body font-medium text-sm">{message}</span>
      <button onClick={onClose} className="ml-2 text-white/70 hover:text-white">✕</button>
    </motion.div>
  );
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', phone: '', email: '', service: '', pickup: '', dropoff: '', date: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.phone.trim() || !/^\+?[0-9]{10,13}$/.test(form.phone.replace(/\s/g, ''))) e.phone = 'Valid phone number required';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Valid email required';
    if (!form.service) e.service = 'Please select a service';
    if (!form.pickup.trim()) e.pickup = 'Pickup location is required';
    return e;
  };

  const handleChange = (e) => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) setErrors(err => ({ ...err, [e.target.name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    setLoading(true);
    const selectedService = services.find(s => s.title === form.service);

    const waMsg = `Hi, I'd like to enquire about *${form.service}* with Goa Taxi Now.\n\n👤 *Name:* ${form.name}\n📞 *Phone:* ${form.phone}\n${form.email ? `📧 *Email:* ${form.email}\n` : ''}📍 *Pickup:* ${form.pickup}\n${form.dropoff ? `🏁 *Drop-off:* ${form.dropoff}\n` : ''}${form.date ? `📅 *Date:* ${form.date}\n` : ''}${form.message ? `\n💬 *Message:* ${form.message}` : ''}`;

    setTimeout(() => {
      setLoading(false);
      window.open(`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(waMsg)}`, '_blank');

      const emailSubject = selectedService
        ? selectedService.emailSubject.replace('ACE VENTURES', 'Goa Taxi Now')
        : `Booking Enquiry - Goa Taxi Now`;
      const emailBody = `Company: Goa Taxi Now\nName: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email || 'N/A'}\nService: ${form.service}\nPickup: ${form.pickup}\nDrop-off: ${form.dropoff || 'N/A'}\nDate: ${form.date || 'N/A'}\nMessage: ${form.message || 'N/A'}`;
      window.open(`mailto:${brand.email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`);

      setToast({ message: 'Enquiry sent! Redirecting to WhatsApp...', type: 'success' });
      setForm({ name: '', phone: '', email: '', service: '', pickup: '', dropoff: '', date: '', message: '' });
      setTimeout(() => setToast(null), 4000);
    }, 800);
  };

  const inputBase = 'w-full px-4 py-3 rounded-xl border bg-white font-body text-navy text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-cyan/40 placeholder:text-navy/30';
  const inputNormal = `${inputBase} border-navy/12 hover:border-navy/25 focus:border-cyan/50`;
  const inputError = `${inputBase} border-red-300 focus:ring-red-200 bg-red-50/50`;

  return (
    <>
      <AnimatePresence>
        {toast && (
          <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />
        )}
      </AnimatePresence>

      <section id="contact" className="py-20 md:py-28 bg-white relative overflow-hidden">

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              eyebrow="Get In Touch"
              title="Book Your"
              highlight="Ride"
              subtitle="Fill the form and we'll reach out on WhatsApp & email instantly."
            />
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2">
              <div className="space-y-6">
                {[
                  { icon: '📞', label: 'Call Us', value: brand.phoneDisplay, link: `tel:${brand.phone}` },
                  { icon: '💬', label: 'WhatsApp', value: brand.phoneDisplay, link: `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent('Hi, I would like to book a taxi.')}` },
                  { icon: '📧', label: 'Email', value: brand.email, link: `mailto:${brand.email}` },
                  { icon: '📍', label: 'Address', value: brand.address, link: brand.mapUrl },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.link}
                    target={item.link.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-5 rounded-2xl border border-navy/8 hover:border-cyan/30 bg-white hover:bg-navy/2 group transition-all duration-200 hover:shadow-md"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#EEF1FB] border border-cyan/10 flex items-center justify-center text-xl flex-shrink-0 group-hover:shadow-lg transition-shadow">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-navy/40 text-xs font-body mb-0.5">{item.label}</div>
                      <div className="font-display text-navy font-bold text-base tracking-wide group-hover:text-cyan transition-colors">{item.value}</div>
                    </div>
                  </a>
                ))}

                {/* Availability note */}
                <div className="p-5 rounded-2xl bg-navy border border-cyan/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-cyan animate-pulse" />
                    <span className="font-display text-white font-bold">Available 24/7</span>
                  </div>
                  <p className="text-white/55 text-sm font-body">Our team is available round the clock for bookings, queries, and emergency support.</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal delay={0.1} className="lg:col-span-3">
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-2xl border border-navy/8 shadow-xl p-6 md:p-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Full Name *</label>
                    <input
                      name="name" type="text" value={form.name} onChange={handleChange}
                      placeholder="Your name"
                      className={errors.name ? inputError : inputNormal}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1 font-body">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Phone *</label>
                    <input
                      name="phone" type="tel" value={form.phone} onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className={errors.phone ? inputError : inputNormal}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1 font-body">{errors.phone}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Email (Optional)</label>
                    <input
                      name="email" type="email" value={form.email} onChange={handleChange}
                      placeholder="your@email.com"
                      className={errors.email ? inputError : inputNormal}
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1 font-body">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Service *</label>
                    <select
                      name="service" value={form.service} onChange={handleChange}
                      className={`${errors.service ? inputError : inputNormal} cursor-pointer`}
                    >
                      <option value="">Select service...</option>
                      {services.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                    </select>
                    {errors.service && <p className="text-red-500 text-xs mt-1 font-body">{errors.service}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Pickup Location *</label>
                    <input
                      name="pickup" type="text" value={form.pickup} onChange={handleChange}
                      placeholder="Hotel / Area / Address"
                      className={errors.pickup ? inputError : inputNormal}
                    />
                    {errors.pickup && <p className="text-red-500 text-xs mt-1 font-body">{errors.pickup}</p>}
                  </div>
                  <div>
                    <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Drop-off Location</label>
                    <input
                      name="dropoff" type="text" value={form.dropoff} onChange={handleChange}
                      placeholder="Destination / Airport"
                      className={inputNormal}
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Travel Date</label>
                  <input
                    name="date" type="date" value={form.date} onChange={handleChange}
                    className={inputNormal}
                    min={new Date().toISOString().split('T')[0]}
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-navy/60 text-xs font-body font-semibold mb-1.5 uppercase tracking-wide">Additional Message</label>
                  <textarea
                    name="message" value={form.message} onChange={handleChange}
                    rows={3} placeholder="No. of passengers, special requirements..."
                    className={`${inputNormal} resize-none`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 rounded-xl bg-cyan text-white font-body font-black text-lg tracking-normal transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#254BDD] hover:shadow-xl hover:shadow-cyan/20 active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Sending Enquiry...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                      Send Enquiry via WhatsApp & Email
                    </>
                  )}
                </button>

                <p className="text-center text-navy/40 text-xs font-body mt-3">
                  Your enquiry will be sent via WhatsApp + Email simultaneously.
                </p>
              </form>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
