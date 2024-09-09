import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/graduateWork",  // Задайте базовый путь как имя вашего репозитория на GitHub
  plugins: [react()],
})