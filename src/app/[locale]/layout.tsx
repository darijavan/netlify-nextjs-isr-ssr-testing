import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import { getDirection, SupportedLocale } from "~/i18n";
import { routing } from "~/i18n/routing";
import RootStyleRegistry from "~/lib/RootStyleRegistry";
import "./globals.css";

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
    children,
    params: { locale },
}: Readonly<{
    children: React.ReactNode;
    params: { locale: SupportedLocale };
}>) {
    unstable_setRequestLocale(locale);

    const messages = await getMessages();
    const dir = getDirection(locale);

    return (
        <html dir={dir} lang={locale}>
            <body>
                <RootStyleRegistry>
                    <NextIntlClientProvider messages={messages}>
                        {children}
                    </NextIntlClientProvider>
                </RootStyleRegistry>
            </body>
        </html>
    );
}
