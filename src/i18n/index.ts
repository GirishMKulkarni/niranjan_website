import en from './locales/en.json';
import hi from './locales/hi.json';
import mr from './locales/mr.json';

export type Language = 'en' | 'hi' | 'mr';

export const languages: Record<Language, string> = {
  en: 'English',
  hi: 'हिंदी',
  mr: 'मराठी'
};

export const defaultLang: Language = 'en';

const translations = { en, hi, mr } as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang in translations) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return function t(key: string): string {
    const keys = key.split('.');
    let value: unknown = translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        // Fallback to English
        value = translations.en;
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = (value as Record<string, unknown>)[fallbackKey];
          } else {
            return key; // Return key if not found
          }
        }
        break;
      }
    }

    return typeof value === 'string' ? value : key;
  };
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove leading slash and any existing language prefix
  const cleanPath = path.replace(/^\//, '').replace(/^(en|hi|mr)\//, '');

  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }

  return `/${lang}/${cleanPath}`;
}

export function getAllLanguageAlternates(path: string): { lang: Language; href: string }[] {
  return Object.keys(languages).map((lang) => ({
    lang: lang as Language,
    href: getLocalizedPath(path, lang as Language)
  }));
}

export { translations };
