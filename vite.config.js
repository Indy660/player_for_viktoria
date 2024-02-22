import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// const base = '/player_for_viktoria'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@public': path.resolve(__dirname, 'public'),
    }
  },
  define: {
    'import.meta.env.BASE_URL': JSON.stringify(process.env.VITE_BASE_URL),
  },
  base:
    process.env.NODE_ENV === "production"
      ? "/player_for_viktoria/"
      : "/",
  // TODO: не работает вообще
  // base: process.env.VITE_BASE_URL,
  // base:
  //   process.env.NODE_ENV === "production"
  //     ? process.env.VITE_BASE_URL
  //     : "/",
})
