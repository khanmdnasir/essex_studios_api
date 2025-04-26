import 'dotenv/config';

export default {
  schema: './src/db/schema/index.drizzle.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  },
};
