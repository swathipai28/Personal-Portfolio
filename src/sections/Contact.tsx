// src/sections/Contact.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import SocialIcons from '../components/SocialIcons';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { heroData } from '../data/portfolioData'; // To get email/phone

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // In a real application, you would send this to a backend or a service like Formspree.
    // For this portfolio, we'll simulate success.
    console.log('Form Data Submitted:', formData);

    try {
      // Example using Formspree (replace with your actual Formspree endpoint)
      // const response = await fetch('https://formspree.io/f/your_form_id', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   setFormStatus('success');
      //   setFormData({ name: '', email: '', message: '' });
      // } else {
      //   setFormStatus('error');
      // }

      // Simulate API call success
      await new Promise(resolve => setTimeout(resolve, 1500));
      setFormStatus('success');
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error('Form submission error:', error);
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-dark-blue">
      <div className="container mx-auto px-6">
        <SectionHeader title="Get in Touch" subtitle="Let's Connect & Collaborate" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            className="bg-light-gray-bg p-8 rounded-lg shadow-xl flex flex-col justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
            <div className="space-y-6 text-lg">
              <p className="flex items-center text-gray-text">
                <FaEnvelope className="text-light-blue-accent w-6 h-6 mr-4 flex-shrink-0" />
                <span><a href={`mailto:${heroData.email}`}>{heroData.email}</a></span>
              </p>
              <p className="flex items-center text-gray-text">
                <FaPhone className="text-light-blue-accent w-6 h-6 mr-4 flex-shrink-0" />
                <span><a href={`tel:${heroData.phone}`}>{heroData.phone}</a></span>
              </p>
              <p className="flex items-center text-gray-text">
                <FaMapMarkerAlt className="text-light-blue-accent w-6 h-6 mr-4 flex-shrink-0" />
                <span>{heroData.location|| 'Mangaluru, India'}</span>
              </p>
            </div>
            <div className="mt-8 flex justify-center lg:justify-start">
              <SocialIcons />
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-light-gray-bg p-8 rounded-lg shadow-xl"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-text text-sm font-bold mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-deep-blue border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-light-blue-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-text text-sm font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-deep-blue border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-light-blue-accent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-text text-sm font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-deep-blue border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-light-blue-accent"
                  required
                ></textarea>
              </div>
              <motion.button
                type="submit"
                className="w-full bg-light-blue-accent text-dark-blue font-bold py-3 px-4 rounded-lg hover:bg-opacity-90 transition-colors duration-300 transform active:scale-95"
                disabled={formStatus === 'submitting'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {formStatus === 'submitting' ? 'Sending...' : 'Send Message'}
              </motion.button>
              {formStatus === 'success' && (
                <p className="mt-4 text-center text-teal-accent">Message sent successfully! I'll get back to you soon.</p>
              )}
              {formStatus === 'error' && (
                <p className="mt-4 text-center text-red-500">Failed to send message. Please try again later or contact directly.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;