// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// __dirname para ESM/TS
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'dist',      // <- volta para o padrão do Vite (alinha com a Vercel)
    emptyOutDir: true,
    // sourcemap: true,   // (opcional) habilite se quiser debug do build
  },
  server: {
    port: 3000,
    open: true,
  },
  preview: {
    port: 4173,
    open: true,
  },
});
