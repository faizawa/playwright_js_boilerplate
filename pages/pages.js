import loginPage from "./login-page"
import feedbackFormPage from "./feedback-form-page"

const pages = {
  loginPage: (page) => new loginPage(page),
  feedbackFormPage: (page) => new feedbackFormPage(page),
}

export default pages
