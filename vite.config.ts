import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@/components': resolve(__dirname, 'src/components'),
      '@/data': resolve(__dirname, 'src/data'),
      '@/types': resolve(__dirname, 'src/types')
    }
  },
  build: {
    target: 'esnext',
    sourcemap: true
  }
})
