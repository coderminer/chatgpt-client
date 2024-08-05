import path from "path"
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  clearScreen: false,
  server: {
    open: true,
    port: 1420,
    strictPort: true,
    watch: {
      // 3. tell vite to ignore watching `src-tauri`
      ignored: ["**/src-tauri/**"],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, "./src"), 
    }
  },
  build: {
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            let split = 'node_modules/'
            if (id.includes('.pnpm/')) {
              split += '.pnpm/'
            }
            const name = id
              .toString()
              .split(split)[1]
              .split('/')[0]
              .toString();
            
            if (name.includes('react')) {
              return 'react-vendor'
            } else if (name.includes('jsonwebtoken')) {
              return 'encryption'
            } else if(name.includes('refractor')) {
              return 'highlight'
            } else {
              return 'vendor'
            }
          }
        },
        entryFileNames: 'js/[name].[hash].js',
        assetFileNames: '[ext]/[name].[hash].[ext]',
        chunkFileNames: 'js/[name].[hash].js'
      }
    }
  }
})
