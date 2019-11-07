import express, { Application } from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';
import IndexRouter from  './routes/index.routes';


const app: Application = express();

//Configuraciones
app.set('port',3000);
app.use(authRoutes);

//middelware
app.use(morgan('dev'));

export default app;