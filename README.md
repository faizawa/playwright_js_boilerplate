
# ⚡ Automated Testing Boilerplate ⚡

A super sleek and modular boilerplate for automated testing using Playwright. Ready to rock your testing game and level up your dev workflow! 🤘


## Installation
### Prerequisites
You need to have Node.js installed, like the true dev hero you are. To check, run:
```bash
node -v
```
If you don't have it... no worries, download it from [here](https://nodejs.org/)

## Step to Install
1. Clone the repo:
```bash
git clone https://github.com/faizawa/playwright_js_boilerplate.git
```

2. Install dependencies:
```bash
npm Install
```

3. Optional: Install the Playwright browsers:
```bash
npx playwright install
```

## 🎮 Usage
Run your tests:
```bash
npm run test
```
This will run all the test files inside the /tests directory.

Want to run specific tests? Just add the commands inside package.json file on the scripts section, example:
```bash
"test:login": "playwright test tests/login.spec.js",
```


## 🔧 Folder Structure
This project follows modular folder structure to keep everything organized.
Here's an overview:
```bash
/project-root
  /pages            # Contains page objects and helper methods
    base-page.js    # Contains helper methods
    login-page.js
    pages.js        # Centralized page object instances for easy import
  /tests            # Test files (with `.spec.js` extensions)
    login.spec.js
  /test-fixture     # Contains Playwright test fixtures
    fixture.js      # Centralized test fixture setup
  /utils            # Helper functions (optional)
  README.md         # This file
  package.json      # Project configuration
  .gitignore        # Git ignore file
```

## 📦 Environment Variables
This project uses dotenv to handle environment variables.
You'll need to create a .env file in the root of the project to store your credentials, URLs, secrets, and other sensitive data.

Example of what your .env file might look like:

```bash
Copy
Edit
BASE_URL=https://yourwebsite.com
USERNAME=your_username
PASSWORD=your_password
```
Important:
Make sure you never commit your .env file to GitHub — it's your secret stash! (Add .env to your .gitignore if it's not already there.) 🕵️‍♂️



## Key Directories
- /pages: Your page objects live here. Define all the actions and magic of your app’s pages.

- /tests: The quests (aka tests) you’ll embark on, using page objects to automate everything.

- /test-fixture: Where the setup and teardown happens before and after each test. It’s like saving your progress.

- /utils: Extra utilities for random things like logging or cleanup (optional but cool).

## License

[MIT](https://choosealicense.com/licenses/mit/)
