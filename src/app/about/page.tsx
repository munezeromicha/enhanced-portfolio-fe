import React from 'react';
import { Metadata } from 'next';
import About from '@/components/sections/About';

export const metadata: Metadata = {
  title: 'About Me | MUNEZERO NTAGANIRA Michel - Portfolio',
  description: 'Learn more about my journey, skills, and experience as a Full Stack Developer.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <About />
    </main>
  );
}