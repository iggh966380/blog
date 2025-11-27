import { Router, Request, Response } from 'express';
import { pool } from '../db/db';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  try {
    const result = await pool.query('SELECT * FROM router');
    console.log(result.rows);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'unknown error' });
  }
});

export default router;
