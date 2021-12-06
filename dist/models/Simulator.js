"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Simulator = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var schema = new Schema({
    profile_id: { type: Schema.Types.ObjectId, ref: 'Profile' },
    dateRecorded: Date,
    cryptocurrency: String,
    euros: Number,
    price: Number,
    quantity: Number,
}, {
    timestamps: true,
});
exports.Simulator = mongoose_1.default.model("Simulator", schema);
//# sourceMappingURL=Simulator.js.map