import pkg from 'pg';
const { Pool } = pkg;

export const pool = new Pool({
  user: `${process.env.DB_USER}`, // 安裝時設定的帳號
  host: `${process.env.DB_HOST}`, // 或 127.0.0.1
  database: `${process.env.DB_NAME}`, // 你的 DB 名稱
  password: `${process.env.DB_PASSWORD}`, // 記得改成實際密碼
  port: Number(process.env.DB_PORT), // PostgreSQL 預設埠號
});
