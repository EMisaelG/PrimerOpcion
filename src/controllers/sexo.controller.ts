import { Request, Response } from 'express'
import conectando from '../db'
import { SexoInterface } from '../interface/SexoInterface';

export async function getSexos(req: Request, res: Response){     
    const promiseconectando = conectando.promise();
        try {
            const sexo = await promiseconectando.query('SELECT * FROM sexo');
            return res.json(sexo);
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}

export async function createSexo(req: Request, res: Response){     
    const promiseconectando = conectando.promise();
        try {
            const nsexo: SexoInterface = req.body;
            await promiseconectando.query('INSERT INTO sexo SET ?' , [nsexo]);
            return res.json({
                message: 'Creado'
            })
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}

export async function getSexo(req: Request, res: Response){     
    const id = req.params.sexoId;
    const promiseconectando = conectando.promise();
        try {
            const sexo = await promiseconectando.query('SELECT * FROM sexo WHERE idsexo = ?', [id]);
            return res.json(sexo);
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}

export async function deleteSexo(req: Request, res: Response){     
    const id = req.params.sexoId;
    const promiseconectando = conectando.promise();
        try {
            await promiseconectando.query('DELETE FROM sexo WHERE idsexo = ?', [id]);
            console.log('Eliminado');
        } catch (error) {
            console.log(error.message);
        }
    promiseconectando.end();
}

export async function updateSexo(req: Request, res: Response){     
    const id = req.params.sexoId;
    const updatesexo: SexoInterface = req.body;
    const promiseconectando = conectando.promise();
        try {
            await promiseconectando.query('UPDATE sexo SET ? WHERE idsexo = ?', [updatesexo, id]);
            console.log('Actualizado');
        } catch (error) {
            console.log(error.message);
        }
        promiseconectando.end();
}