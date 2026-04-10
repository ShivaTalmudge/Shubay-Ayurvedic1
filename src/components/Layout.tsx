'use client';

import Navbar from './Navbar';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [showTop, setShowTop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#F8FAFC', paddingBottom: isMobile ? 68 : 0 }}>
      <Navbar />
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />

      {/* Floating WhatsApp – desktop & mobile */}
      <a
        href="https://wa.me/919970836811"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: isMobile ? 84 : 28,
          right: 24,
          width: 52,
          height: 52,
          background: '#25D366',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.45)',
          zIndex: 500,
          textDecoration: 'none',
          fontSize: 26,
          transition: 'transform 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        💬
      </a>

      {/* Scroll-to-top – desktop only */}
      {!isMobile && (
        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              style={{
                position: 'fixed',
                bottom: 28,
                left: 24,
                width: 44,
                height: 44,
                background: '#0F172A',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                cursor: 'pointer',
                fontSize: 20,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                zIndex: 500,
              }}
            >
              ↑
            </motion.button>
          )}
        </AnimatePresence>
      )}

      {/* Mobile sticky call bar – ONLY on mobile */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          bottom: 0, left: 0, right: 0,
          background: '#fff',
          borderTop: '1px solid #E2E8F0',
          padding: '10px 16px',
          display: 'flex',
          gap: 10,
          zIndex: 400,
          boxShadow: '0 -4px 16px rgba(0,0,0,0.06)',
        }}>
          <a href="tel:09970836811" style={{
            flex: 1, background: '#F1F5F9', borderRadius: 9999,
            padding: '12px 0', textAlign: 'center', color: '#0F172A',
            fontFamily: 'Poppins, sans-serif', fontWeight: 600,
            fontSize: 14, textDecoration: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            📞 Call Now
          </a>
          <a href="/appointment" style={{
            flex: 1, background: '#2563EB', borderRadius: 9999,
            padding: '12px 0', textAlign: 'center', color: '#fff',
            fontFamily: 'Poppins, sans-serif', fontWeight: 600,
            fontSize: 14, textDecoration: 'none',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
          }}>
            📅 Book Slot
          </a>
        </div>
      )}
    </div>
  );
}
