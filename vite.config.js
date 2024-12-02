import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), VitePWA({
    registerType: 'prompt',
    injectRegister: 'auto',

    pwaAssets: {
      disabled: false,
      config: true,
    },

    manifest: {
      name: 'KTJ25_PWA',
      short_name: 'KTJ25_PWA',
      start_url: '/index.html',
      description: 'KTJ25_PWA',
      background_color: '#123456',
      theme_color: '#fffaa1',
      orientation: 'landscape-primary',
      display: 'standalone',
    },

    workbox: {
      globPatterns: ['**/*.{jsx,js,css,html,svg,png,ico}'],
      cleanupOutdatedCaches: true,
      clientsClaim: true,
    },

    devOptions: {
      enabled: true,
      // navigateFallback: 'index.html',
      suppressWarnings: true,
      type: 'module',
    },
  })],
})