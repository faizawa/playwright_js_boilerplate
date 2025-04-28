import { expect } from "@playwright/test"
import test from "../test-fixture/fixture"

import { BASE_URL, INVENTORY_URL } from "../config"

test.describe.serial("Testing login process", () => {
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.navigateToLoginPage()
  })

  test("Login as a STANDARD USER", async ({ loginPage }) => {
    await test.step(`Navigate to login page`, async () => {
      await loginPage.navigateToLoginPage()
      expect(await loginPage.getUrl()).toBe(BASE_URL)
      await loginPage.usernameFieldVisible()
      await loginPage.passwordFieldVisible()
      await loginPage.loginButtonVisible()
    })

    await test.step(`Login as Standard User`, async () => {
      await loginPage.loginStandardUser()
      expect(await loginPage.getUrl()).toBe(INVENTORY_URL)
    })
  })
})
