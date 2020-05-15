"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var igdb_1 = __importDefault(require("../config/igdb"));
var api = axios_1.default.create({
    baseURL: "https://api-v3.igdb.com",
    headers: {
        "user-key": igdb_1.default.key
    }
});
exports.default = api;
