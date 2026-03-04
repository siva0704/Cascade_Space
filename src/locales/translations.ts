import en from './en';
import hi from './hi';
import kn from './kn';
import te from './te';
import mr from './mr';
import ta from './ta';
import bn from './bn';
import gu from './gu';
import ml from './ml';

export type Language = 'en' | 'hi' | 'kn' | 'te' | 'mr' | 'ta' | 'bn' | 'gu' | 'ml';

export const languageNames: Record<Language, string> = {
    en: 'English',
    hi: 'हिंदी',
    kn: 'ಕನ್ನಡ',
    te: 'తెలుగు',
    mr: 'मराठी',
    ta: 'தமிழ்',
    bn: 'বাংলা',
    gu: 'ગુજરાતી',
    ml: 'മലയാളം'
};

export const translations = {
    en,
    hi,
    kn,
    te,
    mr,
    ta,
    bn,
    gu,
    ml
};

export type TranslationKey = keyof typeof translations.en;
