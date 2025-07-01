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

  const sendEmails = async () => {
    setStatus('loading');

    const params = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      title: 'New Contact Form Submission',
    };

    try {
      // Send auto-reply to user
      await emailjs.send(SERVICE_ID, TEMPLATE_AUTO_REPLY, params, PUBLIC_KEY);

      // Send notification to your Gmail
      await emailjs.send(SERVICE_ID, TEMPLATE_CONTACT_US, params, PUBLIC_KEY);

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (err) {
      console.error('Email send error:', err);
      setStatus('error');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendEmails();
  };

  return (
    <div className="p-6 rounded-2xl max-w-md mx-auto border border-purple-700 bg-gradient-to-br from-black to-gray-900 text-white shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-purple-400 mb-4">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-purple-700"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          required
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-purple-700"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="w-full p-3 rounded-md bg-gray-800 text-white border border-purple-700"
        />
        <button
          type="submit"
          className="w-full py-3 rounded-md bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg"
        >
          Send Message
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-4 text-green-400 text-center">Message sent successfully!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-400 text-center">Failed to send message. Please try again.</p>
      )}
    </div>
  );
};

export default Contact;
