import React from 'react';
import { ChevronDown, Github, Linkedin, Sparkles, Code, Database } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpeg';

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 overflow-hidden pt-16">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-lg rotate-45 animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full animate-ping"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full animate-pulse"></div>

        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23667eea%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width=%2260%22%20height=%2260%22%20viewBox=%220%200%2060%2060%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23ffffff%22%20fill-opacity=%220.05%22%3E%3Ccircle%20cx=%2230%22%20cy=%2230%22%20r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

        {/* Large gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-300/10 to-purple-300/10 dark:from-blue-500/10 dark:to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-300/10 to-pink-300/10 dark:from-purple-500/10 dark:to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Floating Tech Icons */}
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <Code className="absolute top-20 left-20 text-blue-500/30 dark:text-blue-400/20 animate-bounce" size={32} />
            <Database className="absolute top-32 right-32 text-purple-500/30 dark:text-purple-400/20 animate-pulse" size={28} />
            <Sparkles className="absolute bottom-40 left-32 text-cyan-500/30 dark:text-cyan-400/20 animate-ping" size={24} />
          </div>

          {/* Enhanced Profile Image - Properly positioned */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full p-2 animate-bounce-gentle shadow-2xl">
                <div className="w-full h-full bg-white dark:bg-gray-200 rounded-full overflow-hidden ring-4 ring-white/50 dark:ring-gray-300/50">
                  <img
                    src={profileImg}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              {/* Floating badge with better contrast */}
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-xl animate-pulse">
                <span className="text-white font-bold text-lg">DS</span>
              </div>
              {/* Subtle glow effect */}
              <div className="absolute inset-0 w-48 h-48 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-2xl animate-pulse"></div>
            </div>
          </div>

          {/* Main Content with beautiful typography */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-100 dark:to-purple-100 mb-4 tracking-tight leading-none">
                {portfolioData.personal.name.split(' ')[0]}
              </h1>
              <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 mb-8 tracking-wide">
                {portfolioData.personal.name.split(' ')[1]}
              </h1>
            </div>

            {/* Decorative divider */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent w-24"></div>
              <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
              <Sparkles className="text-purple-500 dark:text-purple-400" size={24} />
              <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent w-24"></div>
            </div>

            <p className="text-2xl md:text-3xl text-gray-700 dark:text-blue-200 font-medium mb-8 tracking-wide">
              {portfolioData.personal.title}
            </p>

            <p className="text-lg text-gray-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              Passionate about transforming data into actionable insights and building intelligent solutions that make a difference.
            </p>

            {/* Enhanced Social Links - Only GitHub and LinkedIn */}
            <div className="flex justify-center space-x-8 mb-12">
              <a
                href={portfolioData.personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/20 hover:border-gray-300 dark:hover:border-white/30 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Github className="text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={32} />
              </a>
              <a
                href={portfolioData.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-5 bg-white/80 dark:bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white dark:hover:bg-white/20 transition-all duration-300 border border-gray-200/50 dark:border-white/20 hover:border-gray-300 dark:hover:border-white/30 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="text-gray-700 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" size={32} />
              </a>
            </div>

            {/* Beautiful CTA Buttons */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <button
                onClick={() => scrollToSection('projects')}
                className="group px-12 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-2 border border-blue-500/20"
              >
                <span className="flex items-center justify-center gap-3">
                  <Sparkles size={22} className="group-hover:animate-spin" />
                  Explore My Work
                </span>
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-12 py-5 bg-white/90 dark:bg-white/10 border-2 border-gray-300 dark:border-white/30 text-gray-700 dark:text-white font-semibold rounded-2xl hover:bg-gray-50 dark:hover:bg-white/20 hover:border-gray-400 dark:hover:border-white/50 transition-all duration-300 backdrop-blur-sm transform hover:-translate-y-2 shadow-lg hover:shadow-xl"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button
            onClick={() => scrollToSection('about')}
            className="group p-4 text-gray-600 dark:text-white/60 hover:text-gray-800 dark:hover:text-white transition-all duration-300 animate-bounce hover:animate-none"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">Discover More</span>
              <ChevronDown size={36} className="group-hover:scale-110 transition-transform" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;