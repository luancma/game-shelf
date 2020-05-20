"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var GamerController_1 = __importDefault(require("@controllers/GamerController"));
var validateSession_1 = __importDefault(require("@modules/sessions/infra/http/middlewares/validateSession"));
var igdbRouter = express_1.default();
igdbRouter.use(validateSession_1.default);
igdbRouter.post("/", GamerController_1.default.index);
exports.default = igdbRouter;
