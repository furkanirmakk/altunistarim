import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./locales/en/translation.json";
import translationTr from "./locales/tr/translation.json";

// Çeviri kaynaklarını tanımlayın
const resources = {
  en: {
    translation: translationEn,
  },
  tr: {
    translation: translationTr,
  },
};

// i18n yapılandırması
i18n.use(initReactI18next).init({
  resources, // Çeviri kaynaklarını burada kullanıyoruz
  lng: "en", // Varsayılan dil
  fallbackLng: "en", // Dil bulunamazsa geri dönüş dili
  interpolation: {
    escapeValue: false, // React zaten XSS koruması sağladığı için
  },
});

export default i18n;
