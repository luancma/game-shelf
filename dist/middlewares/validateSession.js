"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var auth_1 = __importDefault(require("../config/auth"));
var jsonwebtoken_1 = require("jsonwebtoken");
function validateSession(request, response, next) {
    var sessionHeaders = request.headers.authorization;
    if (!sessionHeaders) {
        response.json({
            error: "Ops! Token não informado"
        });
        return;
    }
    var _a = sessionHeaders.split(" "), token = _a[1];
    try {
        var decoded = jsonwebtoken_1.verify(token, auth_1.default.jwt.secret);
        var sub = decoded.sub;
        request.user = {
            id: sub
        };
        return next();
    }
    catch (error) {
        response.json({
            error: " \uD83D\uDE44 Token inv\u00E1lido"
        });
    }
}
exports.default = validateSession;
