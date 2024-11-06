import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
	base: "./", // This ensures that all paths are relative to the current HTML file's location
	build: {
		minify: "esbuild",
	},
	plugins: [react()],
});
