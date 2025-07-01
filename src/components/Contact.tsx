'use client';

import { useState } from 'react';
import emailjs from '@emailjs/browser';

const SERVICE_ID = 'service_xxxxxx'; // 🔁 Replace with your real service ID
const TEMPLATE_USER_REPLY = 'template_w504cfh'; // auto-reply
const TEMPLATE_ADMIN_NOTIFY = 'template_4u4u9xx'; // admin alert
const PUBLIC_KEY = 'zPMOx3aXE2kluPXN7';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmails = async () => {
    setStatus('loading');

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: 'New Inquiry'
    };

    try {
      // 1. Send email to user (auto-reply)
      await emailjs.send(SERVICE_ID, TEMPLATE_USER_REPLY, templateParams, PUBLIC_KEY);

      // 2. Send email to admin (you)
      await emailjs.send(SERVICE_ID, TEMPLATE_ADMIN_NOTIFY, templateParams, PUBLIC_KEY);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }
    sendEmails();
  };

  return (
    <div className="bg-zinc-900 text-white p-8 rounded-xl border border-purple-500 shadow-lg max-w-md mx-auto mt-10">
      <h2 className="text-center text-3xl font-bold text-purple-400 mb-6">Contact Me</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full p-3 mb-4 bg-zinc-800 border border-purple-500 rounded text-white"
          onChange={handleChange}
          value={formData.name}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full p-3 mb-4 bg-zinc-800 border border-purple-500 rounded text-white"
          onChange={handleChange}
          value={formData.email}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          className="w-full p-3 h-32 bg-zinc-800 border border-purple-500 rounded text-white mb-4"
          onChange={handleChange}
          value={formData.message}
        />

        <button
          type="submit"
          className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 rounded"
        >
          Send Message
        </button>

        {status === 'success' && (
          <p className="text-green-500 mt-4 text-center">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 mt-4 text-center">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
}
