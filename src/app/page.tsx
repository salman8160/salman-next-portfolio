'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import CICDPipeline from '@/components/CICDPipeline';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <CICDPipeline />
      <Footer />
    </main>
  );
}
