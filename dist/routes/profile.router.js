"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var profile_1 = require("../controllers/profile");
exports.router = express_1.default.Router();
exports.router.get("/api/profile", profile_1.read);
exports.router.get("/api/profile/:id", profile_1.readById);
exports.router.post("/api/profile", profile_1.create);
//# sourceMappingURL=profile.router.js.map