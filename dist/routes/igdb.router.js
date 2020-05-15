"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var GamerController_1 = __importDefault(require("../controllers/GamerController"));
var igdbRouter = express_1.default();
// igdbRouter.use(validateSession);
igdbRouter.get("/", GamerController_1.default.index);
exports.default = igdbRouter;
