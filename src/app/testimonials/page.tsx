'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

const reviews = [
  { name: 'Rahul Sharma', role: 'Verified Google Review', treatment: 'Nadi Pariksha & Panchkarma', rating: 5, date: '4 months ago', text: 'Doctor does thorough examination before prescribing any treatment. This is rare today — most doctors just prescribe without listening. Authentic Ayurvedic approach. Best clinic in Pune for Panchkarma!' },
  { name: 'Anjali Mehta', role: 'Regular Patient · Moshi', treatment: 'Basti Therapy', rating: 5, date: '2 months ago', text: 'Best experience ever! All services were truly great. I love it here. Highly recommended for joint pain and digestive issues. My back pain of 3 years is gone after just 10 Basti sessions.' },
  { name: 'Patil Family', role: 'Family Patient', treatment: 'Full Body Detox Program', rating: 5, date: '3 weeks ago', text: 'Staff is experienced and skilled. The entire experience was rejuvenating and very relaxing. Doctor is very thorough with his examination and genuinely cares about patient outcomes.' },
  { name: 'Sunita Gore', role: 'Verified Patient', treatment: 'Shirodhara & Abhyanga', rating: 5, date: '5 months ago', text: 'Excellent service and very polite staff! I felt truly relaxed after my Shirodhara session. My chronic insomnia has improved dramatically. I now sleep 7-8 hours without any pills!' },
  { name: 'Deepak Joshi', role: 'Corporate Professional', treatment: 'Stress Management Program', rating: 5, date: '1 month ago', text: 'I came with severe stress and burnout. After a 2-week personalized program, my energy levels are completely restored. The doctor spent 45 minutes understanding my condition before starting.' },
  { name: 'Priya Nair', role: 'Healthcare Worker', treatment: 'Nasya & Detox', rating: 5, date: '6 months ago', text: 'Amazing place! The treatments are authentic—you can feel the difference from the very first session. No artificial shortcuts. Clean, hygienic environment. Highly recommend for chronic sinusitis.' },
];

export default function Testimonials() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100, background: '#0F172A', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format"
          alt="Happy patients"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(20,184,166,0.2) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <div className="badge badge-secondary" style={{ display: 'inline-flex', marginBottom: 20 }}>Patient Reviews</div>
            <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
              Voices of Healing
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 580, margin: '0 auto', lineHeight: 1.7 }}>
              Real patients. Real results. Discover how Shubhay Clinic is helping Pune rediscover natural wellness.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS BAR */}
      <section style={{ background: '#1E293B', padding: '40px 0', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 0 }}>
            {[
              { val: '4.9★', label: 'Google Rating', sub: 'Out of 5.0' },
              { val: '51+', label: 'Total Reviews', sub: 'All Verified' },
              { val: '98%', label: 'Recommend Us', sub: 'Patient Survey' },
              { val: '5000+', label: 'Lives Healed', sub: 'Since 2020' },
            ].map((s, i) => (
              <div key={i} style={{ flex: '1 1 150px', padding: '20px 24px', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 32, color: '#14B8A6', lineHeight: 1 }}>{s.val}</div>
                <div style={{ color: '#fff', fontSize: 14, fontWeight: 600, marginTop: 6 }}>{s.label}</div>
                <div style={{ color: '#64748B', fontSize: 12, marginTop: 2 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS GRID */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">What Our Patients Say</span>
            <div className="divider" style={{ margin: '12px auto 20px' }} />
            <h2 className="section-title">Honest Reviews from Real Patients</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 24 }}>
            {reviews.map((r, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)} className="card" style={{ padding: 32, display: 'flex', flexDirection: 'column' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ color: '#F59E0B', fontSize: 20, letterSpacing: 2 }}>{'★'.repeat(r.rating)}</div>
                  <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 500 }}>{r.date}</div>
                </div>

                {/* Quote */}
                <p style={{ fontStyle: 'italic', color: '#374151', fontSize: 15, lineHeight: 1.75, flexGrow: 1, marginBottom: 24, position: 'relative', paddingLeft: 20, borderLeft: '3px solid #2563EB' }}>
                  {r.text}
                </p>

                {/* Treatment tag */}
                <div className="badge badge-primary" style={{ marginBottom: 20, width: 'fit-content', fontSize: 11 }}>
                  {r.treatment}
                </div>

                {/* Author */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #F1F5F9', paddingTop: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 18, fontFamily: 'Poppins', flexShrink: 0 }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 700, fontFamily: 'Poppins', fontSize: 15 }}>{r.name}</div>
                    <div style={{ color: '#94A3B8', fontSize: 12, display: 'flex', alignItems: 'center', gap: 6, marginTop: 2 }}>
                      <span style={{ color: '#22C55E', fontWeight: 700, fontSize: 14 }}>✓</span> {r.role}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div {...fadeUp(0)}>
              <span className="section-label">Our Promise</span>
              <div className="divider" />
              <h2 className="section-title" style={{ marginBottom: 24 }}>Why Every Patient Trusts Us</h2>
              <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Every review you read is from a real patient who visited Shubhay Clinic in Moshi, Pune. We never solicit fake reviews. Our reputation is built entirely on genuine healing outcomes.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 40 }}>
                {[
                  { step: '01', title: 'Comprehensive Diagnosis', desc: 'Detailed Nadi Pariksha + personal health history review before any treatment.' },
                  { step: '02', title: 'Personalized Planning', desc: 'Custom Ayurvedic treatment plan designed for your unique condition and constitution.' },
                  { step: '03', title: 'Expert Delivery', desc: 'All therapies performed by trained practitioners under Dr. Sharma\'s supervision.' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', padding: '16px 0', borderBottom: i < 2 ? '1px solid #F1F5F9' : 'none' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 12, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563EB', fontFamily: 'Poppins', fontSize: 13, fontWeight: 800, flexShrink: 0 }}>{item.step}</div>
                    <div>
                      <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 16, color: '#0F172A', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ color: '#64748B', fontSize: 14, lineHeight: 1.6 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/appointment" className="btn btn-primary">Book Your Consultation →</Link>
            </motion.div>

            <motion.div {...fadeUp(0.15)} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '4/5', background: '#E2E8F0', boxShadow: '0 24px 64px rgba(0,0,0,0.10)' }}>
                <img
                  src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=900&auto=format"
                  alt="Happy patients"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              {/* Rating card */}
              <div style={{
                position: 'absolute', bottom: -20, right: -20,
                background: '#0F172A', borderRadius: 20, padding: '24px 28px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
              }}>
                <div style={{ color: '#F59E0B', fontSize: 24, letterSpacing: 2, marginBottom: 6 }}>★★★★★</div>
                <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 28, color: '#fff', lineHeight: 1 }}>4.9/5</div>
                <div style={{ color: '#64748B', fontSize: 12, marginTop: 4 }}>Google Verified</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#2563EB', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeUp(0)}>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px,3vw,40px)', color: '#fff', marginBottom: 16 }}>Ready to Write Your Success Story?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 18, marginBottom: 40, maxWidth: 500, margin: '0 auto 40px' }}>
              Join 5,000+ patients who have experienced authentic healing at Shubhay Clinic.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/appointment" className="btn" style={{ background: '#fff', color: '#2563EB', fontWeight: 700, fontSize: 16, padding: '16px 36px' }}>Book Now</Link>
              <a href="tel:09970836811" className="btn btn-outline" style={{ fontSize: 16, padding: '16px 36px' }}>09970836811</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}