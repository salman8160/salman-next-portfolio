'use client';

import CICDPipeline from '@/components/CICDPipeline';

export default function CICDPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start bg-black text-white px-6 py-10">
      <h1 className="text-4xl font-bold mb-6">CI/CD Pipeline Security</h1>
      <p className="max-w-3xl mb-6 text-center text-lg">
        This is a 3D interactive representation of a secure CI/CD Pipeline integrating:
        <br />
        <span className="text-cyan-400">Static Application Security Testing (SAST)</span>,{' '}
        <span className="text-purple-400">Dynamic Application Security Testing (DAST)</span>, and{' '}
        <span className="text-yellow-400">Automated Deployments</span>.
      </p>

      <CICDPipeline />

      <p className="max-w-3xl mt-10 text-center text-md text-gray-400">
        Developer → GitHub → SAST → Build → DAST → Deploy → Monitor
      </p>
    </main>
  );
}
