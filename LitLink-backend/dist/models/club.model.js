"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class Club extends sequelize_1.Model {
}
Club.init({
    club_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true,
    },
    location: {
        type: sequelize_1.DataTypes.STRING,
    },
    created_by: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: true,
    },
}, {
    sequelize: database_1.default,
    modelName: 'Club',
    tableName: 'club', // Nombre de la tabla en la base de datos
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
exports.default = Club;
