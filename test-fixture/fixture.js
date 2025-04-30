import { test as fixture } from "@playwright/test"
import pages from "../pages/pages"

const test = fixture.extend({
  loginPage: async ({ page }, use) => {
    await use(pages.loginPage(page))
  },
})

export default test
