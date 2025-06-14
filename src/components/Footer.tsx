import React from 'react';
import { Github, Linkedin, Heart, ArrowUp } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative">
      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-700 dark:to-purple-700 rounded-full shadow-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-600 dark:hover:to-purple-600 transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-center">
          {/* Social Links - Centered */}
          <div className="space-y-6 text-center">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex space-x-4 justify-center">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 group"
              >
                <Github size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-gray-800 dark:bg-gray-700 rounded-lg hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors duration-300 group"
              >
                <Linkedin size={20} className="group-hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section - Improved Mobile Layout */}
        <div className="mt-12 pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="text-center space-y-4">
            {/* Copyright and Made with love - Better mobile formatting */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 text-gray-400 dark:text-gray-500">
              <div className="flex items-center gap-1">
                <span>© {currentYear} {portfolioData.personal.name}.</span>
              </div>
              <div className="flex items-center gap-1">
                <span>Made with</span>
                <Heart size={16} className="text-red-500" />
                <span>and lots of data.</span>
              </div>
            </div>

            {/* Tech stack - Separate line for better mobile readability */}
            <div className="text-gray-400 dark:text-gray-500 text-sm">
              <span>Powered by React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;