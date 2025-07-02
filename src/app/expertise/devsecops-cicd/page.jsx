use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DevSecOpsCICD() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          DevSecOps & CI/CD Security
        </h1>

        {/* Overview */}
        <p className="text-lg mb-6">
          I engineer CI/CD pipelines where security is embedded from code commit to production release. My methodology follows a strict <strong>“shift-left” philosophy</strong>, embedding <strong>defense-in-depth</strong> across stages: code quality, vulnerability scans, policy checks, artifact signing, and Zero Trust delivery gates. I design DevSecOps as a service model—so developers deploy securely, by default.
        </p>

        <p className="text-lg mb-6">
          My pipelines integrate continuous validation of <strong>infrastructure, application code, containers, and dependencies</strong> using policy-as-code and supply chain integrity tools. With clear <strong>separation of duties</strong> between dev, security, and infra roles, I enforce least privilege in pipeline steps, isolate secrets, and prevent tampering through cryptographic artifact signing and SLSA provenance.
        </p>

        {/* Tools & Tech */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">🔧 Tools & Technologies</h2>
        <ul className="list-disc ml-6 text-base mb-6">
          <li><strong>CI/CD Orchestration:</strong> GitHub Actions, GitLab CI, Jenkins, ArgoCD, Tekton</li>
          <li><strong>Infrastructure Scanning:</strong> Terraform Validate, Checkov, tfsec, Sentinel, Regula</li>
          <li><strong>Code & Image Security:</strong> SonarQube, Semgrep, Grype, Trivy, Clair, Syft</li>
          <li><strong>Policy & Compliance:</strong> OPA Gatekeeper, Sentinel, Conftest, InSpec</li>
          <li><strong>Supply Chain & Signing:</strong> Cosign, Sigstore, Rekor Transparency Log, SLSA Framework</li>
          <li><strong>Secrets Management:</strong> HashiCorp Vault, AWS Secrets Manager, Doppler</li>
        </ul>

        {/* Real-World Example */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">📌 Real-World Implementation</h2>
        <p className="text-lg mb-6">
          In my GCP Secure DevSecOps Pipeline project, I architected an end-to-end secure delivery flow for a containerized microservices platform:
        </p>

        <ul className="list-disc ml-6 text-base mb-6">
          <li><strong>Pre-commit:</strong> Applied Git hooks for Terraform linting, policy validation, and inline tfsec reports for developers</li>
          <li><strong>SAST:</strong> Used Semgrep for language-aware code scanning with custom rules to enforce business-specific logic flaws</li>
          <li><strong>DAST:</strong> Integrated OWASP ZAP in staging pipelines to auto-scan deployed preview apps with context-aware crawling</li>
          <li><strong>Container Security:</strong> Implemented SBOM generation using Syft, and image scanning with Trivy/Grype pre-deploy</li>
          <li><strong>Artifact Integrity:</strong> Signed all images with Cosign and stored metadata in the Rekor transparency log</li>
          <li><strong>ArgoCD + Policy Gates:</strong> Applied promotion gates via OPA to prevent unverified images from being pulled in production</li>
          <li><strong>Separation of Roles:</strong> Maintained distinct CI runner roles with ephemeral secrets via Vault and short-lived credentials</li>
        </ul>

        {/* Business Value */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">📈 Outcomes & Impact</h2>
        <ul className="list-disc ml-6 text-base mb-20">
          <li>✅ Embedded security checks early—cut vulnerability remediation time by 60%</li>
          <li>✅ Ensured full traceability and non-repudiation of every build with signed provenance</li>
          <li>✅ Enabled zero-touch, policy-enforced, secure deployments across multi-cloud workloads</li>
          <li>✅ Passed compliance checks for SOC2, SLSA Level 2, and ISO 27001 with codified evidence pipelines</li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
