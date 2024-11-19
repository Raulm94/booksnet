"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const club_controller_1 = __importDefault(require("../controllers/club.controller"));
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
router.post('/create', auth_middleware_1.authenticateToken, club_controller_1.default.createClub);
router.post('/join', auth_middleware_1.authenticateToken, club_controller_1.default.joinClub);
exports.default = router;
