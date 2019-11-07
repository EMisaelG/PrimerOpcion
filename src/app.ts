import express, { Application } from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';
import IndexRoutes from  './routes/index.routes';
import PostRoutes from  './routes/post.routes';


const app: Application = express();

//Configuraciones
app.set('port',3000);
app.use(authRoutes);

//middelware
app.use(morgan('dev'));
app.use(IndexRoutes);
app.use('/posts',PostRoutes);

export default app;