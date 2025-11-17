import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: 'docs', // <-- change "dist" to "build" or whatever you like
  },
  plugins: [react()],
  base: '/',
})
