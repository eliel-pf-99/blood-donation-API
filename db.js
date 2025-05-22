import postgres from 'postgres'
import { config } from 'dotenv';

config();

const connectionString = process.env.DATABASE_URL;
const sql = postgres(connectionString)

export default sql