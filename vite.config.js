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
				manualChunks: undefined,
			},
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url))
		}
	}
})
