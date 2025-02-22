import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const ProjectCard = ({ title, description, image, tags, liveUrl, githubUrl }: ProjectCardProps) => {
  return (
    <div className="group bg-white rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 hover:-translate-y-2">
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        
        <p className="mt-3 text-gray-600 text-sm">
          {description}
        </p>
        
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-6 flex items-center gap-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </a>
          
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-600 hover:text-blue-600 transition-colors duration-300"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;