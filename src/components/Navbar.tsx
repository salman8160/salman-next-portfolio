// src/components/Navbar.tsx
'use client'

export default function Navbar() {
  return (
    <nav className="bg-black bg-opacity-80 text-white px-6 py-4 fixed top-0 left-0 w-full z-50 shadow-md backdrop-blur-md">
      <div className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="text-2xl font-bold">Salman Tabrez</div>
        <div className="space-x-6 text-sm uppercase tracking-wide">
          <a href="#about" className="hover:text-blue-400">About</a>
          <a href="#projects" className="hover:text-blue-400">Projects</a>
          <a href="#blog" className="hover:text-blue-400">Blog</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  )
}
