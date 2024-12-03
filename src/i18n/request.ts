import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";
import type { SupportedLocale, TranslationObject } from ".";
import { routing } from "./routing";

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    if (!routing.locales.includes(locale as SupportedLocale)) notFound();

    return {
        messages: (
            (await import(`./translations/${locale}`)) as {
                default: TranslationObject;
            }
        ).default,
    };
});
