"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const appUser_model_1 = __importDefault(require("../models/appUser.model"));
const register = async (req, res) => {
    const { name, lastname, email, password } = req.body;
    try {
        // Hashear la contraseña
        const hashedPassword = await bcryptjs_1.default.hash(password, 10);
        // Crear el usuario
        const newUser = await appUser_model_1.default.create({ name, lastname, email, password: hashedPassword });
        res.status(201).json({ message: 'User created', userId: newUser.appuser_id });
    }
    catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};
const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await appUser_model_1.default.findOne({ where: { email } });
        if (!user) {
            res.status(404).json({ message: 'User not found' });
            return;
        }
        const isMatch = await bcryptjs_1.default.compare(password, user.password);
        if (!isMatch)
            res.status(401).json({ message: 'Invalid credentials' });
        const token = jsonwebtoken_1.default.sign({ userId: user.appuser_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    }
    catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
};
exports.default = { register, login };
