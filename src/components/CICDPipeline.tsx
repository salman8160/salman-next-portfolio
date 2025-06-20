'use client';

import { motion } from 'framer-motion';

const pipelineStages = [
  { name: 'Developer', color: 'bg-cyan-500', details: 'Code committed to GitHub' },
  { name: 'GitHub Actions', color: 'bg-purple-500', details: 'Trigger CI workflow' },
  { name: 'SAST', color: 'bg-green-500', details: 'Static Application Security Testing' },
  { name: 'Build & Package', color: 'bg-yellow-500', details: 'Build Docker image' },
  { name: 'DAST', color: 'bg-orange-500', details: 'Dynamic Application Security Testing' },
  { name: 'Deploy', color: 'bg-red-600', details: 'Deploy to Production' },
];

export default function CICDPipeline() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-16">
      <h1 className="text-4xl font-extrabold mb-6 text-center">
        Secure CI/CD Pipeline 🚀
      </h1>

      <p className="text-lg mb-10 text-center max-w-3xl leading-relaxed">
        Visualizing a modern CI/CD pipeline with integrated{' '}
        <span className="text-cyan-400 font-semibold">SAST</span>,{' '}
        <span className="text-orange-400 font-semibold">DAST</span>, and{' '}
        <span className="text-yellow-400 font-semibold">Security Gates</span>.
      </p>

      <div className="flex items-center justify-center space-x-6 w-full max-w-6xl overflow-x-auto">
        {pipelineStages.map((stage, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center group transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            {/* Stage Circle */}
            <motion.div
              className={`w-24 h-24 rounded-full flex items-center justify-center text-center text-sm font-bold ${stage.color} group-hover:scale-125 group-hover:ring-4 group-hover:ring-white/50 transition-all duration-300`}
              animate={{
                scale: [1, 1.05, 1],
                boxShadow: [
                  '0 0 0px rgba(255,255,255,0)',
                  `0 0 20px rgba(255,255,255,0.4)`,
                  '0 0 0px rgba(255,255,255,0)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                repeatDelay: 1,
              }}
            >
              {stage.name}
            </motion.div>

            {/* Hover Details */}
            <div className="mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center w-32">
              {stage.details}
            </div>

            {/* Connector Line */}
            {index < pipelineStages.length - 1 && (
              <motion.div
                className="w-24 h-1 bg-gradient-to-r from-cyan-400 via-white to-purple-500 mt-4 rounded-full"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}
