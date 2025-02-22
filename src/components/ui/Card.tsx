import React from 'react';
import { CardProps } from '@/types';

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  hoverable = false,
}) => {
  return (
    <div
      className={`
        bg-white rounded-xl shadow-lg overflow-hidden
        ${hoverable ? 'transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl' : ''}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export { Card };