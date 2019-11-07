import { Request, Response } from 'express';

export function bienvenida(req: Request, res: Response): Response {
    return res.json('Holaaaaaaaaaaaaaaaaa');
}