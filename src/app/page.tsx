'use client';

import Hero3D from '@/components/Hero3D';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white px-6">
      <Hero3D />

      {/* Tools & Expertise Section */}
      <section className="w-full max-w-5xl py-16 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-10">Tools & Expertise</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          <Link href="/tools/aws" className="group">
            <div className="p-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-center font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              AWS Cloud Architecture
            </div>
          </Link>
          <Link href="/tools/gcp" className="group">
            <div className="p-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-center font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              GCP Cloud Architecture
            </div>
          </Link>
          <Link href="/tools/cicd" className="group">
            <div className="p-6 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-center font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              CI/CD Pipeline Security
            </div>
          </Link>
          <Link href="/tools/security" className="group">
            <div className="p-6 rounded-xl bg-gradient-to-r from-red-500 to-orange-500 text-center font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Cloud Security & DevSecOps
            </div>
          </Link>
          <Link href="/tools/kubernetes" className="group">
            <div className="p-6 rounded-xl bg-gradient-to-r from-yellow-500 to-amber-500 text-center font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Kubernetes & Microservices
            </div>
          </Link>
          <Link href="/tools/threat-modeling" className="group">
            <div className="p-6 rounded-xl bg-gradient-to-r from-indigo-500 to-violet-500 text-center font-semibold text-lg hover:scale-105 transition-all duration-300 shadow-xl">
              Threat Modeling & Risk Analysis
            </div>
          </Link>
        </div>
      </section>
    </main>
  );
}
