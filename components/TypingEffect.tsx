import { useState, useEffect } from 'react';
import { useI18n } from '../lib/i18n';

interface TypingEffectProps {
  speed?: number;
  delay?: number;
}

export function TypingEffect({ speed = 60, delay = 1200 }: TypingEffectProps) {
  const { t } = useI18n();
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = [
    t.hero.typing.softwareEngineer,
    t.hero.typing.devopsEnthusiast,
    t.hero.typing.cloudExplorer
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const fullText = texts[currentTextIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
      } else {
        setCurrentText(prev => fullText.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), delay);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, speed, delay]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
}