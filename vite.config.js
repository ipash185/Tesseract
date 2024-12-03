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
      name: 'Tesseract',
      short_name: 'Tesseract',
      icons: [
        {
          "src": "/Tesseract/pwa-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/Tesseract/pwa-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "/Tesseract/pwa-maskable-192x192.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "/Tesseract/pwa-maskable-512x512.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
      start_url: '/Tesseract/',
      description: '4D Simulator',
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
      enabled: false,
      navigateFallback: '/Tesseract/',
      suppressWarnings: true,
      type: 'module',
    },
  })],
  base: '/Tesseract/',
})