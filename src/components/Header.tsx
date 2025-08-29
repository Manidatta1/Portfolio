import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const RESUME_URL = "https://drive.google.com/file/d/1pclD4FkosrfA8xdmAqrqatk7azS6MomB/view?usp=sharing";

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
      ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700'
      : 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-sm border-b border-gray-200/50 dark:border-gray-700/50'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portfolio
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-center space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                >
                  {item.name}
                </button>
              ))}
              <ThemeToggle />
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <Download size={16} />
                Resume
              </a>
            </div>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-t border-gray-200 dark:border-gray-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors duration-300"
              >
                {item.name}
              </button>
            ))}
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 w-full px-3 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-base font-medium rounded-md hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-md"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
