import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Dil dosyalarını içeri aktarın
import enTranslations from './locales/en/translation.json';
import trTranslations from './locales/tr/translation.json';

i18n
  .use(initReactI18next) // react-i18next'i kullan
  .init({
    resources: {
      en: { translation: enTranslations },
      tr: { translation: trTranslations },
    },
    lng: 'tr', // Varsayılan dil Türkçe
    fallbackLng: 'tr', // Dil bulunamazsa varsayılan olarak Türkçe kullanılır
    interpolation: {
      escapeValue: false, // React'te otomatik olarak HTML karakterlerini korur
    },
  });

export default i18n;
