import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce solution with real-time inventory management, secure payments, and an admin dashboard.',
    image: '/images/projects/ecommerce.jpg',
    tags: ['Next.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://ecommerce-example.com',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    featured: true,
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'A collaborative task manager with real-time updates, team management, and progress tracking features.',
    image: '/images/projects/taskmanager.jpg',
    tags: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
    liveUrl: 'https://taskmanager-example.com',
    githubUrl: 'https://github.com/yourusername/taskmanager',
    featured: true,
  },
  {
    id: '3',
    title: 'AI Content Generator',
    description: 'An AI-powered content generation tool that helps create blog posts, social media content, and more.',
    image: '/images/projects/ai-generator.jpg',
    tags: ['Python', 'OpenAI', 'FastAPI', 'React'],
    liveUrl: 'https://ai-generator-example.com',
    githubUrl: 'https://github.com/yourusername/ai-generator',
    featured: false,
  },
  // Add more projects as needed
];

