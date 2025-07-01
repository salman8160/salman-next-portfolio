"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const SERVICE_ID = "service_aai4rps";
const TEMPLATE_ID = "template_4u4u9xx";
const PUBLIC_KEY = "xWl4GtsmkrGhAFBCj";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setError(false);

    const templateParams = {
      from_name: name,
      from_email: email,
      message,
    };

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setError(true);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 md:px-12 lg:px-32 bg-black text-white">
      <motion.div
        className="w-full max-w-6xl mx-auto bg-gradient-to-b from-[#0f0f2e] to-black border border-purple-600 p-8 rounded-2xl shadow-xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-center text-purple-400 mb-8">Contact Me</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 bg-gray-800 text-white px-4 py-3 rounded-lg border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="w-full h-32 bg-gray-800 text-white px-4 py-3 rounded-lg border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
          />
          <button
            type="submit"
            className="w-full py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-lg transition duration-300 shadow-md shadow-purple-500/20"
          >
            Send Message
          </button>
          {success && <p className="text-green-400 text-center mt-2">Message sent successfully!</p>}
          {error && <p className="text-red-500 text-center mt-2">Failed to send message. Please try again.</p>}
        </form>
      </motion.div>
    </section>
  );
}
