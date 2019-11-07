import { createPool } from 'mysql2';

export async function conexion() {
    const conectar = await createPool({
        host:'https://3.13.108.243/',
        user:'esteban',
        password:'Pechan_1',
        database:'inaesa',
        connectionLimit: 10
    });
    return conectar;
}