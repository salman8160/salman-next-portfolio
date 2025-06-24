'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function IncidentGovernance() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Incident Response & Governance
        </h1>
        <p className="text-lg mb-6">
          I develop Incident Response playbooks aligned with NIST and ISO 27035. I also conduct tabletop exercises and prepare teams for real-world detection and response.
        </p>
        <p className="text-lg mb-6">
          For Governance, I design controls aligned to SOC2, ISO 27001, NIST CSF, and automate compliance reporting.
        </p>
        <p className="text-lg">
          Example: In my last project, I helped build SOC2-aligned GCP controls using Cloud Asset Inventory, Config Validator, and automated evidence collection for audits.
        </p>
      </section>
      <Footer />
    </main>
  );
}
