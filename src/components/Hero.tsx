'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-black via-gray-900 to-black px-4 py-20">
      <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-transparent bg-clip-text">
        Salman Tabrez
      </h1>
      <h2 className="text-2xl md:text-4xl font-bold text-purple-300 mt-4">
        Cloud Security Architect
      </h2>
      <p className="mt-6 max-w-3xl text-lg md:text-xl text-gray-400 leading-relaxed">
        Building secure, scalable, high-performance cloud architectures across AWS, GCP, and Azure —
        integrating defense-in-depth, zero trust, granular IAM, and modern DevSecOps practices. 
        Specializing in CI/CD pipelines, Kubernetes security, and cloud-native infrastructure that is
        secure by design and optimized for resilience and compliance.
      </p>
      <Link
        href="/projects"
        className="mt-10 inline-block px-6 py-3 text-lg font-semibold border-2 border-purple-500 rounded-full text-white hover:bg-purple-600 transition-all duration-300"
      >
        View Projects
      </Link>
    </section>
  );
}
