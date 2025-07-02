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

        {/* Overview */}
        <p className="text-lg mb-6">
          I specialize in designing, implementing, and hardening cloud-native infrastructure with a focus on security, scalability, and automation. My work spans multi-cloud environments (AWS & GCP), where I apply principles like <strong>defense-in-depth</strong>, <strong>least privilege</strong>, and <strong>separation of duties</strong> through infrastructure as code (IaC), automated guardrails, and policy-driven enforcement.
        </p>

        <p className="text-lg mb-6">
          My strategy revolves around building platforms that are <strong>secure by design</strong> — embedding controls at every layer: identity, network, workload, data, and runtime. I ensure that misconfigurations are minimized, blast radius is controlled, and human access is tightly governed using PoLP and Zero Trust principles.
        </p>

        {/* Tools & Tech */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">🔧 Tools & Technologies</h2>
        <ul className="list-disc ml-6 text-base mb-6">
          <li><strong>Cloud:</strong> AWS (VPC, EKS, IAM, GuardDuty, KMS, Security Hub), GCP (GKE, IAM, Cloud Logging, SCC, Chronicle)</li>
          <li><strong>IaC:</strong> Terraform, CloudFormation, Sentinel Policies, OPA Gatekeeper</li>
          <li><strong>Security Controls:</strong> IAM Conditions, SCPs, Organizational Policies, RBAC, PodSecurityStandards</li>
          <li><strong>Monitoring & Observability:</strong> CloudTrail, CloudWatch, Prometheus, ELK Stack, Chronicle SIEM</li>
        </ul>

        {/* Real World Project */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">📌 Real-World Implementation</h2>
        <p className="text-lg mb-6">
          In a recent enterprise-grade engagement, I led the secure infrastructure design for a microservices-based application on AWS EKS. The goal was to build a <strong>resilient Zero Trust architecture</strong> that passed compliance audits (SOC2, ISO 27001) and supported rapid CI/CD releases without compromising posture.
        </p>

        <ul className="list-disc ml-6 text-base mb-6">
          <li><strong>Network Segmentation:</strong> VPCs with dedicated private subnets, isolated NAT gateways, and granular route tables</li>
          <li><strong>IAM Enforcement:</strong> Scoped IAM policies using Terraform, IRSA for Kubernetes, and session-bound temporary credentials</li>
          <li><strong>Runtime Hardening:</strong> PodSecurityPolicies (PSP), OPA Gatekeeper admission controls, and namespace-level RBAC</li>
          <li><strong>Policy as Code:</strong> Terraform Sentinel for mandatory tagging, encryption, and logging checks across environments</li>
          <li><strong>Centralized Logging:</strong> Unified GKE/EKS logging via CloudWatch + Chronicle SIEM, mapped to MITRE ATT&CK</li>
          <li><strong>Separation of Duties:</strong> Workload access roles separated from infrastructure roles with strict IAM boundary policies</li>
        </ul>

        {/* Technical Strategy */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">🧠 Strategic Approach</h2>
        <p className="text-lg mb-6">
          My approach to cloud security is <strong>proactive and codified</strong>. I believe security must be built into the CI/CD lifecycle—not retrofitted. This includes:
        </p>
        <ul className="list-disc ml-6 text-base mb-6">
          <li>Shifting left through pre-deployment policy validation and unit testing of Terraform plans</li>
          <li>Using OPA and Sentinel to enforce compliance gates before merge</li>
          <li>Implementing runtime protection (Falco, auditd) post-deployment for defense-in-depth</li>
          <li>Auto-remediating drift and misconfig using tools like AWS Config Rules and GCP Policy Controller</li>
        </ul>

        {/* Business Value */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">📈 Outcomes & Impact</h2>
        <ul className="list-disc ml-6 text-base mb-6">
          <li>✅ Reduced misconfiguration risk by 70% across environments via codified controls</li>
          <li>✅ Cut incident response time by 45% using centralized logging + threat detection</li>
          <li>✅ Delivered compliant infrastructure for ISO 27001, SOC2, GDPR with audit-ready controls</li>
          <li>✅ Accelerated developer velocity by enabling secure, self-service infrastructure pipelines</li>
        </ul>

        {/* Architecture Animation Replacing 3D Sphere */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">🧬 Visual Architecture</h2>
        <p className="text-lg mb-6">
          This animated diagram shows how identity, network, runtime, and observability controls are layered in a real-world secure EKS deployment using Terraform, OPA, IRSA, and SIEM tools.
        </p>
        <div className="w-full rounded-xl overflow-hidden shadow-xl border border-purple-800 mb-10">
          <video
            src="/assets/videos/cloud-infra-architecture.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Links */}
        <h2 className="text-2xl font-semibold mt-10 mb-2 text-purple-400">🔍 Related Projects</h2>
        <ul className="list-disc ml-6 text-base text-blue-400 underline mb-20">
          <li>
            <a href="/projects/aws-eks-secure-deployment">AWS EKS Secure Deployment →</a>
          </li>
          <li>
            <a href="/projects/gcp-infrastructure-hardening">GCP Infrastructure Hardening →</a>
          </li>
        </ul>
      </section>
      <Footer />
    </main>
  );
}
