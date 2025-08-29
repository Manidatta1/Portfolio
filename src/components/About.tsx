import React from 'react';
import { Download, MapPin, Mail, Phone, Award, Target, Users } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { portfolioData } from '../data/portfolioData';
import profileImg from '../assets/profile.jpeg';

const About: React.FC = () => {
  const [ref, isVisible] = useScrollAnimation();

  const RESUME_URL = "https://drive.google.com/file/d/1pclD4FkosrfA8xdmAqrqatk7azS6MomB/view?usp=sharing";


  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden" ref={ref}>
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width=%2280%22%20height=%2280%22%20viewBox=%220%200%2080%2080%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23f3f4f6%22%20fill-opacity=%220.4%22%3E%3Cpath%20d=%22M0%200h80v80H0V0zm20%2020v40h40V20H20zm20%2035a15%2015%200%201%201%200-30%2015%2015%200%200%201%200%2030z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] dark:bg-[url('data:image/svg+xml,%3Csvg%20width=%2280%22%20height=%2280%22%20viewBox=%220%200%2080%2080%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill=%22none%22%20fill-rule=%22evenodd%22%3E%3Cg%20fill=%22%23374151%22%20fill-opacity=%220.1%22%3E%3Cpath%20d=%22M0%200h80v80H0V0zm20%2020v40h40V20H20zm20%2035a15%2015%200%201%201%200-30%2015%2015%200%200%201%200%2030z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left Column - Profile & Stats */}
            <div className="space-y-8">
              {/* Profile Image with different styling */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-80 h-80 bg-white dark:bg-gray-800 rounded-3xl p-4 shadow-2xl border border-gray-100 dark:border-gray-700">
                    <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 rounded-2xl overflow-hidden">
                      <img
                        src={profileImg}
                        alt="Profile"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg rotate-12 hover:rotate-0 transition-transform duration-300">
                    <Award className="text-white" size={24} />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center shadow-lg -rotate-12 hover:rotate-0 transition-transform duration-300">
                    <Target className="text-white" size={24} />
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 p-6 rounded-2xl border border-blue-200 dark:border-blue-700/30">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">2+</div>
                  <div className="text-sm text-blue-700 dark:text-blue-300 font-medium">Years Experience</div>
                </div>
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 p-6 rounded-2xl border border-purple-200 dark:border-purple-700/30">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">8+</div>
                  <div className="text-sm text-purple-700 dark:text-purple-300 font-medium">Projects Completed</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-2xl border border-green-200 dark:border-green-700/30">
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">3.943</div>
                  <div className="text-sm text-green-700 dark:text-green-300 font-medium">GPA</div>
                </div>
                <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 p-6 rounded-2xl border border-orange-200 dark:border-orange-700/30">
                  <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">10+</div>
                  <div className="text-sm text-orange-700 dark:text-orange-300 font-medium">Technologies</div>
                </div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{portfolioData.personal.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400 font-semibold">{portfolioData.personal.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-8">
                  {portfolioData.personal.summary}
                </p>

                {/* Contact Info Cards */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center">
                      <Mail className="text-blue-600 dark:text-blue-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Email</div>
                      <div className="text-gray-900 dark:text-white font-semibold">{portfolioData.personal.email}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-xl flex items-center justify-center">
                      <Phone className="text-green-600 dark:text-green-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Phone</div>
                      <div className="text-gray-900 dark:text-white font-semibold">{portfolioData.personal.phone}</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-2xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center">
                      <MapPin className="text-purple-600 dark:text-purple-400" size={20} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Location</div>
                      <div className="text-gray-900 dark:text-white font-semibold">{portfolioData.personal.location}</div>
                    </div>
                  </div>
                </div>

                {/* Download Resume Button */}
                <a
                  href={RESUME_URL}
                  download
                  className="inline-flex items-center gap-3 w-full justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
