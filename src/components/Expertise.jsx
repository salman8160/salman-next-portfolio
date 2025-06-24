'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const expertiseData = [
  {
    title: 'Cloud & Infrastructure Security',
    link: '/expertise/cloud-infrastructure',
    color: 'from-indigo-500 to-purple-600',
  },
  {
    title: 'DevSecOps & CI/CD',
    link: '/expertise/devsecops-cicd',
    color: 'from-pink-500 to-red-500',
  },
  {
    title: 'Application Security & Threat Modeling',
    link: '/expertise/appsec-threatmodeling',
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Monitoring & Detection',
    link: '/expertise/monitoring-detection',
    color: 'from-yellow-500 to-amber-500',
  },
  {
    title: 'Incident Response & Governance',
    link: '/expertise/incidentresponse-grc',
    color: 'from-blue-500 to-sky-500',
  },
  {
    title: 'Zero Trust & IAM',
    link: '/expertise/zerotrust-iam',
    color: 'from-fuchsia-500 to-pink-500',
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="py-16 bg-black text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Tools & Expertise
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {expertiseData.map((item, index) => (
            <motion.div
              key={index}
              className={`rounded-xl p-8 bg-gradient-to-br ${item.color} shadow-lg hover:scale-105 transform transition duration-300 cursor-pointer`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <Link href={item.link}>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-white opacity-80">
                  Learn how Salman uses these tools in real-world projects.
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
