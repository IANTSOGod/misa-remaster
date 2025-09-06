import { viteSourceLocator } from "@metagptx/vite-plugin-source-locator";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    viteSourceLocator({
      prefix: "mgx",
    }),
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true, // écoute sur toutes les interfaces réseau
    port: 5173, // port local
    strictPort: true,
    // autoriser toutes les connexions externes
    allowedHosts: ["192.168.4.159"],
  },
}));
