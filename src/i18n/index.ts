import sk from './locales/sk.json';
import cz from './locales/cz.json';
import en from './locales/en.json';

export const translate = (key: string, language: string): string => {
    let langData: { [key: string]: string } = {};

    if (language === 'SK') {
        langData = sk;
    } else if (language === 'CZ') {
        langData = cz;
    } else if (language === 'EN') {
        langData = en;
    }

    return langData[key];
};
