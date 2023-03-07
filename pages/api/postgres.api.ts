import { Pool } from "pg";
import Cors from "cors";
import { NextApiRequest, NextApiResponse } from "next";

const cors = Cors({
  methods: ["POST"],
});

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  ssl: {
    rejectUnauthorized: false,
    // Add any other SSL configuration options here
  }
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await cors(req, res, () => {});
  const user = req.body.value;
  const result = await pool.query(
    "INSERT INTO users (user_email) VALUES ($1)",
    [user]
  );
  // possibly add some error handling here
  res.status(200).json({ message: "User created successfully" });
}
