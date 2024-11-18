import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpBackend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .on('languageChanged',(lang) => {
  if (lang === 'en') {
    document.documentElement.setAttribute('dir', 'ltr');
    document.documentElement.setAttribute('lang', 'en');
  }
  if (lang === 'ar') {
    document.documentElement.setAttribute('dir', 'rtl');
    document.documentElement.setAttribute('lang', 'ar');
  }
}
)
  .use(HttpBackend) // Loads translations from JSON files
  .use(LanguageDetector) // Detects user language
  .use(initReactI18next) // Integrates with React
  .init({
    fallbackLng: 'en', // Default language
    debug: true, // Enable debug mode
    interpolation: {
      escapeValue: false, // React already escapes values
    },
  });

export default i18n;