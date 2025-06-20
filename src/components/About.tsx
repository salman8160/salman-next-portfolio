'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col justify-center items-center min-h-screen bg-black text-center px-6 py-20"
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-purple-400"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-gray-300 max-w-4xl mb-8 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I am a Cloud Security Architect with 6+ years of expertise in AWS, GCP, Kubernetes, and DevSecOps. 
        I design secure architectures, build automated CI/CD pipelines with integrated security controls, 
        and implement Zero Trust principles across cloud environments. My passion is building solutions that scale, perform, and stay secure.
      </motion.p>
    </section>
  );
};

export default About;
