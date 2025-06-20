'use client';

import Link from 'next/link';

export default function KubernetesToolsPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold mb-4">Kubernetes & Microservices</h1>
      <p className="text-lg text-gray-400 mb-8">Coming Soon: K8s architecture, Istio, Service Mesh, secure workloads...</p>
      <Link href="/">
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400">
          Go Back Home
        </button>
      </Link>
    </main>
  );
}
