import { neon } from '@neondatabase/serverless';

export async function getLeaderboard() {
  // Initialize the connection
  const sql = neon(process.env.DATABASE_URL!);

  // We select the specific columns you requested
  // Sorted by score (highest first)
  const data = await sql`
    SELECT _id, username, score 
    FROM scores 
    ORDER BY score DESC 
    LIMIT 10
  `;

  return data;
}