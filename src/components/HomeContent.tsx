'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut' as const, delay },
});

// Verified working Unsplash image IDs
const services = [
  {
    title: 'Panchkarma Therapy',
    emoji: '🌿',
    color: '#2563EB',
    bg: '#DBEAFE',
    // Ayurvedic herbs & oils
    img: '/images/panchkarma.png',
    desc: 'Complete five-step purification therapy that eliminates deep-rooted metabolic toxins from tissues, restoring cellular health and natural immunity.',
  },
  {
    title: 'Basti Treatment',
    emoji: '💧',
    color: '#14B8A6',
    bg: '#CCFBF1',
    // Herbal treatment bowls
    img: '/images/basti.png',
    desc: 'Medicated herbal enemas targeting the colon — the primary seat of Vata. Essential for joint pain, sciatica, and chronic constipation relief.',
  },
  {
    title: 'Abhyanga Massage',
    emoji: '✋',
    color: '#F59E0B',
    bg: '#FEF3C7',
    // Massage / oil therapy
    img: '/images/abhyanga.png',
    desc: 'Full-body rhythmic massage using warm herb-infused oils customized to your dosha. Enhances circulation, promotes deep sleep, and nourishes skin.',
  },
  {
    title: 'Detox Programs',
    emoji: '🍃',
    color: '#7C3AED',
    bg: '#EDE9FE',
    // Ayurvedic herbs
    img: '/images/shirodhara.png',
    desc: 'Seasonal Virechana & Vamana cleansing programs to safely flush accumulated toxins, regulate weight, and restore digestive and immune vitality.',
  },
];

const reasons = [
  { icon: '🩺', title: 'Expert Doctor', desc: 'Dr. Sharma brings 15+ years of Panchkarma expertise. Every patient receives Nadi Pariksha (pulse diagnosis) before treatment.' },
  { icon: '🌱', title: 'Natural Treatments', desc: '100% chemical-free, authentic Ayurvedic herbs and medicated oils sourced directly from traditional suppliers.' },
  { icon: '❤️', title: 'Personalized Care', desc: 'Treatment plans are uniquely designed around your Prakriti and current health state — never a one-size-fits-all approach.' },
  { icon: '⭐', title: '4.9★ Rated', desc: '51+ verified Google patient reviews confirm our commitment to quality, hygiene, and genuine healing outcomes.' },
  { icon: '🕙', title: 'Open Until 10 PM', desc: 'Our clinic is open every day until 10 PM, including weekends, to fit your busy schedule.' },
  { icon: '🏆', title: 'Proven Results', desc: 'Hundreds of patients have found lasting relief for chronic pain, skin conditions and lifestyle disorders through our protocols.' },
];

const testimonials = [
  { name: 'Rahul S.', role: 'Moshi, Pune', text: 'Doctor does thorough examination before prescribing. Authentic Ayurvedic approach—best clinic in Pune!', rating: 5, treatment: 'Nadi Pariksha' },
  { name: 'Anjali M.', role: 'Regular Patient', text: 'Best experience! All services were great. Highly recommended for joint pain. My back pain of 3 years is completely gone.', rating: 5, treatment: 'Basti Treatment' },
  { name: 'Patil Family', role: 'Pimpri-Chinchwad', text: 'Staff is experienced and skilled. Rejuvenating and very relaxing. Doctor is very thorough with his examination.', rating: 5, treatment: 'Full Body Detox' },
];

export default function HomeContent() {
  return (
    <div>

      {/* ═══════════════════════════════════
          1. HERO
      ═══════════════════════════════════ */}
      <section style={{
        position: 'relative', minHeight: '100vh',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        overflow: 'hidden', background: '#0F172A',
      }}>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop"
          alt="Ayurvedic clinic atmosphere"
          className="animate-slow-zoom"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.35 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.95) 0%, rgba(30,58,95,0.85) 50%, rgba(15,23,42,0.9) 100%)' }} />
        {/* Glow blobs */}
        <div style={{ position: 'absolute', top: '15%', left: '-8%', width: 500, height: 500, background: 'rgba(37,99,235,0.12)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '10%', right: '-5%', width: 400, height: 400, background: 'rgba(20,184,166,0.10)', borderRadius: '50%', filter: 'blur(80px)', pointerEvents: 'none' }} />

        <div className="container" style={{ position: 'relative', zIndex: 10, textAlign: 'center', paddingTop: 120, paddingBottom: 80 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            {/* Trust badge */}
            <div style={{ marginBottom: 28, display: 'flex', justifyContent: 'center' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 10,
                background: 'rgba(255,255,255,0.08)', backdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,0.15)', borderRadius: 9999,
                padding: '8px 20px',
              }}>
                <span style={{ color: '#F59E0B', fontSize: 15 }}>★★★★★</span>
                <span style={{ color: '#fff', fontSize: 13, fontWeight: 600, fontFamily: 'Poppins' }}>4.9 Rating · 51 Reviews · Google Verified</span>
              </div>
            </div>

            <h1 style={{
              fontFamily: 'Poppins, sans-serif', fontWeight: 800,
              fontSize: 'clamp(36px, 5.5vw, 68px)', color: '#fff',
              lineHeight: 1.15, letterSpacing: '-1px', marginBottom: 20,
            }}>
              Heal Naturally with<br />
              <span style={{ background: 'linear-gradient(90deg, #60A5FA, #2DD4BF)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Authentic Ayurveda
              </span>
            </h1>

            <p style={{ fontSize: 'clamp(15px, 1.8vw, 18px)', color: 'rgba(255,255,255,0.75)', maxWidth: 580, margin: '0 auto 36px', lineHeight: 1.7, fontFamily: 'Inter' }}>
              शुभाय क्लिनिक – Expert Panchkarma, Basti, Abhyanga & Detox therapies at Moshi, Pune.
              Experience 5,000-year-old healing wisdom in a modern clinical environment.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center', marginBottom: 64 }}>
              <Link href="/appointment" className="btn btn-primary" style={{ fontSize: 16, padding: '15px 32px' }}>
                📅 Book Appointment
              </Link>
              <a href="tel:09970836811" className="btn btn-outline" style={{ fontSize: 16, padding: '15px 32px' }}>
                📞 09970836811
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              background: 'rgba(255,255,255,0.06)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 20, overflow: 'hidden',
              maxWidth: 680, margin: '0 auto',
            }}>
              {[
                { val: '5000+', label: 'Patients Healed' },
                { val: '4.9★', label: 'Google Rating' },
                { val: '15+', label: 'Years Exp.' },
                { val: '10 PM', label: 'Open Until' },
              ].map((s, i) => (
                <div key={i} style={{
                  padding: '20px 12px', textAlign: 'center',
                  borderRight: i < 3 ? '1px solid rgba(255,255,255,0.08)' : 'none',
                }}>
                  <div style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(18px,2.2vw,26px)', color: '#fff', lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontFamily: 'Inter', fontSize: 11, color: 'rgba(255,255,255,0.45)', marginTop: 6, textTransform: 'uppercase', letterSpacing: 0.5 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          2. ABOUT
      ═══════════════════════════════════ */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 440px), 1fr))',
            gap: 64, alignItems: 'center',
          }}>
            {/* Image */}
            <motion.div {...fadeUp(0)} style={{ position: 'relative' }}>
              <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: '0 24px 64px rgba(0,0,0,0.12)', aspectRatio: '4/5', background: '#E2E8F0' }}>
                <img
                  src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=900&auto=format&fit=crop"
                  alt="Ayurvedic herbs and oils"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </div>
              <div style={{ position: 'absolute', bottom: -20, right: -16, background: '#fff', borderRadius: 18, padding: '18px 24px', boxShadow: '0 12px 40px rgba(0,0,0,0.12)', border: '1px solid #E2E8F0' }}>
                <div style={{ fontFamily: 'Poppins', fontSize: 30, fontWeight: 800, color: '#2563EB', lineHeight: 1 }}>15+</div>
                <div style={{ fontFamily: 'Inter', fontSize: 12, color: '#64748B', marginTop: 4, textTransform: 'uppercase', letterSpacing: 0.5 }}>Years of Healing</div>
              </div>
              <div style={{ position: 'absolute', top: 20, left: -16, background: '#14B8A6', borderRadius: 14, padding: '10px 16px', boxShadow: '0 8px 24px rgba(20,184,166,0.35)' }}>
                <div style={{ color: '#fff', fontSize: 12, fontWeight: 700, fontFamily: 'Poppins' }}>⭐ 4.9 Rated Clinic</div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div {...fadeUp(0.15)}>
              <span className="section-label">About Shubhay Clinic</span>
              <div className="divider" />
              <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px, 3vw, 38px)', color: '#0F172A', marginBottom: 20, lineHeight: 1.25 }}>
                Pune's Trusted Center for Authentic Ayurvedic Healing
              </h2>
              <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                Welcome to <strong style={{ color: '#0F172A' }}>Shubhay Clinic – Ayurved & Panchkarma</strong> (शुभाय क्लिनिक). Located in Moshi, Pune, we are a premium center for authentic Vedic healing backed by modern clinical hygiene standards.
              </p>
              <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>
                Led by expert Dr. Sharma with 15+ years of specialized experience, we offer root-cause treatment for joint disorders, lifestyle diseases, skin conditions, and stress — guided by Nadi Pariksha before every treatment.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginBottom: 36 }}>
                {['100% Herbal Medicines', 'Certified Panchkarma Center', 'Personalized Plans', 'Daily Open Until 10 PM'].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 14, fontWeight: 500, color: '#374151' }}>
                    <span style={{ color: '#14B8A6', fontWeight: 700, flexShrink: 0 }}>✓</span> {item}
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <Link href="/about" className="btn btn-primary">Our Story →</Link>
                <a href="tel:09970836811" className="btn btn-ghost">📞 Call Us</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          3. SERVICES
      ═══════════════════════════════════ */}
      <section style={{ padding: '96px 0', background: '#F8FAFC' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label">Professional Therapies</span>
            <div className="divider" style={{ margin: '12px auto 20px' }} />
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', color: '#0F172A', marginBottom: 14 }}>
              Healing Services We Offer
            </h2>
            <p style={{ color: '#64748B', fontSize: 17, maxWidth: 560, margin: '0 auto' }}>
              Each therapy is curated using classical Ayurvedic texts, performed by expert therapists using medicated oils.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))', gap: 24 }}>
            {services.map((s, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="card" style={{ overflow: 'hidden' }}>
                {/* Image container */}
                <div style={{ height: 220, overflow: 'hidden', position: 'relative', background: s.bg }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.6s ease' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.06)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                  />
                  {/* Slight gradient at bottom */}
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to top, rgba(0,0,0,0.25), transparent)' }} />
                  {/* Emoji icon */}
                  <div style={{
                    position: 'absolute', top: 14, left: 14,
                    width: 42, height: 42, borderRadius: 12,
                    background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20,
                  }}>
                    {s.emoji}
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: 24 }}>
                  <h3 style={{ fontFamily: 'Poppins', fontSize: 18, fontWeight: 700, color: '#0F172A', marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ color: '#64748B', fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{s.desc}</p>
                  <Link href="/services" style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    color: s.color, fontFamily: 'Poppins', fontSize: 13, fontWeight: 700,
                    textDecoration: 'none',
                  }}>
                    Learn More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 48 }}>
            <Link href="/services" className="btn btn-primary">View All Treatments →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          4. WHY CHOOSE US
      ═══════════════════════════════════ */}
      <section style={{ padding: '96px 0', background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 500, height: 500, background: 'rgba(37,99,235,0.07)', borderRadius: '50%', filter: 'blur(80px)' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 400, height: 400, background: 'rgba(20,184,166,0.07)', borderRadius: '50%', filter: 'blur(80px)' }} />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ color: '#93C5FD' }}>Why Choose Us</span>
            <div className="divider" style={{ margin: '12px auto 20px' }} />
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', color: '#fff', marginBottom: 14 }}>
              The Shubhay Clinic Difference
            </h2>
            <p style={{ color: '#94A3B8', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>
              Thousands of patients choose us for authentic healing that delivers lasting results.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 20 }}>
            {reasons.map((r, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: 28, transition: 'all 0.3s', cursor: 'default' }}
                whileHover={{ background: 'rgba(37,99,235,0.12)', borderColor: 'rgba(37,99,235,0.3)', y: -4 }}
              >
                <div style={{ fontSize: 36, marginBottom: 14 }}>{r.icon}</div>
                <h4 style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 8 }}>{r.title}</h4>
                <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.7 }}>{r.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.3)} style={{ textAlign: 'center', marginTop: 56 }}>
            <div style={{
              display: 'inline-flex', flexWrap: 'wrap', gap: 24, alignItems: 'center', justifyContent: 'center',
              background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: 24, padding: '28px 40px',
            }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 700, fontSize: 20, marginBottom: 4 }}>Ready to Start Healing?</div>
                <div style={{ color: '#94A3B8', fontSize: 15 }}>Call us or book your appointment online today.</div>
              </div>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <Link href="/appointment" className="btn btn-primary">Book Now</Link>
                <a href="tel:09970836811" className="btn btn-outline">09970836811</a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          5. TESTIMONIALS
      ═══════════════════════════════════ */}
      <section style={{ padding: '96px 0', background: '#fff' }}>
        <div className="container">
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 52 }}>
            <span className="section-label">Patient Reviews</span>
            <div className="divider" style={{ margin: '12px auto 20px' }} />
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px,3vw,38px)', color: '#0F172A', marginBottom: 14 }}>
              Real Voices, Real Healing
            </h2>
            <p style={{ color: '#64748B', fontSize: 17, maxWidth: 500, margin: '0 auto' }}>
              Over 51 patients have shared their transformation stories on Google.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: 24 }}>
            {testimonials.map((t, i) => (
              <motion.div key={i} {...fadeUp(i * 0.1)} className="card" style={{ padding: 28 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <span style={{ color: '#F59E0B', fontSize: 18 }}>{'★'.repeat(t.rating)}</span>
                  <span className="badge badge-primary" style={{ fontSize: 11 }}>{t.treatment}</span>
                </div>
                <p style={{ fontStyle: 'italic', color: '#374151', fontSize: 15, lineHeight: 1.75, marginBottom: 20, paddingLeft: 16, borderLeft: '3px solid #2563EB' }}>
                  "{t.text}"
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, borderTop: '1px solid #F1F5F9', paddingTop: 18 }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'linear-gradient(135deg, #2563EB, #14B8A6)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 800, fontSize: 18, fontFamily: 'Poppins', flexShrink: 0 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ color: '#0F172A', fontWeight: 700, fontFamily: 'Poppins', fontSize: 14 }}>{t.name}</div>
                    <div style={{ color: '#94A3B8', fontSize: 12 }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: 36 }}>
            <Link href="/testimonials" className="btn btn-ghost">Read All Reviews →</Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          6. CTA BANNER
      ═══════════════════════════════════ */}
      <section style={{ position: 'relative', padding: '80px 0', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&w=2000&auto=format&fit=crop"
          alt="Ayurvedic wellness"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.15 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #1D4ED8 0%, #0D9488 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px,4vw,48px)', color: '#fff', marginBottom: 14, lineHeight: 1.2 }}>
              Your Journey to Complete Health Starts Today
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 18, marginBottom: 36, maxWidth: 520, margin: '0 auto 36px' }}>
              Open daily until 10 PM. Visit Shubhay Clinic in Moshi, Pune.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 14, justifyContent: 'center' }}>
              <Link href="/appointment" className="btn" style={{ background: '#fff', color: '#1D4ED8', fontSize: 16, padding: '15px 32px', fontWeight: 700 }}>
                📅 Book Appointment
              </Link>
              <a href="https://wa.me/919970836811" target="_blank" className="btn btn-outline" style={{ fontSize: 16, padding: '15px 32px' }}>
                💬 WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════
          7. LOCATION
      ═══════════════════════════════════ */}
      <section style={{ padding: '96px 0', background: '#F8FAFC' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
            gap: 48, alignItems: 'center',
          }}>
            <motion.div {...fadeUp(0)}>
              <span className="section-label">Find Us</span>
              <div className="divider" />
              <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(26px,3vw,36px)', color: '#0F172A', marginBottom: 28, lineHeight: 1.3 }}>
                Visit Shubhay Clinic
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {[
                  { icon: '📍', title: 'Address', val: 'Gajanan Society, Sant Nagar, Sector 4, Moshi, Pune, Maharashtra 411070', link: 'https://maps.google.com/?q=Gajanan+Society,+Sant+Nagar,+Sector+4,+Moshi,+Pune' },
                  { icon: '📞', title: 'Phone', val: '09970836811', link: 'tel:09970836811' },
                  { icon: '🕙', title: 'Hours', val: 'Open Daily · Closes 10:00 PM', link: null },
                  { icon: '💬', title: 'WhatsApp', val: 'Chat with our team instantly', link: 'https://wa.me/919970836811' },
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 46, height: 46, borderRadius: 13, background: '#EFF6FF', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20, flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.8, marginBottom: 3 }}>{item.title}</div>
                      {item.link
                        ? <a href={item.link} target={item.link.startsWith('http') ? '_blank' : undefined} style={{ color: '#0F172A', fontSize: 15, fontWeight: 500, textDecoration: 'none' }}>{item.val}</a>
                        : <div style={{ color: '#0F172A', fontSize: 15, fontWeight: 500 }}>{item.val}</div>
                      }
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div style={{ borderRadius: 24, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.10)', border: '1px solid #E2E8F0', background: '#E2E8F0', height: 380 }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6!2d73.8504!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e760ea67c5%3A0x0!2sMoshi%2C+Pune%2C+Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                  style={{ width: '100%', height: '100%', border: 'none' }}
                  loading="lazy"
                  title="Shubhay Clinic Location"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div style={{ textAlign: 'center', marginTop: 16 }}>
                <a href="https://maps.google.com/?q=Gajanan+Society,+Sant+Nagar,+Sector+4,+Moshi,+Pune" target="_blank" className="btn btn-primary" style={{ fontSize: 14 }}>
                  🗺️ Open in Google Maps
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
