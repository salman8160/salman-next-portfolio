'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center min-h-screen px-6 py-20 bg-black text-white text-center"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-10 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className="max-w-5xl text-lg md:text-xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I&rsquo;m a Cloud Security Engineer and Architect with a passion for building secure, scalable, and resilient cloud infrastructures. My approach blends deep technical expertise with a strategic mindset rooted in security-first architecture, aligning with principles like Defense-in-Depth, Zero Trust, Shift-Left, and Secure-by-Design.
      </motion.p>

      <motion.p
        className="max-w-5xl text-lg md:text-xl text-gray-300 leading-relaxed mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        I specialize in architecting enterprise solutions across AWS, Azure, and GCP, embedding security from design through deployment. My work reflects a strong command of granular IAM, network segmentation, policy-as-code, and least privilege access — enabling cloud-native environments that are secure by default and scalable by design.
      </motion.p>

      <motion.p
        className="max-w-5xl text-lg md:text-xl text-gray-300 leading-relaxed mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 1 }}
      >
        I&rsquo;ve led initiatives that reduced attack surfaces, automated compliance, and elevated observability through optimized EDR tuning and intelligent SIEM correlation. I advocate for separation of duties and believe in enabling engineering teams with secure CI/CD pipelines that don&rsquo;t trade off agility for protection.
      </motion.p>

      <motion.p
        className="max-w-5xl text-lg md:text-xl text-gray-300 leading-relaxed mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Beyond implementation, I take pride in mentoring and enabling others — transforming security from a gatekeeper into a business enabler. Whether it&rsquo;s tuning a WAF, deploying IaC with Terraform, hardening containers with K8s policies, or educating teams on application threat modeling, I bring clarity, coordination, and leadership to every engagement.
      </motion.p>
    </section>
  );
};

export default About;
