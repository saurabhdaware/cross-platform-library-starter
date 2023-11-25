/// <reference types="vitest" />

import { defineConfig } from "vite";
import { viteCrossPlatform } from "@cross-platform-tools/vite-plugin";

export default defineConfig({
  plugins: [
    viteCrossPlatform({
      platform: process.env.PLATFORM!,
      supportedPlatforms: ["client", "node"],
      lib: {
        entryDir: 'src',
        outDir: 'dist',
      }
    }),
  ],
  build: {
    lib: {
      entry: './src/index.ts'
    }
  }
});
