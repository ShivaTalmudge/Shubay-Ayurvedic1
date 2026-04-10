'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navBg = scrolled
    ? 'rgba(255,255,255,0.96)'
    : 'transparent';
  const navShadow = scrolled ? '0 2px 24px rgba(0,0,0,0.08)' : 'none';
  const navBorder = scrolled ? '1px solid rgba(226,232,240,0.8)' : 'none';
  const logoColor = scrolled ? '#0F172A' : '#fff';
  const subColor = scrolled ? '#2563EB' : '#93C5FD';

  return (
    <>
      <header style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '12px 24px', transition: 'all 0.35s ease',
        background: navBg, backdropFilter: scrolled ? 'blur(20px)' : 'none',
        boxShadow: navShadow, borderBottom: navBorder,
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', flexShrink: 0 }}>
            <div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 20, fontWeight: 800, color: logoColor, letterSpacing: '-0.5px', lineHeight: 1.1, transition: 'color 0.3s' }}>
                Shubhay Clinic
              </div>
              <div style={{ fontFamily: 'Poppins, sans-serif', fontSize: 10, fontWeight: 700, color: subColor, letterSpacing: '1px', textTransform: 'uppercase', transition: 'color 0.3s' }}>
                Ayurved & Panchkarma
              </div>
            </div>
          </Link>

          {/* Desktop Nav – only when NOT mobile */}
          {!isMobile && (
            <nav style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
              {/* Capsule pill */}
              <div style={{
                display: 'flex', alignItems: 'center',
                background: scrolled ? '#F1F5F9' : 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(16px)',
                border: scrolled ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.25)',
                borderRadius: 9999, padding: '5px 6px', gap: 2,
              }}>
                {navLinks.map(link => {
                  const active = pathname === link.href;
                  return (
                    <Link key={link.name} href={link.href} style={{ textDecoration: 'none' }}>
                      <span style={{
                        display: 'inline-block',
                        padding: '8px 18px',
                        borderRadius: 9999,
                        fontFamily: 'Inter, sans-serif',
                        fontSize: 14,
                        fontWeight: active ? 600 : 500,
                        color: active ? '#fff' : scrolled ? '#475569' : 'rgba(255,255,255,0.85)',
                        background: active ? '#2563EB' : 'transparent',
                        transition: 'all 0.2s ease',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}>
                        {link.name}
                      </span>
                    </Link>
                  );
                })}
              </div>

              <Link href="/appointment" style={{ textDecoration: 'none' }}>
                <span className="btn btn-primary" style={{ fontSize: 14, padding: '10px 22px' }}>
                  Book Appointment
                </span>
              </Link>
            </nav>
          )}

          {/* Mobile hamburger – only when mobile */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: scrolled ? '#F1F5F9' : 'rgba(255,255,255,0.15)',
                border: scrolled ? '1px solid #E2E8F0' : '1px solid rgba(255,255,255,0.3)',
                borderRadius: 12, padding: '10px 12px', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', gap: 5,
              }}
            >
              <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0F172A' : '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translateY(7px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0F172A' : '#fff', borderRadius: 2, opacity: menuOpen ? 0 : 1, transition: 'all 0.3s' }} />
              <span style={{ display: 'block', width: 22, height: 2, background: scrolled ? '#0F172A' : '#fff', borderRadius: 2, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none' }} />
            </button>
          )}
        </div>
      </header>

      {/* Full-screen mobile menu */}
      <AnimatePresence>
        {menuOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 999,
              background: '#0F172A', display: 'flex', flexDirection: 'column',
            }}
          >
            <div style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
              <div>
                <div style={{ fontFamily: 'Poppins', fontSize: 20, fontWeight: 800, color: '#fff' }}>Shubhay Clinic</div>
                <div style={{ fontFamily: 'Poppins', fontSize: 10, color: '#93C5FD', fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase' }}>Ayurved & Panchkarma</div>
              </div>
              <button onClick={() => setMenuOpen(false)} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', borderRadius: 10, padding: '8px 12px', cursor: 'pointer', color: '#fff', fontSize: 18, lineHeight: 1 }}>✕</button>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '32px 24px', gap: 4 }}>
              {navLinks.map((link, i) => (
                <motion.div key={link.name} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }}>
                  <Link href={link.href} style={{ textDecoration: 'none', display: 'block' }}>
                    <div style={{
                      padding: '16px 20px', borderRadius: 16,
                      color: pathname === link.href ? '#fff' : 'rgba(255,255,255,0.65)',
                      background: pathname === link.href ? 'rgba(37,99,235,0.25)' : 'transparent',
                      fontFamily: 'Poppins', fontSize: 24, fontWeight: 600,
                      borderLeft: pathname === link.href ? '3px solid #2563EB' : '3px solid transparent',
                      transition: 'all 0.2s',
                    }}>
                      {link.name}
                    </div>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div style={{ padding: '24px', borderTop: '1px solid rgba(255,255,255,0.08)', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <Link href="/appointment" style={{ textDecoration: 'none' }}>
                <div className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', fontSize: 16, padding: '16px' }}>
                  📅 Book Appointment
                </div>
              </Link>
              <a href="tel:09970836811" style={{ textDecoration: 'none' }}>
                <div style={{
                  padding: '16px', background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.12)', borderRadius: 9999,
                  color: '#fff', fontFamily: 'Poppins', fontSize: 16, fontWeight: 600, textAlign: 'center',
                }}>
                  📞 09970836811
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
