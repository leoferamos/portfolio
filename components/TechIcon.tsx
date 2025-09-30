import React from 'react';

interface TechIconProps {
  name: string;
  icon: React.ReactNode;
  color?: string;
}

export function TechIcon({ name, icon, color = 'text-foreground' }: TechIconProps) {
  return (
    <div className="flex flex-col items-center p-4 rounded-lg bg-card hover:bg-accent transition-colors group">
      <div className={`text-3xl ${color} group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <span className="mt-2 text-sm text-muted-foreground">{name}</span>
    </div>
  );
}