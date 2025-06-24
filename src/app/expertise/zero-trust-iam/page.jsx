'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ZeroTrustIAM() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Zero Trust & IAM
        </h1>
        <p className="text-lg mb-6">
          I design Zero Trust architectures — with strong identity, device, and workload validation. I implement IAM hardening, just-in-time access, and privileged access controls (PAM).
        </p>
        <p className="text-lg mb-6">
          I also architect Identity Federation and SSO across cloud platforms — GCP, AWS, Azure — and Kubernetes RBAC aligned to enterprise roles.
        </p>
        <p className="text-lg">
          Example: In one Zero Trust project, I implemented BeyondCorp-style access for GCP services, integrated SSO with AzureAD, and automated IAM reviews with GCP Recommender APIs.
        </p>
      </section>
      <Footer />
    </main>
  );
}
