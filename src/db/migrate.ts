import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from './index'

async function main() {
    try {
        console.log('migrate start...');
        await migrate(db, { migrationsFolder: "drizzle" });
        console.log('migrate end...');
        process.exit(0);
    } catch (error) {
        console.log('migrate error: ', error);
        process.exit(1);
    }
}

main();

