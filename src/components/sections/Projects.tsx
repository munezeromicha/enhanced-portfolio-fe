import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from '../shared/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and secure payment processing.',
      image: '/images/projects/ecommerce.jpg',
      tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task manager with real-time updates and team collaboration features.',
      image: '/images/projects/taskmanager.jpg',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      liveUrl: '#',
      githubUrl: '#',
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;