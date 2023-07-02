import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import router from './routes';
import { routeNotFoundHandler } from './middlewares/routeNotFound.middleware';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());

app.use("/",router);
app.all("*", routeNotFoundHandler);


export default app;