import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import bodyParser from 'body-parser';

import authRoutes from './routes/auth.routes';
import clubRoutes from './routes/club.routes';

const app = express();

// Middlewares de seguridad
app.use(cors());
app.use(helmet());

// Parser de JSON
app.use(bodyParser.json());

// Rutas
app.use('/api/auth', authRoutes);
app.use('/api/club', clubRoutes);

export default app;
