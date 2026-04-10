'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer style={{ background: '#0F172A', color: '#fff', paddingTop: 80 }}>
      {/* Main grid */}
      <div className="container" style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 48, paddingBottom: 64, borderBottom: '1px solid rgba(255,255,255,0.08)' }}>

          {/* Brand */}
          <div>
            <div style={{ marginBottom: 20 }}>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 22, fontWeight: 800, color: '#fff', lineHeight: 1 }}>Shubhay Clinic</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 11, color: '#93C5FD', fontWeight: 600, letterSpacing: 1, marginTop: 4 }}>AYURVED & PANCHKARMA</div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 13, color: '#64748B', marginTop: 6 }}>शुभाय क्लिनिक - आयुर्वेद & पंचकर्म</div>
            </div>
            <p style={{ color: '#94A3B8', fontSize: 14, lineHeight: 1.8, marginBottom: 24, maxWidth: 280 }}>
              Authentic Ayurvedic healing and Panchkarma therapies in Moshi, Pune. Restoring health naturally since 2020.
            </p>
            {/* Stars */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
              <span style={{ color: '#F59E0B', fontSize: 18 }}>★★★★★</span>
              <span style={{ color: '#fff', fontWeight: 700, fontSize: 15 }}>4.9</span>
              <span style={{ color: '#64748B', fontSize: 13 }}>/ 51 reviews</span>
            </div>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {['📘', '📸', '🐦'].map((icon, i) => (
                <a key={i} href="#" style={{
                  width: 36, height: 36, background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 16, textDecoration: 'none', transition: 'all 0.2s',
                }}>
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>Quick Links</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                { name: 'Home', href: '/' },
                { name: 'About Us', href: '/about' },
                { name: 'Our Services', href: '/services' },
                { name: 'Testimonials', href: '/testimonials' },
                { name: 'Book Appointment', href: '/appointment' },
                { name: 'Contact', href: '/contact' },
              ].map(link => (
                <Link key={link.name} href={link.href} style={{ color: '#94A3B8', fontSize: 14, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 8, transition: 'color 0.2s' }}>
                  <span style={{ color: '#2563EB', fontSize: 10 }}>▶</span> {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>Treatments</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {[
                'Panchkarma Therapy',
                'Basti Treatment',
                'Abhyanga Massage',
                'Shirodhara',
                'Nasya Therapy',
                'Detox Programs',
                'Janu Basti',
              ].map(s => (
                <span key={s} style={{ color: '#94A3B8', fontSize: 14, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <span style={{ color: '#14B8A6', fontSize: 10 }}>●</span> {s}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: 'Poppins', fontSize: 13, fontWeight: 700, color: '#fff', letterSpacing: 1.5, textTransform: 'uppercase', marginBottom: 20 }}>Contact Info</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div style={{ display: 'flex', gap: 12 }}>
                <span style={{ fontSize: 20, flexShrink: 0, marginTop: 2 }}>📍</span>
                <div>
                  <div style={{ color: '#CBD5E1', fontSize: 14, lineHeight: 1.6 }}>Gajanan Society, Sant Nagar, Sector 4, Moshi, Pune, Maharashtra 411070</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>📞</span>
                <a href="tel:09970836811" style={{ color: '#93C5FD', fontSize: 15, fontWeight: 600, textDecoration: 'none' }}>09970836811</a>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>🕙</span>
                <div style={{ color: '#CBD5E1', fontSize: 14 }}>Open Daily · Closes <strong style={{ color: '#14B8A6' }}>10:00 PM</strong></div>
              </div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                <span style={{ fontSize: 20 }}>💬</span>
                <a href="https://wa.me/919970836811" target="_blank" style={{ color: '#4ADE80', fontSize: 14, fontWeight: 500, textDecoration: 'none' }}>WhatsApp Us Now</a>
              </div>
            </div>

            {/* Map CTA */}
            <a
              href="https://maps.google.com/?q=Gajanan+Society,+Sant+Nagar,+Sector+Number+4,+Moshi,+Pune"
              target="_blank"
              style={{
                display: 'flex', alignItems: 'center', gap: 8, marginTop: 24,
                background: 'rgba(37,99,235,0.15)', border: '1px solid rgba(37,99,235,0.3)',
                borderRadius: 9999, padding: '10px 18px', textDecoration: 'none',
                color: '#93C5FD', fontSize: 13, fontWeight: 600, width: 'fit-content',
              }}
            >
              🗺️ Get Directions
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div style={{ padding: '24px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <p style={{ color: '#475569', fontSize: 13, margin: 0 }}>
            © {new Date().getFullYear()} Shubhay Clinic – Ayurved & Panchkarma. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 24 }}>
            {['Privacy Policy', 'Terms of Use'].map(t => (
              <a key={t} href="#" style={{ color: '#475569', fontSize: 13, textDecoration: 'none' }}>{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
