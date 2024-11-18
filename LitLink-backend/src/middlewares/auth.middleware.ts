import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

interface DecodedToken {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

export const authenticateToken = (req: Request, res: Response, next: NextFunction): void => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ message: 'No token provided' });
    return; // Se finaliza aquí la función para evitar llamar a next()
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET) as DecodedToken;
    req.user = {
      id: decoded.id,
      email: decoded.email,
    };
    next(); // Continua hacia el siguiente middleware
  } catch (error) {
    res.status(403).json({ message: 'Invalid or expired token' });
  }
};