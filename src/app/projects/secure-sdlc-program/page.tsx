'use client';

import ArchitectureSdlc3D from '@/components/Architecture/ArchitectureSdlc3D';

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          Secure SDLC Program Architecture 🔐
        </h1>

        {/* Architecture Diagram */}
        <div className="my-10">
          <ArchitectureSdlc3D />
        </div>

        {/* Project Summary */}
        <section className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            This project defines a full lifecycle Secure Software Development Lifecycle (Secure SDLC) framework with embedded security testing, compliance, and automation at every phase of development.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Goal</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Embed security into each SDLC phase — Dev → Deploy → Operate</li>
            <li>Reduce vulnerabilities in production apps</li>
            <li>Align with industry standards (NIST, OWASP SAMM, ISO 27034)</li>
            <li>Automate SDLC security controls and reporting</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Architecture Overview</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Threat modeling integrated in design reviews</li>
            <li>Secure coding guidelines + developer training</li>
            <li>SAST and SCA integrated into CI pipelines</li>
            <li>DAST and API testing in staging envs</li>
            <li>RASP in production</li>
            <li>Automated vulnerability management</li>
            <li>Continuous security monitoring (SIEM)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Tools & Technologies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>ThreatModeler, Microsoft Threat Modeling Tool</li>
            <li>Checkmarx, SonarQube (SAST)</li>
            <li>Snyk, WhiteSource (SCA)</li>
            <li>OWASP ZAP, Burp Suite Pro (DAST)</li>
            <li>Contrast Security (RASP)</li>
            <li>Jenkins, GitHub Actions (pipelines)</li>
            <li>Splunk, ELK Stack (SIEM)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Security Controls Implemented</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Shift-left security at every SDLC phase</li>
            <li>Policy enforcement gates in CI/CD</li>
            <li>Secure coding training + compliance tracking</li>
            <li>Automated security metrics dashboards</li>
            <li>Continuous monitoring and alerting</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Implementation Details</h2>
          <p>
            Integrated full SDLC security framework across multiple product teams. Created reusable CI/CD pipeline templates with embedded testing. Automated security reporting for leadership and compliance auditors. Established clear developer security champions program.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Impact</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Reduced critical vulns in production by 75%</li>
            <li>Passed regulatory audits with zero security findings</li>
            <li>Developers 3x more security-aware</li>
            <li>Improved time to remediate vulns by 50%</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
