import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({ params: { locale } }: WithLocaleParmsProps) {
    unstable_setRequestLocale(locale);

    return (
        <>
            Homepage in {locale}
            <br />
            This was generated and cached at {new Date().toISOString()}
        </>
    );
}
