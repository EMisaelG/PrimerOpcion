import { Request, Response } from 'express'
import conectando from '../db'

export async function getPosts(req: Request, res: Response){     
    const promiseconectando = conectando.promise();
        try {
            const sexo = await promiseconectando.query('SELECT * FROM sexo');
            return res.json(sexo);
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}