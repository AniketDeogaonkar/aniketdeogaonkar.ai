import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900 transition-colors overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-16 text-center"
        >
          My Journey
        </motion.h2>

        <div className="relative">
          {/* Timeline Line (Desktop Center) */}
          <div className="hidden md:block absolute w-0.5 bg-gray-200 dark:bg-gray-700 h-full left-1/2 transform -translate-x-1/2 top-0" />

          {EXPERIENCE.map((item, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div key={item.id} className="relative mb-12 md:mb-24 last:mb-0">
                <div className={`flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <motion.div
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className={`w-full md:w-[calc(50%-40px)] ${isLeft ? 'md:text-right' : 'md:text-left'} mb-8 md:mb-0`}
                  >
                    <div className={`bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700 relative group`}>
                       {/* Arrow pointing to line */}
                       <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gray-50 dark:bg-gray-800 border-t border-r border-gray-100 dark:border-gray-700 rotate-45 ${isLeft ? '-right-2 border-l-0 border-b-0' : '-left-2 border-t-0 border-r-0 border-l border-b'}`}></div>

                       <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} items-center`}>
                          <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold rounded-full bg-primary/10 text-primary-dark dark:text-primary">
                            {item.period}
                          </span>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.role}</h3>
                          <h4 className="text-md font-medium text-gray-500 dark:text-gray-400">{item.company}</h4>
                       </div>
                    </div>
                  </motion.div>

                  {/* Center Icon/Logo */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <motion.div 
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        className="w-16 h-16 rounded-full bg-white dark:bg-gray-800 border-4 border-gray-100 dark:border-gray-700 shadow-lg flex items-center justify-center z-10 overflow-hidden"
                    >
                        {item.logo ? (
                            <img src={item.logo} alt={item.company} className="w-10 h-10 object-contain" />
                        ) : (
                            <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
                        )}
                    </motion.div>
                  </div>
                  
                  {/* Empty Side for alignment */}
                  <div className="w-full md:w-[calc(50%-40px)]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;