import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vsharp from 'vite-plugin-vsharp'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? '/snova-react-ts/' : '/',
  plugins: [
    vsharp({
      height: 1000,
    }),
    react(),
  ],
}))
