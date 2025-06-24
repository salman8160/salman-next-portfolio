'use client';

import ArchitectureGrc3D from '@/components/Architecture/ArchitectureGrc3D';

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          Terraform GitOps Pipelines Architecture 🚀
        </h1>

        {/* Architecture Diagram */}
        <div className="my-10">
          <ArchitectureGrc3D />
        </div>

        {/* Project Summary */}
        <section className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            This project implements GitOps-driven Terraform pipelines to provision and manage cloud infrastructure securely using automation, policy controls, and continuous validation.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Goal</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Achieve consistent, repeatable cloud provisioning</li>
            <li>Integrate security & compliance into IaC workflows</li>
            <li>Enable GitOps-based infrastructure management</li>
            <li>Reduce human error & improve auditability</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Architecture Overview</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Terraform IaC modules with reusable patterns</li>
            <li>OPA/Gatekeeper policies enforced pre-apply</li>
            <li>GitHub Actions to drive plan → apply pipelines</li>
            <li>PR-based approvals for infrastructure changes</li>
            <li>Drift detection and auto-remediation</li>
            <li>Terraform state managed with remote backend (GCS/AWS S3 + DynamoDB)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Tools & Technologies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Terraform, Terragrunt</li>
            <li>OPA Gatekeeper (Policy-as-Code)</li>
            <li>GitHub Actions</li>
            <li>Atlantis / Terraform Cloud (optional)</li>
            <li>Trivy, tfsec for IaC scanning</li>
            <li>GCS/S3 backend, DynamoDB (state locking)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Security Controls Implemented</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Policy checks enforced on PR merge</li>
            <li>Secrets not embedded in IaC</li>
            <li>Immutable pipelines for Terraform execution</li>
            <li>State encryption at rest</li>
            <li>Audit trail for all changes (GitOps)</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Implementation Details</h2>
          <p>
            Built modular, reusable Terraform pipelines with integrated policy gates. Enforced drift detection and auto-correct to desired state. PR-based workflows ensured all infra changes were peer-reviewed, tested, and approved before merge.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Impact</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Infrastructure drift reduced by 70%</li>
            <li>Audit compliance improved (SOC2, ISO)</li>
            <li>Cycle time for new infra reduced by 55%</li>
            <li>Eliminated manual provisioning errors</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
