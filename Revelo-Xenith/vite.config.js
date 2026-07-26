import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Standard Vite + React setup, dev server on port 5173
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
       'straining-never-switch.ngrok-free.dev'
    ],
    port: 9000,
  },
});
