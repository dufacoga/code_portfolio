import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/code_portfolio/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Code Portfolio',
        short_name: 'Portfolio',
        start_url: '/code_portfolio/',
        display: 'standalone',
        background_color: '#0c0f12',
        theme_color: '#0c0f12',
        icons: [
          {
            src: '/code_portfolio/images/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/code_portfolio/images/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})