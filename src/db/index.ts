import { createPool } from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";
import { getDatabaseConfig } from "../config";
import * as schema from "./schema";

const pool = createPool(getDatabaseConfig());

export const db = drizzle(pool, { schema, mode: "default" });
