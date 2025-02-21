import react from '@vitejs/plugin-react';

export default {
  plugins: [react()],
  build: {
    outDir: 'dist',
    // Other Vite build options
  },
};
