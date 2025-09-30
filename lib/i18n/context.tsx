import React, { createContext, useContext, useEffect, useState } from 'react';
import { Language, Translation } from './types';
import { translations, defaultLanguage } from '../../locales';

interface I18nContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translation;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-language';

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(defaultLanguage);
  const [isLoading, setIsLoading] = useState(true);

  // Load language from localStorage on mount
  useEffect(() => {
    try {
      const savedLanguage = localStorage.getItem(STORAGE_KEY) as Language;
      if (savedLanguage && Object.keys(translations).includes(savedLanguage)) {
        setLanguageState(savedLanguage);
      }
    } catch (error) {
      // Silent fallback to default language in production
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to load language from localStorage:', error);
      }
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Save language to localStorage when it changes
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    try {
      localStorage.setItem(STORAGE_KEY, newLanguage);
    } catch (error) {
      // Silent fallback in production
      if (process.env.NODE_ENV === 'development') {
        console.warn('Failed to save language to localStorage:', error);
      }
    }
  };

  const t = translations[language];

  return (
    <I18nContext.Provider value={{ language, setLanguage, t, isLoading }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}