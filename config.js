import dotenv from "dotenv"
dotenv.config() //It's for loading the environment variables from .env file

const ENV = process.env.TEST_ENV || "dev" // Default to "dev" if TEST_ENV is not set

const envConfig = {
  dev: {
    baseUrl: process.env.DEV_BASE_URL,
    inventoryUrl: process.env.DEV_INVENTORY_URL,
    username: process.env.DEV_STANDARD_USERNAME,
    password: process.env.DEV_STANDARD_PASSWORD,
  },

  staging: {
    baseUrl: process.env.STAGING_BASE_URL,
    inventoryUrl: process.env.STAGING_INVENTORY_URL,
    username: process.env.STAGING_STANDARD_USERNAME,
    password: process.env.STAGING_STANDARD_PASSWORD,
  },

  production: {
    baseUrl: process.env.PRODUCTION_BASE_URL,
    inventoryUrl: process.env.PRODUCTION_INVENTORY_URL,
    username: process.env.PRODUCTION_STANDARD_USERNAME,
    password: process.env.PRODUCTION_STANDARD_PASSWORD,
  },
}

const activeConfig = envConfig[ENV]

export const urls = {
  base: activeConfig.baseUrl,
  inventory: activeConfig.inventoryUrl,
}

export const credentials = {
  username: activeConfig.username,
  password: activeConfig.password,
}

// //export env variables

// //credentials
// export const STANDARD_USERNAME = process.env.STANDARD_USERNAME
// export const STANDARD_PASSWORD = process.env.STANDARD_PASSWORD
// export const LOCKED_USER = process.env.LOCKED_USER
// export const LOCKED_PASSWORD = process.env.LOCKED_PASSWORD
// export const PROBLEM_USER = process.env.PROBLEM_USER
// export const PROBLEM_PASSWORD = process.env.PROBLEM_PASSWORD

// //urls
// export const BASE_URL = process.env.BASE_URL
// export const INVENTORY_URL = process.env.INVENTORY_URL
// export const CART_URL = process.env.CART_URL
// export const CHECKOUT_URL = process.env.CHECKOUT_URL
