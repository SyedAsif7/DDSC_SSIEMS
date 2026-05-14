import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? (process.env.GITHUB_ACTIONS ? '/DDSC_SSIEMS/' : '/') : '/',
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
      manifest: {
        name: 'DCode Developers Club',
        short_name: 'DCode',
        description: 'Official website of DCode Developers Club SSIEMS',
        theme_color: '#8b33ea',
        icons: [
          {
            src: 'images/club/Dcode-Logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'images/club/Dcode-Logo.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'images/club/Dcode-Logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-ui': ['lucide-react', 'framer-motion', 'clsx', 'tailwind-merge'],
          'vendor-radix': [
            '@radix-ui/react-dialog',
            '@radix-ui/react-avatar',
            '@radix-ui/react-dropdown-menu',
            '@radix-ui/react-tooltip',
            '@radix-ui/react-scroll-area'
          ],
        },
      },
    },
  },
}));
