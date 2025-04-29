import loginPage from "./login-page"

const pages = {
  loginPage: (page) => new loginPage(page),
}

export default pages
