import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
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
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 p-3 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-full shadow-lg hover:from-primary-700 hover:to-secondary-700 dark:hover:from-primary-600 dark:hover:to-secondary-600 transition-all duration-300 hover:scale-110"
      >
        <ArrowUp size={20} />
      </button>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 dark:border-gray-700">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 text-gray-400 dark:text-gray-500 mb-4 md:mb-0">
              <span>© {currentYear} {portfolioData.personal.name}. Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>and lots of data.</span>
            </div>
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