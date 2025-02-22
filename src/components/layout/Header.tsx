import React from 'react';
import { Button } from '../ui/Button';
import SocialLinks from '../shared/SocialLinks';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/90 to-indigo-600/90" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
            <span className="block">Hi, I'm MUNEZERO NTAGANIRA Michel</span>
            <span className="block text-blue-200 mt-2">Full Stack Developer</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
            I build exceptional and accessible digital experiences for the web.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get in Touch
            </Button>
          </div>

          <div className="mt-8">
            <SocialLinks iconColor="text-white hover:text-blue-200" iconSize={24} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;