import { expect } from "@playwright/test"
import basePage from "../pages/base-page"
import test from "../test-fixture/fixture"

import { BASE_URL, INVENTORY_URL } from "../config"

test.describe.serial("Testing login process", () => {
  test("Login as a STANDARD USER", async ({ loginPage }) => {
    await test.step(`Navigate to login page`, async () => {
      await loginPage.navigateToLoginPage()
      expect(await loginPage.getUrl()).toBe(BASE_URL)
      await loginPage.usernameFieldVisible()
      await loginPage.passwordFieldVisible()
      await loginPage.loginButtonVisible()
      await loginPage.loginStandardUser()
      expect(await loginPage.getUrl()).toBe(INVENTORY_URL)
    })
  })
})
