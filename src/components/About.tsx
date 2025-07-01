'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-purple-400"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-lg text-gray-300 space-y-6 leading-relaxed text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p>
            I’m a Cloud Security Engineer and Architect with a passion for building secure, scalable, and resilient cloud infrastructures. My approach blends deep technical expertise with a strategic mindset rooted in security-first architecture, aligning with principles like Defense-in-Depth, Zero Trust, and Shift-Left.
          </p>

          <p>
            I specialize in architecting enterprise solutions across AWS, Azure, and GCP, embedding security from design through deployment. My work reflects a strong command of granular IAM, network segmentation, policy-as-code, and least privilege access — enabling cloud-native environments that are secure by default and scalable by design.
          </p>

          <p>
            I’ve led initiatives that reduced attack surfaces, automated compliance, and elevated observability through optimized EDR tuning and intelligent SIEM correlation. I advocate for separation of duties and believe in enabling engineering teams with secure CI/CD pipelines that don’t trade off agility for protection.
          </p>

          <p>
            Beyond implementation, I take pride in mentoring and enabling others — transforming security from a gatekeeper into a business enabler. Whether it’s tuning a WAF, deploying IaC with Terraform, hardening containers with K8s policies, or educating teams on application threat modeling, I bring clarity, coordination, and leadership to every engagement.
          </p>

          <p>
            Let’s build what's next — securely, by design.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
