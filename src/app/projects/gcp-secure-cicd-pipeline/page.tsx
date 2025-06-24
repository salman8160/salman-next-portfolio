'use client';

import ArchitectureCiCd3D from '@/components/Architecture/ArchitectureCiCd3D';

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          GCP Secure CI/CD Pipeline Architecture 🚀
        </h1>

        {/* Architecture Diagram */}
        <div className="my-10">
          <ArchitectureCiCd3D />
        </div>

        {/* Project Summary */}
        <section className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            This project builds a secure CI/CD pipeline for GCP, integrating DevSecOps best practices and continuous compliance checks into infrastructure and application delivery.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Goal</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Integrate security into CI/CD workflows (shift-left)</li>
            <li>Automate security gates in pipeline stages</li>
            <li>Ensure compliance with org security standards</li>
            <li>Enable faster & secure product delivery</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Architecture Overview</h2>
          <ul className="list-disc list-inside mt-2">
            <li>GitHub Actions triggered CI/CD workflows</li>
            <li>Container builds with Cloud Build & Artifact Registry</li>
            <li>Policy-as-Code gates using OPA Gatekeeper</li>
            <li>SAST, DAST, and IaC scanning integrated in CI</li>
            <li>Signed artifact promotion for trusted releases</li>
            <li>Deployment to GKE clusters with verification</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Tools & Technologies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>GitHub Actions, Google Cloud Build</li>
            <li>Artifact Registry, GKE (Google Kubernetes Engine)</li>
            <li>OPA Gatekeeper, Terraform</li>
            <li>Checkmarx, SonarQube (SAST)</li>
            <li>OWASP ZAP / Burp Suite Pro (DAST)</li>
            <li>Trivy, GitLeaks</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Security Controls Implemented</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Signed artifacts and trusted pipeline stages</li>
            <li>Policy checks at each pipeline gate</li>
            <li>Static and dynamic security testing in CI</li>
            <li>Secrets scanning in code repos</li>
            <li>Runtime validation after deploy</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Implementation Details</h2>
          <p>
            Implemented reusable GitHub Actions workflows with built-in security gates and compliance checks. Terraform modules provisioned GCP infra with policy guardrails. Pipeline generated signed artifacts and enforced progressive deployment with security validation at each stage.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Impact</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Improved delivery speed (lead time reduced by 50%)</li>
            <li>Shift-left security adoption across dev teams</li>
            <li>Increased release confidence & auditability</li>
            <li>Reduced manual security review cycles</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
