import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout";

export const metadata: Metadata = {
  title: "Shubhay Clinic – Ayurved & Panchkarma | Moshi, Pune",
  description: "Authentic Ayurveda & Panchkarma treatments in Moshi, Pune. Expert Panchkarma, Abhyanga, Basti, Shirodhara & detox programs. 4.9★ Google rating. Book now: 09970836811.",
  keywords: "Ayurvedic Clinic Pune, Panchkarma Moshi, Shubhay Clinic, Ayurvedic Treatment Pune, Basti Therapy Pune",
  openGraph: {
    title: "Shubhay Clinic – Ayurved & Panchkarma",
    description: "Authentic Ayurveda & Panchkarma in Moshi, Pune. Book online.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,700;1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
