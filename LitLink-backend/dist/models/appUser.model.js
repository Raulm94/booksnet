"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class AppUser extends sequelize_1.Model {
}
AppUser.init({
    appuser_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'AppUser',
    tableName: 'appuser', // Nombre de la tabla en la base de datos
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
exports.default = AppUser;
