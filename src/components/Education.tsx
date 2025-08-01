import React from 'react';
import { GraduationCap, Calendar, BookOpen } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Education: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
            <div className="w-24 h-1 bg-blue-600 dark:bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-8">
            {Array.isArray(portfolioData?.education) &&
              portfolioData.education.map((edu, index) => (
                <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600">
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Degree Info */}
                    <div className="md:col-span-1">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg border border-blue-200 dark:border-blue-700/50">
                          <GraduationCap className="text-blue-600 dark:text-blue-400" size={24} />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h3>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-1">{edu.school}</p>
                          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300 mb-2">
                            <Calendar size={16} />
                            <span>{edu.year}</span>
                          </div>
                          <div className="inline-block px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium border border-green-200 dark:border-green-700/50">
                            GPA: {edu.gpa}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Coursework */}
                    <div className="md:col-span-2">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen className="text-purple-600 dark:text-purple-400" size={20} />
                        <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Key Coursework</h4>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {edu.coursework.map((course, courseIndex) => (
                          <div
                            key={courseIndex}
                            className="flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500 transition-colors duration-300"
                          >
                            <div className="w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                            <span className="text-gray-700 dark:text-gray-300 font-medium">{course}</span>
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

export default Education;