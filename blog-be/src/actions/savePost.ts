// src/actions/savePost.ts
import { pool } from '../db/db';

export type SavePostInput = {
  title: string;
  content: any; // Lexical JSON
};

export type PostRow = {
  id: number;
  title: string;
  content: any;
  created_at: string;
};

export async function savePostAction(input: SavePostInput): Promise<PostRow> {
  const { title, content } = input;

  const sql = `
    INSERT INTO posts (title, content)
    VALUES ($1, $2)
    RETURNING id, title, content, created_at
  `;

  const result = await pool.query(sql, [
    title,
    typeof content === 'string' ? JSON.parse(content) : content,
  ]);

  return result.rows[0];
}
