import { defineConfig, devices } from "@playwright/test"
import { urls } from "./config"

export default defineConfig({
  testDir: "./tests",
  timeout: 30 * 1000, //30 seconds per test
  retries: 0, // adjust if needed
  reporter: [["list"]], // You can change it to html, dot, etc
  projects: [
    {
      name: "chromium", //optional, can be changed to webkit or firefox, or you can add another project below.
      use: {
        baseURL: urls.base || "http://localhost", // Dynamically assign the base URL
        headless: false,
        viewport: { width: 1280, height: 720 },
        ignoreHTTPSErrors: true, // skip SSL issues
        actionTimeout: 0, // no limit for individual actions
        screenshot: "only-on-failure",
        video: "retain-on-failure", //keep videos on fail
        trace: "on-first-retry", // Playwright tracing
      },
    },
  ],
})
