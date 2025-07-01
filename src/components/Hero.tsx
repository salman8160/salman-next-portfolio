'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="text-white min-h-[90vh] flex flex-col justify-center items-center text-center px-6">
      <div>
        <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 mb-4">
          Salman Tabrez
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-purple-200 mb-6">
          Cloud Security Architect
        </h2>
        <p className="max-w-2xl text-lg sm:text-xl text-gray-300 leading-relaxed mb-10">
          Designing secure, scalable, high-performance cloud systems in{' '}
          <span className="text-blue-400 font-medium">AWS</span>,{' '}
          <span className="text-red-400 font-medium">GCP</span>, and{' '}
          <span className="text-indigo-400 font-medium">Azure</span> — specializing in{' '}
          <span className="text-green-400 font-medium">CI/CD</span>,{' '}
          <span className="text-yellow-400 font-medium">Kubernetes</span>, and{' '}
          <span className="text-pink-400 font-medium">Zero Trust</span> architectures.
        </p>

        <Link
          href="/projects"
          className="inline-block text-lg font-semibold px-6 py-3 border-2 border-purple-500 text-purple-300 rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300"
        >
          View Projects
        </Link>
      </div>
    </section>
  );
}
