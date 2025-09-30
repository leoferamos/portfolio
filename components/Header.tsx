import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

import { useI18n } from '../lib/i18n';

export function Header() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) {
        return saved === 'dark';
      }
      // Fallback to system preference when no saved theme
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return true;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = useI18n();

  // Handle mobile menu close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest('header')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  useEffect(() => {
    // Apply theme to document root for CSS variable cascade
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    
    const root = document.documentElement;
    if (newTheme) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'skills', label: t.navigation.skills },
    { id: 'certifications', label: t.navigation.certifications },
    { id: 'projects', label: t.navigation.projects },
    { id: 'contact', label: t.navigation.contact }
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <motion.div 
        className="w-full px-6 py-6 flex items-center justify-between relative"
        animate={{
          backgroundColor: isMenuOpen ? "rgba(0, 0, 0, 0.95)" : "transparent",
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          backdropFilter: isMenuOpen ? "blur(12px)" : "none",
        }}
      >
        {/* Logo positioned at the very left */}
        <motion.div 
          className="cursor-pointer transition-opacity"
          onClick={() => scrollToSection('hero')}
          whileHover={{ 
            opacity: 0.7,
            scale: 1.05
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <Logo size={36} />
        </motion.div>

        {/* Right side controls grouped together */}
        <div className="flex items-center space-x-4">
          {/* Theme button with custom animation */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-transparent group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              initial={false}
              animate={{ 
                rotate: isDark ? 180 : 0,
                scale: isDark ? 1.1 : 1
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="group-hover:text-primary transition-colors duration-200"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </motion.div>
          </motion.button>

          {/* Hamburger menu with custom animation */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-full transition-colors duration-200 hover:bg-transparent group"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <motion.div
              className="group-hover:text-primary transition-colors duration-200"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -90 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Menu className="h-5 w-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.button>
        </div>
      </motion.div>

      {/* Menu dropdown animado */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-full left-0 right-0 z-40 bg-black/95 backdrop-blur-lg shadow-xl overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-6">
              <div className="flex flex-col space-y-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMenuOpen(false);
                    }}
                    className="text-left py-3 px-4 text-lg font-medium text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}