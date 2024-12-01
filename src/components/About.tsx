import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Code, Database, Microscope } from 'lucide-react';

export function About() {
  const skills = [
    { icon: <Brain className="w-6 h-6" />, title: 'Machine Learning', description: 'Deep learning, neural networks, and predictive modeling' },
    { icon: <Code className="w-6 h-6" />, title: 'AI Development', description: 'Building and deploying AI solutions at scale' },
    { icon: <Database className="w-6 h-6" />, title: 'Big Data', description: 'Processing and analyzing large-scale datasets' },
    { icon: <Microscope className="w-6 h-6" />, title: 'Research', description: 'Publishing papers and conducting experiments' },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            As a research scientist, I combine theoretical knowledge with practical implementation
            to solve complex problems in artificial intelligence and machine learning.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-blue-600 mb-4">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}