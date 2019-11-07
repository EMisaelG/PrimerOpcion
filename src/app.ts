import express, { Application } from 'express';
import authRoutes from './routes/auth';

const app: Application = express();

//Configuraciones
app.set('port',3000);
app.use(authRoutes);

export default app;