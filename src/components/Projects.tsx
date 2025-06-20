'use client';

import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'Secure AWS Architecture',
      description: 'Designed multi-tier VPC with security groups, NACLs, WAF, and IAM best practices.',
    },
    {
      title: 'GCP Zero Trust Network',
      description: 'Implemented VPC Service Controls, Identity-Aware Proxy, and private services access.',
    },
    {
      title: 'Kubernetes Security Hardening',
      description: 'Built EKS and GKE clusters with PodSecurityPolicies, OPA/Gatekeeper, and network segmentation.',
    },
    {
      title: 'CI/CD Pipeline Security',
      description: 'Integrated SAST, DAST, and Secrets Scanning into Jenkins pipelines using Checkmarx and SonarQube.',
    },
  ];

  return (
    <section
      id="projects"
      className="flex flex-col items-center min-h-screen bg-black text-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Featured Projects
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
            <p className="text-gray-400">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
