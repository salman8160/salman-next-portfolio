'use client';

import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_aai4rps', // ✅ your EmailJS SERVICE ID
        'template_w504cfh', // ✅ your EmailJS TEMPLATE ID
        form.current!,
        'zPMOx3aXE2kluPXN7' // ✅ your EmailJS PUBLIC KEY
      )
      .then(
        () => {
          setStatus('success');
          form.current?.reset();
          setTimeout(() => setStatus('idle'), 4000);
        },
        (error) => {
          console.error(error.text);
          setStatus('error');
          setTimeout(() => setStatus('idle'), 4000);
        }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex items-center justify-center bg-black px-4 py-20">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="w-full max-w-md bg-gray-900 border border-purple-500 p-8 rounded-2xl shadow-xl"
      >
        <h2 className="text-3xl text-center text-purple-400 font-bold mb-6">Contact Me</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full p-3 mb-4 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 rounded-lg bg-gray-100 text-black focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-3 mb-4 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-lg transition duration-300"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-center mt-4">✅ Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-400 text-center mt-4">❌ Failed to send message. Try again.</p>
        )}
      </form>
    </section>
  );
}
