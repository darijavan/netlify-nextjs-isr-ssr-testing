import { setupDevPlatform } from "@cloudflare/next-on-pages/next-dev";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        emotion: true,
    },
};

if (process.env.NODE_ENV === "development") {
    await setupDevPlatform();
}

export default withNextIntl(nextConfig);
