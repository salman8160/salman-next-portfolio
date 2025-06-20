// src/app/page.tsx

import Navbar from '@/components/Navbar'
import Hero3D from '@/components/Hero3D'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero3D />
      <About />
      <Projects />
      <Footer />
    </>
  )
}
