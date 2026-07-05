import React from 'react';
import { Badge } from '@/components/ui/badge';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  badge?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  badge,
  centered = true,
  className = '',
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      {badge && (
        <div className={`mb-4 ${centered ? 'flex justify-center' : ''}`}>
          <Badge>{badge}</Badge>
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-foreground/70 max-w-2xl mx-auto text-lg">
          {subtitle}
        </p>
      )}
      {centered && (
        <div className="w-24 h-1 bg-main border-2 border-border mx-auto mt-6 shadow-shadow" />
      )}
    </div>
  );
};
