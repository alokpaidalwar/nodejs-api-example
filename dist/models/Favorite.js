"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Favorite = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var schema = new Schema({
    profile_id: { type: Schema.Types.ObjectId, ref: 'Profile' },
    name: String,
    favorite1: String,
    favorite2: String,
    favorite3: String,
}, {
    timestamps: true,
});
exports.Favorite = mongoose_1.default.model("Favorite", schema);
//# sourceMappingURL=Favorite.js.map