import { motion } from 'framer-motion';

interface TechBadgeProps {
  name: string;
  logoUrl?: string;
  svgContent?: string;
  realColor?: string;
  delay?: number;
}

export function TechBadge({ name, logoUrl, svgContent, realColor, delay = 0 }: TechBadgeProps) {
  /**
   * Technology logos visibility configuration for theme adaptation
   * Categories based on original logo colors and visibility patterns
   */
  const DARK_LOGOS = ['Git', 'Java', 'MySQL'] as const;
  const LIGHT_LOGOS = ['React', 'Go', 'Python', 'AWS', 'Grafana'] as const;
  
  const logoCategory = DARK_LOGOS.includes(name as any) ? 'dark' : 
                     LIGHT_LOGOS.includes(name as any) ? 'light' : 'default';
  
  /**
   * Returns theme-adaptive CSS filter classes for optimal logo visibility
   * Ensures consistent brand recognition across light and dark themes
   */
  const getFilterClasses = (): string => {
    const baseClasses = 'grayscale saturate-0';
    
    switch (logoCategory) {
      case 'dark':
        return `${baseClasses} brightness-75 contrast-125 dark:brightness-150 dark:contrast-150`;
      case 'light':
        return `${baseClasses} brightness-50 contrast-200 dark:brightness-110 dark:contrast-110`;
      default:
        return `${baseClasses} brightness-110 contrast-125 dark:brightness-125 dark:contrast-140`;
    }
  };

  return (
    <motion.div 
      className="relative flex items-center gap-2 px-3 py-2 rounded-lg bg-card/60 backdrop-blur-sm border border-border/50 hover:bg-accent/90 transition-all duration-300 group cursor-pointer shadow-sm hover:shadow-md dark:shadow-none"
      style={{
        '--tech-color': realColor || '#666'
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 10, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.3, delay: delay * 0.05 }}
      viewport={{ once: true }}
      whileHover={{ 
        scale: 1.02,
        borderColor: realColor || '#3b82f6'
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Hover border effect with brand color */}
      <div 
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none"
        style={{
          border: `2px solid ${realColor || '#3b82f6'}`,
        }}
        aria-hidden="true"
      />
      
      {/* Technology logo container */}
      <div 
        className="w-4 h-4 flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-300 z-10 relative"
        style={{
          '--tech-color': realColor || '#666'
        } as React.CSSProperties}
      >
        {logoUrl ? (
          <img 
            src={logoUrl} 
            alt={`${name} logo`} 
            className={`max-w-full max-h-full object-contain tech-logo-colored group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100 transition-all duration-300 ${getFilterClasses()}`}
          />
        ) : svgContent ? (
          <div 
            className={`w-full h-full tech-logo-colored group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 group-hover:saturate-100 transition-all duration-300 ${getFilterClasses()}`}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className="text-xs text-muted-foreground group-hover:scale-110 transition-transform duration-300">
            ?
          </div>
        )}
      </div>
      
      {/* Text */}
      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 z-10 relative whitespace-nowrap">
        {name}
      </span>
    </motion.div>
  );
}