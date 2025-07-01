'use client';

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.sendForm(
        'service_aai4rps',           // ✅ your EmailJS service ID
        'template_w504cfh',         // ✅ your EmailJS template ID
        formRef.current!,           // form reference
        'zPMOX3aXE2kluPXN7'         // ✅ your public key
      );

      setSent(true);
      setLoading(false);
      formRef.current?.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen bg-black text-white py-20 px-6 flex justify-center items-center">
      <div className="w-full max-w-xl bg-[#121212] p-10 rounded-3xl shadow-xl border border-purple-600">
        <h2 className="text-4xl font-bold text-purple-400 mb-8 text-center">Contact Me</h2>
        
        {sent ? (
          <p className="text-center text-green-400 text-lg">Thank you! Your message has been sent.</p>
        ) : (
          <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
            <input
              type="text"
              name="from_name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#eaefff] text-black"
            />
            <input
              type="email"
              name="reply_to"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#eaefff] text-black"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-lg bg-[#1f2937] text-white"
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-xl transition duration-300"
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
