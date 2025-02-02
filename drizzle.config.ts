import 'dotenv/config';
import { defineConfig } from 'drizzle-kit';



export default defineConfig({
    out: './drizzle',
    schema: './db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: process.env.DATABASE_URL!,
    },

});
console.log('DATABASE_URL:', process.env.DATABASE_URL);