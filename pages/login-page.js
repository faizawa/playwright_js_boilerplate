import basePage from "./base-page"
import {
  usernameField,
  passwordField,
  loginButton,
} from "../page-objects/login"
import { BASE_URL, STANDARD_USER, STANDARD_PASSWORD } from "../config"

class loginPage extends basePage {
  constructor(page) {
    super(page)
  }

  async navigateToLoginPage() {
    await this.open(BASE_URL)
    return await this.waitForPageLoad()
  }

  async usernameFieldVisible() {
    return await this.isElementVisible(usernameField)
  }

  async passwordFieldVisible() {
    return await this.isElementVisible(passwordField)
  }

  async loginButtonVisible() {
    return await this.isElementVisible(loginButton)
  }

  async loginStandardUser() {
    await this.waitAndFill(usernameField, STANDARD_USER)
    await this.waitAndFill(passwordField, STANDARD_PASSWORD)
    await this.waitAndClick(loginButton)
  }
}

export default loginPage
