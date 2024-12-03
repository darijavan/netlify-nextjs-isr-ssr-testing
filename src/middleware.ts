import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing, {
    // TODO: Clarify with the team if we should enable locale detection
    localeDetection: false,
});

export const config = {
    matcher:
        "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
