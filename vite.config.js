import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Nombre exacto de tu repositorio en GitHub
const REPO_NAME = '/school-management-platform/'

export default defineConfig({
  plugins: [react()],
  base: REPO_NAME,
})
