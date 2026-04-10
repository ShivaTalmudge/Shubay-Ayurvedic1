'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100, background: '#0F172A', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1519415943484-9fa1873496d4?q=80&w=2000&auto=format"
          alt="Clinic interior"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(37,99,235,0.25) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <div className="badge badge-primary" style={{ display: 'inline-flex', marginBottom: 20 }}>Get In Touch</div>
            <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
              Contact Shubhay Clinic
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              We are here to answer all your questions. Reach us by call, WhatsApp, or visit us directly at Moshi, Pune.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT INFO CARDS */}
      <section style={{ background: '#F8FAFC', padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 20 }}>
            {[
              { icon: '📍', title: 'Address', val: 'Gajanan Society, Sant Nagar, Sector 4, Moshi, Pune, Maharashtra 411070', link: 'https://maps.google.com/?q=Gajanan+Society,+Sant+Nagar,+Sector+4,+Moshi,+Pune', color: '#2563EB', bg: '#EFF6FF' },
              { icon: '📞', title: 'Phone', val: '09970836811', sub: 'Call us anytime', link: 'tel:09970836811', color: '#14B8A6', bg: '#F0FDFA' },
              { icon: '💬', title: 'WhatsApp', val: 'Chat Instantly', sub: '+91 9970836811', link: 'https://wa.me/919970836811', color: '#16A34A', bg: '#F0FDF4' },
              { icon: '🕙', title: 'Timings', val: 'Open Daily', sub: 'Closes at 10:00 PM', link: null, color: '#F59E0B', bg: '#FFFBEB' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                style={{ background: '#fff', border: '1px solid #E2E8F0', borderRadius: 20, padding: 28, boxShadow: '0 2px 12px rgba(0,0,0,0.05)', transition: 'all 0.3s' }}
                whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(0,0,0,0.10)' }}
              >
                <div style={{ width: 52, height: 52, borderRadius: 14, background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, marginBottom: 16 }}>
                  {item.icon}
                </div>
                <div style={{ fontSize: 12, color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 8 }}>{item.title}</div>
                {item.link ? (
                  <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined}
                    style={{ color: '#0F172A', fontWeight: 700, fontFamily: 'Poppins', fontSize: 15, textDecoration: 'none', lineHeight: 1.4, display: 'block' }}>
                    {item.val}
                  </a>
                ) : (
                  <div style={{ color: '#0F172A', fontWeight: 700, fontFamily: 'Poppins', fontSize: 15, lineHeight: 1.4 }}>{item.val}</div>
                )}
                {item.sub && <div style={{ color: '#64748B', fontSize: 13, marginTop: 4 }}>{item.sub}</div>}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + MAP */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 56, alignItems: 'start' }}>

            {/* CONTACT FORM */}
            <motion.div {...fadeUp(0)}>
              <span className="section-label">Send a Message</span>
              <div className="divider" />
              <h2 className="section-title" style={{ marginBottom: 8 }}>Write to Us</h2>
              <p style={{ color: '#64748B', fontSize: 15, marginBottom: 36 }}>We typically respond within 2 hours during clinic hours.</p>

              {sent ? (
                <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: 20, padding: 40, textAlign: 'center' }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 22, color: '#15803D', marginBottom: 12 }}>Message Sent!</h3>
                  <p style={{ color: '#166534', fontSize: 15 }}>Thank you! Our clinic team will contact you at <strong>{form.phone}</strong> within 2 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
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

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Health Concern</label>
                    <select className="input" value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })}>
                      <option value="">Select your concern...</option>
                      <option>Panchkarma Detox</option>
                      <option>Back / Joint Pain</option>
                      <option>Digestive Issues</option>
                      <option>Skin Condition</option>
                      <option>Stress / Anxiety</option>
                      <option>General Consultation</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: 13, fontWeight: 600, color: '#374151', marginBottom: 8 }}>Your Message</label>
                    <textarea className="input" rows={5} placeholder="Describe your health concern or question in detail..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} style={{ resize: 'vertical' }} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ fontSize: 16, padding: '16px', justifyContent: 'center', width: '100%' }}>
                    📤 Send Message
                  </button>
                  <p style={{ textAlign: 'center', color: '#94A3B8', fontSize: 13 }}>🔒 Your information is 100% private and secure.</p>
                </form>
              )}
            </motion.div>

            {/* MAP + INFO */}
            <motion.div {...fadeUp(0.15)}>
              <span className="section-label">Find Us</span>
              <div className="divider" />
              <h2 className="section-title" style={{ marginBottom: 8 }}>Our Location</h2>
              <p style={{ color: '#64748B', fontSize: 15, marginBottom: 28 }}>Located in Gajanan Society, Moshi, Pune — easily accessible by road.</p>

              {/* Map */}
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.10)', border: '1px solid #E2E8F0', marginBottom: 24, height: 320, background: '#E2E8F0' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6!2d73.8504!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e760ea67c5%3A0x0!2sMoshi%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  loading="lazy"
                  title="Shubhay Clinic on Google Maps"
                />
              </div>

              <a href="https://maps.google.com/?q=Gajanan+Society,+Sant+Nagar,+Sector+4,+Moshi,+Pune" target="_blank" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginBottom: 32 }}>
                🗺️ Get Directions on Google Maps
              </a>

              {/* Quick contact */}
              <div style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 20, padding: 28 }}>
                <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 17, color: '#0F172A', marginBottom: 20 }}>Quick Contact</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  <a href="tel:09970836811" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', padding: '14px 18px', background: '#EFF6FF', borderRadius: 12 }}>
                    <span style={{ fontSize: 22 }}>📞</span>
                    <div>
                      <div style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#2563EB', fontSize: 17 }}>09970836811</div>
                      <div style={{ color: '#64748B', fontSize: 13 }}>Call for direct appointment</div>
                    </div>
                  </a>
                  <a href="https://wa.me/919970836811" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none', padding: '14px 18px', background: '#F0FDF4', borderRadius: 12 }}>
                    <span style={{ fontSize: 22 }}>💬</span>
                    <div>
                      <div style={{ fontFamily: 'Poppins', fontWeight: 700, color: '#16A34A', fontSize: 17 }}>WhatsApp Chat</div>
                      <div style={{ color: '#64748B', fontSize: 13 }}>Fastest way to reach us</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Common Questions</span>
            <div className="divider" style={{ margin: '12px auto 20px' }} />
            <h2 className="section-title">Frequently Asked Questions</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 20, maxWidth: 1000, margin: '0 auto' }}>
            {[
              { q: 'Do I need an appointment or can I walk in?', a: 'Walk-ins are welcome! However, we recommend booking in advance to reduce waiting time and ensure the doctor\'s full attention.' },
              { q: 'How long does a Panchkarma session last?', a: 'A complete Panchkarma program typically runs 7–21 days. Individual sessions like Abhyanga or Shirodhara can be just 45–60 minutes.' },
              { q: 'Are the treatments safe for all ages?', a: 'Yes! Ayurvedic treatments are safe for most ages, from teenagers to seniors. The doctor adjusts protocols based on your age, condition, and health history.' },
              { q: 'What should I bring for the first visit?', a: 'Bring any current medical reports, medication lists, and a list of your current health concerns. Wear comfortable clothing for examination.' },
            ].map((faq, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="card" style={{ padding: 28 }}>
                <h4 style={{ fontFamily: 'Poppins', fontSize: 16, fontWeight: 700, color: '#0F172A', marginBottom: 12, display: 'flex', gap: 10 }}>
                  <span style={{ color: '#2563EB', flexShrink: 0 }}>Q.</span> {faq.q}
                </h4>
                <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7, paddingLeft: 24 }}>{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}