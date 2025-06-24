'use client';

import ArchitectureEks3D from '@/components/Architecture/ArchitectureEks3D';

export default function Page() {
  return (
    <main className="bg-black text-white min-h-screen px-6 py-10">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-purple-400">
          AWS EKS Secure Deployment Architecture 🚀
        </h1>

        {/* Architecture Diagram */}
        <div className="my-10">
          <ArchitectureEks3D />
        </div>

        {/* Project Summary */}
        <section className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            This project demonstrates a secure, scalable Kubernetes deployment on Amazon EKS (Elastic Kubernetes Service), implementing enterprise-grade cloud security, network segmentation, and DevSecOps best practices.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Goal</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Deploy containerized microservices on AWS EKS with Zero Trust architecture</li>
            <li>Enable continuous compliance (PCI-DSS, SOC2, ISO 27001)</li>
            <li>Integrate DevSecOps pipeline with automated security checks</li>
            <li>Achieve strong auditing, visibility, and runtime monitoring</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Architecture Overview</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Amazon VPC with isolated private subnets, NACLs, and security groups</li>
            <li>AWS EKS — hardened control plane and managed Kubernetes</li>
            <li>IAM Roles for Service Accounts (IRSA)</li>
            <li>AWS WAF & ALB for Layer 7 ingress protection</li>
            <li>Continuous threat detection with AWS GuardDuty & Inspector</li>
            <li>Secrets encryption with AWS KMS</li>
            <li>OPA Gatekeeper for policy-as-code enforcement</li>
            <li>Calico / Cilium — Kubernetes network segmentation (NetworkPolicies)</li>
            <li>Observability stack — Prometheus, Grafana, ELK</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Tools & Technologies</h2>
          <ul className="list-disc list-inside mt-2">
            <li>AWS EKS, VPC, IAM, GuardDuty, Inspector, KMS, WAF, ALB</li>
            <li>OPA Gatekeeper, Istio, Calico/Cilium</li>
            <li>Jenkins, Terraform, SonarQube, Checkmarx, Burp Suite Pro</li>
            <li>Trivy, GitLeaks, Falco</li>
            <li>Prometheus, Grafana, ELK Stack</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Security Controls Implemented</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Zero Trust service-to-service communication (mTLS with Istio)</li>
            <li>RBAC and IAM-based access control (IRSA)</li>
            <li>PodSecurityPolicies & OPA constraints</li>
            <li>Audit logging — AWS CloudTrail, EKS audit logs</li>
            <li>Runtime security with Falco</li>
            <li>Continuous scanning — SAST, DAST, container image scans</li>
          </ul>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Implementation Details</h2>
          <p>
            Full EKS cluster and networking were built with Terraform modules. Jenkins pipelines were extended with security stages (SAST, DAST, image scan, secrets scan). IAM roles and Kubernetes RBAC were designed to follow least-privilege. OPA policies and PodSecurityPolicies enforced baseline hardening. Observability stack provided dashboards and alerts.
          </p>

          <h2 className="text-3xl font-semibold text-purple-300 mt-8 mb-4">Business Impact</h2>
          <ul className="list-disc list-inside mt-2">
            <li>Reduced vulnerability window by 60%</li>
            <li>Automated compliance reporting for SOC2, ISO 27001</li>
            <li>Improved MTTR (Mean Time To Resolution) by 45%</li>
            <li>Full DevSecOps adoption — code-to-deploy security built-in</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
// This page showcases the AWS EKS secure deployment architecture with a 3D visualization and detailed project summary.