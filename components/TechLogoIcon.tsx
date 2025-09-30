import React from 'react';
import { motion } from 'framer-motion';

interface TechLogoIconProps {
  name: string;
  logoUrl?: string;
  svgContent?: string;
  realColor?: string;
  delay?: number;
}

export function TechLogoIcon({ name, logoUrl, svgContent, realColor, delay = 0 }: TechLogoIconProps) {
  // List of logos that need extra brightness in dark theme
  const veryDarkLogos = ['Git', 'Java', 'MySQL'];
  const isVeryDarkLogo = veryDarkLogos.includes(name);
  
  // Adjust filter based on logo type
  const getGrayscaleFilter = () => {
    if (isVeryDarkLogo) {
      return 'grayscale(1) brightness(1.6) contrast(1.7) saturate(0)';
    }
    return 'grayscale(1) brightness(1.2) contrast(1.4) saturate(0)';
  };
  return (
    <motion.div 
      className="relative flex flex-col items-center p-6 rounded-xl bg-card/60 backdrop-blur-sm border border-border/50 hover:bg-accent/90 transition-all duration-600 group tech-card-glow overflow-hidden"
      style={{
        '--tech-color': realColor || '#666'
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.96 }}
    >
      {/* Subtle glow effect on hover with tech color */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm"
        style={{
          background: `radial-gradient(circle at center, ${realColor || '#3b82f6'}20, transparent 70%)`
        }}
      />
      
      {/* Animated border glow with tech color */}
      <div 
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
        style={{
          background: `linear-gradient(45deg, ${realColor || '#3b82f6'}10, transparent, ${realColor || '#3b82f6'}10)`,
          filter: 'blur(1px)'
        }}
      />
      <div 
        className="w-12 h-12 flex items-center justify-center group-hover:scale-110 transition-all duration-500 z-10 relative"
        style={{
          '--tech-color': realColor || '#666'
        } as React.CSSProperties}
      >
        {logoUrl ? (
          <img 
            src={logoUrl} 
            alt={`${name} logo`} 
            className="max-w-full max-h-full object-contain tech-logo-colored"
            style={{
              filter: getGrayscaleFilter(),
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              if (realColor) {
                e.currentTarget.style.filter = `grayscale(0) brightness(1.15) contrast(1.1) saturate(1.3) drop-shadow(0 0 8px ${realColor}40)`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = getGrayscaleFilter();
            }}
          />
        ) : svgContent ? (
          <div 
            className="w-full h-full tech-logo-colored"
            style={{
              filter: getGrayscaleFilter(),
              transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onMouseEnter={(e) => {
              if (realColor) {
                e.currentTarget.style.filter = `grayscale(0) brightness(1.15) contrast(1.1) saturate(1.3) drop-shadow(0 0 8px ${realColor}40)`;
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.filter = getGrayscaleFilter();
            }}
            dangerouslySetInnerHTML={{ __html: svgContent }}
          />
        ) : (
          <div className="text-3xl text-muted-foreground group-hover:scale-110 transition-transform duration-300">
            ?
          </div>
        )}
      </div>
      <span className="mt-3 text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-500 z-10 relative">
        {name}
      </span>
    </motion.div>
  );
}