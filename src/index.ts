import { sql } from "drizzle-orm";
import { Elysia } from "elysia";
import { getServerPort } from "./config";
import { db } from "./db";

const app = new Elysia()
  .get("/health", () => ({ status: "ok" }))
  .get("/health/database", async () => {
    await db.execute(sql`select 1`);
    return { status: "ok", database: "connected" };
  })
  .listen(getServerPort());

console.log(`Server running at ${app.server?.hostname}:${app.server?.port}`);
