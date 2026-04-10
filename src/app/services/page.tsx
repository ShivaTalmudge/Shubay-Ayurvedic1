'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.65, ease: 'easeOut', delay },
});

const services = [
  {
    id: 1,
    title: 'Panchkarma Therapy',
    subtitle: 'Complete 5-Step Purification',
    emoji: '🌿',
    color: '#2563EB',
    bgColor: '#EFF6FF',
    img: '/images/panchkarma.png',
    desc: 'Panchkarma is the crown jewel of Ayurvedic healing — a comprehensive five-step detoxification and rejuvenation protocol. It systematically eliminates accumulated metabolic toxins (Ama) from cells, tissues, and organs.',
    benefits: ['Full body detoxification', 'Stress & anxiety relief', 'Restores metabolic fire (Agni)', 'Reverses early aging', 'Boosts natural immunity', 'Resolves chronic fatigue'],
    duration: '7–21 Days',
    bestFor: 'Chronic disorders & overall wellness',
  },
  {
    id: 2,
    title: 'Basti Treatment',
    subtitle: "Mother of All Panchkarma",
    emoji: '💧',
    color: '#14B8A6',
    bgColor: '#F0FDFA',
    img: '/images/basti.png',
    desc: 'Basti is considered the most powerful treatment in Ayurveda. Medicated herbal enemas target the colon—the primary seat of Vata dosha—providing relief for neurological, bone, and digestive conditions.',
    benefits: ['Sciatica & back pain relief', 'Cures chronic constipation', 'Balances Vata dosha', 'Strengthens joints & bones', 'Neurological rejuvenation', 'Restores gut microbiome'],
    duration: '45 Min/Session',
    bestFor: 'Joint pain, digestive & neurological issues',
  },
  {
    id: 3,
    title: 'Abhyanga Massage',
    subtitle: 'Full Body Herbal Oil Massage',
    emoji: '✋',
    color: '#F59E0B',
    bgColor: '#FFFBEB',
    img: '/images/abhyanga.png',
    desc: 'A deeply nourishing full-body rhythmic massage using warm, herb-infused oils customized to your Dosha constitution. Abhyanga improves lymphatic drainage, circulation, and skin health at a cellular level.',
    benefits: ['Improves blood circulation', 'Induces deep sleep', 'Reduces physical fatigue', 'Softens & nourishes skin', 'Calms nervous system', 'Relieves muscle tension'],
    duration: '60 Minutes',
    bestFor: 'Stress, body rejuvenation & skin care',
  },
  {
    id: 4,
    title: 'Shirodhara',
    subtitle: 'Continuous Oil Pour on Forehead',
    emoji: '🧘',
    color: '#7C3AED',
    bgColor: '#F5F3FF',
    img: '/images/shirodhara.png',
    desc: 'Warm medicated oil is rhythmically poured on the forehead (Ajna chakra) in a continuous stream. This exclusive therapy activates the parasympathetic nervous system, calming anxiety, insomnia, and mental stress.',
    benefits: ['Deep mental relaxation', 'Treats chronic insomnia', 'Reduces migraines', 'Improves memory & focus', 'Nourishes hair & scalp', 'Balances Vata & Pitta'],
    duration: '45–60 Minutes',
    bestFor: 'Mental health, anxiety & stress relief',
  },
  {
    id: 5,
    title: 'Nasya Therapy',
    subtitle: 'Nasal Cleansing & Rejuvenation',
    emoji: '👃',
    color: '#DB2777',
    bgColor: '#FDF2F8',
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=900&auto=format',
    desc: 'Medicated oils or herbal preparations administered through the nasal passage to cleanse and rejuvenate the head, neck, and sensory organs. Highly effective for sinusitis, headaches, and hair loss.',
    benefits: ['Sinus congestion relief', 'Treats chronic headaches', 'Improves vision & hearing', 'Hair fall reduction', 'Mental clarity', 'Removes facial toxins'],
    duration: '30 Minutes',
    bestFor: 'Headaches, sinusitis & hair issues',
  },
  {
    id: 6,
    title: 'Detox Programs',
    subtitle: 'Seasonal Internal Cleansing',
    emoji: '🍃',
    color: '#16A34A',
    bgColor: '#F0FDF4',
    img: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?q=80&w=900&auto=format',
    desc: 'Customized seasonal detoxification protocols including Virechana (purgation) and Vamana (emesis) therapy to safely remove deep-seated toxins, regulate weight, and restore digestive and immune health.',
    benefits: ['Weight management support', 'Enhanced energy levels', 'Clears skin conditions', 'Boosts natural immunity', 'Resets digestive fire', 'Hormone balance support'],
    duration: '3–15 Days',
    bestFor: 'General wellness, immunity & weight',
  },
];

const specialProcedures = [
  { name: 'Janu Basti', emoji: '🦴', desc: 'Knee joint healing with medicated oils' },
  { name: 'Kati Basti', emoji: '💪', desc: 'Lower back pain & lumbar treatment' },
  { name: 'Karna Purana', emoji: '👂', desc: 'Ear canal cleansing & nourishment' },
  { name: 'Akshi Tarpana', emoji: '👁️', desc: 'Nourishing eye care therapy' },
  { name: 'Swedana', emoji: '♨️', desc: 'Medicated herbal steam therapy' },
  { name: 'Lepana', emoji: '🌾', desc: 'Herbal paste application for joints' },
];

export default function Services() {
  return (
    <div>
      {/* HERO */}
      <section style={{ position: 'relative', paddingTop: 160, paddingBottom: 100, background: '#0F172A', overflow: 'hidden' }}>
        <img
          src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format"
          alt="Ayurvedic Services"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: 0.18 }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.97) 0%, rgba(20,184,166,0.2) 100%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <motion.div {...fadeUp(0)}>
            <div className="badge badge-secondary" style={{ display: 'inline-flex', marginBottom: 20 }}>Clinical Excellence</div>
            <h1 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(36px, 5vw, 60px)', color: '#fff', marginBottom: 20, lineHeight: 1.15 }}>
              Our Healing Services
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 18, maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
              Authentic Ayurvedic treatments standardized for modern clinical excellence. Each therapy performed by expert practitioners with premium medicated oils.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="section" style={{ background: '#F8FAFC' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 80 }}>
            {services.map((s, i) => (
              <motion.div key={s.id} {...fadeUp(0.05 * i)}
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
                  gap: 48,
                  alignItems: 'center',
                  flexDirection: i % 2 === 0 ? 'row' : 'row-reverse',
                }}
              >
                {/* Image */}
                <div style={{ order: i % 2 === 0 ? 0 : 1, position: 'relative' }}>
                  <div style={{ borderRadius: 28, overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.12)', aspectRatio: '16/10', background: s.bgColor }}>
                    <img
                      src={s.img}
                      alt={s.title}
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s ease' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.04)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                    />
                  </div>
                  {/* Icon badge */}
                  <div style={{
                    position: 'absolute', top: -20, left: i % 2 === 0 ? -20 : 'auto', right: i % 2 === 0 ? 'auto' : -20,
                    width: 60, height: 60, borderRadius: 18, background: '#fff',
                    boxShadow: '0 8px 24px rgba(0,0,0,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 28,
                  }}>
                    {s.emoji}
                  </div>
                </div>

                {/* Content */}
                <div style={{ order: i % 2 === 0 ? 1 : 0 }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: s.bgColor, color: s.color, borderRadius: 9999, padding: '5px 14px', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 16 }}>
                    {s.emoji} {s.subtitle}
                  </div>
                  <h2 style={{ fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(24px,3vw,32px)', color: '#0F172A', marginBottom: 16, lineHeight: 1.25 }}>{s.title}</h2>
                  <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.8, marginBottom: 28 }}>{s.desc}</p>

                  {/* Benefits grid */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginBottom: 28 }}>
                    {s.benefits.map((b, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#374151', fontSize: 14, fontWeight: 500 }}>
                        <span style={{ color: s.color, fontWeight: 700, flexShrink: 0 }}>✓</span> {b}
                      </div>
                    ))}
                  </div>

                  {/* Meta */}
                  <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 32, padding: '16px 20px', background: '#F1F5F9', borderRadius: 14 }}>
                    <div>
                      <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Duration</div>
                      <div style={{ color: '#0F172A', fontWeight: 600, fontSize: 15 }}>{s.duration}</div>
                    </div>
                    <div style={{ width: 1, background: '#E2E8F0' }} />
                    <div>
                      <div style={{ fontSize: 11, color: '#94A3B8', fontWeight: 700, textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 4 }}>Best For</div>
                      <div style={{ color: '#0F172A', fontWeight: 600, fontSize: 15 }}>{s.bestFor}</div>
                    </div>
                  </div>

                  <Link href="/appointment" className="btn btn-primary">Book This Treatment →</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SPECIALIZED PROCEDURES */}
      <section className="section" style={{ background: '#0F172A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, background: 'rgba(37,99,235,0.08)', borderRadius: '50%', filter: 'blur(60px)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div {...fadeUp(0)} style={{ textAlign: 'center', marginBottom: 56 }}>
            <span className="section-label" style={{ color: '#93C5FD' }}>Additional Treatments</span>
            <div className="divider" style={{ margin: '12px auto 20px', background: 'linear-gradient(90deg, #2563EB, #14B8A6)' }} />
            <h2 style={{ color: '#fff', fontFamily: 'Poppins', fontWeight: 800, fontSize: 'clamp(24px,3vw,36px)' }}>Specialized Clinical Procedures</h2>
            <p style={{ color: '#94A3B8', fontSize: 16, maxWidth: 520, margin: '16px auto 0' }}>Targeted therapies for specific conditions performed with traditional precision.</p>
          </motion.div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 20 }}>
            {specialProcedures.map((p, i) => (
              <motion.div key={i} {...fadeUp(i * 0.08)}
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 20, padding: '28px 24px', textAlign: 'center', cursor: 'default', transition: 'all 0.3s' }}
                whileHover={{ background: 'rgba(37,99,235,0.15)', borderColor: 'rgba(37,99,235,0.4)', y: -4 }}
              >
                <div style={{ fontSize: 40, marginBottom: 12 }}>{p.emoji}</div>
                <div style={{ fontFamily: 'Poppins', fontWeight: 700, fontSize: 17, color: '#fff', marginBottom: 8 }}>{p.name}</div>
                <div style={{ color: '#94A3B8', fontSize: 13, lineHeight: 1.5 }}>{p.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: '#fff', textAlign: 'center' }}>
        <div className="container">
          <motion.div {...fadeUp(0)}>
            <h2 className="section-title" style={{ marginBottom: 16 }}>Ready to Begin Your Treatment?</h2>
            <p className="section-subtitle" style={{ margin: '0 auto 40px' }}>
              Contact Shubhay Clinic at Moshi, Pune — open daily up to 10 PM. Walk-ins welcome.
            </p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/appointment" className="btn btn-primary" style={{ fontSize: 16, padding: '16px 36px' }}>📅 Book Appointment</Link>
              <a href="tel:09970836811" className="btn btn-ghost" style={{ fontSize: 16, padding: '16px 36px' }}>📞 09970836811</a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}