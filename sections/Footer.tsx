import React from "react";
import { Github, Linkedin, Instagram, Heart, Keyboard } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
            Aniket Deogaonkar
          </h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-2">
            Building digital experiences with code & creativity.
          </p>
        </div>

        <div className="flex gap-6 items-center">
          {/* GitHub - Dark Gray */}
          <a
            href="https://github.com/aniketdeogaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#333333] dark:hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>

          {/* LinkedIn - Trademark Blue */}
          <a
            href="https://linkedin.com/in/aniketdeogaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#0077b5] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>

          {/* Instagram - Reddish Purple */}
          <a
            href="https://www.instagram.com/aniket_deogaonkar/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#C13584] transition-colors"
            aria-label="Instagram"
          >
            <Instagram size={24} />
          </a>

          {/* Monkeytype - Yellow */}
          <a
            href="https://monkeytype.com/profile/aniketdeogaonkar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-[#e2b714] transition-colors"
            aria-label="Monkeytype"
          >
            <Keyboard size={24} />
          </a>
        </div>
      </div>

      <div className="mt-8 text-center text-gray-400 text-sm flex items-center justify-center gap-1">
        © {new Date().getFullYear()} Made with{" "}
        <Heart size={12} className="text-red-500 fill-current" /> using React &
        Three.js
      </div>
    </footer>
  );
};

export default Footer;
