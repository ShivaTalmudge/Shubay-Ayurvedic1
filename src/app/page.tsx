import type { Metadata } from 'next';
import HomeContent from '@/components/HomeContent';

export const metadata: Metadata = {
  title: 'Shubhay Clinic - Ayurvedic Clinic in Pune | Panchkarma & Ayurvedic Treatments',
  description: 'Experience authentic Ayurveda at Shubhay Clinic in Moshi, Pune. Expert Panchkarma, Ayurvedic treatments, massage therapy, and detox programs for holistic wellness.',
  keywords: 'Ayurvedic Clinic Pune, Panchkarma Treatment Moshi, Ayurvedic Treatments Maharashtra, Ayurvedic Massage Pune',
};

export default function Home() {
  return <HomeContent />;
}
