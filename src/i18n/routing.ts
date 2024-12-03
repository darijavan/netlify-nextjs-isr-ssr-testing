import { createSharedPathnamesNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";
import { defaultLocale, supportedLocales } from ".";

export const routing = defineRouting({
    // A list of all locales that are supported
    locales: supportedLocales,
    // Used when no locale matches
    defaultLocale,
    // Do not show the locale prefix in the URL for the default locale
    localePrefix: "as-needed",
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const { Link, redirect, usePathname, useRouter } =
    createSharedPathnamesNavigation(routing);
