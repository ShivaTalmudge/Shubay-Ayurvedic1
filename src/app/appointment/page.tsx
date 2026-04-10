'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const, delay },
});

const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM', '9:00 PM'];

export default function Appointment() {
  const [step, setStep] = useState(1);
  const [selectedTime, setSelectedTime] = useState('');
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', date: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#F8FAFC', paddingTop: 100 }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ background: '#fff', borderRadius: 32, padding: 64, textAlign: 'center', boxShadow: '0 24px 80px rgba(0,0,0,0.10)', maxWidth: 520, width: '100%', border: '1px solid #E2E8F0', margin: 24 }}
        >
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, #14B8A6, #2563EB)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', fontSize: 36 }}>✅</div>
          <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 28, color: '#0F172A', marginBottom: 12 }}>Appointment Requested!</h2>
          <p style={{ color: '#64748B', fontSize: 16, lineHeight: 1.7, marginBottom: 8 }}>
            Thank you, <strong>{form.name}</strong>! Your request has been received.
          </p>
          <p style={{ color: '#64748B', fontSize: 15, lineHeight: 1.7, marginBottom: 32 }}>
            Our coordinator will call you at <strong style={{ color: '#2563EB' }}>{form.phone}</strong> within 60 minutes to confirm your appointment.
          </p>
          <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 16, padding: '16px 20px', marginBottom: 32 }}>
            <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 14, color: '#15803D', marginBottom: 4 }}>📅 Appointment Summary</div>
            <div style={{ color: '#374151', fontSize: 14 }}>{form.service} · {form.date} · {selectedTime}</div>
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/" className="btn btn-primary">Back to Home</Link>
            <a href="tel:09970836811" className="btn btn-ghost">Call Clinic</a>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 80, background: '#0F172A', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format"
          alt="Book appointment"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.12 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(37,99,235,0.25) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="badge badge-primary" style={{ display: 'inline-flex', marginBottom: 20 }}>Book Now</div>
            <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 56px)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
              Book Your Appointment
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
              Complete the form below or call us directly at <a href="tel:09970836811" style={{ color: '#93C5FD', fontWeight: 700 }}>09970836811</a>. Open daily until 10 PM.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 48, alignItems: 'start' }}>

            {/* BOOKING FORM */}
            <motion.div {...fadeUp(0)}>
              <div style={{ background: '#fff', borderRadius: 28, padding: 40, boxShadow: '0 8px 40px rgba(0,0,0,0.07)', border: '1px solid #E2E8F0' }}>
                <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 26, color: '#0F172A', marginBottom: 8 }}>Appointment Details</h2>
                <p style={{ color: '#64748B', fontSize: 14, marginBottom: 32 }}>Fill in your details and we'll confirm your slot.</p>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {/* Name + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Full Name *</label>
                      <input className="input" required placeholder="Deepak Patil" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Phone Number *</label>
                      <input className="input" required type="tel" placeholder="09970836811" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                    </div>
                  </div>

                  {/* Service */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Select Treatment *</label>
                    <select className="input" required value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Choose a treatment...</option>
                      <option>General Consultation (Nadi Pariksha)</option>
                      <option>Panchkarma Detoxification</option>
                      <option>Basti Treatment</option>
                      <option>Abhyanga Massage</option>
                      <option>Shirodhara</option>
                      <option>Nasya Therapy</option>
                      <option>Detox Program</option>
                      <option>Joint Pain Management</option>
                      <option>Stress & Anxiety Program</option>
                      <option>Skin Condition Treatment</option>
                    </select>
                  </div>

                  {/* Date */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Preferred Date *</label>
                    <input className="input" required type="date" value={form.date} min={new Date().toISOString().split('T')[0]} onChange={e => setForm({ ...form, date: e.target.value })} />
                  </div>

                  {/* Time slots */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 12 }}>Preferred Time</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8 }}>
                      {timeSlots.map(t => (
                        <button key={t} type="button" onClick={() => setSelectedTime(t)} style={{
                          padding: '8px 4px',
                          borderRadius: 10,
                          border: selectedTime === t ? '2px solid #2563EB' : '1.5px solid #E2E8F0',
                          background: selectedTime === t ? '#EFF6FF' : '#F8FAFC',
                          color: selectedTime === t ? '#2563EB' : '#475569',
                          fontFamily: 'Inter',
                          fontSize: 13,
                          fontWeight: selectedTime === t ? 700 : 500,
                          cursor: 'pointer',
                          transition: 'all 0.15s',
                        }}>
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Health Concern / Notes</label>
                    <textarea className="input" rows={4} placeholder="Briefly describe your symptoms or health goals..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ fontSize: 16, padding: '16px', justifyContent: 'center', width: '100%', marginTop: 4 }}>
                    📅 Confirm Appointment Request
                  </button>

                  <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: 13 }}>
                    🔒 Secure · Our team will confirm via call within 60 minutes
                  </p>
                </form>
              </div>
            </motion.div>

            {/* SIDEBAR INFO */}
            <motion.div {...fadeUp(0.15)} style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
              {/* Why book */}
              <div style={{ background: '#0F172A', borderRadius: 24, padding: 32, color: '#fff' }}>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 20, marginBottom: 24, color: '#fff' }}>Why Book With Us</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  {[
                    { icon: '🩺', title: 'Expert Doctor', desc: '15+ years of Panchkarma expertise' },
                    { icon: '🌿', title: 'Natural Treatments', desc: '100% herbal, chemical-free therapies' },
                    { icon: '⏱️', title: 'Quick Confirmation', desc: 'We call back within 60 minutes' },
                    { icon: '🕙', title: 'Open Until 10 PM', desc: 'Flexible evening appointments available' },
                    { icon: '⭐', title: '4.9★ Google Rated', desc: '51+ verified patient reviews' },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                      <div style={{ fontSize: 22, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                      <div>
                        <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 15, color: '#fff', marginBottom: 2 }}>{item.title}</div>
                        <div style={{ color: '#94A3B8', fontSize: 13 }}>{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct call */}
              <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 24, padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>📞</div>
                <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 8 }}>Prefer to Call?</h4>
                <p style={{ color: '#64748B', fontSize: 14, marginBottom: 20 }}>Talk directly to our clinic coordinator for instant booking.</p>
                <a href="tel:09970836811" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 17 }}>
                  09970836811
                </a>
              </div>

              {/* WhatsApp */}
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 24, padding: 28, textAlign: 'center' }}>
                <div style={{ fontSize: 36, marginBottom: 12 }}>💬</div>
                <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 18, color: '#0F172A', marginBottom: 8 }}>WhatsApp Booking</h4>
                <p style={{ color: '#64748B', fontSize: 14, marginBottom: 20 }}>Send us a message on WhatsApp for the fastest response.</p>
                <a href="https://wa.me/919970836811" target="_blank" className="btn" style={{ background: '#25D366', color: '#fff', width: '100%', justifyContent: 'center', fontSize: 16 }}>
                  Open WhatsApp
                </a>
              </div>

              {/* Address */}
              <div style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 24, padding: 28 }}>
                <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                  📍 Clinic Address
                </h4>
                <p style={{ color: '#475569', fontSize: 14, lineHeight: 1.7, marginBottom: 16 }}>
                  Gajanan Society, Sant Nagar, Sector 4, Moshi, Pune, Maharashtra 411070
                </p>
                <div style={{ color: '#475569', fontSize: 14, marginBottom: 8 }}>🕙 Open Daily · Closes 10:00 PM</div>
                <a href="https://maps.google.com/?q=Gajanan+Society,+Sant+Nagar,+Sector+4,+Moshi,+Pune" target="_blank" style={{ color: '#2563EB', fontSize: 14, fontWeight: 600, textDecoration: 'none' }}>
                  🗺️ Open in Google Maps →
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
