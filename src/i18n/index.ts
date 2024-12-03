import * as translations from "./translations";

export type SupportedLocale = keyof typeof translations;

export type TranslationKey = keyof (typeof translations)["en"];

/**
 * Type of the translation object, based on the english translation.
 *
 * Every other translation file other than `en` should be typed using this type.
 */
export type TranslationObject = Readonly<{
    [key in TranslationKey]: DeepCastString<(typeof translations)["en"][key]>;
}>;

export const supportedLocales = Object.keys(translations) as SupportedLocale[];

export const defaultLocale: SupportedLocale = "en";

const rtlLocales: SupportedLocale[] = ["fa"];

export const getDirection = (locale: SupportedLocale) =>
    rtlLocales.includes(locale) ? "rtl" : "ltr";
