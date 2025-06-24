'use client';

import ArchitectureGcp3D from '@/components/Architecture/ArchitectureGcp3D';

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          GCP Infrastructure Hardening Architecture 🚀
        </h1>

        {/* Architecture Diagram */}
        <div className="my-10">
          <ArchitectureGcp3D />
        </div>

        {/* Project Summary */}
        <section className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            This project focuses on building a hardened Google Cloud Platform (GCP) infrastructure aligned to industry benchmarks (CIS, NIST), reducing attack surface, enforcing strong IAM, and implementing scalable security automation using Terraform and Policy as Code.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Goal</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Defense-in-depth network security</li>
            <li>IAM hardening with least privilege</li>
            <li>Secure CI/CD pipelines with policy checks</li>
            <li>Continuous monitoring and threat detection</li>
            <li>Infrastructure compliance automation</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Architecture Overview</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Custom project factory with Terraform modules</li>
            <li>Centralized Cloud Logging & Monitoring</li>
            <li>VPC Service Controls for data isolation</li>
            <li>Private Google Access for APIs & services</li>
            <li>Org policies to enforce security guardrails</li>
            <li>OPA Gatekeeper for Policy-as-Code controls</li>
            <li>Secure CI/CD pipelines (IaC + DevSecOps)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Tools & Technologies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>GCP IAM, Cloud VPC, VPC Service Controls, Cloud Armor</li>
            <li>Cloud Key Management (KMS)</li>
            <li>Cloud Logging & Monitoring (Stackdriver)</li>
            <li>Terraform (IaC)</li>
            <li>OPA Gatekeeper (Policy as Code)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Security Controls Implemented</h2>
          <ul className="list-disc list-inside mt-2">
            <li>IAM hardening with least privilege and role separation</li>
            <li>Service Control isolation of sensitive APIs</li>
            <li>Policy enforcement via OPA Gatekeeper</li>
            <li>Audit logging with retention policies</li>
            <li>Threat detection and continuous monitoring</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Implementation Details</h2>
          <p>
            The project used modular Terraform to automate GCP resource provisioning with built-in compliance guardrails. Secure CI/CD pipelines integrated policy checks and required peer review for infrastructure changes. Monitoring and alerting pipelines ensured real-time visibility into environment health.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Impact</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Reduced configuration drift across GCP environments</li>
            <li>Improved compliance reporting (CIS, NIST)</li>
            <li>Faster delivery cycles with secure automation</li>
            <li>Enhanced visibility into cloud security posture</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
