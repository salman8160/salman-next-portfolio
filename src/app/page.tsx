'use client';

import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen scroll-smooth">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Projects />
      <Contact />
      <Footer />
      <Contact />

    </main>
  );
}
