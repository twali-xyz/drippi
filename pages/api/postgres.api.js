import { Pool } from 'pg'
import Cors from 'cors'

const cors = Cors({
    methods: ['POST'],
})

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
})

export default async function handler(req, res) {
    await cors(req, res)
    const user = req.body.value
    const result = await pool.query('INSERT INTO users (user_email) VALUES ($1)', [user])
    res.status(200).json({ message: 'User created successfully' })
}