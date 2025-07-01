'use client';
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');

    const serviceID = 'service_aai4rps';
    const notifyTemplateID = 'template_4u4u9xx'; // To YOU
    const autoReplyTemplateID = 'template_w504cfh'; // To USER
    const publicKey = 'xWl4GtsmkrGhAFBCj';

    try {
      // Send message to YOU
      await emailjs.send(serviceID, notifyTemplateID, formData, publicKey);

      // Auto-reply to USER
      await emailjs.send(serviceID, autoReplyTemplateID, formData, publicKey);

      setFormData({ from_name: '', from_email: '', message: '' });
      setStatus('success');
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-[#0f0017] to-black px-4">
      <form onSubmit={handleSubmit} className="w-full max-w-4xl p-10 border border-purple-500 rounded-2xl bg-gradient-to-b from-[#0f0017] to-black shadow-lg">
        <h2 className="text-4xl font-bold text-center mb-8 text-purple-300">Contact Me</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <input
            type="text"
            name="from_name"
            placeholder="Your Name"
            value={formData.from_name}
            onChange={handleChange}
            required
            className="p-4 rounded-md border border-purple-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <input
            type="email"
            name="from_email"
            placeholder="Your Email"
            value={formData.from_email}
            onChange={handleChange}
            required
            className="p-4 rounded-md border border-purple-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
        </div>

        <textarea
          name="message"
          rows={6}
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-4 rounded-md border border-purple-500 bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 mb-6"
        />

        <button
          type="submit"
          className="w-full py-4 bg-purple-600 hover:bg-purple-700 transition-colors text-white font-bold rounded-lg shadow-md"
        >
          Send Message
        </button>

        {status === 'success' && (
          <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
        )}
        {status === 'error' && (
          <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
