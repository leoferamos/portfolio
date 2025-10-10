import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { useI18n } from '../lib/i18n';

// LeetCode icon as SVG since it's not in lucide-react
const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
  >
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/>
  </svg>
);

export function SocialSidebar() {
  const { t } = useI18n();
  const [currentSection, setCurrentSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'skills', 'certifications', 'projects', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Determine current section
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setCurrentSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Subtle color system that adapts to each section background
  const getIconColor = () => {
    switch (currentSection) {
      case 'hero':
        return 'text-muted-foreground hover:text-foreground transition-colors duration-500';
      case 'skills':
      case 'projects':
        // Sections with bg-muted/30 - adjust contrast
        return 'text-foreground/70 hover:text-primary transition-colors duration-500';
      case 'certifications':
      case 'contact':
        // Sections with normal background
        return 'text-muted-foreground hover:text-foreground transition-colors duration-500';
      default:
        return 'text-muted-foreground hover:text-foreground transition-colors duration-500';
    }
  };

  const socialLinks = [
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/leoferamos",
      label: t.social.github
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/leonardoframos/",
      label: t.social.linkedin
    },
    {
      icon: <Mail className="w-5 h-5" />,
      href: "mailto:leonardoramosdev@gmail.com",
      label: t.social.email
    },
    {
      icon: <LeetCodeIcon className="w-5 h-5" />,
      href: "https://leetcode.com/u/leonardoframos/",
      label: t.social.leetcode
    }
  ];

  return (
    <motion.div
      className="fixed right-4 top-[45%] -translate-y-1/2 z-40"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
    >
      <div className="flex flex-col items-center space-y-1">
        {/* Top line */}
        <motion.div 
          className={`w-px h-12 bg-current ${getIconColor()}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />

        {/* Social icons */}
        <div className="flex flex-col space-y-3 py-3">
          {socialLinks.map((link, index) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`hover:scale-125 transition-all duration-300 ${getIconColor()}`}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.15 }}
              whileHover={{ scale: 1.25, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
            >
              {link.icon}
              <span className="sr-only">{link.label}</span>
            </motion.a>
          ))}
        </div>

        {/* Bottom line */}
        <motion.div 
          className={`w-px h-12 bg-current ${getIconColor()}`}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        />
      </div>
    </motion.div>
  );
}
