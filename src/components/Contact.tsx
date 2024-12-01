import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from './ContactForm';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Interested in collaboration or have a research proposal? Let's connect and discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center p-6"
          >
            <Mail className="w-8 h-8 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600">contact@bulentsoykan.com</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center p-6"
          >
            <MapPin className="w-8 h-8 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Location</h3>
            <p className="text-gray-600">San Francisco Bay Area</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center p-6"
          >
            <Phone className="w-8 h-8 mx-auto mb-4 text-blue-600" />
            <h3 className="text-xl font-semibold mb-2">Phone</h3>
            <p className="text-gray-600">Available upon request</p>
          </motion.div>
        </div>

        <ContactForm />
      </div>
    </section>
  );
}