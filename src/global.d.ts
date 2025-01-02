declare module 'react-i18next' {
  import { TFunction } from 'i18next';

  // Eğer TFunction kullanıyorsanız, doğru türü burada tanımlayın.
  export function useTranslation(): {
    t: TFunction;
  };
}
