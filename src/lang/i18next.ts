import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './en/en';
import id from './id/id';

i18next
  .use(initReactI18next)
  .init({
    resources: {
      en,
      id
    },
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18next;
