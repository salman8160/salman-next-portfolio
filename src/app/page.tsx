import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Tools from "@/components/Tools";
import Expertise from "@/components/Expertise";
import Architecture3D from "@/components/Architecture3D";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <About />
      <Projects />
      <Tools />
      <Expertise />
      <Architecture3D />
      <Footer />
    </main>
  );
}
