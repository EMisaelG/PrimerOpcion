import { createPool } from 'mysql2';


    const conectando = createPool({
        host:'ec2-3-13-108-243.us-east-2.compute.amazonaws.com',
        port: 3306,
        user:'esteban',
        password:'Pechan_1',
        database:'inaesa',
        connectionLimit: 10
    });
    export default conectando;
