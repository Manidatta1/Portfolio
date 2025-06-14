import React, { useState } from 'react';
import { Github, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';

const Projects: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();
  const [filter, setFilter] = useState('All');
  const [expandedProject, setExpandedProject] = useState<number | null>(null);
  const [expandedTechnologies, setExpandedTechnologies] = useState<number | null>(null);

  const technologies = [...new Set(portfolioData.projects.flatMap(p => p.technologies))];
  const filters = ['All', ...technologies];

  const filteredProjects = filter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(p => p.technologies.includes(filter));

  const toggleExpanded = (index: number) => {
    setExpandedProject(expandedProject === index ? null : index);
  };

  const toggleTechnologies = (index: number) => {
    setExpandedTechnologies(expandedTechnologies === index ? null : index);
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 to-primary-50 dark:from-gray-800 dark:to-gray-900" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary-600 dark:bg-primary-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-4 max-w-2xl mx-auto">
              Showcasing innovative data science solutions and applications
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.slice(0, 8).map((tech) => (
              <button
                key={tech}
                onClick={() => setFilter(tech)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === tech
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white shadow-lg border-0'
                    : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-700 dark:hover:text-blue-300 border border-gray-200 dark:border-gray-600 hover:border-blue-300 dark:hover:border-blue-500'
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 dark:border-gray-700"
              >
                {/* Project Image */}
                <div className="h-48 bg-gradient-to-br from-primary-100 to-secondary-100 dark:from-primary-900 dark:to-secondary-900 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                    {project.title}
                  </h3>
                  
                  {/* Description with expand/collapse */}
                  <div className="mb-4">
                    <p className={`text-gray-600 dark:text-gray-300 ${
                      expandedProject === index ? '' : 'line-clamp-3'
                    }`}>
                      {project.description}
                    </p>
                    {project.description.length > 150 && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="text-blue-600 dark:text-blue-400 text-sm font-medium hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 flex items-center gap-1 mt-2"
                      >
                        {expandedProject === index ? (
                          <>
                            Show less <ChevronUp size={14} />
                          </>
                        ) : (
                          <>
                            Read more <ChevronDown size={14} />
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Key Points - Show first 2, expand to show all */}
                  <div className="space-y-2 mb-4">
                    {project.keyPoints.slice(0, expandedProject === index ? project.keyPoints.length : 2).map((point, pointIndex) => (
                      <div key={pointIndex} className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-600 dark:text-gray-300">{point}</span>
                      </div>
                    ))}
                    {project.keyPoints.length > 2 && expandedProject !== index && (
                      <div className="flex items-start gap-2">
                        <ChevronRight size={14} className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0" />
                        <span className="text-sm text-gray-500 dark:text-gray-400 italic">
                          +{project.keyPoints.length - 2} more achievements...
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Technologies with expandable view */}
                  <div className="mb-6">
                    <div className="flex flex-wrap gap-2">
                      {/* Show first 3 technologies or all if expanded */}
                      {project.technologies.slice(0, expandedTechnologies === index ? project.technologies.length : 3).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded text-xs font-medium border border-blue-200 dark:border-blue-700/50"
                        >
                          {tech}
                        </span>
                      ))}
                      
                      {/* Show expandable button if there are more than 3 technologies */}
                      {project.technologies.length > 3 && (
                        <button
                          onClick={() => toggleTechnologies(index)}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 rounded text-xs font-medium transition-colors duration-300 flex items-center gap-1 border border-gray-200 dark:border-gray-600"
                        >
                          {expandedTechnologies === index ? (
                            <>
                              Show less <ChevronUp size={12} />
                            </>
                          ) : (
                            <>
                              +{project.technologies.length - 3} more <ChevronDown size={12} />
                            </>
                          )}
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Action Button - Only GitHub */}
                  <div className="flex">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-600 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-500 transition-colors duration-300 text-sm w-full justify-center border border-gray-800 dark:border-gray-500"
                    >
                      <Github size={16} />
                      View Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Show More Button - Only visible when there are more than 9 projects */}
          {portfolioData.projects.length > 9 && (
            <div className="text-center mt-12">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-500 dark:to-purple-500 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 dark:hover:from-blue-400 dark:hover:to-purple-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                View All Projects
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default Projects;