'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

export default function About() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100, background: '#0F172A', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format"
          alt="Ayurvedic clinic"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.2 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.96) 0%, rgba(29,78,216,0.3) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <div className="badge badge-primary" style={{ display: 'inline-flex', marginBottom: 20 }}>Our Story</div>
            <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
              About Shubhay Clinic
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
              शुभाय क्लिनिक – आयुर्वेद & पंचकर्म | Authentic healing rooted in 5,000 years of Vedic wisdom, now available in Moshi, Pune.
            </p>
          </motion.div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section" style={{ background: '#fff' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div {...fadeUp(0)}>
              <span className="section-label">Rooted in Tradition</span>
              <div className="divider" />
              <h2 className="section-title" style={{ marginBottom: 24 }}>
                Healing That Goes Beyond Symptoms
              </h2>
              <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                Founded in 2020, <strong>Shubhay Clinic – Ayurved & Panchkarma</strong> was built on a single belief: that true health is not merely the absence of disease, but a state of absolute balance in body, mind, and spirit.
              </p>
              <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8, marginBottom: 20 }}>
                Our clinic combines the 5,000-year-old wisdom of the Vedas with modern clinical hygiene and patient care standards. We specialize in root-cause treatment for chronic conditions—joint pain, digestive disorders, skin issues, neurological concerns, and lifestyle-induced stress.
              </p>
              <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8, marginBottom: 32 }}>
                Every patient who walks through our doors receives a comprehensive Nadi Pariksha (pulse diagnosis) to understand their unique Prakriti and current Vikriti before any treatment begins.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 40 }}>
                {[
                  { val: '5000+', label: 'Patients Treated' },
                  { val: '4.9★', label: 'Google Rating' },
                  { val: '15+', label: 'Years Experience' },
                  { val: '51+', label: 'Verified Reviews' },
                ].map((stat, i) => (
                  <div key={i} style={{ background: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 16, padding: '20px 24px' }}>
                    <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 28, color: '#2563EB', lineHeight: 1 }}>{stat.val}</div>
                    <div style={{ color: '#64748B', fontSize: 13, marginTop: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
              <Link href="/appointment" className="btn btn-primary">Book a Consultation →</Link>
            </motion.div>

            <motion.div {...fadeUp(0.15)} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 32, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)', aspectRatio: '4/5', background: '#E2E8F0' }}>
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format"
                  alt="Ayurvedic treatment"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute', bottom: -20, left: -20,
                background: '#0F172A', color: '#fff', borderRadius: 20, padding: '20px 28px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.2)',
              }}>
                <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 28, color: '#14B8A6', lineHeight: 1 }}>100%</div>
                <div style={{ fontSize: 12, color: '#94A3B8', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Herbal & Natural</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* DOCTOR SECTION */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Meet Our Expert</span>
            <div className="divider" style={{ margin: '12px auto 20px' }} />
            <h2 className="section-title">Led by an Experienced Physician</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 64, alignItems: 'center' }}>
            <motion.div {...fadeUp(0)} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 32, overflow: 'hidden', aspectRatio: '3/4', background: '#E2E8F0', boxShadow: '0 20px 60px rgba(0,0,0,0.10)' }}>
                <img
                  src="/images/doctor.png"
                  alt="Doctor"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{
                position: 'absolute', top: 24, right: -16,
                background: '#2563EB', borderRadius: 16, padding: '16px 20px',
                boxShadow: '0 8px 24px rgba(37,99,235,0.35)', color: '#fff',
              }}>
                <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 22 }}>15+</div>
                <div style={{ fontSize: 11, opacity: 0.85, textTransform: 'uppercase', letterSpacing: 0.5 }}>Years Exp.</div>
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <span className="section-label">Lead Physician</span>
              <div className="divider" />
              <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 36, color: '#0F172A', marginBottom: 8 }}>Dr. Sharma</h2>
              <p style={{ color: '#2563EB', fontFamily: 'Poppins', fontSize: 16, fontWeight: 600, marginBottom: 24 }}>B.A.M.S, M.D. (Ayurveda) · Senior Panchkarma Specialist</p>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: 16, marginBottom: 20 }}>
                "Ayurveda is not just about treating the body—it's about healing the life force within. My journey started with a simple question: how can we achieve lasting health without the side effects of modern chemicals?"
              </p>
              <p style={{ color: '#475569', lineHeight: 1.8, fontSize: 16, marginBottom: 32 }}>
                With over 15 years of deep study in Panchkarma and herbal pharmacology, Dr. Sharma performs thorough Nadi Pariksha for every patient at Shubhay Clinic, ensuring each treatment precisely aligns with their individual Prakriti and health requirements.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 36 }}>
                {[
                  'Joint & Spine Disorders',
                  'Chronic Skin Conditions',
                  'Digestive Rejuvenation',
                  'Neurological Care via Panchkarma',
                ].map((skill, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, color: '#475569', fontSize: 15 }}>
                    <span style={{ color: '#14B8A6', fontWeight: 700 }}>✓</span> {skill}
                  </div>
                ))}
              </div>
              <a href="tel:09970836811" className="btn btn-primary">📞 Request Consultation</a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUR PHILOSOPHY */}
      <section className="section" style={{ background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'rgba(20,184,166,0.08)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ color: '#93C5FD' }}>Our Philosophy</span>
            <div className="divider" style={{ margin: '12px auto 20px', background: 'linear-gradient(90deg, #2563EB, #14B8A6)' }} />
            <h2 style={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)' }}>Three Pillars of Shubhay Healing</h2>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 32 }}>
            {[
              { icon: '🧬', title: 'Personalized', desc: 'Every Prakriti is different. We design treatments uniquely for your body type, lifestyle, and health history—never a one-size-fits-all approach.' },
              { icon: '🌿', title: 'Authentic', desc: 'Pure Vedic protocols using 100% natural herbs and medicated oils. No shortcuts, no synthetic substitutes, no compromises on tradition.' },
              { icon: '🫶', title: 'Compassionate', desc: 'We listen completely before we prescribe. Every patient\'s story matters—our clinic culture reflects warmth, dignity, and genuine care.' },
            ].map((item, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} style={{
                background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: 24, padding: '48px 36px', textAlign: 'center',
              }}>
                <div style={{ fontSize: 48, marginBottom: 20 }}>{item.icon}</div>
                <h3 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 22, color: '#fff', marginBottom: 16 }}>{item.title}</h3>
                <p style={{ color: '#94A3B8', fontSize: 15, lineHeight: 1.7 }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeUp(0)}>
            <h2 className="section-title" style={{ marginBottom: 16, fontSize: 'clamp(26px, 3vw, 38px)' }}>Experience Healing Firsthand</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              Visit Shubhay Clinic in Moshi, Pune — open daily until 10 PM for walk-ins and appointments.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/appointment" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>Book Appointment →</Link>
              <Link href="/contact" className="btn btn-ghost" style={{ fontSize: 16, padding: '16px 36px' }}>Get Directions</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}