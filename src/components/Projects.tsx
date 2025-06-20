// src/components/Projects.tsx
export default function Projects() {
  return (
    <section id="projects" className="bg-white text-gray-900 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">CI/CD Pipeline Security</h3>
            <p className="text-gray-700 mb-4">
              Built end-to-end secure CI/CD pipelines with Jenkins, SonarQube, Checkmarx, BurpSuite DAST, and Kubernetes.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">GCP Zero-Trust Detection Pipeline</h3>
            <p className="text-gray-700 mb-4">
              Designed and implemented Zero Trust architecture with Google SCC, Cloud IDS, and VPC Service Controls.
            </p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Kubernetes Hardening & Security Automation</h3>
            <p className="text-gray-700 mb-4">
              Automated Kubernetes security baselines using kube-bench, OPA, Gatekeeper policies, and custom Terraform modules.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
