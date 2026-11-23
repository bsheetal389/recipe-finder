import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: '.vite-cache',
  resolve: {
    dedupe: ['react', 'react-dom'],
  },
  optimizeDeps: {
    force: true,
  },
})
