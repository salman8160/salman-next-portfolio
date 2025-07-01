'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const SERVICE_ID = 'service_aai4rps';
const TEMPLATE_AUTO_REPLY = 'template_w504cfh';
const TEMPLATE_CONTACT_US = 'template_4u4u9xx';
const PUBLIC_KEY = 'zPMOx3aXE2kluPXN7';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    const params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: 'New Contact Form Submission',
    };

    try {
      // 1. Auto-reply to user
      await emailjs.send(SERVICE_ID, TEMPLATE_AUTO_REPLY, params, PUBLIC_KEY);
      // 2. Notify you
      await emailjs.send(SERVICE_ID, TEMPLATE_CONTACT_US, params, PUBLIC_KEY);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Email send failed:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen px-4 bg-gradient-to-br from-black via-[#0f0017] to-black">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-5xl border border-purple-600 p-10 rounded-2xl bg-gradient-to-br from-[#0f0017] to-black shadow-xl"
      >
        <h2 className="text-4xl text-center font-bold text-purple-400 mb-10">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="p-4 rounded-md bg-gray-900 border border-purple-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="p-4 rounded-md bg-gray-900 border border-purple-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
          />
        </div>

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="mt-6 w-full p-4 rounded-md bg-gray-900 border border-purple-500 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
        />

        <button
          type="submit"
          className="mt-6 w-full py-4 text-lg font-semibold bg-purple-600 hover:bg-purple-700 transition rounded-md text-white shadow-lg"
        >
          Send Message
        </button>

        {status === 'success' && (
          <p className="mt-4 text-center text-green-400 animate-pulse">✅ Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-center text-red-400">❌ Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
