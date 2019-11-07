import { Request, Response } from 'express'
import { conectar } from '../db'


export async function getPosts(req: Request, res: Response) {
    const conn = await conectar();
    const sexo = await conn.query('SELECT * FROM sexo');
    res.json(sexo);
}