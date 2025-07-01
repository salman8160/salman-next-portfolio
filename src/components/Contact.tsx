'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    try {
      // Send user auto-reply
      await emailjs.sendForm(
        'service_aai4rps',
        'template_w504cfh', // Auto-reply to user
        form.current,
        'zPMOX3aXE2kluPXN7'
      );

      // Send admin notification
      await emailjs.send(
        'service_aai4rps',
        'template_4u4u9xx', // Notify you (admin)
        {
          name: form.current.user_name.value,
          email: form.current.user_email.value,
          message: form.current.message.value,
          title: 'Contact Form Submission',
        },
        'zPMOX3aXE2kluPXN7'
      );

      setSuccessMessage('Message sent successfully!');
      setErrorMessage('');
      form.current.reset(); // Clear form
    } catch (error) {
      console.error(error);
      setErrorMessage('Failed to send message. Please try again.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white" id="contact">
      <div className="bg-zinc-900 p-10 rounded-xl border border-purple-600 shadow-lg w-full max-w-lg">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-400">Contact Me</h2>
        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-purple-700 text-white"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-purple-700 text-white"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows={5}
            required
            className="w-full px-4 py-2 rounded bg-zinc-800 border border-purple-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition duration-200"
          >
            Send Message
          </button>
          {successMessage && <p className="text-green-400 text-sm">{successMessage}</p>}
          {errorMessage && <p className="text-red-400 text-sm">{errorMessage}</p>}
        </form>
      </div>
    </div>
  );
}
