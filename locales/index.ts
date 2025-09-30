import { en } from './en';
import { pt } from './pt';
import { Language, Translation } from '../lib/i18n/types';

export const translations: Record<Language, Translation> = {
  en,
  pt
};

export const defaultLanguage: Language = 'en';
export const availableLanguages: Language[] = ['en', 'pt'];

export { en, pt };