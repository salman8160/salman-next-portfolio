'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function DevSecOpsCICD() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <section className="max-w-5xl mx-auto py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          DevSecOps & CI/CD
        </h1>
        <p className="text-lg mb-6">
          I design CI/CD pipelines with integrated security gates. I use Jenkins, GitHub Actions, and GitLab CI with static code analysis (SAST), secret scanning, container image scanning, and dynamic testing (DAST).
        </p>
        <p className="text-lg mb-6">
          I have automated SAST with tools like SonarQube and Checkmarx. DAST with Burp Suite Pro. Container image scanning with Trivy and Grype, integrated in pipelines. I also use Terraform Validate and Sentinel for infrastructure scanning.
        </p>
        <p className="text-lg">
          Example: My GCP Secure Pipeline project automates full DevSecOps: pull request scanning, IaC validation, SAST/DAST, and deploys to GKE with verified images and signed artifacts (cosign, Sigstore).
        </p>
      </section>
      <Footer />
    </main>
  );
}
