import React, { useState } from 'react';
import { Code, Database, Settings, Brain, ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Skills: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const skillCategories = [
    {
      title: 'Languages',
      icon: Code,
      items: portfolioData.skills.languages,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Libraries',
      icon: Database,
      items: portfolioData.skills.libraries,
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Tools',
      icon: Settings,
      items: portfolioData.skills.tools,
      color: 'from-purple-500 to-purple-600',
    },
  ];

  const conceptCategories = Object.entries(portfolioData.skills.concepts);

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-primary-500 mx-auto rounded-full"></div>
          </div>

          {/* Technical Skills */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <div key={category.title} className="group">
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                    <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Concepts with Dropdowns */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-100 dark:border-gray-700 relative">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-accent-500 to-accent-600 rounded-lg">
                <Brain className="text-white" size={24} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Core Concepts</h3>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {conceptCategories.map(([concept, details], index) => (
                <div key={concept} className="relative">
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === concept ? null : concept)}
                    className="w-full p-4 bg-gradient-to-r from-primary-500 to-secondary-500 dark:from-primary-600 dark:to-secondary-600 text-white rounded-lg font-semibold hover:from-primary-600 hover:to-secondary-600 dark:hover:from-primary-500 dark:hover:to-secondary-500 transition-all duration-300 flex items-center justify-between group min-h-[60px]"
                  >
                    <span className="text-sm font-medium text-left leading-tight pr-2">{concept}</span>
                    <ChevronDown 
                      size={16} 
                      className={`transition-transform duration-300 flex-shrink-0 ${
                        activeDropdown === concept ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {activeDropdown === concept && (
                    <>
                      {/* Backdrop */}
                      <div 
                        className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
                        onClick={() => setActiveDropdown(null)}
                      />
                      
                      {/* Modal-style dropdown */}
                      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl border border-gray-200 dark:border-gray-600 max-w-md w-full max-h-96 overflow-hidden animate-fade-in">
                          <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                            <div className="flex items-center justify-between">
                              <h4 className="text-lg font-semibold text-gray-900 dark:text-white">{concept}</h4>
                              <button
                                onClick={() => setActiveDropdown(null)}
                                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                              >
                                <ChevronDown size={20} className="text-gray-500 dark:text-gray-400 rotate-180" />
                              </button>
                            </div>
                          </div>
                          <div className="max-h-80 overflow-y-auto">
                            <div className="p-4 space-y-3">
                              {details.map((detail, detailIndex) => (
                                <div 
                                  key={detailIndex}
                                  className="flex items-start gap-3 p-3 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                                >
                                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                                  <span className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{detail}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;