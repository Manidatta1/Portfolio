import React from 'react';
import { Building, Calendar, MapPin, ChevronRight } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Experience: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-primary-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Building impactful data science solutions across diverse industries
            </p>
          </div>

          <div className="space-y-8">
            {portfolioData.experience.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < portfolioData.experience.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-primary-300 dark:from-primary-600 to-transparent"></div>
                )}
                
                <div className="bg-gradient-to-r from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 dark:bg-primary-500 rounded-full border-4 border-white dark:border-gray-900 shadow-lg"></div>
                  
                  <div className="ml-8">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1 mb-4 lg:mb-0">
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h3>
                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-300 mb-2">
                          <div className="flex items-center gap-2">
                            <Building size={18} className="text-primary-600 dark:text-primary-400" />
                            <span className="font-semibold text-primary-700 dark:text-primary-300">{exp.company}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar size={18} className="text-secondary-600 dark:text-secondary-400" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin size={18} className="text-accent-600 dark:text-accent-400" />
                            <span>{exp.location}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Key Achievements</h4>
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div 
                          key={achievementIndex}
                          className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 transition-all duration-300 group"
                        >
                          <div className="flex-shrink-0 mt-1">
                            <ChevronRight size={16} className="text-primary-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors" />
                          </div>
                          <p className="text-gray-700 dark:text-gray-300 leading-relaxed group-hover:text-gray-900 dark:group-hover:text-white transition-colors">
                            {achievement}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;