import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/zairahms.github.io/', // adjust if using custom domain or subfolder
});
