// src/i18next.d.ts
import 'react-i18next';

declare module 'react-i18next' {
  interface DefaultNamespace {
    translation: {
      aboutpage: {
        title: string;
        intro: string;
        whoWeAreTitle: string;
        whoWeAreText: string;
        visionText: string;
      };
      // Diğer çeviri anahtarlarınızı burada tanımlayın
    };
  }
}
