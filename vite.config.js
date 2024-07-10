import { fileURLToPath, URL } from 'node:url'
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js"

// Handlebars - allows import of static html files
import { resolve } from 'path'
import handlebars from '@agilebot/vite-plugin-handlebars'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		// Handlebars - allows import of static html files
		handlebars({
			partialDirectory: resolve(__dirname, 'src/partials'),
	    }),
		cssInjectedByJsPlugin(),
	],
	build: {
		rollupOptions: {
			output: {
				// combine into a singular JS file
				manualChunks: undefined,

				// served to jsdelivr at
				// https://cdn.jsdelivr.net/gh/theKenten/stacking-plan@latest/dist/index.js
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
