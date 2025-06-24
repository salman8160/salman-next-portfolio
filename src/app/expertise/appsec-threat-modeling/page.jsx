'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function AppSecThreatModeling() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Application Security & Threat Modeling
        </h1>
        <p className="text-lg mb-6">
          I conduct threat modeling using STRIDE and PASTA methodologies. I also use MITRE ATT&CK mapping to identify coverage gaps and design better detection.
        </p>
        <p className="text-lg mb-6">
          I build pipelines that enforce security testing — SAST, DAST, API security testing (OWASP Top 10). I also drive Secure SDLC initiatives — with risk-based testing prioritization.
        </p>
        <p className="text-lg">
          Example: In my AppSec project, I led threat modeling for GCP Cloud Run applications, implemented SAST/DAST gates, and built a lightweight API testing framework for common OWASP risks.
        </p>
      </section>
      <Footer />
    </main>
  );
}
