import { Request, Response } from 'express'
import conectando from '../db'
import { PostInterface } from '../interface/PostInterface';

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

export async function createPosts(req: Request, res: Response){     
    const promiseconectando = conectando.promise();
        try {
            const nsexo: PostInterface = req.body;
            await promiseconectando.query('INSERT INTO sexo SET ?' , [nsexo]);
            return res.json({
                message: 'Creado'
            })
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}

export async function getPost(req: Request, res: Response){     
    const id = req.params.postId;
    const promiseconectando = conectando.promise();
        try {
            const sexo = await promiseconectando.query('SELECT * FROM sexo WHERE idsexo = ?', [id]);
            return res.json(sexo);
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}

export async function deletePost(req: Request, res: Response){     
    const id = req.params.postId;
    const promiseconectando = conectando.promise();
        try {
            await promiseconectando.query('DELETE FROM sexo WHERE idsexo = ?', [id]);
            console.log('Eliminado');
        } catch (error) {
            console.log(error.message);
        }
    promiseconectando.end();
}

export async function updatePost(req: Request, res: Response){     
    const id = req.params.postId;
    const updatesexo: PostInterface = req.body;
    const promiseconectando = conectando.promise();
        try {
            await promiseconectando.query('UPDATE sexo SET ? WHERE idsexo = ?', [updatesexo, id]);
            console.log('Actualizado');
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}