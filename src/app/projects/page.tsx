import React from 'react';
import { Metadata } from 'next';
import { projects } from '@/data/projects';
import ProjectCard from '@/components/shared/ProjectCard';

export const metadata: Metadata = {
  title: 'Projects | Michael - Portfolio',
  description: 'Explore my portfolio of web development and software engineering projects.',
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-16 bg-gray-50">
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900">
              My Projects
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
              A collection of my work, side projects, and experiments.
            </p>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => project.featured)
                .map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                ))}
            </div>
          </div>


          <div className="mt-20">
            <h2 className="text-2xl font-semibold text-gray-900 mb-8">
              All Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects
                .filter(project => !project.featured)
                .map(project => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    tags={project.tags}
                    liveUrl={project.liveUrl}
                    githubUrl={project.githubUrl}
                  />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}