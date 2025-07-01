'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

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
      await emailjs.send(SERVICE_ID, TEMPLATE_AUTO_REPLY, params, PUBLIC_KEY);
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
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="max-w-4xl mx-auto mt-12 p-8 rounded-2xl bg-gradient-to-br from-black to-gray-900 border border-purple-600 shadow-xl"
    >
      <h2 className="text-4xl font-bold text-center text-purple-400 mb-8">Contact Me</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 text-white">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 border border-purple-600 col-span-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="p-3 rounded-lg bg-gray-800 border border-purple-600 col-span-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="col-span-2 p-3 rounded-lg bg-gray-800 border border-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="col-span-2 w-full py-3 rounded-lg bg-purple-600 hover:bg-purple-700 transition font-semibold text-lg"
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
    </motion.div>
  );
};

export default Contact;
