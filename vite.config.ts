import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({

  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  // Use "/" on Vercel (served from domain root), "/Cascade_Space/" for GitHub Pages
  base: process.env.VERCEL ? "/" : "/Cascade_Space/",
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // Maps @ to src folder
    }
  },
  build: {
    sourcemap: true, // Enable source maps
  },
  server: {
    host: "::",
    port: 8080
  }
}));
