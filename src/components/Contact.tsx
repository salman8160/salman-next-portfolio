// app/contact/page.tsx or components/Contact.tsx
'use client'

import { useState } from 'react'
import emailjs from 'emailjs-com'
import { motion } from 'framer-motion'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await emailjs.send(
        'service_aai4rps',
        'template_4u4u9xx',
        formData,
        'Yq5UB_B3EvjgbbFdu'
      )
      setSuccess(true)
      setError(false)
      setFormData({ name: '', email: '', message: '' })
    } catch (err) {
      setError(true)
      setSuccess(false)
    }
  }

  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex justify-center items-center min-h-screen px-4 py-16 bg-black text-white"
    >
      <div className="w-full max-w-5xl p-8 rounded-2xl border border-purple-500 bg-gradient-to-br from-zinc-900/80 to-black/70 backdrop-blur-md shadow-xl">
        <h2 className="text-4xl font-bold text-center text-purple-400 mb-10">Contact Me</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="flex-1 p-4 rounded-lg bg-zinc-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
              className="flex-1 p-4 rounded-lg bg-zinc-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
            />
          </div>

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            required
            className="w-full p-4 rounded-lg bg-zinc-800 text-white border border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-purple-600 to-fuchsia-600 text-white font-semibold hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all"
          >
            Send Message
          </motion.button>

          {success && <p className="text-green-400 text-center mt-4">Message sent successfully!</p>}
          {error && <p className="text-red-500 text-center mt-4">Failed to send message. Please try again.</p>}
        </form>
      </div>
    </motion.section>
  )
}

export default Contact
