import pool from "@/app/lib/connection";

export async function GET() {
  const result = await pool.query("SELECT NOW()");
  return Response.json(result.rows[0]);
}
