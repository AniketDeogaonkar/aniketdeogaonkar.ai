import React from 'react';
import { motion } from 'framer-motion';
import { CERTIFICATIONS } from '../constants';
import { ExternalLink, Award } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-gray-500 dark:text-gray-400">Professional validations and achievements.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.a
              key={cert.id}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="flex items-center gap-4 bg-white dark:bg-gray-900 p-6 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="w-16 h-16 flex-shrink-0 bg-gray-50 dark:bg-gray-800 rounded-xl p-3 flex items-center justify-center border border-gray-100 dark:border-gray-700">
                {cert.image ? (
                   <img src={cert.image} alt={cert.issuer} className="w-full h-full object-contain" />
                ) : (
                   <Award className="text-primary w-8 h-8" />
                )}
              </div>
              
              <div className="flex-grow min-w-0">
                <h3 className="font-bold text-gray-900 dark:text-white truncate pr-2 group-hover:text-primary transition-colors">
                    {cert.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">{cert.issuer}</p>
                <p className="text-xs text-gray-400 mt-1">Issued {cert.date}</p>
              </div>

              <ExternalLink size={16} className="text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;