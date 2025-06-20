// src/components/Hero.tsx
export default function Hero() {
  return (
    <section className="h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white flex flex-col justify-center items-center relative">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-center leading-tight">
        Cloud Security Architect <br /> & DevSecOps Engineer
      </h1>
      <p className="text-lg md:text-xl max-w-2xl text-center mb-10 px-4">
        Expertise in AWS, GCP, Kubernetes, CI/CD Pipeline Security & Application Security
      </p>
      <a
        href="#projects"
        className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition"
      >
        Explore Projects
      </a>
    </section>
  )
}
