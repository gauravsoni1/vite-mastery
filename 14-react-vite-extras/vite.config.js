import { defineConfig, splitVendorChunkPlugin } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';
import { ViteAliases } from 'vite-aliases'

function manualChunks(id) {
    console.log(id);
    if (id.includes("node_modules")) {
        return "vendor"
    }

    if (id.includes("components")) {
        return "components"
    }

    return "main"
}

export default defineConfig({
    plugins: [reactPlugin(),
    svgr({ exportAsDefault: true }),
    eslintPlugin(),
    ViteAliases(),
        // splitVendorChunkPlugin()
    ],
    build: {
        rollupOptions: {
            output: {
                manualChunks: manualChunks
            }
        }
    }
})