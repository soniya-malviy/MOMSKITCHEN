import { defineConfig } from "drizzle-kit";
import dotenv from "dotenv";

dotenv.config(); // <- Load .env file

export default defineConfig({
  out: "./src/db/migrations",
  schema: "./src/db/schema.js",      // change path if your schema is elsewhere
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL,   // <- THIS must not be undefined
  },
});
