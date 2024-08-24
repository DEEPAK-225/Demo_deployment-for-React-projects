import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/Demo_deployment-for-React-projects/",
  plugins: [react()],
})
