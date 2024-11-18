import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth.routes';
//import userRoutes from './routes/user.routes';

const app = express();

// Middlewares de seguridad
app.use(cors());
app.use(helmet());

// Parser de JSON
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
//app.use('/api/users', userRoutes);

export default app;
