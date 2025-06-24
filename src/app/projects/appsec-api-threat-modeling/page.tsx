'use client';

import ArchitectureAppSec3D from '@/components/Architecture/ArchitectureAppSec3D';

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          AppSec & API Threat Modeling Architecture 🚀
        </h1>

        {/* Architecture Diagram */}
        <div className="my-10">
          <ArchitectureAppSec3D />
        </div>

        {/* Project Summary */}
        <section className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            This project implements systematic threat modeling and security testing across microservices and APIs, integrated into CI/CD pipelines for early defect detection and secure-by-design software delivery.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Goal</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Shift-left security by embedding threat modeling early</li>
            <li>Automate API security testing in pipelines</li>
            <li>Improve security posture of microservices</li>
            <li>Reduce vulnerabilities in production</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Architecture Overview</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Threat modeling using OWASP Threat Dragon & Microsoft SDL tools</li>
            <li>OpenAPI definitions analyzed for attack surface</li>
            <li>DAST scanners integrated in pipeline (OWASP ZAP / Burp Suite Pro)</li>
            <li>SAST/IAST tools run on build artifacts</li>
            <li>Findings tracked in centralized defect mgmt</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Tools & Technologies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>OWASP Threat Dragon, Microsoft Threat Modeling Tool</li>
            <li>OWASP ZAP, Burp Suite Pro</li>
            <li>SonarQube, Checkmarx</li>
            <li>Postman / Newman for API testing</li>
            <li>GitHub Actions / Jenkins pipelines</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Security Controls Implemented</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Threat modeling conducted for critical APIs & services</li>
            <li>DAST scans in CI/CD pipelines</li>
            <li>SAST + API security testing</li>
            <li>Automated ticket creation for security defects</li>
            <li>Coverage tracked for PCI DSS, OWASP Top 10, API Security Top 10</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Implementation Details</h2>
          <p>
            Threat models updated and stored in version control. On code commit:
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>Pipeline triggers SAST, DAST & API security tests</li>
            <li>Results uploaded to central dashboards</li>
            <li>Security SLAs enforced via pipeline gates</li>
            <li>Dev teams trained on threat modeling and secure API design</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Impact</h2>
          <ul className="list-disc list-inside mt-2">
            <li>40% reduction in API-related vulnerabilities in production</li>
            <li>Early-stage detection of design flaws</li>
            <li>Improved API trust posture & risk mgmt</li>
            <li>Continuous compliance with industry standards</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
