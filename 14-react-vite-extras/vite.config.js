import { defineConfig } from 'vite';
import reactPlugin from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import eslintPlugin from 'vite-plugin-eslint';
import { ViteAliases } from 'vite-aliases'

export default defineConfig({
    plugins: [reactPlugin(), svgr({ exportAsDefault: true }), eslintPlugin(), ViteAliases()]
})