import React, { ReactNode } from 'react';

interface SimpleGlassProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'strong' | 'subtle';
}

export const SimpleGlass: React.FC<SimpleGlassProps> = ({ 
  children, 
  className = '',
  variant = 'default'
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'strong':
        return 'bg-glass-bg-strong backdrop-blur-[20px] border border-glass-border shadow-lg';
      case 'subtle':
        return 'bg-glass-bg/50 backdrop-blur-[8px] border border-glass-border/50 shadow-sm';
      default:
        return 'bg-glass-bg backdrop-blur-[12px] border border-glass-border shadow-glass';
    }
  };

  return (
    <div className={`${getVariantStyles()} ${className}`}>
      {children}
    </div>
  );
};