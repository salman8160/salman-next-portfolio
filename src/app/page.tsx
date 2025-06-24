'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import CICDPipeline from '@/components/CICDPipeline';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <CICDPipeline />
      <Footer />
    </main>
  );
}
