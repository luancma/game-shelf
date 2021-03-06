"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var UserController_1 = __importDefault(require("@controllers/UserController"));
var validateSession_1 = __importDefault(require("@modules/sessions/infra/http/middlewares/validateSession"));
var userRouter = express_1.Router();
userRouter.post('/create', UserController_1.default.store);
userRouter.get('/', validateSession_1.default, UserController_1.default.index);
exports.default = userRouter;
