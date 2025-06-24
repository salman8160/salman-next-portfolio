'use client';

import { motion } from 'framer-motion';

const CICDPipelineModal = () => {
  return (
    <section
      id="cicd-pipeline"
      className="flex flex-col items-center min-h-screen bg-black text-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        CI/CD Pipeline Security 🚀
      </motion.h2>

      <motion.div
        className="bg-gray-900 rounded-xl p-8 border border-gray-700 max-w-4xl text-left"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-2xl font-semibold mb-4 text-white">
          Project: Secure CI/CD Pipelines (AWS, GCP, Azure)
        </h3>
        <p className="text-gray-400 mb-4">
          Built enterprise-grade CI/CD pipelines integrating:
        </p>
        <ul className="text-gray-300 list-disc ml-6 mb-6 space-y-2 text-left">
          <li>SAST (Checkmarx, SonarQube)</li>
          <li>DAST (Burp Suite, OWASP ZAP)</li>
          <li>Secrets Scanning (GitGuardian, TruffleHog)</li>
          <li>IaC Scanning (Checkov, Terraform Sentinel)</li>
          <li>Artifact Signing & Promotion</li>
          <li>GKE / EKS Deployments with Gatekeeper/OPA checks</li>
          <li>Integration with GitHub Actions and Jenkins pipelines</li>
        </ul>
        <p className="text-gray-400">
          Automated pipelines reduced risk of supply chain attacks, ensured
          secure deployments across hybrid cloud.
        </p>
      </motion.div>
    </section>
  );
};

export default CICDPipelineModal;
