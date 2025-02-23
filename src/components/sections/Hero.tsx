import React from 'react';
import { Briefcase, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800" />
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-200 dark:bg-blue-700 rounded-full opacity-20 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-200 dark:bg-indigo-700 rounded-full opacity-20 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="text-gray-900 dark:text-gray-100">Hi, I'm </span>
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              MUNEZERO NTAGANIRA Michel
            </span>
          </h1>
          
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Full Stack Developer specializing in building exceptional digital experiences
          </p>
          
          <div className="mt-10 flex justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
            >
              <Briefcase className="w-5 h-5 mr-2" />
              View Projects
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full border-2 border-gray-300 dark:border-gray-600 text-gray-600 dark:text-gray-300 hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;