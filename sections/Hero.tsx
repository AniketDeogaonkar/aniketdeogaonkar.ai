import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Scene3D from "../components/Scene3D";

const TypewriterText = ({
  texts,
  speed = 150,
  pause = 1500,
}: {
  texts: string[];
  speed?: number;
  pause?: number;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (index >= texts.length) return;

    if (subIndex === texts[index].length + 1 && !reverse) {
      const timeout = setTimeout(() => setReverse(true), pause);
      return () => clearTimeout(timeout);
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % texts.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => prev + (reverse ? -1 : 1));
        setDisplayedText(texts[index].substring(0, subIndex));
      },
      reverse ? speed / 2 : speed,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, texts, speed, pause]);

  return (
    <span className="inline-block min-h-[1.5em] text-primary whitespace-nowrap">
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-[14px] h-[4px] bg-primary ml-1 align-baseline"
      />
    </span>
  );
};

const Hero: React.FC = () => {
  const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById("projects");
    if (element) {
      const offset = 80; // Navbar height buffer
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 w-full h-full block">
        <Scene3D />
      </div>

      {/* Subtle overlay gradient to blend bottom edge */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-gray-950/50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center md:text-left"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-300 font-medium text-sm border border-blue-200 dark:border-blue-800"
          >
            👋 Available for Hire
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight leading-tight text-gray-900 dark:text-white font-display">
            Hi, I'm <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
              Aniket Deogaonkar
            </span>
          </h1>

          <h2 className="text-2xl md:text-4xl text-gray-700 dark:text-gray-200 font-bold mb-6 h-12 font-display">
            I am a{" "}
            <TypewriterText
              texts={[
                "AI Engineer ",
                "ML Engineer ",
                "Deep Learning Fan ",
                "Django Developer ",
              ]}
            />
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed font-light">
            I build intelligent applications that blend cutting-edge AI with
            beautiful, responsive user interfaces. Turning complex data into
            intuitive experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href="#projects"
              onClick={handleScrollToProjects}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all bg-gray-900 text-white dark:bg-white dark:text-gray-900 z-20 cursor-pointer"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>

            <motion.a
              href="https://drive.google.com/file/d/1jFT3HEuUtdG2BQN7s3BJ_dZtelRXVGf4"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(59, 130, 246, 0.1)",
                borderColor: "#3B82F6",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full border-2 border-gray-300 dark:border-gray-700 font-bold flex items-center justify-center gap-2 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm transition-colors text-gray-900 dark:text-white z-20"
            >
              Download CV <Download size={20} />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Spacer for 3D Scene visibility */}
        <div className="hidden md:block h-full min-h-[500px]">
          {/* The 3D Scene background is positioned to occupy this space visually */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
