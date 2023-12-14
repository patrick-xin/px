import type { Config } from 'drizzle-kit';
import * as dotenv from "dotenv";

dotenv.config();

export default {
    schema: "./src/db/schema/index.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL!
        //connectionString: process.env.NODE_ENV === 'development' ? process.env.DATABASE_URL! : process.env.POSTGRES_URL + "?sslmode=require",
    },
    verbose: true,
    strict: true,
    out: './drizzle/migrations',
} satisfies Config;