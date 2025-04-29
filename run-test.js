import inquirer from "inquirer"
import { execSync } from "child_process"
import { existsSync } from "fs"

const questions = [
  {
    type: "list",
    name: "env",
    message: "🌱 Select the environment:",
    choices: ["dev", "staging", "production"],
  },
  {
    type: "input",
    name: "file",
    message: "🧪 Enter the test file path (e.g., tests/login.spec.js):",
    validate: function (value) {
      if (existsSync(value)) {
        return true
      }
      return "❌ File does not exist. Please enter a valid path."
    },
  },
]

async function runTest() {
  const { env, file } = await inquirer.prompt(questions)

  try {
    console.log(`🚀 Running ${file} in ${env} environment...`)
    execSync(`cross-env TEST_ENV=${env} npx playwright test ${file}`, {
      stdio: "inherit",
    })
  } catch (err) {
    console.error("❌ Test run failed.")
  }
}

runTest()
