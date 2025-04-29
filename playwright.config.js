import { defineConfig, devices } from "@playwright/test"
import { urls } from "./config"

export default defineConfig({
  projects: [
    {
      name: "Google Chrome",
      use: {
        ...devices["Desktop Chrome"],
        baseURL: urls.base, // Dynamically assign the base URL
      },
    },
  ],
})
