"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var favorite_1 = require("../controllers/favorite");
exports.router = express_1.default.Router();
exports.router.get("/api/favorite", favorite_1.read);
exports.router.get("/api/favorite/:profile_id", favorite_1.readByProfileId);
exports.router.post("/api/favorite/:profile_id", favorite_1.createByProfileId);
//# sourceMappingURL=favorite.router.js.map