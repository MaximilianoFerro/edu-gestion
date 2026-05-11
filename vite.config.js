import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// En local: base = '/'
// En GitHub Pages: base = '/nombre-del-repo/' (se inyecta desde el workflow)
const base = process.env.VITE_BASE_PATH || '/'

export default defineConfig({
  plugins: [react()],
  base,
})
