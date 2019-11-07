import express, { Application } from 'express';


const app: Application = express();

//Configuraciones
app.set('port',3000);

export default app;