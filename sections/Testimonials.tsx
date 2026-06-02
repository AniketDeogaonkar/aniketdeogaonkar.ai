import React from 'react';
import { motion } from 'framer-motion';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">What people say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
                <motion.div
                    key={t.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.2 }}
                    className="bg-gray-50 dark:bg-gray-800 p-8 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col items-center text-center"
                >
                    <div className="text-4xl mb-4">{t.avatar}</div>
                    <p className="text-gray-600 dark:text-gray-300 italic mb-6">"{t.text}"</p>
                    <h4 className="font-bold text-gray-900 dark:text-white">{t.name}</h4>
                    <span className="text-xs text-primary font-medium tracking-wider uppercase">{t.role}</span>
                </motion.div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;