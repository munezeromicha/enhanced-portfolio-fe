export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl: string;
    githubUrl: string;
    featured: boolean;
  }
  
  export interface Skill {
    name: string;
    level: number;
    category: string;
    icon?: string;
  }
  
  export interface SocialLink {
    platform: string;
    url: string;
    icon: string;
  }
  
  export interface InputProps {
    type?: string;
    label?: string;
    placeholder?: string;
    error?: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    required?: boolean;
    name: string;
    className?: string;
  }
  
  export interface ButtonProps {
    children: React.ReactNode;
    variant?: 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
    isLoading?: boolean;
  }
  
  export interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverable?: boolean;
  }