'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-black/80 text-gray-400 text-center py-6 mt-12 border-t border-gray-700">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Salman Tabrez | Cloud Security Architect
      </p>
      <p className="text-xs mt-1">
        Built with Next.js, Tailwind CSS, Framer Motion, Three.js | Deployed on Vercel
      </p>
    </footer>
  );
}
