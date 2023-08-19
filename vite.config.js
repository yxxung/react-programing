import { defineConfig } from 'vite';

const viteConfig = defineConfig({
  server: {
    host: 'localhost',
    port: 8000,
    cors: true,
  }
});

export default viteConfig;