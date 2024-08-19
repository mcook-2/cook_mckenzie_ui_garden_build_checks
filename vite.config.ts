import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
    host: true, // Expose the server on the network
  },
  preview: {
    port: 8001, // Or any other port you prefer
  },
  build: {
    lib: {
      entry: './src/main.tsx',
      name: 'component-library',
      fileName: (format) => `component-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },

    },
  },
});
