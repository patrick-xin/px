import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { sql } from '@vercel/postgres';
import { drizzle as vercelDrizzle } from 'drizzle-orm/vercel-postgres';
import * as schema from './schema';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});


//export const db = process.env.NODE_ENV === 'development' ? drizzle(pool, { schema }) : vercelDrizzle(sql, { schema });

export const db = drizzle(pool, { schema })