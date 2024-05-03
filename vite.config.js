import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/dist/',
  root: './',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },
  server: {
    port: 3000,
  },
})
