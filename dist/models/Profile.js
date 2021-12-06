"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profile = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var schema = new Schema({
    name: String,
    nickname: String,
    email: { type: String, unique: true, required: true, index: true },
    capital: Number,
    divisa: String,
    prefered_cryptocurrency: String,
}, {
    timestamps: true,
});
exports.Profile = mongoose_1.default.model("Profile", schema);
//# sourceMappingURL=Profile.js.map