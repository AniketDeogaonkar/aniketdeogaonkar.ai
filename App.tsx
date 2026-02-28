import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Certifications from './sections/Certifications';
import Testimonials from './sections/Testimonials';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

const App: React.FC = () => {
  // Theme State
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // If saved as 'light', return false. Otherwise (saved as 'dark' or not saved), return true.
      return savedTheme === 'light' ? false : true;
    }
    return true; // Default to dark for SSR or initial state
  });

  // Apply Theme
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 font-sans selection:bg-primary selection:text-black">
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;