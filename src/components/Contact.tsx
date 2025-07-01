'use client';

import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TEMP: Log for now
    console.log('Form submitted:', formData);
    alert('Message submitted. Backend coming soon!');
  };

  return (
    <section id="contact" className="py-20 bg-black px-6 text-white">
      <div className="max-w-3xl mx-auto backdrop-blur-md bg-[#0f0f0f]/70 border border-purple-600 rounded-3xl shadow-lg p-10 relative">
        <h2 className="text-4xl font-bold text-purple-400 mb-10 text-center">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 bg-black bg-opacity-40 border border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-5 py-3 bg-black bg-opacity-40 border border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={6}
            className="w-full px-5 py-3 bg-black bg-opacity-40 border border-purple-500 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-purple-300"
          />
          <div className="text-center">
            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
