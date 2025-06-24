'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function MonitoringDetection() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Monitoring & Detection
        </h1>
        <p className="text-lg mb-6">
          I design detection and monitoring stacks using cloud-native and open source tools. I work with Splunk, Google Chronicle, Prometheus, Loki, and custom detections in XDR platforms.
        </p>
        <p className="text-lg mb-6">
          I also develop dashboards for security observability — with custom metrics and alerts. I map detections to MITRE ATT&CK.
        </p>
        <p className="text-lg">
          Example: I led GCP Cloud Threat Detection project integrating Cloud Audit Logs, Chronicle, and BigQuery SIEM for automated threat hunting and compliance monitoring.
        </p>
      </section>
      <Footer />
    </main>
  );
}
