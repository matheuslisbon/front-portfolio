"use client"
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

interface LanguageContextProps {
  language: string;
  toggleLanguage: () => void;
}


const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);


interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'pt' : 'en';
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextProps => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('use Language must be used within a Language Provider');
  }
  return context;
};
