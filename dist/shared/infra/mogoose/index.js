"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
function MongooseConnect() {
    return mongoose_1.default.connect("\n        mongodb+srv://luancma_admin:nasa@cluster-test-imbnp.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });
}
exports.default = MongooseConnect;
