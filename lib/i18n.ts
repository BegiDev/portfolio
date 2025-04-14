import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationUz from '../public/locales/uz/common.json';
import translationEn from '../public/locales/en/common.json';


i18n.use(initReactI18next).init({
  resources: {
    uz: { common: translationUz },
    en: { common: translationEn },
  },
  lng: 'en',
  fallbackLng: 'en',
  ns: ['common'],
  defaultNS: 'common',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
