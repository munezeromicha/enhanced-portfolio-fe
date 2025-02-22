import React from 'react';
import { Mail, Linkedin, Twitter } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
  iconColor?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({
  className = '',
  iconSize = 20,
  iconColor = 'text-gray-600 hover:text-blue-600',
}) => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/yourusername',
      icon: Linkedin,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yourusername',
      icon: Twitter,
    },
    {
      name: 'Email',
      url: 'mailto:munezerontaganiramichel@gmail.com',
      icon: Mail,
    },
  ];

  return (
    <div className={`flex items-center space-x-4 ${className}`}>
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`transition-colors duration-300 ${iconColor}`}
            aria-label={link.name}
          >
            <Icon size={iconSize} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;