import { test as fixture } from "@playwright/test"
import pages from "../pages/pages"
// import loginPage from "../pages/login-page"
// import feedbackFormPage from "../pages/feedback-form-page"

const test = fixture.extend({
  loginPage: async ({ page }, use) => {
    await use(pages.loginPage(page))
  },
  feedbackFormPage: async ({ page }, use) => {
    await use(pages.feedbackFormPage(page))
  },
})

export default test
