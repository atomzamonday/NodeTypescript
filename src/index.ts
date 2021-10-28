import { config } from "dotenv";
import { greeting } from "./test.json";

if (process.env["NODE_ENV"] !== "production") {
  config();
}

console.log(greeting);
console.log(process.env["DEV"]);

export {};
