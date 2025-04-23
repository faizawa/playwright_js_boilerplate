import dotenv from "dotenv"

dotenv.config()

//export env variables

//credentials
export const STANDARD_USER = process.env.STANDARD_USERNAME
export const STANDARD_PASSWORD = process.env.STANDARD_PASSWORD
export const LOCKED_USER = process.env.LOCKED_USER
export const LOCKED_PASSWORD = process.env.LOCKED_PASSWORD
export const PROBLEM_USER = process.env.PROBLEM_USER
export const PROBLEM_PASSWORD = process.env.PROBLEM_PASSWORD

//urls
export const BASE_URL = process.env.BASE_URL
export const INVENTORY_URL = process.env.INVENTORY_URL
export const CART_URL = process.env.CART_URL
export const CHECKOUT_URL = process.env.CHECKOUT_URL
