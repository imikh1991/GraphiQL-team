import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

interface LangType {
  // Стандартный язык
  fallbackLng: string;
  lng: string;
  debug: boolean;
  detection: {
    order: string[];
    cache: string[];
  };
  interpolation: {
    escapeValue: boolean;
  };
}

const params: LangType = {
  fallbackLng: 'en',
  lng: 'en',
  debug: false,

  detection: {
    order: ['queryString', 'cookie'],
    cache: ['cookie'],
  },
  interpolation: {
    escapeValue: false,
  },
};

i18n
  // Подключение бэкенда i18next
  .use(Backend)
  // Автоматическое определение языка
  .use(LanguageDetector)
  // модуль инициализации
  .use(initReactI18next)
  .init(params);

export default i18n;
