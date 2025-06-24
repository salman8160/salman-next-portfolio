'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const Projects = () => {
  const router = useRouter();

  const projects = [
    {
      title: 'AWS EKS Secure Deployment',
      description: 'Implemented Kubernetes RBAC, Network Policies, image scanning pipeline, EKS hardening.',
      color: 'bg-gradient-to-r from-purple-500 to-purple-700',
      link: '/projects/aws-eks-secure-deployment',
    },
    {
      title: 'GCP Infrastructure Hardening',
      description: 'Baseline guardrails for GCP using Terraform: logging, segmentation, secure factory.',
      color: 'bg-gradient-to-r from-pink-500 to-pink-700',
      link: '/projects/gcp-infrastructure-hardening',
    },
    {
      title: 'GCP Secure CI/CD Pipeline',
      description: 'Automated DevSecOps pipeline: SAST, DAST, IaC scanning, artifact promotion.',
      color: 'bg-gradient-to-r from-green-500 to-green-700',
      link: '/projects/gcp-secure-cicd-pipeline',
    },
    {
      title: 'Terraform GitOps Pipelines',
      description: 'Automated Terraform plan, OPA policy check, apply pipelines using GitHub Actions.',
      color: 'bg-gradient-to-r from-yellow-400 to-yellow-600',
      link: '/projects/terraform-gitops-pipelines',
    },
    {
      title: 'AppSec & API Threat Modeling',
      description: 'Threat modeling for microservices: SAST, DAST, API security tests.',
      color: 'bg-gradient-to-r from-blue-500 to-blue-700',
      link: '/projects/appsec-api-threat-modeling',
    },
    {
      title: 'Secure SDLC Program',
      description: 'Secure SDLC: developer training, secure code review, threat modeling.',
      color: 'bg-gradient-to-r from-pink-400 to-pink-600',
      link: '/projects/secure-sdlc-program',
    },
  ];

  return (
    <section id="projects" className="flex flex-col items-center min-h-screen bg-black text-center px-6 py-20">
      <motion.h2
        className="text-5xl font-bold mb-12 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={`rounded-xl p-6 text-left cursor-pointer text-white ${project.color}`}
            onClick={() => router.push(project.link)}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p>{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
