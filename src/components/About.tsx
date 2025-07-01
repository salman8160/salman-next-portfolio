"use client";

import React from "react";
import ParticlesAbout from "./ParticlesAbout";

const About = () => {
  return (
    <section className="relative z-10 px-6 py-16 min-h-screen flex items-center justify-center">
      <div className="relative bg-[#121212] rounded-3xl border border-purple-600 p-10 shadow-lg max-w-4xl w-full mx-auto overflow-hidden text-white">
        {/* Particles Inside Box */}
        <ParticlesAbout />

        {/* Content */}
        <h1 className="text-4xl font-bold text-center text-purple-400 mb-8 z-10 relative">
          About Me
        </h1>

        <p className="text-center text-lg z-10 relative leading-relaxed">
          I’m a Cloud Security Engineer and Architect with a passion for building secure, scalable, and resilient cloud infrastructures. My approach blends deep technical expertise with a strategic mindset rooted in security-first architecture, aligning with principles like Defense-in-Depth, Zero Trust, Shift-Left, and Secure-by-Design.
          <br /><br />
          I specialize in architecting enterprise solutions across AWS, Azure, and GCP, embedding security from design through deployment. My work reflects a strong command of granular IAM, network segmentation, policy-as-code, and least privilege access — enabling cloud-native environments that are secure by default and scalable by design.
          <br /><br />
          I’ve led initiatives that reduced attack surfaces, automated compliance, and elevated observability through optimized EDR tuning and intelligent SIEM correlation. I advocate for separation of duties and believe in enabling engineering teams with secure CI/CD pipelines that don’t trade off agility for protection.
          <br /><br />
          Beyond implementation, I take pride in mentoring and enabling others — transforming security from a gatekeeper into a business enabler. Whether it’s tuning a WAF, deploying IaC with Terraform, hardening containers with K8s policies, or educating teams on application threat modeling, I bring clarity, coordination, and leadership to every engagement.
        </p>
      </div>
    </section>
  );
};

export default About;
