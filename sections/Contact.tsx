import React, { useState, Suspense } from 'react';
import { motion } from 'framer-motion';
import { Send, Loader2 } from 'lucide-react';
import { Canvas, ThreeElements } from '@react-three/fiber';
import { Float, Box, MeshDistortMaterial } from '@react-three/drei';

const MailIcon3D = () => {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={1}>
      <group rotation={[0.5, 0.5, 0]}>
         {/* Envelope Body */}
         <Box args={[3, 2, 0.2]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#3B82F6" roughness={0.3} />
         </Box>
         {/* Flap */}
         <Box args={[3, 1.2, 0.1]} position={[0, 0.6, 0.1]} rotation={[0.5, 0, 0]}>
            <MeshDistortMaterial color="#60A5FA" speed={1} distort={0.1} />
         </Box>
      </group>
    </Float>
  );
};

const Contact: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate API call to backend
    // In production: fetch('http://localhost:5000/api/contact', { ... })
    setTimeout(() => {
        setFormStatus('success');
        // Reset after 3 seconds
        setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Let's work together</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Have a project in mind or just want to say hi? I'm always open to discussing new opportunities.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={formStatus === 'submitting'}
                className="w-full py-4 rounded-xl bg-primary text-gray-900 font-bold text-lg shadow-lg hover:shadow-primary/30 transition-all flex items-center justify-center gap-2"
              >
                {formStatus === 'submitting' ? (
                  <Loader2 className="animate-spin" />
                ) : formStatus === 'success' ? (
                  "Message Sent!"
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Right: 3D Mail Icon */}
          <div className="hidden lg:block h-[400px] w-full">
            <Canvas>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <Suspense fallback={null}>
                <MailIcon3D />
              </Suspense>
            </Canvas>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;