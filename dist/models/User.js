"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importStar(require("mongoose"));
var UserSchema = new mongoose_1.default.Schema({
    name: { required: true, type: String },
    email: { required: true, type: String, unique: true },
    nickname: { required: true, type: String, unique: true },
    password: { required: true, type: String },
    created_at: { type: Date, default: Date.now }
});
exports.default = mongoose_1.model("User", UserSchema);
