import express, { Application } from 'express';
import authRoutes from './routes/auth';
import morgan from 'morgan';
import IndexRoutes from  './routes/index.routes';
import PostRoutes from  './routes/post.routes';
import bodyParser from 'body-parser';


const app: Application = express();

//Configuraciones
app.set('port',3000);
app.use(authRoutes);

//middelware
app.use(morgan('dev'));
app.use(IndexRoutes);
app.use('/posts',PostRoutes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

export default app;