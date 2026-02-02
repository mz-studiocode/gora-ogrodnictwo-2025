'use client';

import React from 'react';
import { iconMap } from '@/lib/icons';
import { cn } from '@/lib/utils';

interface DynamicIconProps {
  name: string;
  className?: string;
  size?: number | string;
}

const DynamicIcon: React.FC<DynamicIconProps> = ({ 
  name, 
  className, 
  size = 24,
  ...props 
}) => {
  const IconComponent = iconMap[name as keyof typeof iconMap];
  
  if (!IconComponent) {
    console.warn(`Ikona "${name}" nie istnieje`);
    return <div className="w-6 h-6 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">?</div>;
  }
  
  return (
    <IconComponent 
      className={cn("w-7 h-7 text-accent", className)}
      size={size}
      {...props}
    />
  );
};

export default DynamicIcon;
