'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full flex justify-between items-center py-6 px-12 bg-black/80 fixed top-0 left-0 z-50 backdrop-blur">
      <div className="text-white font-bold text-xl">Salman Tabrez</div>
      <div className="flex space-x-8">
        <Link href="/" className={`text-white hover:text-cyan-400 ${pathname === '/' ? 'font-bold text-cyan-400' : ''}`}>
          Home
        </Link>
        <Link href="/about" className={`text-white hover:text-cyan-400 ${pathname === '/about' ? 'font-bold text-cyan-400' : ''}`}>
          About
        </Link>
        <Link href="/projects" className={`text-white hover:text-cyan-400 ${pathname === '/projects' ? 'font-bold text-cyan-400' : ''}`}>
          Projects
        </Link>
        <Link href="/blog" className={`text-white hover:text-cyan-400 ${pathname === '/blog' ? 'font-bold text-cyan-400' : ''}`}>
          Blog
        </Link>
        <Link href="/contact" className={`text-white hover:text-cyan-400 ${pathname === '/contact' ? 'font-bold text-cyan-400' : ''}`}>
          Contact
        </Link>
      </div>
    </nav>
  );
}
