'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function CloudInfrastructure() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Cloud & Infrastructure Security
        </h1>
        <p className="text-lg mb-6">
          In my projects, I have designed and implemented secure cloud architectures on AWS and GCP. I use Infrastructure as Code (IaC) with Terraform and CloudFormation to provision secure environments, applying least privilege IAM policies.
        </p>
        <p className="text-lg mb-6">
          I have built Kubernetes-based architectures with strong RBAC, Network Policies, Pod Security Standards, and integrated with cloud-native services (GKE, EKS). I also use Policy as Code with tools like OPA and Terraform Sentinel.
        </p>
        <p className="text-lg">
          Example project: In my recent multi-cloud project, I designed GCP Landing Zones with full Guardrails, centralized logging (Cloud Logging + Chronicle), IAM hardening, and used Terraform modules for repeatable secure deployments.
        </p>
      </section>
      <Footer />
    </main>
  );
}
