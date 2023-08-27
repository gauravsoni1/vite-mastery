import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import cssInjectInJS from 'vite-plugin-css-injected-by-js';
import { resolve } from 'path';

export default defineConfig({
    plugins: [reactPlugin(), cssInjectInJS()],
    build: {
        lib: {
            entry: resolve("src", "components"),
            formats: ["es"],
            name: "uiLib",
            fileName: 'uiLib'
        }
    }
})