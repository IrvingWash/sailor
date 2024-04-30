import { resolve } from "path";

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
    resolve: {
        alias: {
            // Можно (и даже нужно) делать это через плагин
            "@ui-kit": resolve(__dirname, "./src/ui-kit"),
        },
    },
    plugins: [react()],
});
