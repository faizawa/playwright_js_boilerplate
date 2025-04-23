import { test as fixture } from "@playwright/test"
import loginPage from "../pages/login-page"

const test = fixture.extend({
  loginPage: async ({ page }, use) => {
    await use(new loginPage(page))
  },
})

export default test
