"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const database_1 = __importDefault(require("../config/database"));
class UserRole extends sequelize_1.Model {
}
UserRole.init({
    userRole_id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'userrol_id'
    },
    appUser_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: false,
    },
    role_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        field: 'rol_id'
    },
    club_id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: false,
    },
}, {
    sequelize: database_1.default,
    modelName: 'UserRole',
    tableName: 'userrol', // Nombre de la tabla en la base de datos
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});
exports.default = UserRole;
