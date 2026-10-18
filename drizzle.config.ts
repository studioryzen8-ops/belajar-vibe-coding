import { defineConfig } from "drizzle-kit";
import { getDatabaseConfig } from "./src/config";

export default defineConfig({
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  dialect: "mysql",
  dbCredentials: getDatabaseConfig(),
  strict: true,
  verbose: true,
});
