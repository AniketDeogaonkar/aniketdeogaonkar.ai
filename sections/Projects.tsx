import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-500 dark:text-gray-400">Some things I've built recently.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="block group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 border border-gray-100 dark:border-gray-800 hover:border-primary/50 dark:hover:border-primary/50 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)] cursor-pointer"
            >
              {/* Image */}
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300 z-10" />
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
                
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 group-hover:bg-primary/10 group-hover:text-primary-dark transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;