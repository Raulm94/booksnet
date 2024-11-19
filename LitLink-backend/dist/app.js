"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const club_routes_1 = __importDefault(require("./routes/club.routes"));
const app = (0, express_1.default)();
// Middlewares de seguridad
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
// Parser de JSON
app.use(body_parser_1.default.json());
// Rutas
app.use('/api/auth', auth_routes_1.default);
app.use('/api/club', club_routes_1.default);
exports.default = app;
