import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import AppUser from '../models/appUser.model';

const register = async (req: Request, res: Response) => {
  const { name, lastname, email, password } = req.body;
  try {
    // Hashear la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario
    const newUser = await AppUser.create({ name, lastname, email, password: hashedPassword });
    res.status(201).json({ message: 'User created', userId: newUser.appuser_id });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
};

const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await AppUser.findOne({ where: { email } });
    if (!user) { res.status(404).json({ message: 'User not found' }); return; }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) { res.status(401).json({ message: 'Invalid credentials' }); return; }

    const token = jwt.sign({ userId: user.appuser_id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    res.status(200).json({ token, username: user.name });
  } catch (error) {
    res.status(500).json({ message: 'Error logging in', error });
  }
};

export default { register, login }