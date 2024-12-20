import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vitest/config";

export default defineConfig({
    plugins: [tsconfigPaths()],
    test: {
        dir: "src",
        environment: "jsdom",
        setupFiles: "src/setupTests.ts",
    },
});
