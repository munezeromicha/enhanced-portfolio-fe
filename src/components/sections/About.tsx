import React from 'react';
import { User, Calendar, MapPin, GraduationCap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <img
                src="/images/projects/mySelf.png"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-72 h-72 bg-blue-50 rounded-full -z-10" />
            <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-indigo-50 rounded-full -z-10" />
          </div>

          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
                About Me
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                I'm a passionate Full Stack Developer with over 5 years of experience 
                in building web applications and mobile applications. I specialize in creating efficient, 
                scalable, and user-friendly solutions that solve real-world problems.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <User className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Full Stack Developer</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">5+ Years Experience</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">Kigali, Rwanda</span>
                </div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3">
                  <GraduationCap className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-600">B.S. Computer Science</span>
                </div>
              </div>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Professional Journey
              </h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-px bg-gray-200 relative">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1 top-1.5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Senior Developer at TechCorp</h4>
                    <p className="text-gray-600">2020 - Present</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-px bg-gray-200 relative">
                    <div className="absolute w-3 h-3 bg-blue-600 rounded-full -left-1 top-1.5" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Full Stack Developer at StartupX</h4>
                    <p className="text-gray-600">2018 - 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;