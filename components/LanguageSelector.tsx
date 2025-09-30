import { motion } from 'framer-motion';
import { useI18n } from '../lib/i18n';

const languageFlags = {
  pt: '🇧🇷',
  en: '🇬🇧'
};

const languageNames = {
  pt: 'Português',
  en: 'English'
};

export function LanguageSelector() {
  const { language, setLanguage } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === 'pt' ? 'en' : 'pt');
  };

  return (
    <button 
      onClick={toggleLanguage}
      className="h-9 w-9 cursor-pointer bg-transparent border-0 outline-none p-0 m-0"
      style={{ 
        background: 'transparent',
        border: 'none',
        outline: 'none',
        boxShadow: 'none'
      }}
    >
      <motion.div
        key={language} // Re-render on language change for animation
        initial={{ scale: 0.8, rotate: -15 }}
        animate={{ scale: 1, rotate: 0 }}
        exit={{ scale: 0.8, rotate: 15 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 17,
          duration: 0.3 
        }}
        className="flex items-center justify-center h-full w-full"
      >
        <span 
          className="text-lg" 
          role="img" 
          aria-label={languageNames[language]}
        >
          {languageFlags[language]}
        </span>
      </motion.div>
      <span className="sr-only">
        {language === 'pt' ? 'Alternar para inglês' : 'Switch to Portuguese'}
      </span>
    </button>
  );
}