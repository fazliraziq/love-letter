import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// If you deploy to GitHub Pages under https://<user>.github.io/<repo>/,
// set `base` to "/<repo>/". For Vercel/Netlify or a custom domain, leave it as "/".
export default defineConfig({
  base: "/",
  plugins: [react()],
});
