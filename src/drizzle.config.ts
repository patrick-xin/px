import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";

dotenv.config();

export default {
    schema: "./db/schema/index.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.POSTGRES_URL + "?sslmode=require",
    },
    verbose: true,
    strict: true,
    out: './drizzle/migrations',
} satisfies Config;