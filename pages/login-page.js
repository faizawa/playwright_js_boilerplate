import basePage from "./base-page"
import loginLocators from "../page-objects/login"
import { BASE_URL, STANDARD_USERNAME, STANDARD_PASSWORD } from "../config"
import { expect } from "@playwright/test"

class loginPage extends basePage {
  constructor(page) {
    super(page)
  }

  async navigateToLoginPage() {
    await this.open(BASE_URL)
    return await this.waitForPageLoad()
  }

  async usernameFieldVisible() {
    const { usernameField } = loginLocators
    return await this.isElementVisible(usernameField)
  }

  async passwordFieldVisible() {
    const { passwordField } = loginLocators
    return await this.isElementVisible(passwordField)
  }

  async loginButtonVisible() {
    const { loginButton } = loginLocators
    return await this.isElementVisible(loginButton)
  }

  async loginStandardUser() {
    const { usernameField, passwordField, loginButton } = loginLocators
    await this.waitAndFill(usernameField, STANDARD_USERNAME)
    await this.waitAndFill(passwordField, STANDARD_PASSWORD)
    await this.waitAndClick(loginButton)
    expect(await this.isElementVisible("//div[@class='product_label']"))
  }
}

export default loginPage
