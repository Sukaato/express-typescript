import cookieParser from 'cookie-parser';
import express, { Application } from 'express';
import helmet from 'helmet';
import logger from 'morgan';
import { routers } from './routes';

const app: Application = express();
const PORT = process.env.PORT || 3000;
const ENV = process.env.NODE_ENV || 'development';

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(helmet());

app.set('trust proxy', true);
app.disable('x-powered-by');

app.use('/', routers.home);
app.use('/users', routers.users);

app.use(routers.errors[404]);
app.use(routers.errors[500]);

app.listen(PORT, () => {
  console.log(`Started in ${ENV} environement`);
  console.log(`Server listening on http://localhost:${PORT}`);
});
