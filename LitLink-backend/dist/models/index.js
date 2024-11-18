"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppUser = exports.sequelize = void 0;
const database_1 = __importDefault(require("../config/database"));
exports.sequelize = database_1.default;
const appUser_model_1 = __importDefault(require("./appUser.model"));
exports.AppUser = appUser_model_1.default;
