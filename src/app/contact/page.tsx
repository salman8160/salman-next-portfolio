'use client';

import Link from 'next/link';

export default function ContactPage() {
  return (
    <main className="min-h-screen flex flex-col justify-center items-center bg-black text-white px-6">
      <h1 className="text-5xl font-bold mb-4">Contact 📬</h1>
      <p className="text-lg text-gray-400 mb-4">Email: salmantabrezmd@gmail.com</p>
      <p className="text-lg text-gray-400 mb-8">GitHub: github.com/salman8160</p>
      <Link href="/">
        <button className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-400">
          Go Back Home
        </button>
      </Link>
    </main>
  );
}
