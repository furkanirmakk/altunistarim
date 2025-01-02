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
  resources: {
    en: { translation: { key: "value" } },
  },
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
