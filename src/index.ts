import { config } from "dotenv";

if (process.env["NODE_ENV"] !== "production") {
  config();
}

console.log("hello world");
console.log(process.env["DEV"]);

export {};
