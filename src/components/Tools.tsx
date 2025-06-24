'use client';

import { motion } from 'framer-motion';

const Tools = () => {
  const tools = [
    'AWS',
    'GCP',
    'Azure',
    'Terraform',
    'Kubernetes',
    'Jenkins',
    'GitHub Actions',
    'OPA / Gatekeeper',
    'SonarQube',
    'Checkmarx',
    'Burp Suite',
    'Splunk',
    'Prometheus',
    'Grafana',
    'SIEM',
    'ISO 27001',
    'SOC 2',
    'GDPR',
    'SAST',
    'DAST',
    'Threat Modeling',
  ];

  return (
    <section
      id="tools"
      className="flex flex-col items-center min-h-screen bg-black text-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-12 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Tools & Technologies
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
        {tools.map((tool, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl p-4 border border-gray-700 text-white hover:scale-105 transition transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.8 }}
          >
            {tool}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Tools;
