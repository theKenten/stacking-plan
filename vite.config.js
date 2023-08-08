import { fileURLToPath, URL } from 'node:url'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		cssInjectedByJsPlugin()
	],
	build: {
		rollupOptions: {
			output: {
				// combine into a singular JS file
				manualChunks: undefined,

				// served to jsdelivr at
				// https://cdn.jsdelivr.net/gh/theKenten/stacking-plan/dist/assets/index.js
				entryFileNames: 'index.js',
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
