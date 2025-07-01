'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black px-4 py-24">
      <div className="relative max-w-5xl w-full p-10 rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-purple-800 shadow-2xl backdrop-blur-md text-white">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-center mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text"
        >
          About Me
        </motion.h1>

        <div className="space-y-6 text-lg text-gray-300 leading-relaxed text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I’m a Cloud Security Engineer and Architect with a passion for building secure, scalable, and resilient cloud infrastructures. My approach blends deep technical expertise with a strategic mindset rooted in security-first architecture, aligning with principles like Defense-in-Depth, Zero Trust, Shift-Left, and Secure-by-Design.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            I specialize in architecting enterprise solutions across AWS, Azure, and GCP, embedding security from design through deployment. My work reflects a strong command of granular IAM, network segmentation, policy-as-code, and least privilege access — enabling cloud-native environments that are secure by default and scalable by design.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I’ve led initiatives that reduced attack surfaces, automated compliance, and elevated observability through optimized EDR tuning and intelligent SIEM correlation. I advocate for separation of duties and believe in enabling engineering teams with secure CI/CD pipelines that don’t trade off agility for protection.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            Beyond implementation, I take pride in mentoring and enabling others — transforming security from a gatekeeper into a business enabler. Whether it’s tuning a WAF, deploying IaC with Terraform, hardening containers with K8s policies, or educating teams on application threat modeling, I bring clarity, coordination, and leadership to every engagement.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
