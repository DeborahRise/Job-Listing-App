import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Server from 'webpack-dev-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
});
