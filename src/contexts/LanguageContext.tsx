import React, { createContext, useContext, useState, useEffect } from 'react';
import { Language, translations } from '@/locales/translations';

type LanguageContextType = {
    lang: Language;
    setLang: (lang: Language) => void;
    t: (section: keyof typeof translations.en, key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [lang, setLangState] = useState<Language>('en');

    useEffect(() => {
        const saved = localStorage.getItem('cascade-lang') as Language;
        if (saved && Object.keys(translations).includes(saved)) {
            setLangState(saved);
        }
    }, []);

    const setLang = (newLang: Language) => {
        setLangState(newLang);
        localStorage.setItem('cascade-lang', newLang);
    };

    // Translation helper function
    const t = (section: keyof typeof translations.en, key: string): string => {
        try {
            // @ts-ignore - Dynamic key access
            const str = translations[lang]?.[section]?.[key];
            // Fallback to English if translation is missing for the selected language
            if (!str) {
                // @ts-ignore
                return translations['en']?.[section]?.[key] || key;
            }
            return str;
        } catch (e) {
            return key;
        }
    };

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
