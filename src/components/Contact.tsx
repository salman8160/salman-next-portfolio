'use client';

import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert('Thank you! Form submission feature coming soon.');
    // You can integrate Formspree, EmailJS or custom backend here later
  };

  return (
    <section id="contact" className="bg-black text-white px-6 py-20">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">
          Contact Me
        </h2>
        <p className="text-center mb-8 text-gray-400">
          Let’s connect — whether it’s a technical discussion, speaking opportunity,
          or strategic advisory request.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-800 text-white border border-gray-600"
            required
          />
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 rounded hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

